export default function Footer() {
  return (
    <footer id="contact" className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-zinc-200/70 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Let’s build something delightful</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-300">Open to freelance and full-time opportunities. Based in anywhere, collaborating worldwide.</p>
            </div>
            <div className="flex md:justify-end">
              <a
                href="mailto:hello@designer.com"
                className="inline-flex items-center rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-5 py-3 text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
              >
                Email me: hello@designer.com
              </a>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
            <span>© {new Date().getFullYear()} Designer</span>
            <span>•</span>
            <a href="#home" className="hover:text-zinc-700 dark:hover:text-zinc-200">Back to top</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
