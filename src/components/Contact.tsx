import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-28 md:px-10 lg:px-16"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.035] px-6 py-16 text-center backdrop-blur-xl md:px-12 md:py-20"
        >
          {/* Decorative glow */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-purple-500/10 blur-3xl" />

          {/* Small Label */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

            <span className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400">
              Get in touch
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative mx-auto max-w-3xl text-4xl font-bold tracking-tight text-white md:text-6xl"
          >
            Let&apos;s build something{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              together.
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="relative mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 md:text-lg md:leading-8"
          >
            I&apos;m always open to discussing new projects, internship
            opportunities, collaborations, or interesting ideas. Feel free
            to reach out.
          </motion.p>

          {/* Email Button */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            whileHover={{ y: -3 }}
            href="mailto:vr20102005@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mt-10 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-cyan-400"
          >
            <Mail size={18} />

            <span>Send me an email</span>

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </motion.a>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="relative mt-10 flex justify-center gap-3"
          >
            <a
              href="https://github.com/singhVaibhav-rajput"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/vaibhav-singh-988779332?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              <FaLinkedinIn size={20} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;