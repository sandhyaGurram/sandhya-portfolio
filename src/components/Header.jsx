import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-gray-950 px-6 pb-16 pt-28 text-white"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-sm text-violet-300">
            <Sparkles size={16} />
            Shopify Developer & E-commerce Specialist
          </div>

          <p className="mb-3 text-lg text-gray-400">Hello, I'm Sandhya 👋</p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl xl:text-7xl">
            I build
            <span className="block text-violet-400">Shopify experiences.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
            Shopify Developer specializing in Liquid theme customization,
            e-commerce integrations, responsive storefronts, performance
            optimization, and SEO. I also build web applications using React and
            modern JavaScript technologies.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3.5 font-semibold transition hover:-translate-y-1 hover:bg-violet-400"
            >
              Explore My Work <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 px-6 py-3.5 font-semibold transition hover:border-violet-400 hover:text-violet-300"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-sm font-semibold text-gray-400 transition hover:text-white"
            >
              GH
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-sm font-semibold text-gray-400 transition hover:text-white"
            >
              in
            </a>

            <span className="h-5 w-px bg-white/20" />

            <a
              href="#about"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white"
            >
              Scroll to explore <ArrowDown size={16} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="absolute -inset-4 rounded-3xl bg-violet-500/10 blur-2xl" />

          <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl sm:p-8">
            <div className="flex items-center gap-2 border-b border-white/10 pb-5">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-3 text-sm text-gray-400">developer.js</span>
            </div>

            <pre className="overflow-x-auto py-7 text-sm leading-8 sm:text-base">
              <code>
                <span className="text-violet-400">const</span>{" "}
                <span className="text-sky-300">developer</span> = {"{\n"}
                {"  "}
                <span className="text-gray-400">name:</span>{" "}
                <span className="text-green-300">'Sandhya'</span>,{"\n"}
                {"  "}
                <span className="text-gray-400">focus:</span>{" "}
                <span className="text-green-300">'Shopify'</span>,{"\n"}
                {"  "}
                <span className="text-gray-400">stack:</span> [{"\n"}
                {"    "}
                <span className="text-green-300">'React'</span>,{"\n"}
                {"    "}
                <span className="text-green-300">'Liquid'</span>,{"\n"}
                {"    "}
                <span className="text-green-300">'JavaScript'</span>
                {"\n"}
                {"  "}],{"\n"}
                {"  "}
                <span className="text-gray-400">loves:</span>{" "}
                <span className="text-green-300">'Building for the web'</span>
                {"\n};"}
              </code>
            </pre>

            <div className="flex items-center justify-between gap-3 border-t border-white/10 pt-5 text-xs text-gray-400 sm:text-sm">
              <span>Clean code. Thoughtful design.</span>
              <span className="text-violet-300">
                ● Available for opportunities
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
