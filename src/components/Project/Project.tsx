import { motion } from "framer-motion";
import {
  ArrowUpRight,

  ExternalLink,
} from "lucide-react";
import {
  FaGithub
} from "react-icons/fa";

const projects = [
  {
    number: "01",
    img: "public/images/flowpilot.jpg",
    title: "FlowPilot",
    category: "SaaS Landing Page",
    description:
      "A modern SaaS landing page focused on clean visual design, responsive layouts and smooth user interactions.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    github: "https://github.com/singhVaibhav-rajput/flowpilot",
    demo: "https://flowpilot-pi-one.vercel.app/",
    type: "flowpilot",
  },
  {
    number: "02",
    img: "public/images/ncc.jpg",
    title: "NCC Website",
    category: "NCC Management Platform",
    description:
      "A web platform designed to organize and present NCC activities, achievements, events and administrative information.",
    tech: ["EJS", "Node.js", "Express", "Supabase"],
    github: "https://github.com/singhVaibhav-rajput/GBU-NCC-PUBLIC",
    demo: "https://gbu-ncc-public.vercel.app/",
    type: "ncc",
  },
];


export default function Project() {
  return (
    <>
        <div className="space-y-10">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{
                opacity: 0,
                y: 70,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-4 transition-all duration-500 hover:border-cyan-400/20 sm:p-6"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full bg-cyan-400/10 blur-[100px] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

              <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

                {/* Preview */}
                <img
                  src={project.img}
                  alt={project.title}
                  className=" w-full rounded-xl object-cover"
                />

                {/* Information */}
                <div className="px-2 py-4 sm:px-4 lg:px-6">

                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-600">
                      {project.number}
                    </span>

                    <span className="h-px w-8 bg-white/10" />

                    <span className="text-xs uppercase tracking-widest text-gray-500">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="mt-5 text-3xl font-bold sm:text-4xl">
                    {project.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-gray-500 sm:text-base">
                    {project.description}
                  </p>

                  {/* Tech */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-400 transition-colors duration-300 group-hover:border-white/15"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/button flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium transition-all duration-300 hover:bg-white/10"
                    >
                      <FaGithub size={17} />
                      GitHub
                      <ArrowUpRight
                        size={15}
                        className="transition-transform group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
                      />
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/button flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-all duration-300 hover:scale-[1.03]"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                      <ArrowUpRight
                        size={15}
                        className="transition-transform group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        </>
        )}