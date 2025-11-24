import "../../styles/projects.scss";
import ProjectCard from "../../components/project/ProjectCard";

const projects = [
  {
    title: "Fitness App",
    description: "AI-assisted fitness app built with React, Redux and TS.",
    link: "https://ai-fitness-assistant.netlify.app/",
  },
  {
    title: "Managemet App",
    description:
      "Responsive CRUD App, with real time weather Api and JsonPlaceholder Api .",
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
      <div className="projects-content">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
