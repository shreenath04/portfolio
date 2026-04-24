export default function Experience() {
    const research = [
      {
        title: "AI Research Assistant",
        org: "Wu Research Group (AI for Healthcare) — Dr. Kai Wu, Whitacre College of Engineering, Texas Tech University",
        period: "Aug 2024 – Present",
        type: "Extracurricular undergraduate research",
        bullets: [
          "Independently designed and trained deep learning models for 4-class brain tumor classification from MRI scans (glioma, meningioma, pituitary, healthy) using a Kaggle dataset of ~6,000 images",
          "Built a custom 2D CNN by replicating and combining architectural choices from multiple published papers — varying filter sizes, kernel dimensions, batch normalization, dropout rates, pooling strategies, and activation functions",
          "Achieved 98% test accuracy on held-out test set (80/20 split) with 6-fold cross-validation for robustness",
          "Achieved 75% accuracy on a fully independent external Kaggle dataset — demonstrating meaningful generalization to unseen data distribution",
          "Outperformed all published baselines benchmarked: MobileNetV2 (92%), Inception-V3 (94%), Deep-Net (95%), Saeedi et al. (96.47%), Aamir et al. (97.18%)",
          "Implemented transfer learning with MobileNetV3Large and Bayesian hyperparameter optimization via keras-tuner — searching over dense layer size (64–256 units), dropout, and learning rate (1e-2 to 1e-4)",
          "Preprocessing: resized to 512×512 (MobileNetV3) and 80×80 (custom CNN), augmentation with rotation, shift, shear, zoom, horizontal flip, brightness variation",
        ],
        stack: "TensorFlow, Keras, Python, Apple Silicon (Mac Mini M4)",
      },
      {
        title: "ML Research Assistant",
        org: "Dr. Blake Foraker — Davis College of Agricultural Sciences and Natural Resources, Texas Tech University",
        period: "Aug 2025 – Present",
        type: "Paid research position (Student Assistant)",
        bullets: [
          "Designed and built an end-to-end LiDAR point cloud data pipeline for cattle carcass composition prediction from just 25 hanging carcass scans and 97 live cattle scans",
          "Stage 1 — Canonical Alignment: PCA via SVD for numerically stable principal axis extraction with anatomically meaningful axis assignment (X = length via thin-end heuristic, Y = height via flatness heuristic, Z = width)",
          "Stage 2 — Anatomical Segmentation: Split aligned scans at anatomically meaningful cut percentages — Carcass: Chuck (0–30%), Rib (30–50%), Loin (50–73%), Round (73–100%); Live cattle: 3 regions",
          "Stage 3 — Synthetic Recombination: Shuffled segments across animals — generated 331,752 unique carcass combinations and 912,673 unique live cattle combinations",
          "Stage 4 — Cross-Sectional Smoothing: Sliced segments perpendicular to PC1, projected into 2D polar coordinates, applied Savitzky-Golay smoothing (window=11, polyorder=2) to resolve boundary artifacts",
          "Open challenge: live cattle augmentations show more visible seam discontinuities than carcass due to higher pose variance — smoothing methodology still being refined",
        ],
        stack: "Python, NumPy, SciPy (SVD, Savitzky-Golay, interpolation), pandas, matplotlib, CloudCompare",
      },
    ];
  
    const projects = [
      {
        title: "Counter-UAS Swarm Defense Simulator (Multi-Agent RL)",
        period: "2026 | Training & Iteration",
        bullets: [
          "Built a full multi-agent reinforcement learning environment from scratch where 5 friendly drones learn to autonomously intercept 5 hostile drones converging on a central base in a 50³ 3D grid",
          "Each drone selects from 27 discrete actions (3 choices per axis: -1, 0, +1) — a shared PPO policy network controls all friendly agents with a combined observation of all drone positions, velocities, and alive states",
          "Three concentric defense zones (inner ≤12, mid ≤30, outer >30 units from base) apply escalating penalties when hostiles penetrate deeper — emergent behavior forms layered perimeter defense without any hardcoded patrol logic",
          "Reward landscape drives all tactics: +3.0× distance-scaled intercept bonus, +1.5 team assist reward, −8.0 base breach penalty, −0.05/step urgency pressure, proximity repulsion between friendlies, and velocity-alignment shaping for pursuit behavior",
          "Kamikaze interception model — both friendly and hostile are destroyed on contact (≤2.0 units), forcing the agent to learn cost-benefit tradeoffs on when to commit vs. reposition",
          "Trained with PPO via Stable Baselines 3 on 20 parallel SubprocVecEnv instances, fine-tuned with decayed learning rate (3e-5), tightened clip range (0.08), and reduced entropy (0.002) across 500M+ timesteps",
          "3D tactical visualization built with PyVista — wireframe engagement hemispheres, real-time drone trails, a rotating radar antenna on the command bunker, and color-coded intercept/breach feedback at 20 FPS",
        ],
        stack: "Python, Stable Baselines 3, Gymnasium, PPO, NumPy, PyVista, SubprocVecEnv",
      },
      {
        title: "AWS Serverless EOD Stock Data Pipeline",
        period: "March 2026 | Production-deployed",
        bullets: [
          "Fully serverless pipeline fetching, processing, and storing end-of-day stock data for 3,862 tickers every night after market close",
          "AWS Lambda for core compute (yfinance data fetch + transformation), S3 for persistent CSV storage, EventBridge for cron-based scheduling",
          "Zero idle compute cost, scales automatically — running autonomously since ~March 13, 2026 with zero failures",
          "Planned Phase 1: Migrate CSV → Parquet, add universal LSTM Autoencoder (PyTorch) for anomaly detection on daily percentage-change",
          "Planned Phase 2: Geopolitical news ingestion infrastructure",
          "Planned Phase 3: Combine anomaly signals + news for causal-style automated market movement reports via LLM",
        ],
        stack: "AWS Lambda, AWS S3, AWS EventBridge, Python, yfinance",
      },
      {
        title: "DualBrain AI",
        period: "December 2025",
        bullets: [
          "Hybrid edge-cloud LLM routing system — routes requests to local (Gemma 3:4B) or larger model (Llama 3.1:8B) based on complexity",
          "Hard rule: requests exceeding 500 words auto-escalate to large model. Soft rule: Gemma acts as routing LLM, deciding LOCAL vs CLOUD via structured JSON",
          "Fallback: if Gemma's JSON output is malformed, defaults to local model with simple prompt template",
          "User personalization: free-text self-description → Gemma generates structured persona profile (tone, expertise, style) stored in MongoDB",
          "bcrypt password hashing with MongoDB user store, last_login tracking, and lazy trait generation",
          "Docker Compose orchestrates 3 services: app, MongoDB 7.0, Ollama — entrypoint script health-checks Ollama and auto-pulls models if not cached",
        ],
        stack: "Python, Ollama, Gemma 3:4B, Llama 3.1:8B, MongoDB, pymongo, bcrypt, Docker Compose",
      },
      {
        title: "Inflation Prediction API",
        period: "Summer 2025",
        bullets: [
          "Dual Random Forest ensemble splitting feature space by economic direction — one model for inflation-driving factors (GDP, rate deviation), one for suppressing factors (unemployment)",
          "Ensemble weights derived from LOOCV performance on 35 years of annual Federal Reserve macroeconomic data (1983 onward)",
          "model_pos features: synthetic Fed funds target rate, real GDP % change, rate deviation, is_post_2008, regime3 (tightening/easing/crisis)",
          "model_neg features: unemployment rate, rate deviation, is_post_2008, regime3",
          "Final models retrained on full dataset with 400 estimators, max_depth=5. Ensemble R²: ~0.63 (LOOCV-validated)",
          "FastAPI REST service: POST /predict accepts 6 macro inputs, returns predicted inflation rate, model weights, and input echo. Auto-generated Swagger UI at /docs",
        ],
        stack: "Python, scikit-learn, FastAPI, Pydantic, joblib, pandas, NumPy, statsmodels, uvicorn",
      },
      {
        title: "ETH Pool — DeFi Lending Platform",
        period: "ETH Denver 2026 Hackathon | 48 hours",
        bullets: [
          "Fully functional DeFi lending platform on ADI Chain (custom EVM, Chain ID 99999) — built entirely using AI-assisted development (Cursor)",
          "LP mechanics: deposit ETH → receive proportional LP shares that appreciate as interest repayments flow into the pool. Withdraw anytime by burning shares",
          "Loan mechanics: 150% collateral requirement, admin approval workflow, 5% APR interest. Six states: Requested → Approved → Withdrawn → Repaid (or Denied / Defaulted)",
          "On-chain tracking: totalPoolBalance, availableLiquidity, totalLoaned, totalRepaid, per-user LP shares and loan ID arrays",
          "Frontend: RainbowKit + Wagmi + viem for wallet connectivity, custom dev wallet connector, ChainGuard component for wrong-network detection",
          "Complete Hardhat test suite: deployment, LP deposits/withdrawals with gas-accurate ETH accounting, full loan lifecycle, collateral recovery, default closure",
        ],
        stack: "Solidity 0.8.20, Hardhat, OpenZeppelin, Next.js 14, TypeScript, Wagmi, viem, RainbowKit, Tailwind CSS",
      },
    ];
  
    const leadership = [
      {
        title: "VP & Director of Learning & Development",
        org: "Major Leagues — Texas Tech University",
        period: "Sep 2025 – Present",
        bullets: [
          "CS-focused student organization making students hackathon-ready and interview-ready through technical workshops",
          "Dual role: designing and delivering technical curriculum + supporting overall organization leadership",
          "Independently designed and presented a full system design workshop covering: vertical vs horizontal scaling, preprocessing/cron jobs, backup servers, load balancing (simple hashing, consistent hashing, virtual nodes), monolith vs microservices tradeoffs",
          "Used Uber microservices architecture as real-world example (Rider Service, Driver Service, Trip Service, Payment Service with separate DBs and load balancers)",
        ],
      },
      {
        title: "Treasurer",
        org: "Students for Global Connections — Texas Tech University",
        period: "Active",
        bullets: [
          "Undergraduate organization celebrating cultural diversity at Texas Tech",
          "Securing sponsorships for organization events and managing financial documentation",
          "Drafted and submitted funding requests for the annual World Wide Showcase (April 18, 2026, Allen Theatre)",
        ],
      },
    ];
  
    return (
      <main className="flex-1 px-6 py-16 mx-auto max-w-[75%]">
        {/* Research */}
        <p className="text-xs tracking-[0.2em] uppercase text-neutral-600 dark:text-neutral-400 mb-8">
          Research Experience
        </p>
        <div className="flex flex-col gap-8 mb-16">
          {research.map((role) => (
            <div key={role.title} id={role.title.toLowerCase().replace(/\s+/g, "-")} className="border border-neutral-400 dark:border-neutral-800 rounded-lg p-6">
              <div className="flex items-start justify-between mb-1">
                <h2 className="text-lg font-medium">{role.title}</h2>
                <span className="text-sm text-neutral-600 dark:text-neutral-400 whitespace-nowrap ml-4">{role.period}</span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">{role.org}</p>
              <p className="text-xs text-neutral-500 dark:text-neutral-500 italic mb-4">{role.type}</p>
              <ul className="flex flex-col gap-2 mb-4">
                {role.bullets.map((bullet, i) => (
                  <li key={i} className="text-sm text-neutral-700 dark:text-neutral-400 leading-relaxed pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-neutral-500">
                    {bullet}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-neutral-500 dark:text-neutral-500 pt-3 border-t border-neutral-200 dark:border-neutral-800">
                Stack: {role.stack}
              </p>
            </div>
          ))}
        </div>
  
        {/* Projects */}
        <p className="text-xs tracking-[0.2em] uppercase text-neutral-600 dark:text-neutral-400 mb-8">
          Projects
        </p>
        <div className="flex flex-col gap-8 mb-16">
          {projects.map((proj) => (
            <div key={proj.title} id={proj.title.toLowerCase().replace(/\s+/g, "-")} className="border border-neutral-400 dark:border-neutral-800 rounded-lg p-6">
              <div className="flex items-start justify-between mb-1">
                <h2 className="text-lg font-medium">{proj.title}</h2>
                <span className="text-sm text-neutral-600 dark:text-neutral-400 whitespace-nowrap ml-4">{proj.period}</span>
              </div>
              <ul className="flex flex-col gap-2 mt-4 mb-4">
                {proj.bullets.map((bullet, i) => (
                  <li key={i} className="text-sm text-neutral-700 dark:text-neutral-400 leading-relaxed pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-neutral-500">
                    {bullet}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-neutral-500 dark:text-neutral-500 pt-3 border-t border-neutral-200 dark:border-neutral-800">
                Stack: {proj.stack}
              </p>
            </div>
          ))}
        </div>
  
        {/* Leadership */}
        <p className="text-xs tracking-[0.2em] uppercase text-neutral-600 dark:text-neutral-400 mb-8">
          Leadership & Activities
        </p>
        <div className="flex flex-col gap-8 mb-16">
          {leadership.map((role) => (
            <div key={role.title} id={role.title.toLowerCase().replace(/\s+/g, "-")} className="border border-neutral-400 dark:border-neutral-800 rounded-lg p-6">
              <div className="flex items-start justify-between mb-1">
                <h2 className="text-lg font-medium">{role.title}</h2>
                <span className="text-sm text-neutral-600 dark:text-neutral-400 whitespace-nowrap ml-4">{role.period}</span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">{role.org}</p>
              <ul className="flex flex-col gap-2">
                {role.bullets.map((bullet, i) => (
                  <li key={i} className="text-sm text-neutral-700 dark:text-neutral-400 leading-relaxed pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-neutral-500">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
  
        {/* Certification */}
        <p className="text-xs tracking-[0.2em] uppercase text-neutral-600 dark:text-neutral-400 mb-8">
          Certifications
        </p>
        <div className="border border-neutral-400 dark:border-neutral-800 rounded-lg p-6">
          <div className="flex items-start justify-between mb-1">
            <h2 className="text-lg font-medium">Meta Database Engineer Professional Certificate</h2>
            <span className="text-sm text-neutral-600 dark:text-neutral-400 whitespace-nowrap ml-4">Coursera · 2025</span>
          </div>
          <p className="text-sm text-neutral-700 dark:text-neutral-400 leading-relaxed mt-3">
            Capstone: Little Lemon Restaurant Database — fully normalized MySQL relational database with schema design, stored procedures, prepared statements, multi-table queries, Python database connectivity, and Tableau visualization.
          </p>
        </div>
      </main>
    );
  }