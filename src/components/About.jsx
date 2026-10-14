import { motion } from "framer-motion";
import { ShoppingBag, Code2, Globe, Gauge } from "lucide-react";

const highlights = [
  {
    icon: ShoppingBag,
    title: "Shopify Development",
    description:
      "Custom themes, Liquid sections, product bundles, Metafields, Metaobjects, store migrations, and third-party app integrations.",
  },
  {
    icon: Code2,
    title: "Frontend Engineering",
    description:
      "Responsive interfaces and reusable UI components using JavaScript, React, HTML, CSS, and modern frontend tools.",
  },
  {
    icon: Globe,
    title: "E-commerce Integrations",
    description:
      "Payment gateways, shipping solutions, tracking workflows, REST APIs, GraphQL, and customer engagement integrations.",
  },
  {
    icon: Gauge,
    title: "Performance & SEO",
    description:
      "Storefront speed improvements, mobile usability, Core Web Vitals, structured data, metadata, and technical SEO.",
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
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-4xl"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
            About Me
          </p>

          <h2 className="text-3xl font-bold leading-tight sm:text-5xl">
            Building better
            <span className="text-violet-400"> Shopify experiences.</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-400 sm:text-lg">
            I'm a Shopify Developer specializing in e-commerce storefront
            development, theme customization, and store migrations. At ARM Pearl
            Beauty Group, I work across ARM Pearl Beauty and its sister brand
            Hamsa Radiance, developing responsive storefronts and implementing
            features that support business requirements.
          </p>

          <p className="mt-4 text-base leading-8 text-gray-400 sm:text-lg">
            My experience includes Shopify Liquid, Online Store 2.0, Metafields,
            Metaobjects, product bundles, custom cart functionality, payment and
            shipping integrations, API development, website performance, and
            SEO. I also work with React, Node.js, Express, and MongoDB on web
            application projects.
          </p>

          <p className="mt-4 text-base leading-8 text-gray-400 sm:text-lg">
            My earlier experience in AI/ML data quality and computer vision
            strengthened my attention to detail, structured problem-solving, and
            quality-focused approach to software development.
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
                transition={{ duration: 0.4, delay: index * 0.08 }}
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

// import { Code2, ShoppingBag, Database, Rocket } from "lucide-react";
// import { motion } from "framer-motion";

// const highlights = [
//   {
//     icon: ShoppingBag,
//     title: "Shopify Development",
//     description:
//       "Custom storefronts, Liquid sections, product pages, metafields, and e-commerce experiences.",
//   },
//   {
//     icon: Code2,
//     title: "Frontend Development",
//     description:
//       "Responsive interfaces built with React, JavaScript, HTML, CSS, and Tailwind CSS.",
//   },
//   {
//     icon: Database,
//     title: "Full-Stack Projects",
//     description:
//       "Working with Node.js, Express, MongoDB, REST APIs, and data-driven dashboards.",
//   },
//   {
//     icon: Rocket,
//     title: "Problem Solving",
//     description:
//       "Improving usability, troubleshooting issues, and building practical features for real projects.",
//   },
// ];

// export default function About() {
//   return (
//     <section id="about" className="bg-gray-900 px-6 py-24 text-white sm:py-28">
//       <div className="mx-auto max-w-7xl">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mb-14 max-w-3xl"
//         >
//           <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
//             About Me
//           </p>

//           <h2 className="text-3xl font-bold leading-tight sm:text-5xl">
//             Turning ideas into{" "}
//             <span className="text-violet-400">useful digital products.</span>
//           </h2>

//           <p className="mt-6 text-base leading-8 text-gray-400 sm:text-lg">
//             I'm a developer focused on Shopify storefront customization and
//             modern web development. I enjoy building responsive interfaces,
//             solving technical problems, and creating features that make
//             e-commerce experiences more useful for customers and businesses.
//           </p>
//         </motion.div>

//         <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
//           {highlights.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <motion.article
//                 key={item.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.4, delay: index * 0.1 }}
//                 className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-violet-400/40"
//               >
//                 <div className="mb-5 inline-flex rounded-xl bg-violet-400/10 p-3 text-violet-400">
//                   <Icon size={25} />
//                 </div>

//                 <h3 className="text-lg font-semibold">{item.title}</h3>

//                 <p className="mt-3 text-sm leading-7 text-gray-400">
//                   {item.description}
//                 </p>
//               </motion.article>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
