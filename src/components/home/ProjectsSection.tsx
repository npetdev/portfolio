import "../../styles/projects.scss";
import ProjectCard from "../../components/project/ProjectCard";
import { motion } from "framer-motion";
import { fade, stagger, childFade } from "../../animations";

const projects = [
  {
    title: "Fitness App",
    description: "AI-assisted fitness app built with React, Redux and TS.",
    link: "https://ai-fitness-assistant.netlify.app/",
  },
  {
    title: "Management App",
    description:
      "Responsive CRUD App, with real time weather Api.",
    link: "https://management-weather-app.netlify.app/",
  },
  {
    title: "Dice Game",
    description: "SaaS Multiplayer dice game using React and Supabase.",
    link: "https://same-numbers-game.netlify.app/",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="projects">
      <motion.div
        className="projects-content"
        variants={fade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h2
          variants={fade}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          My Projects
        </motion.h2>

        <motion.div
          className="projects-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={childFade}>
              <ProjectCard
                title={project.title}
                description={project.description}
                link={project.link}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
