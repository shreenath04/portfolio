export default function Experience() {
    const roles = [
      {
        title: "AI Research Assistant",
        org: "Wu Research Group — Texas Tech University",
        period: "2024 – Present",
        bullets: [
          "Developed deep learning models for brain tumor MRI classification achieving 98% test accuracy",
          "Outperformed published baselines of 92–94% on independent external validation set with 75% accuracy",
        ],
      },
      {
        title: "Data Science Research Assistant",
        org: "Davis College of Agricultural Sciences — Texas Tech University",
        period: "2024 – Present",
        bullets: [
          "Built recombination-based augmentation pipeline for LiDAR point cloud cattle carcass data",
          "Divided scans into four anatomical parts (Chuck, Rib, Loin, Round) for synthetic training data generation",
          "Explored PointNet++ architecture with self-smoothing cross-sectional profile morphing",
        ],
      },
    ];
  
    return (
      <main className="flex-1 px-6 py-16 max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-8">
          Experience
        </p>
        <div className="flex flex-col gap-10">
          {roles.map((role) => (
            <div key={role.title} className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6">
              <div className="flex items-start justify-between mb-1">
                <h2 className="text-lg font-medium">{role.title}</h2>
                <span className="text-xs text-neutral-400 whitespace-nowrap ml-4">{role.period}</span>
              </div>
              <p className="text-sm text-neutral-400 mb-4">{role.org}</p>
              <ul className="flex flex-col gap-2">
                {role.bullets.map((bullet, i) => (
                  <li key={i} className="text-sm text-neutral-500 leading-relaxed pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-neutral-600">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    );
  }