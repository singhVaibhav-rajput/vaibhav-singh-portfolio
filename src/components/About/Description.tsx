
import { motion } from "framer-motion";

export default function Description() {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <p className="text-lg leading-8 text-gray-400">
                    I'm Vaibhav Singh, a Computer Science student and
                    aspiring Software Engineer who enjoys building modern
                    web applications and solving real-world problems with
                    technology.
                </p>

                <p className="mt-6 text-lg leading-8 text-gray-400">
                    I work mainly with the JavaScript ecosystem, especially
                    React, TypeScript, Node.js and Express. I also practice
                    Data Structures and Algorithms and continuously improve
                    my software engineering fundamentals.
                </p>

                <p className="mt-6 text-lg leading-8 text-gray-400">
                    My goal is simple — build useful products, write clean
                    code and keep getting better at engineering.
                </p>

                {/* Stats */}
                <div className="mt-10 grid grid-cols-3 gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                        <p className="text-2xl font-bold text-white">50+</p>
                        <p className="mt-1 text-sm text-gray-500">
                            DSA Problems
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                        <p className="text-2xl font-bold text-white">4+</p>
                        <p className="mt-1 text-sm text-gray-500">
                            Projects
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                        <p className="text-2xl font-bold text-white">∞</p>
                        <p className="mt-1 text-sm text-gray-500">
                            Curiosity
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}