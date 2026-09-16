import { motion } from "framer-motion";

import { Code2, Database, Globe, Layers3 } from "lucide-react";

const skills = [
  {
    icon: Globe,
    title: "Frontend",
    skills: "React, TypeScript, JavaScript, Tailwind CSS",
  },
  {
    icon: Code2,
    title: "Backend",
    skills: "Node.js, Express.js, REST APIs",
  },
  {
    icon: Database,
    title: "Database",
    skills: "MongoDB, SQL",
  },
  {
    icon: Layers3,
    title: "Tools & Others",
    skills: "Git, GitHub, Java, C++, Figma",
  },
];

export default function Skills() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {skills.map((skill, index) => {
        const Icon = skill.icon;

        return (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            whileHover={{
              y: -6,
            }}
            className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05]"
          >
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cyan-400 transition-transform duration-300 group-hover:scale-110">
              <Icon size={22} />
            </div>

            <h3 className="text-lg font-semibold">{skill.title}</h3>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              {skill.skills}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
