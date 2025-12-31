export default function Hero() {
  return (
   <section className="min-h-screen flex flex-col justify-center items-center
bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white text-center px-6">


      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Hi, I'm <span className="text-blue-400">Gouse</span>
      </h1>

      {/* Description */}
      <p className="max-w-3xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
        A passionate Software Developer Intern focused on building modern,
        scalable web applications with clean UI and real backend logic.
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        <a href="#projects">
          <button className="
            px-6 py-3 rounded-lg font-medium
            bg-blue-500 hover:bg-blue-600
            transition
          ">
            See My Work
          </button>
        </a>

        <a
          href="https://github.com/your-github-username"
          target="_blank"
          rel="noreferrer"
        >
          <button className="
            px-6 py-3 rounded-lg font-medium
            border border-gray-400
            hover:bg-white hover:text-black
            transition
          ">
            GitHub
          </button>
        </a>
      </div>
    </section>
  );
}
