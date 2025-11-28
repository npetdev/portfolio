import "../../styles/skills.scss";
import { motion } from "framer-motion";
import {staggerSkills, fadeUpSkill } from "../../animations/stagger";

export default function SkillsSection() {
  const skills = [
    "React",
    "Javascript",
    "TypeScript",
    "Redux",
    "React Router",
    "Axios",
    "Framer Motion",
    "Ant Design",
    "SASS/SCSS",
    "Supabase",
    "Git & GitHub"
  ];

  return (
    <section id="skills" className="skills">
      <motion.div
        className="skills-content"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerSkills}
      >
        <motion.h2
          variants={fadeUpSkill}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>

        <motion.div className="skills-list" variants={staggerSkills}>
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              className="skill-badge"
              variants={fadeUpSkill}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.08 }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
