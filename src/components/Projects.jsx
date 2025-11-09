const projects = [
  {
    title: 'Playful Fintech App',
    description: 'A mobile banking experience with a focus on clarity, micro-interactions, and trust.',
    tags: ['UX', 'UI', 'Motion'],
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Creative Analytics Dashboard',
    description: 'A modern analytics surface for creative teams to explore insights with joy.',
    tags: ['Design System', 'Data Viz'],
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'E-commerce Brand Refresh',
    description: 'Crafted a new visual language and product browsing flow that feels effortless.',
    tags: ['Brand', 'UI', 'Prototyping'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Projects() {
  return (
    <section id="work" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">Selected work</h2>
          <a href="#contact" className="text-sm text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white">Request full portfolio →</a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl border border-zinc-200/70 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium text-zinc-900 dark:text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs rounded-full border border-zinc-200 dark:border-zinc-700 px-2 py-1 text-zinc-700 dark:text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
