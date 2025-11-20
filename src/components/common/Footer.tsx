import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "../../styles/footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/npetdev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/npetdev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>

      <p className="footer__text">
        © {new Date().getFullYear()} Nebojša Petrović • All Rights Reserved
      </p>
    </footer>
  );
}
