import { motion } from "framer-motion";

const experiences = [
  {
    role: "Shopify / Frontend Developer",
    company: "Your Company Name",
    period: "Add your employment dates",
    type: "Professional Experience",
    description:
      "Customize this section with your actual job responsibilities and achievements.",
    achievements: [
      "Customize Shopify themes using Liquid, HTML, CSS, and JavaScript.",
      "Build responsive storefront sections and product-page features.",
      "Troubleshoot UI issues and improve storefront usability and performance.",
      "Integrate e-commerce features and third-party applications where required.",
    ],
    technologies: ["Shopify", "Liquid", "JavaScript", "CSS"],
  },
  {
    role: "Full-Stack Development Projects",
    company: "Independent Projects",
    period: "Add your project dates",
    type: "Project Experience",
    description:
      "Develop web applications to practice and demonstrate frontend, backend, and API integration skills.",
    achievements: [
      "Develop a React-based multi-platform order and inventory CRM.",
      "Build backend APIs using Node.js and Express with MongoDB.",
      "Explore movie-data integrations for a regional box-office analytics application.",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-gray-900 px-6 py-24 text-white sm:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
            Career Journey
          </p>

          <h2 className="text-3xl font-bold sm:text-5xl">
            Experience & Development
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-gray-400">
            My professional work and development projects, highlighting the
            skills I use to build practical web solutions.
          </p>
        </motion.div>

        <div className="relative space-y-8 border-l border-violet-400/30 pl-6 sm:pl-10">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.role}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative rounded-2xl border border-white/10 bg-gray-950 p-6 sm:p-8"
            >
              <span className="absolute -left-[33px] top-8 h-4 w-4 rounded-full border-4 border-gray-900 bg-violet-400 sm:-left-[49px]" />

              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-violet-400">
                    {experience.type}
                  </p>

                  <h3 className="mt-2 text-xl font-bold sm:text-2xl">
                    {experience.role}
                  </h3>

                  <p className="mt-2 text-gray-300">{experience.company}</p>
                </div>

                <span className="w-fit rounded-full border border-white/10 px-3 py-2 text-xs text-gray-400">
                  {experience.period}
                </span>
              </div>

              <p className="mt-5 leading-7 text-gray-400">
                {experience.description}
              </p>

              <ul className="mt-5 space-y-3">
                {experience.achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="flex gap-3 text-sm leading-6 text-gray-300"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                    {achievement}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {experience.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-violet-400/10 px-3 py-1.5 text-xs text-violet-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
