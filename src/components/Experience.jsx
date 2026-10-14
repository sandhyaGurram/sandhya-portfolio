import { motion } from "framer-motion";

const experiences = [
  {
    role: "Shopify Developer",
    company: "ARM Pearl Beauty",
    period: "Jun 2024 – Present",
    type: "Full-time",
    description:
      "Developing, customizing, maintaining, and optimizing Shopify e-commerce stores, with a focus on reusable theme components, conversion-focused features, integrations, and performance.",
    achievements: [
      "Customize Shopify themes using Liquid, HTML5, CSS3, JavaScript, JSON templates, Sections, Blocks, and Snippets.",
      "Build dynamic product-pack and bundle experiences using Metafields and Metaobjects, including variant mapping, quantity selection, pricing, promotions, and free gifts.",
      "Integrate and troubleshoot payment, shipping, tracking, customer engagement, and marketing solutions, including Razorpay, Shiprocket, and WhatsApp platforms.",
      "Work with Shopify Admin API, Storefront API, GraphQL, REST APIs, and asynchronous JavaScript integrations.",
      "Optimize storefront performance, responsive layouts, SEO, metadata, structured data, and Core Web Vitals.",
      "Manage theme changes and deployments with Git and GitHub, and debug issues across browsers and devices.",
    ],
    technologies: [
      "Shopify",
      "Liquid",
      "JavaScript",
      "HTML",
      "CSS",
      "GraphQL",
      "REST APIs",
      "SEO",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Hamsa Radiance · ARM Pearl Beauty Group",
    period: "Jun 2024 – Present",
    type: "Parallel brand responsibility",
    description:
      "Contributing to the group's sister brand alongside my work at ARM Pearl Beauty, focusing on frontend development and Shopify storefront improvements.",
    achievements: [
      "Customize user interfaces and storefront components to meet business requirements.",
      "Build responsive experiences for desktop, tablet, and mobile devices.",
      "Contribute to website usability, performance, and e-commerce functionality.",
    ],
    technologies: [
      "Shopify",
      "Frontend Development",
      "Liquid",
      "JavaScript",
      "Responsive Design",
    ],
  },
  {
    role: "Software Trainee",
    company: "ENut Technologies Pvt. Ltd.",
    period: "Jun 2023 – May 2024",
    type: "Full-time",
    description:
      "Worked on frontend and web development, building responsive interfaces for multiple device sizes.",
    achievements: [
      "Worked with frontend technologies to implement web interfaces.",
      "Focused on responsive layouts and cross-device usability.",
      "Developed practical web development skills, including React.js.",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Responsive Design",
    ],
  },
  {
    role: "Project Associate",
    company: "Pactera Edge",
    period: "Nov 2021 – Feb 2023",
    type: "Full-time",
    description:
      "Worked on AI and ML data projects involving image annotation, OCR, video annotation, and dataset quality review.",
    achievements: [
      "Reviewed labelled datasets for accuracy, consistency, and compliance with project guidelines.",
      "Worked on OCR projects involving handwritten and printed text, line-level labelling, and illegibility flags.",
      "Contributed to image and video annotation projects, including 2D bounding boxes and search relevance grading.",
      "Received a Star Performance Award for quality of work across projects.",
    ],
    technologies: [
      "AI/ML Data Operations",
      "OCR",
      "Image Annotation",
      "Video Annotation",
      "Quality Assurance",
    ],
  },
  {
    role: "Senior Data Analyst",
    company: "Deepen AI",
    period: "Apr 2019 – Oct 2021",
    type: "Full-time",
    description:
      "Performed final-level quality reviews of datasets for autonomous-driving and computer-vision projects.",
    achievements: [
      "Reviewed object annotations for vehicles, pedestrians, traffic lights, road signs, lanes, buildings, and road infrastructure.",
      "Verified bounding boxes, object attributes, and annotation accuracy against client requirements.",
      "Worked with multi-stage labelling, quality assurance, and final review workflows.",
      "Helped maintain dataset quality standards while meeting daily productivity targets.",
    ],
    technologies: [
      "Computer Vision",
      "Data Annotation",
      "Quality Control",
      "Object Detection",
      "Dataset Review",
    ],
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
            Experience & Professional Growth
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-gray-400">
            From AI/ML data quality and computer vision to frontend engineering
            and Shopify development, my career has focused on accuracy,
            problem-solving, and building better digital experiences.
          </p>
        </motion.div>

        <div className="relative space-y-8 border-l border-violet-400/30 pl-6 sm:pl-10">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.company}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
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

                <span className="w-fit shrink-0 rounded-full border border-white/10 px-3 py-2 text-xs text-gray-400">
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

// import { motion } from "framer-motion";

// const experiences = [
//   {
//     role: "Shopify / Frontend Developer",
//     company: "Your Company Name",
//     period: "Add your employment dates",
//     type: "Professional Experience",
//     description:
//       "Customize this section with your actual job responsibilities and achievements.",
//     achievements: [
//       "Customize Shopify themes using Liquid, HTML, CSS, and JavaScript.",
//       "Build responsive storefront sections and product-page features.",
//       "Troubleshoot UI issues and improve storefront usability and performance.",
//       "Integrate e-commerce features and third-party applications where required.",
//     ],
//     technologies: ["Shopify", "Liquid", "JavaScript", "CSS"],
//   },
//   {
//     role: "Full-Stack Development Projects",
//     company: "Independent Projects",
//     period: "Add your project dates",
//     type: "Project Experience",
//     description:
//       "Develop web applications to practice and demonstrate frontend, backend, and API integration skills.",
//     achievements: [
//       "Develop a React-based multi-platform order and inventory CRM.",
//       "Build backend APIs using Node.js and Express with MongoDB.",
//       "Explore movie-data integrations for a regional box-office analytics application.",
//     ],
//     technologies: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
//   },
// ];

// export default function Experience() {
//   return (
//     <section
//       id="experience"
//       className="bg-gray-900 px-6 py-24 text-white sm:py-28"
//     >
//       <div className="mx-auto max-w-5xl">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="mb-14"
//         >
//           <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
//             Career Journey
//           </p>

//           <h2 className="text-3xl font-bold sm:text-5xl">
//             Experience & Development
//           </h2>

//           <p className="mt-5 max-w-2xl leading-8 text-gray-400">
//             My professional work and development projects, highlighting the
//             skills I use to build practical web solutions.
//           </p>
//         </motion.div>

//         <div className="relative space-y-8 border-l border-violet-400/30 pl-6 sm:pl-10">
//           {experiences.map((experience, index) => (
//             <motion.article
//               key={experience.role}
//               initial={{ opacity: 0, x: 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.15 }}
//               className="relative rounded-2xl border border-white/10 bg-gray-950 p-6 sm:p-8"
//             >
//               <span className="absolute -left-[33px] top-8 h-4 w-4 rounded-full border-4 border-gray-900 bg-violet-400 sm:-left-[49px]" />

//               <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
//                 <div>
//                   <p className="text-xs font-semibold uppercase tracking-wider text-violet-400">
//                     {experience.type}
//                   </p>

//                   <h3 className="mt-2 text-xl font-bold sm:text-2xl">
//                     {experience.role}
//                   </h3>

//                   <p className="mt-2 text-gray-300">{experience.company}</p>
//                 </div>

//                 <span className="w-fit rounded-full border border-white/10 px-3 py-2 text-xs text-gray-400">
//                   {experience.period}
//                 </span>
//               </div>

//               <p className="mt-5 leading-7 text-gray-400">
//                 {experience.description}
//               </p>

//               <ul className="mt-5 space-y-3">
//                 {experience.achievements.map((achievement) => (
//                   <li
//                     key={achievement}
//                     className="flex gap-3 text-sm leading-6 text-gray-300"
//                   >
//                     <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
//                     {achievement}
//                   </li>
//                 ))}
//               </ul>

//               <div className="mt-6 flex flex-wrap gap-2">
//                 {experience.technologies.map((technology) => (
//                   <span
//                     key={technology}
//                     className="rounded-full bg-violet-400/10 px-3 py-1.5 text-xs text-violet-300"
//                   >
//                     {technology}
//                   </span>
//                 ))}
//               </div>
//             </motion.article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
