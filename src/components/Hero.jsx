import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] pt-24">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white dark:from-zinc-900/60 dark:via-zinc-900/30 dark:to-zinc-900" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl py-24">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Product designer crafting playful, modern experiences
          </h1>
          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-300">
            I blend interaction, motion, and systems thinking to build delightful interfaces for ambitious teams.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-5 py-3 text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
            >
              View selected work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-zinc-300 dark:border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
