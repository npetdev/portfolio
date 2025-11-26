import "../../styles/contact.scss";
import { motion } from "framer-motion";
import { fadeUpSkill } from "../../animations/stagger";

export default function ContactSection() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = fadeUpSkill;

  return (
    <section id="contact" className="contact">
      <motion.div
        className="contact-content"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2
          variants={itemVariants}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>

        <motion.form className="contact-form" variants={containerVariants}>
          <motion.input
            type="text"
            placeholder="Your Name"
            required
            variants={itemVariants}
            transition={{ duration: 0.5 }}
          />
          <motion.input
            type="email"
            placeholder="Your Email"
            required
            variants={itemVariants}
            transition={{ duration: 0.5, delay: 0.1 }}
          />
          <motion.textarea
            placeholder="Your Message"
            rows={5}
            required
            variants={itemVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.button
            type="submit"
            className="contact-btn"
            variants={itemVariants}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
}
