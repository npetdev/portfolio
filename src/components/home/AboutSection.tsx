import "../../styles/about.scss";
import { motion } from "framer-motion";
import { fadeUpSkill } from "../../animations/stagger";

export default function AboutSection() {
  return (
    <section id="about" className="about">
      <motion.div
        className="about-content"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } }
        }}
      >
        <motion.h2
          variants={fadeUpSkill}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.p
          variants={fadeUpSkill}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          I am Nebojsa, a professional React Developer and Personal Fitness Trainer. 
          I have over 15 years of experience in fitness training and programming projects.
        </motion.p>
      </motion.div>
    </section>
  );
}
