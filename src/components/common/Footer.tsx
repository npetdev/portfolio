import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import "../../styles/footer.scss";
import type { Variants } from "framer-motion";  

export default function Footer() {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, duration: 0.6, ease: "easeOut" }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.footer
      className="footer"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.div className="footer__socials" variants={containerVariants}>
        <motion.a
          href="https://www.linkedin.com/in/nebojsa-petrovic/"
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaLinkedin />
        </motion.a>

        <motion.a
          href="https://github.com/npetdev"
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaGithub />
        </motion.a>

        <motion.a
          href="https://www.instagram.com/nebojsa.202/"
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaInstagram />
        </motion.a>
      </motion.div>

      <motion.p className="footer__text" variants={itemVariants}>
        © {new Date().getFullYear()} Nebojša Petrović • All Rights Reserved
      </motion.p>
    </motion.footer>
  );
}
