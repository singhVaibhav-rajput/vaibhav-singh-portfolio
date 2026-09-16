import { motion } from "framer-motion";


export default function Heading() {
    return (

        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
        >
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
                Selected Work
            </p>

            <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
                Things I've{" "}
                <span className="text-gray-500">
                    built.
                </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-gray-500">
                A selection of projects where I turned ideas into
                functional digital experiences.
            </p>
        </motion.div>

    )
}