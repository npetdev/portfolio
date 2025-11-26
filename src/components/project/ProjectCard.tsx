import "../../styles/projectCard.scss";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

export default function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      variants={{
        show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
      }}
      whileHover={{
        scale: 1.05,
        y: -5,
        transition: { type: "spring", stiffness: 200, damping: 12 },
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
        View Project
      </a>
    </motion.div>
  );
}
