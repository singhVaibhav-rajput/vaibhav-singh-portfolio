import { motion } from "framer-motion";

export default function Heading() {
    return (
        <div>
            {/* Section heading */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mb-16"
            >
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
                    About Me
                </p>

                <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
                    Building ideas into{" "}

                    real products.

                </h2>
            </motion.div>
        </div>
    )
}