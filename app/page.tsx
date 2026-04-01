"use client";
import Image from "next/image";

import { useState } from "react";

export default function Home() {
  const experiences = [
    {
      title: "AI Research Assistant",
      org: "Wu Research Group — Texas Tech University",
      period: "Aug 2024 – Present",
      hook: "98% accuracy on brain tumor MRI classification — outperforming published baselines",
      bullets: [
        "Independently designed and trained deep learning models for 4-class brain tumor classification from MRI scans (glioma, meningioma, pituitary, healthy)",
        "Built custom 2D CNN by mixing architectural choices from multiple published papers — varying filter sizes, kernels, batch normalization, dropout, pooling, and activation functions",
        "Achieved 98% test accuracy (80/20 split) and 75% on a fully independent external validation dataset",
        "Outperformed published baselines: MobileNetV2 (92%), Inception-V3 (94%), Deep-Net (95%), Saeedi et al. (96.47%), Aamir et al. (97.18%)",
        "Implemented transfer learning with MobileNetV3Large and Bayesian hyperparameter optimization via keras-tuner",
        "Trained with 6-fold cross-validation on ~6,000 MRI images using TensorFlow/Keras on Apple Silicon",
      ],
    },
    {
      title: "ML Research Assistant",
      org: "Davis College of Agricultural Sciences — Texas Tech University",
      period: "Aug 2025 – Present",
      hook: "Built end-to-end LiDAR augmentation pipeline generating 900K+ synthetic training examples",
      bullets: [
        "Designed and built a complete LiDAR point cloud data pipeline for cattle carcass composition prediction from just 25 carcass and 97 live cattle scans",
        "Stage 1: Canonical alignment via PCA/SVD with anatomically meaningful axis assignment and thin-end/flatness heuristics",
        "Stage 2: Anatomical segmentation into primal cuts — Chuck (0–30%), Rib (30–50%), Loin (50–73%), Round (73–100%)",
        "Stage 3: Synthetic recombination — shuffled segments across animals to generate 331K carcass and 912K live cattle unique combinations",
        "Stage 4: Cross-sectional smoothing using Savitzky-Golay filtering in polar coordinates to resolve geometric seam artifacts",
        "Stack: Python, NumPy, SciPy (SVD, Savitzky-Golay, interpolation), pandas, matplotlib, CloudCompare",
      ],
    },
  ];

  const projects = [
    {
      title: "EOD Stock Pipeline",
      tech: "AWS Lambda · S3 · EventBridge · Python",
      hook: "3,862 tickers processed nightly — zero failures since deployment",
      bullets: [
        "Fully serverless pipeline fetching, processing, and storing end-of-day stock data for 3,862 tickers every night",
        "AWS Lambda for compute, S3 for persistent CSV storage, EventBridge for cron-based scheduling after market close",
        "Zero idle compute cost — running autonomously in production since March 2026 with zero failures",
        "Planned extensions: CSV→Parquet migration, LSTM Autoencoder anomaly detection (PyTorch), LLM-generated market reports",
      ],
    },
    {
      title: "DualBrain AI",
      tech: "Python · Ollama · MongoDB · Docker Compose",
      hook: "Hybrid edge-cloud LLM routing — local vs cloud based on complexity",
      bullets: [
        "Routes LLM requests intelligently: simple queries handled locally (Gemma 3:4B), complex ones escalated to larger model (Llama 3.1:8B)",
        "Two-layer routing: hard rule (500+ words → cloud) + soft rule (Gemma decides LOCAL vs CLOUD via structured JSON)",
        "User personalization: first-login self-description → auto-generated persona profile (tone, expertise, style) stored in MongoDB",
        "bcrypt auth system with MongoDB user store and lazy trait generation",
        "Docker Compose orchestrates 3 services: app, MongoDB 7.0, Ollama with health-check and auto-model-pull",
      ],
    },
    {
      title: "Inflation Prediction API",
      tech: "FastAPI · scikit-learn · Pydantic",
      hook: "Dual Random Forest ensemble — R² ~0.63, LOOCV validated",
      bullets: [
        "Split feature space by economic direction: one model for inflation-driving factors (GDP, rate deviation), one for suppressing factors (unemployment)",
        "Ensemble weights derived from LOOCV performance — better cross-validated model automatically receives higher contribution",
        "Trained on 35 years of annual Federal Reserve macroeconomic data (1983 onward)",
        "FastAPI REST endpoint: POST /predict returns predicted inflation, model weights, and input echo with auto-generated Swagger docs",
      ],
    },
    {
      title: "ETH Pool",
      tech: "Solidity · Hardhat · Next.js · Wagmi",
      hook: "DeFi lending platform — built in 48 hours at ETH Denver 2026",
      bullets: [
        "Collateralized loan system with 150% collateral requirement, admin approval workflow, and 5% APR interest",
        "LP mechanics: deposit ETH → receive proportional shares that appreciate as interest flows into the pool",
        "Six loan states: Requested → Approved → Withdrawn → Repaid (or Denied / Defaulted)",
        "Full Hardhat test suite covering deposits, withdrawals, loan lifecycle, collateral recovery, and default closure",
        "Next.js 14 frontend with RainbowKit + Wagmi + viem for wallet connectivity, deployed to ADI Testnet",
      ],
    },
  ];

  const [expandedExp, setExpandedExp] = useState<number | null>(null);
  const [expandedProj, setExpandedProj] = useState<number | null>(null);

  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="px-6 pt-20 pb-16 mx-auto max-w-[75%] flex items-start gap-[30%]">
        <div>
        <p className="text-xs tracking-[0.2em] uppercase text-neutral-600 dark:text-neutral-400 mb-3">
        AI/ML · Software Engineer 
        </p>
        <h1 className="text-5xl font-medium mb-2 tracking-tight">
          Shreenath Gandhi
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed max-w-2xl">
          CS senior at Texas Tech University building production-grade ML systems and data engineering pipelines.
          Graduating May 2026. Pursuing roles in AI/ML Engineering, Data Engineering, and AI Software Engineering.
        </p>
        <div className="flex gap-3">
          <a href="/resume.pdf" download className="text-sm px-5 py-2.5 rounded-md font-medium text-white bg-gradient-to-br from-neutral-700 to-neutral-500 hover:opacity-90 transition-opacity">
            Download resume
          </a>
          <a href="#contact" className="text-sm px-5 py-2.5 rounded-md border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:opacity-70 transition-opacity">
            Get in touch
          </a>
        </div>
        </div>
        <Image src="/avatar.png" alt="Shreenath Gandhi" width={220} height={280} className="rounded-lg shrink-0 hidden dark:md:block" />
        <Image src="/avatar-light.png" alt="Shreenath Gandhi" width={220} height={280} className="rounded-lg shrink-0 hidden md:block dark:hidden" />
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-[75%] px-6">
        <div className="border-t border-neutral-300 dark:border-neutral-800" />
      </div>

      {/* Education */}
      <section className="px-6 py-12 mx-auto max-w-[75%]">
        <p className="text-xs tracking-[0.2em] uppercase text-neutral-600 dark:text-neutral-400 mb-4">
          Education
        </p>
        <div className="border border-neutral-400 dark:border-neutral-800 rounded-lg p-5">
          <div className="flex items-start justify-between mb-1">
            <p className="text-sm font-medium">Texas Tech University</p>
            <span className="text-sm text-neutral-600 dark:text-neutral-400 whitespace-nowrap ml-4">Graduating May 2026</span>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">B.S. Computer Science · Minor in Mathematics · GPA: 3.5</p>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="text-xs px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">Presidential Merit Scholarship ($7K/yr)</span>
            <span className="text-xs px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">Dean&apos;s List — Multiple Semesters</span>
          </div>
          <p className="text-xs text-neutral-500 dark:text-neutral-500 leading-relaxed">
            Coursework: Reinforcement Learning, Intro to AI, Database Management Systems, Operating Systems, Data Structures & Algorithms, Computational Thinking with Data Science
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-[75%] px-6">
        <div className="border-t border-neutral-300 dark:border-neutral-800" />
      </div>

      {/* Tech Stack */}
      <section className="px-6 py-12 mx-auto max-w-[75%]">
        <p className="text-xs tracking-[0.2em] uppercase text-neutral-600 dark:text-neutral-400 mb-4">
          Tech Stack
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            "Python", "JavaScript", "TypeScript", "SQL", "Solidity",
            "TensorFlow", "Keras", "PyTorch", "scikit-learn",
            "AWS Lambda", "AWS S3", "EventBridge", "Docker",
            "FastAPI", "React", "Next.js", "Tailwind CSS",
            "MongoDB", "MySQL",
            "LangChain", "Ollama", "Gemini API",
            "NumPy", "SciPy", "pandas",
            "Hardhat", "OpenZeppelin",
            "Git", "Tableau",
          ].map((skill) => (
            <span key={skill} className="text-sm px-3 py-1.5 rounded-full border border-neutral-400 dark:border-neutral-800 text-neutral-900 dark:text-neutral-400 bg-white dark:bg-neutral-900">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-[75%] px-6">
        <div className="border-t border-neutral-300 dark:border-neutral-800" />
      </div>

      {/* Experience */}
      <section className="px-6 py-12 mx-auto max-w-[75%]">
        <p className="text-xs tracking-[0.2em] uppercase text-neutral-600 dark:text-neutral-400 mb-4">
          Research Experience
        </p>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {experiences.map((exp, i) => (
            <div key={exp.title} onClick={() => setExpandedExp(expandedExp === i ? null : i)} className={`shrink-0 border border-neutral-400 dark:border-neutral-800 rounded-lg p-5 cursor-pointer hover:border-neutral-500 dark:hover:border-neutral-600 transition-all duration-300 ease-in-out ${expandedExp === i ? "w-[550px]" : "w-[300px]"}`}>
              <div className="flex items-start justify-between mb-1">
                <p className="text-sm font-medium">{exp.title}</p>
                <span className="text-xs text-neutral-500 dark:text-neutral-400 whitespace-nowrap ml-3">{exp.period}</span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">{exp.org}</p>
              <p className="text-sm text-neutral-700 dark:text-neutral-500 italic leading-relaxed">{exp.hook}</p>
              <div className="grid transition-all duration-300 ease-in-out" style={{ gridTemplateRows: expandedExp === i ? "1fr" : "0fr" }}>
                <div className="overflow-hidden">
                  <ul className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-800 flex flex-col gap-2">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="text-sm text-neutral-700 dark:text-neutral-400 leading-relaxed pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-neutral-500">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-[75%] px-6">
        <div className="border-t border-neutral-300 dark:border-neutral-800" />
      </div>

      {/* Projects */}
      <section className="px-6 py-12 mx-auto max-w-[75%]">
        <p className="text-xs tracking-[0.2em] uppercase text-neutral-600 dark:text-neutral-400 mb-4">
          Projects
        </p>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {projects.map((proj, i) => (
            <div key={proj.title} onClick={() => setExpandedProj(expandedProj === i ? null : i)} className={`shrink-0 border border-neutral-400 dark:border-neutral-800 rounded-lg p-5 cursor-pointer hover:border-neutral-500 dark:hover:border-neutral-600 transition-all duration-300 ease-in-out ${expandedProj === i ? "w-[550px]" : "w-[280px]"}`}>
              <p className="text-sm font-medium mb-1">{proj.title}</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">{proj.tech}</p>
              <p className="text-sm text-neutral-700 dark:text-neutral-500 italic leading-relaxed">{proj.hook}</p>
              <div className="grid transition-all duration-300 ease-in-out" style={{ gridTemplateRows: expandedProj === i ? "1fr" : "0fr" }}>
                <div className="overflow-hidden">
                  <ul className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-800 flex flex-col gap-2">
                    {proj.bullets.map((bullet, j) => (
                      <li key={j} className="text-sm text-neutral-700 dark:text-neutral-400 leading-relaxed pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-neutral-500">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <a href="https://github.com/shreenath04" target="_blank" className="inline-block mt-4 text-sm text-neutral-600 dark:text-neutral-400 border-b border-neutral-400 dark:border-neutral-600 pb-0.5 hover:opacity-70 transition-opacity">
          View all on GitHub →
        </a>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-[75%] px-6">
        <div className="border-t border-neutral-300 dark:border-neutral-800" />
      </div>

      {/* Leadership */}
      <section className="px-6 py-12 mx-auto max-w-[75%]">
        <p className="text-xs tracking-[0.2em] uppercase text-neutral-600 dark:text-neutral-400 mb-4">
          Leadership & Activities
        </p>
        <div className="flex gap-4 overflow-x-auto pb-2">
          <div className="shrink-0 w-[300px] border border-neutral-400 dark:border-neutral-800 rounded-lg p-5">
            <p className="text-sm font-medium mb-1">VP & Director of Learning & Development</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">Major Leagues — Texas Tech University</p>
            <p className="text-sm text-neutral-700 dark:text-neutral-500 leading-relaxed">
              CS hackathon-prep organization. Designed and delivered technical workshops including a full system design session covering distributed systems, load balancing, consistent hashing, and microservices architecture.
            </p>
          </div>
          <div className="shrink-0 w-[300px] border border-neutral-400 dark:border-neutral-800 rounded-lg p-5">
            <p className="text-sm font-medium mb-1">Treasurer</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">Students for Global Connections — Texas Tech University</p>
            <p className="text-sm text-neutral-700 dark:text-neutral-500 leading-relaxed">
              Cultural diversity organization. Securing sponsorships, managing budgets, and organizing the annual World Wide Showcase event.
            </p>
          </div>
          <div className="shrink-0 w-[300px] border border-neutral-400 dark:border-neutral-800 rounded-lg p-5">
            <p className="text-sm font-medium mb-1">Meta Database Engineer Certificate</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">Coursera · 2025</p>
            <p className="text-sm text-neutral-700 dark:text-neutral-500 leading-relaxed">
              Professional certificate covering MySQL, schema design, stored procedures, Python database connectivity, and Tableau visualization.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-[75%] px-6">
        <div className="border-t border-neutral-300 dark:border-neutral-800" />
      </div>

      {/* Contact */}
      <section id="contact" className="px-6 py-12 mx-auto max-w-[75%]">
        <p className="text-xs tracking-[0.2em] uppercase text-neutral-600 dark:text-neutral-400 mb-6">
          Get in Touch
        </p>
        <form className="flex flex-col gap-3 mb-8">
          <input type="text" placeholder="Name" className="text-sm px-4 py-3 rounded-md border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-300 placeholder-neutral-500 dark:placeholder-neutral-600 outline-none focus:border-neutral-500 dark:focus:border-neutral-400 transition-colors" />
          <input type="email" placeholder="Email" className="text-sm px-4 py-3 rounded-md border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-300 placeholder-neutral-500 dark:placeholder-neutral-600 outline-none focus:border-neutral-500 dark:focus:border-neutral-400 transition-colors" />
          <textarea placeholder="Message" rows={4} className="text-sm px-4 py-3 rounded-md border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-300 placeholder-neutral-500 dark:placeholder-neutral-600 outline-none focus:border-neutral-500 dark:focus:border-neutral-400 transition-colors resize-none" />
          <button type="submit" className="self-start text-sm px-5 py-2.5 rounded-md font-medium text-white bg-gradient-to-br from-neutral-700 to-neutral-500 hover:opacity-90 transition-opacity">
            Send message
          </button>
        </form>
        <div className="flex gap-6 pt-4 border-t border-neutral-300 dark:border-neutral-800">
          <a href="mailto:shreenath.gandhi@ttu.edu" className="text-sm text-neutral-600 dark:text-neutral-400 hover:opacity-70 transition-opacity">Email</a>
          <a href="https://linkedin.com/in/shreenathgandhi" target="_blank" className="text-sm text-neutral-600 dark:text-neutral-400 hover:opacity-70 transition-opacity">LinkedIn</a>
          <a href="https://github.com/shreenath04" target="_blank" className="text-sm text-neutral-600 dark:text-neutral-400 hover:opacity-70 transition-opacity">GitHub</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-6 border-t border-neutral-300 dark:border-neutral-800 text-center">
        <p className="text-xs text-neutral-500">© 2026 Shreenath Gandhi</p>
      </footer>
    </main>
  );
}