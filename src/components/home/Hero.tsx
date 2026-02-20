import { motion } from "framer-motion";
import "../../styles/hero.scss";
import myphoto from "../../assets/images/myphoto.png";
import { Link } from "react-scroll";
import { fade, slide } from "../../animations"; 

export default function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        variants={slide}
        initial="hidden"
        animate="show"
      >
        <motion.img
          src={myphoto}
          alt="Nebojsa Petrovic"
          className="hero-photo"
          variants={fade}
          transition={{ delay: 0.1, duration: 0.6 }}
        />
        <motion.h1
          variants={fade}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Nebojsa Petrovic
        </motion.h1>

        <motion.p
          variants={fade}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          React Developer & Personal Fitness Trainer
        </motion.p>

        <motion.button
          className="hero-btn"
          variants={fade}
          transition={{ delay: 0.5, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <Link to="projects" smooth={true} duration={500}>
            View Projects
          </Link>
        </motion.button>
      </motion.div>
    </section>
  );
}
