import { motion } from "framer-motion";
import { fadeHeader } from "../../animations/fade";
import { slideDownHeader } from "../../animations/slide";
import { staggerHeader } from "../../animations/stagger";
import ThemeSwitcher from "./ThemeSwitcher";

import { Link } from "react-scroll";
import "../../styles/header.scss";

export default function Header() {
  return (
    <header className="header">
      <motion.nav
        className="nav"
        initial="hidden"
        animate="show"
        variants={slideDownHeader}
      >
        <motion.ul variants={staggerHeader}>
          {["hero", "about", "skills", "projects", "contact"].map((section) => (
            <motion.li key={section} variants={fadeHeader}>
              <Link to={section} smooth={true} duration={500}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        <ThemeSwitcher />
      </motion.nav>
    </header>
  );
}
