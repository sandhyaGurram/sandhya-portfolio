import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    category: "PROFESSIONAL SHOPIFY DEVELOPMENT",
    title: "ARM Pearl Beauty",
    description:
      "Professional Shopify development for a beauty e-commerce brand. Worked on theme customization, dynamic product-pack sections using Metafields and Metaobjects, bundle selection, variant mapping, quantity management, free-gift displays, and responsive product pages. Also contributed to app integrations, shipping and payment workflows, storefront performance, and SEO.",
    technologies: [
      "Shopify",
      "Liquid",
      "JavaScript",
      "Metafields",
      "Metaobjects",
      "REST APIs",
      "SEO",
    ],
    initials: "ARM",
    visual: "from-rose-950 via-red-950 to-gray-950",
    accent: "text-rose-300",
    demo: "https://armpearlbeauty.com",
    code: "",
  },
  {
    number: "02",
    category: "PROFESSIONAL E-COMMERCE DEVELOPMENT",
    title: "Hamsa Radiance",
    description:
      "Contributing to the Shopify storefront and frontend development of a sister brand under ARM Pearl Beauty Group, with a focus on responsive UI customization, storefront functionality, and performance improvements.",
    technologies: [
      "Shopify",
      "Liquid",
      "JavaScript",
      "CSS",
      "Responsive Design",
    ],
    initials: "HR",
    visual: "from-amber-950 via-orange-950 to-gray-950",
    accent: "text-amber-300",
    demo: "https://hamsaradiance.com/",
    code: "",
  },
  {
    number: "03",
    category: "FULL-STACK APPLICATION",
    title: "Multi-platform CRM",
    description:
      "Developing a CRM to manage marketplace orders, inventory, Excel imports, warehouse updates, notifications, and sales analytics through a React frontend and Node.js backend.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
    initials: "CRM",
    visual: "from-violet-950 via-indigo-950 to-gray-950",
    accent: "text-violet-300",
    demo: "https://multi-platform-crm-1.onrender.com/",
    code: "",
  },
  {
    number: "04",
    category: "DATA & API INTEGRATION",
    title: "Telangana Box Office Analytics",
    description:
      "Exploring a regional movie analytics platform focused on movie information, theater and showtime data, and box-office insights through API integrations.",
    technologies: ["React", "JavaScript", "REST APIs", "Vite"],
    initials: "TS",
    visual: "from-sky-950 via-blue-950 to-gray-950",
    accent: "text-sky-300",
    demo: "",
    code: "",
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-gray-900 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40"
    >
      <div
        className={`relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br ${project.visual}`}
      >
        <div className="absolute inset-4 rounded-xl border border-white/10 bg-white/[0.03]" />

        <span
          className={`relative text-6xl font-bold tracking-tight ${project.accent} transition duration-300 group-hover:scale-110`}
        >
          {project.initials}
        </span>

        <span className="absolute left-7 top-7 text-xs font-medium tracking-[0.2em] text-gray-400">
          PROJECT / {project.number}
        </span>

        <span className="absolute bottom-7 right-7 text-xs text-gray-400">
          {project.category}
        </span>
      </div>

      <div className="p-6 sm:p-7">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-violet-400">
          {project.category}
        </p>

        <h3 className="text-xl font-bold text-white sm:text-2xl">
          {project.title}
        </h3>

        <p className="mt-4 min-h-24 text-sm leading-7 text-gray-400">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-300"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-4 border-t border-white/10 pt-5">
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-white transition hover:text-violet-300"
            >
              Live Website ↗
            </a>
          ) : (
            <span className="text-sm text-gray-500">Demo coming soon</span>
          )}

          {project.code ? (
            <a
              href={project.code}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-gray-300 transition hover:text-white"
            >
              Source Code ↗
            </a>
          ) : (
            <span className="text-sm text-gray-500">
              Source link to be added
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-gray-950 px-6 py-24 text-white sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-3xl"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
            Featured Work
          </p>

          <h2 className="text-3xl font-bold sm:text-5xl">
            Projects I've been working on
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            A selection of e-commerce customization, full-stack development, and
            API integration work.
          </p>
        </motion.div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.number} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
