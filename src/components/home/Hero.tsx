import "../../styles/hero.scss";
import { Link } from "react-scroll";
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Nebojsa Petrovic</h1>
        <p>React Developer & Personal Fitness Trainer</p>
      <button className="hero-btn">
  <Link to="projects" smooth={true} duration={500}>
    View Projects
  </Link>
</button>
      </div>
    </section>
  );
}

