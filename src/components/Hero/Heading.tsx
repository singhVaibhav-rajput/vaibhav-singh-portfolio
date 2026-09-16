import { motion } from "framer-motion";

export default function Heading() {
    return(
<motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
           <br></br> Vaibhav Singh Rajput
          </span>
          <span className="text-cyan-400">.</span>
        </motion.h1>
    )}