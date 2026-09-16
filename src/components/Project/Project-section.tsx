import { motion } from "framer-motion";
import Heading from "./Heading";
import Project from "./Project";
import {
  ArrowUpRight,

 
} from "lucide-react";




function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-10"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <Heading />

        {/* Projects */}
        <Project />

        {/* GitHub */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/singhVaibhav-rajput"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-white"
          >
            Explore more on GitHub
            <ArrowUpRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;