import { Code2, ShoppingBag, Database, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: ShoppingBag,
    title: "Shopify Development",
    description:
      "Custom storefronts, Liquid sections, product pages, metafields, and e-commerce experiences.",
  },
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Responsive interfaces built with React, JavaScript, HTML, CSS, and Tailwind CSS.",
  },
  {
    icon: Database,
    title: "Full-Stack Projects",
    description:
      "Working with Node.js, Express, MongoDB, REST APIs, and data-driven dashboards.",
  },
  {
    icon: Rocket,
    title: "Problem Solving",
    description:
      "Improving usability, troubleshooting issues, and building practical features for real projects.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-gray-900 px-6 py-24 text-white sm:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
            About Me
          </p>

          <h2 className="text-3xl font-bold leading-tight sm:text-5xl">
            Turning ideas into{" "}
            <span className="text-violet-400">useful digital products.</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-400 sm:text-lg">
            I'm a developer focused on Shopify storefront customization and
            modern web development. I enjoy building responsive interfaces,
            solving technical problems, and creating features that make
            e-commerce experiences more useful for customers and businesses.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-violet-400/40"
              >
                <div className="mb-5 inline-flex rounded-xl bg-violet-400/10 p-3 text-violet-400">
                  <Icon size={25} />
                </div>

                <h3 className="text-lg font-semibold">{item.title}</h3>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
