"use client";

import { useState } from "react";

export default function InflationDemo() {
  const [formData, setFormData] = useState({
    target_rate_lower: "",
    target_rate_upper: "",
    current_effective_rate: "",
    real_gdp_change: "",
    unemployment_rate: "",
    is_post_2008: "1",
    is_crisis: "0"
  });

  const [prediction, setPrediction] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Bulletproof parser to prevent NaN from crashing FastAPI
  const parseNum = (val: string) => {
    const num = parseFloat(val);
    return isNaN(num) ? 0 : num; // Defaults to 0 if the field is accidentally empty
  };

  const handlePredict = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setPrediction(null);

    try {
      // Calculate derived metrics safely
      const lower = parseNum(formData.target_rate_lower);
      const upper = parseNum(formData.target_rate_upper);
      const calculatedSyntheticRate = (lower + upper) / 2;
      
      const effectiveRate = parseNum(formData.current_effective_rate);
      const calculatedDeviation = effectiveRate - calculatedSyntheticRate;

      const response = await fetch("https://inflation-prediction-api.onrender.com/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          synthetic_target_rate: calculatedSyntheticRate, 
          real_gdp_change: parseNum(formData.real_gdp_change),
          unemployment_rate: parseNum(formData.unemployment_rate),
          deviation: calculatedDeviation, 
          is_post_2008: parseInt(formData.is_post_2008, 10),
          is_crisis: parseInt(formData.is_crisis, 10)
        }),
      });

      if (!response.ok) {
        const errData = await response.json();
        // This will print the EXACT reason FastAPI rejected it to your console
        console.error("FastAPI Validation Details:", JSON.stringify(errData, null, 2));
        throw new Error("API request failed");
      }

      const data = await response.json();
      setPrediction(data.predicted_inflation.toFixed(2)); 
    } catch (err) {
      setError("Failed to fetch prediction. Check the console or your Render dashboard!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="mb-4">
        <h4 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">Test the Model</h4>
        <p className="text-xs text-neutral-500 mt-1">
          Enter macroeconomic indicators to run a live inference against the deployed Random Forest ensemble.
        </p>
      </div>

      <form onSubmit={handlePredict} className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          
          {/* Target Rate Inputs */}
          <div>
            <label className="block text-[10px] font-medium text-neutral-500 uppercase tracking-wider mb-1">
              Fed Funds Lower Bound (%)
            </label>
            <input
              type="number"
              step="any"
              name="target_rate_lower"
              // Added || "" to fix the Uncontrolled Input warning
              value={formData.target_rate_lower || ""}
              onChange={handleChange}
              required
              className="w-full text-sm px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 outline-none focus:border-neutral-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-[10px] font-medium text-neutral-500 uppercase tracking-wider mb-1">
              Fed Funds Upper Bound (%)
            </label>
            <input
              type="number"
              step="any"
              name="target_rate_upper"
              value={formData.target_rate_upper || ""}
              onChange={handleChange}
              required
              className="w-full text-sm px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 outline-none focus:border-neutral-500 transition-colors"
            />
          </div>

          {/* Current Effective Rate */}
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-[10px] font-medium text-neutral-500 uppercase tracking-wider mb-1">
              Current Effective Rate (%)
            </label>
            <input
              type="number"
              step="any"
              name="current_effective_rate"
              value={formData.current_effective_rate || ""}
              onChange={handleChange}
              required
              className="w-full text-sm px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 outline-none focus:border-neutral-500 transition-colors"
            />
          </div>

          {/* Standard Inputs */}
          {['real_gdp_change', 'unemployment_rate'].map((key) => (
            <div key={key}>
              <label className="block text-[10px] font-medium text-neutral-500 uppercase tracking-wider mb-1">
                {key.replace(/_/g, " ")}
              </label>
              <input
                type="number"
                step="any"
                name={key}
                // Safely accessing the value to prevent undefined warnings
                value={formData[key as keyof typeof formData] || ""}
                onChange={handleChange}
                required
                className="w-full text-sm px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 outline-none focus:border-neutral-500 transition-colors"
              />
            </div>
          ))}
          
          {/* Dropdown for Post-2008 Era */}
          <div>
            <label className="block text-[10px] font-medium text-neutral-500 uppercase tracking-wider mb-1">
              Post 2008 Era
            </label>
            <select
              name="is_post_2008"
              value={formData.is_post_2008}
              onChange={handleChange}
              className="w-full text-sm px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 outline-none focus:border-neutral-500 transition-colors"
            >
              <option value="1">Yes (1)</option>
              <option value="0">No (0)</option>
            </select>
          </div>

          {/* Dropdown for Crisis Regime with Tooltip */}
          <div>
            <label className="flex items-center text-[10px] font-medium text-neutral-500 uppercase tracking-wider mb-1 relative">
              Fed Policy Environment
              
              <div className="group/tooltip ml-1.5 flex items-center justify-center cursor-help">
                <svg className="w-3.5 h-3.5 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/tooltip:block w-56 p-2.5 text-xs text-white dark:text-neutral-900 bg-neutral-800 dark:bg-neutral-100 rounded-md shadow-xl z-10 normal-case tracking-normal border border-neutral-700 dark:border-neutral-300">
                  <p className="mb-1"><span className="font-bold">Tightening:</span> Fed is actively raising rates to fight inflation.</p>
                  <p className="mb-1"><span className="font-bold">Easing:</span> Fed is cutting rates to stimulate growth.</p>
                  <p><span className="font-bold">Normal:</span> Standard economic conditions.</p>
                  
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-neutral-800 dark:border-t-neutral-100"></div>
                </div>
              </div>
            </label>
            
            <select
              name="is_crisis"
              value={formData.is_crisis}
              onChange={handleChange}
              className="w-full text-sm px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 outline-none focus:border-neutral-500 transition-colors"
            >
              <option value="0">Normal</option>
              <option value="1">Tightening</option>
              <option value="-1">Easing</option>
            </select>
          </div>

        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="mt-2 w-full py-2.5 rounded-md text-sm font-medium text-white bg-gradient-to-br from-neutral-800 to-neutral-600 hover:opacity-90 transition-opacity disabled:opacity-50 flex justify-center items-center gap-2"
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-2">
              <span className="animate-spin h-4 w-4 border-2 border-white/80 border-t-transparent rounded-full shrink-0"></span>
              <span className="flex flex-col items-start leading-tight">
                <span>Running Inference...</span>
                <span className="text-[10px] text-white/70 font-normal">Since the API is running on Free Tier of Render, API cold start may take ~50s</span>
              </span>
            </div>
          ) : (
            "Run Prediction"
          )}
        </button>
      </form>

      {prediction !== null && (
        <div className="mt-4 p-4 rounded-md bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/30">
          <p className="text-sm text-green-800 dark:text-green-300 text-center">
            Predicted Inflation Rate: <span className="font-bold text-lg">{prediction}%</span>
          </p>
        </div>
      )}

      {error && (
        <div className="mt-4 p-4 rounded-md bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30">
          <p className="text-sm text-red-800 dark:text-red-300 text-center">{error}</p>
        </div>
      )}
    </div>
  );
}