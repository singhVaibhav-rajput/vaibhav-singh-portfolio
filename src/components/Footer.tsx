import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#050505] px-6 py-7 md:px-6 lg:px-6">
      <div className="mx-auto max-w-5xl ">
        {/* Main Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 items-center gap-8 md:grid-cols-3"
        >
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <a
              href="#home"
              className="text-xl font-bold tracking-tight text-white"
            >
              Vaibhav<span className="text-cyan-400">.</span>
            </a>
          </div>

          {/* Center Content */}
          <div className="flex flex-col items-center text-center">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Vaibhav Singh. All rights reserved.
            </p>

            <p className="mt-3 text-xs text-gray-700">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>

          {/* Social + Back to Top */}
          <div className="flex justify-center gap-3 md:justify-end">
            <a
              href="https://github.com/singhVaibhav-rajput"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              <FaGithub size={19} />
            </a>

            <a
              href="https://www.linkedin.com/in/vaibhav-singh-988779332?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              <FaLinkedinIn size={19} />
            </a>

            <a
              href="#home"
              aria-label="Back to top"
              className="ml-2 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-cyan-400"
            >
              <ArrowUp size={19} />
            </a>
          </div>
        </motion.div>

        {/* Bottom Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 h-px bg-white/5"
        />
      </div>
    </footer>
  );
}

export default Footer;