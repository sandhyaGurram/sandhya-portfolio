import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Download } from "lucide-react";

const EMAIL = "gurramsandhya2013@gmail.com";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-950 px-6 py-24 text-white sm:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gray-900 p-7 sm:p-12 lg:p-16"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/20 blur-[100px]" />

          <div className="relative">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              Get In Touch
            </p>

            <h2 className="max-w-2xl text-3xl font-bold leading-tight sm:text-5xl">
              Have a project in mind?
              <span className="block text-violet-400">Let's talk.</span>
            </h2>

            <p className="mt-6 max-w-2xl leading-8 text-gray-400">
              I'm interested in Shopify development, frontend engineering, and
              opportunities to build useful web experiences. Reach out to
              discuss a project or professional opportunity.
            </p>

            <a
              href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                "Portfolio Inquiry",
              )}`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3.5 font-semibold transition hover:-translate-y-1 hover:bg-violet-400"
            >
              <Mail size={18} />
              Email Me
              <ArrowUpRight size={18} />
            </a>

            <div className="mt-10 flex flex-wrap gap-5 border-t border-white/10 pt-7">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-300 transition hover:text-violet-300"
              >
                <span className="font-bold">GH</span>
                GitHub
                <ArrowUpRight size={14} />
              </a>

              <a
                href="https://www.linkedin.com/in/sandhya-gurram"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-300 transition hover:text-violet-300"
              >
                <span className="font-bold">in</span>
                LinkedIn
                <ArrowUpRight size={14} />
              </a>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 text-sm text-gray-300 transition hover:text-violet-300"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
