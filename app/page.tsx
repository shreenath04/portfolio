export default function Home() {
  const experiences = [
    { title: "AI Research Assistant", org: "Wu Research Group", desc: "Brain tumor MRI classification · 98% test accuracy" },
    { title: "Data Science RA", org: "Davis College", desc: "LiDAR point cloud · PointNet++ augmentation pipeline" },
  ];

  const projects = [
    { title: "EOD Stock Pipeline", tech: "AWS Lambda · S3 · EventBridge", desc: "3,862 tickers processed nightly" },
    { title: "DualBrain AI", tech: "Ollama · MongoDB · Docker", desc: "Hybrid edge-cloud LLM routing" },
    { title: "Inflation Predictor", tech: "FastAPI · Random Forest", desc: "Dual ensemble model · R² ~0.63" },
    { title: "ETH Pool", tech: "Solidity · HardHat", desc: "Collateralized smart contract lending" },
  ];

  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="px-6 pt-20 pb-16 max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-3">
          Software Engineer · AI/ML
        </p>
        <h1 className="text-4xl font-medium mb-2 tracking-tight">
          Shreenath Gandhi
        </h1>
        <p className="text-neutral-500 mb-8 leading-relaxed">
          Building production-grade ML systems and data engineering pipelines.
        </p>
        <div className="flex gap-3">
          <a href="/resume.pdf" download className="text-sm px-5 py-2.5 rounded-md font-medium text-white bg-gradient-to-br from-neutral-700 to-neutral-500 hover:opacity-90 transition-opacity">
            Download resume
          </a>
          <a href="#contact" className="text-sm px-5 py-2.5 rounded-md border border-neutral-300 dark:border-neutral-700 text-neutral-500 hover:opacity-70 transition-opacity">
            Get in touch
          </a>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="border-t border-neutral-200 dark:border-neutral-800" />
      </div>

      {/* Tech Stack */}
      <section className="px-6 py-12 max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-4">
          Tech Stack
        </p>
        <div className="flex flex-wrap gap-2">
          {["Python", "PyTorch", "AWS", "React", "Next.js", "FastAPI", "Docker", "MongoDB", "SQL", "Solidity"].map((skill) => (
            <span key={skill} className="text-xs px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-500 bg-neutral-50 dark:bg-neutral-900">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="border-t border-neutral-200 dark:border-neutral-800" />
      </div>

      {/* Experience */}
      <section className="px-6 py-12 max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-4">
          Experience
        </p>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {experiences.map((exp) => (
            <div key={exp.title} className="min-w-[260px] border border-neutral-200 dark:border-neutral-800 rounded-lg p-5">
              <p className="text-sm font-medium mb-1">{exp.title}</p>
              <p className="text-xs text-neutral-400 mb-3">{exp.org}</p>
              <p className="text-xs text-neutral-500 leading-relaxed">{exp.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="border-t border-neutral-200 dark:border-neutral-800" />
      </div>

      {/* Projects */}
      <section className="px-6 py-12 max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-4">
          Projects
        </p>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {projects.map((proj) => (
            <div key={proj.title} className="min-w-[260px] border border-neutral-200 dark:border-neutral-800 rounded-lg p-5">
              <p className="text-sm font-medium mb-1">{proj.title}</p>
              <p className="text-xs text-neutral-400 mb-3">{proj.tech}</p>
              <p className="text-xs text-neutral-500 leading-relaxed">{proj.desc}</p>
            </div>
          ))}
        </div>
        <a href="https://github.com/yourusername" target="_blank" className="inline-block mt-4 text-xs text-neutral-400 border-b border-neutral-600 pb-0.5 hover:opacity-70 transition-opacity">
          View all on GitHub →
        </a>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="border-t border-neutral-200 dark:border-neutral-800" />
      </div>

      {/* Contact */}
      <section id="contact" className="px-6 py-12 max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-6">
          Get in Touch
        </p>
        <form className="flex flex-col gap-3 mb-8">
          <input type="text" placeholder="Name" className="text-sm px-4 py-3 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-300 placeholder-neutral-500 outline-none focus:border-neutral-400 transition-colors" />
          <input type="email" placeholder="Email" className="text-sm px-4 py-3 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-300 placeholder-neutral-500 outline-none focus:border-neutral-400 transition-colors" />
          <textarea placeholder="Message" rows={4} className="text-sm px-4 py-3 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-300 placeholder-neutral-500 outline-none focus:border-neutral-400 transition-colors resize-none" />
          <button type="submit" className="self-start text-sm px-5 py-2.5 rounded-md font-medium text-white bg-gradient-to-br from-neutral-700 to-neutral-500 hover:opacity-90 transition-opacity">
            Send message
          </button>
        </form>
        <div className="flex gap-6 pt-4 border-t border-neutral-200 dark:border-neutral-800">
          <a href="mailto:your@email.com" className="text-xs text-neutral-400 hover:opacity-70 transition-opacity">Email</a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" className="text-xs text-neutral-400 hover:opacity-70 transition-opacity">LinkedIn</a>
          <a href="https://github.com/yourusername" target="_blank" className="text-xs text-neutral-400 hover:opacity-70 transition-opacity">GitHub</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-6 border-t border-neutral-200 dark:border-neutral-800 text-center">
        <p className="text-xs text-neutral-500">© 2026 Shreenath Gandhi</p>
      </footer>
    </main>
  );
}