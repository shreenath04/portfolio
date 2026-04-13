export default function Blog() {
    const posts = [
      {
        title: "Getting Started with Low Level Design",
        desc: "My learnings from the Take U Forward LLD course — covering SOLID principles, design patterns, and real interview problems.",
        date: "Coming Soon",
      },
    ];
  
    return (
      <main className="flex-1 px-6 py-16 mx-auto max-w-[75%]">
        <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-8">
          Blog
        </p>
        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <div key={post.title} className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6">
              <div className="flex items-start justify-between mb-1">
                <h2 className="text-lg font-medium">{post.title}</h2>
                <span className="text-xs text-neutral-400 whitespace-nowrap ml-4">{post.date}</span>
              </div>
              <p className="text-sm text-neutral-500 leading-relaxed">{post.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-neutral-500 mt-8">
          More posts coming soon. Follow my journey on{" "}
          <a href="https://medium.com/@gandhi.shreenath" target="_blank" className="border-b border-neutral-600 pb-0.5 hover:opacity-70 transition-opacity">
            Medium
          </a>.
        </p>
      </main>
    );
  }