import { motion } from "framer-motion";
import {
  ShoppingBag,
  Code2,
  Palette,
  Server,
  Database,
  GitBranch,
  Globe,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    title: "Shopify Development",
    icon: ShoppingBag,
    description: "E-commerce & storefront customization",
    skills: [
      "Shopify Liquid",
      "Theme Customization",
      "Online Store 2.0",
      "Metafields",
      "Storefront API",
      "Shopify CLI",
      "Responsive Product Pages",
    ],
  },
  {
    title: "Frontend Development",
    icon: Code2,
    description: "Responsive, interactive user interfaces",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "React Router",
      "Vite",
      "Tailwind CSS",
    ],
  },
  {
    title: "UI & Web Design",
    icon: Palette,
    description: "User experience and visual implementation",
    skills: [
      "Responsive Design",
      "Mobile-First Layouts",
      "CSS Animations",
      "Performance Optimization",
      "SEO Fundamentals",
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    description: "APIs and server-side applications",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "Webhooks",
      "Authentication",
    ],
  },
  {
    title: "Database & Data",
    icon: Database,
    description: "Data storage and application models",
    skills: ["MongoDB", "Mongoose", "MongoDB Atlas", "Prisma", "SQLite"],
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    description: "Development, testing and version control",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Shopify CLI",
      "API Integration",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-950 px-6 py-24 text-white sm:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
            My Skills
          </p>

          <h2 className="text-3xl font-bold sm:text-5xl">
            Technologies I work with
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-400 sm:text-lg">
            My toolkit for building e-commerce storefronts, responsive
            interfaces, and full-stack web applications.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-violet-400/40"
              >
                <div className="mb-5 flex items-center gap-4">
                  <div className="rounded-xl bg-violet-400/10 p-3 text-violet-400">
                    <Icon size={25} />
                  </div>

                  <div>
                    <h3 className="font-semibold">{group.title}</h3>
                    <p className="mt-1 text-xs text-gray-500">
                      {group.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-gray-300 transition hover:border-violet-400/50 hover:text-violet-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
