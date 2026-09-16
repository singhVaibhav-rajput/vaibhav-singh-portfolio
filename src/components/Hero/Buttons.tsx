
import { motion } from "framer-motion";
import {
  
  ArrowUpRight,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Buttons() {
    return(
        <>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition-all duration-300 hover:scale-105"
          >
            View My Work
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10"
          >
            Let's Connect
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex justify-center gap-4"
        >
          <a
            href="https://github.com/singhVaibhav-rajput"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 p-3 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:text-white"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/vaibhav-singh-988779332?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 p-3 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:text-white"
          >
            <FaLinkedinIn size={20} />
          </a>
        </motion.div>
        </>
    )}