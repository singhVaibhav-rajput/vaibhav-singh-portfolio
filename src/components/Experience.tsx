import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, CalendarDays } from "lucide-react";

const experiences = [
  {
    date: "Mar — May 2026",
    role: "Frontend Developer Intern",
    company: "Bluestock Fintech",
    type: "Internship",
    description:
      "Worked on frontend development tasks and contributed to building practical web interfaces as part of the internship program.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    date: "Jan — Mar 2026",
    role: "Frontend Developer Intern",
    company: "Woohl",
    type: "Internship",
    description:
      "Worked on frontend development for an e-commerce platform, focusing on responsive interfaces and reusable React components.",
    technologies: ["React.js", "Tailwind CSS", "JavaScript"],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#050505] px-6 py-24 md:px-10 lg:px-16"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Experience
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Where I&apos;ve{" "}
            <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              worked.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-400 md:text-lg">
            My experience working on real-world projects and developing
            practical software skills.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute left-[18px] top-0 h-full w-px origin-top bg-gradient-to-b from-cyan-400/70 via-white/10 to-transparent md:left-[180px]"
          />

          <div className="space-y-14 md:space-y-20">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                className="relative grid grid-cols-[42px_1fr] gap-5 md:grid-cols-[180px_1fr] md:gap-8"
              >
                {/* Date */}
                <div className="relative pt-1 md:pt-2">
                  <div className="hidden md:block">
                    <div className="flex items-center gap-3">
                      <CalendarDays
                        size={19}
                        className="text-cyan-400"
                      />

                      <span className="whitespace-nowrap text-lg font-semibold text-cyan-400">
                        {experience.date}
                      </span>
                    </div>

                    <p className="mt-2 pl-8 text-xs uppercase tracking-[0.2em] text-gray-600">
                      {experience.type}
                    </p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-[18px] top-2 z-10 -translate-x-1/2">
                  <div className="relative flex h-4 w-4 items-center justify-center">
                    <span className="absolute h-8 w-8 rounded-full bg-cyan-400/10 blur-md" />

                    <span className="relative h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
                  </div>
                </div>

                {/* Experience Card */}
                <motion.article
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.25 }}
                  className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.055] md:p-8"
                >
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Mobile date */}
                  <div className="mb-6 flex items-center gap-3 md:hidden">
                    <CalendarDays
                      size={18}
                      className="text-cyan-400"
                    />

                    <div>
                      <p className="text-sm font-semibold text-cyan-400">
                        {experience.date}
                      </p>

                      <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-gray-600">
                        {experience.type}
                      </p>
                    </div>
                  </div>

                  {/* Card Header */}
                  <div className="relative flex items-start justify-between gap-5">
                    <div className="flex items-center gap-5">
                      {/* Company icon */}
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] transition-all duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/5">
                        <BriefcaseBusiness
                          size={28}
                          className="text-cyan-400"
                        />
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-white md:text-2xl">
                          {experience.role}
                        </h3>

                        <p className="mt-1 text-base text-gray-500 md:text-lg">
                          {experience.company}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={23}
                      className="shrink-0 text-gray-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400"
                    />
                  </div>

                  {/* Description */}
                  <p className="relative mt-8 max-w-3xl text-sm leading-7 text-gray-500 md:text-base md:leading-8">
                    {experience.description}
                  </p>

                  {/* Technologies */}
                  <div className="relative mt-7 flex flex-wrap gap-2.5">
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs text-gray-400 transition-colors duration-300 group-hover:border-white/15 group-hover:text-gray-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </motion.article>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;