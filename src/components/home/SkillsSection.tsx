import "../../styles/skills.scss";

export default function SkillsSection() {
  const skills = [
    "React",
    "TypeScript",
    "Redux",
    "React Router",
    "Ant Design",
    "SASS/SCSS",
    "Git & GitHub",
    "Problem Solving (Spine & Posture)",
    "Personal Fitness Training",
    "Kids Fitness Training",
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-content">
        <h2>My Skills</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <span key={index} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
