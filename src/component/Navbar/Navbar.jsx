import "./Navbar.css";
import { Link } from "react-scroll";
import menu from '../img/menu.png'

const Navbar = () => {
  return (
    <div>
      <nav className="n-navbar navcolor" id="navbar">
        <div className="n-navbar left">
          <span>Emmanuel</span>
        </div>
        <div className="n-navbar right">
          <ul>
          <img src={menu} alt="" style={{transform: "Scale(.4)", display: "none"}}/>
            <Link className="link active">Home</Link>
            <Link className="link" smooth={true} to="services" duration={1000}>
              Services
            </Link>
            <Link
              className="link"
              smooth={true}
              to="experience"
              duration={1000}
            >
              Experience
            </Link>
            <Link className="link" smooth={true} to="about" duration={1000}>
              About Me
            </Link>
            <Link className="link" smooth={true} to="cv" duration={1000}>
              Testimonial
            </Link>
          </ul>
          <button className="btn-contact">
            <Link smooth={true} to="form" duration={1000}>
              Contact me
            </Link>
          </button>
        </div>
        <hr />
      </nav>
    </div>
  );
};

export default Navbar;
