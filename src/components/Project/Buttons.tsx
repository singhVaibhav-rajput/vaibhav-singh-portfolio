import {
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

type Project = {
  github: string;
  demo: string;
};

type ButtonsProps = {
  project: Project;
};

export default function Buttons({ project }: ButtonsProps) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {/* GitHub Button */}
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

      {/* Live Demo Button */}
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
  );
}