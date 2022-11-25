import React,{useEffect} from "react";
import "./Header-content.css";
import image1 from "../../component/img/github.png";
import image2 from "../img/linkedin.png";
import image3 from "../img/instagram.png";
import image4 from "../img/professional-development-programmer-working-programming-website-software-coding-technology-writing-codes-data-code-132331729.jpg";
import img1 from "../img/Vector1.png";
import img2 from "../img/Vector2.png";
import img3 from "../img/boy.png";
import img4 from "../img/eg.jpg";
import AOS from 'aos'
import 'aos/dist/aos.css'
import Marquee from "react-fast-marquee";


const Header = () => {
  useEffect(() => {
    AOS.init({duration: 1000})
}, []);
  return (
    <div>
    <Marquee pauseOnHover speed={50}>
      <div className="Contactinfo">
      <h2>
      <span>
        Contact Me on <span>  </span>
      </span>
      <span>
        (+256-783-334-207) <span>&</span> (+256-784-573-131) 
      </span>
      <span> <span>    </span>both on WhatsApp and Voice Call</span> 
      </h2>
      </div>
    </Marquee>
    <div className="notification">
    </div>
      <div className="h-content" id="header">
        <div className="h-content left">
          <div>
            <span className="greetings" data-aos="zoom-in">Hi! I am </span>
            <span className="n-name" style={{ color: "orange" }} data-aos="zoom-in">
              Okello Emmanuel
            </span>
            <p>
              Full stack developer <br /> good in{" "}
              <span style={{ color: "green", fontWeight: "500" }}>
                React js, Node js
              </span>{" "}
              and <span style={{ color: "green", fontWeight: "500" }}>PHP</span>{" "}
            </p>
          </div>

          <button className="hire">Hire me</button>
          <div className="images">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
          </div>
          <div>
            <img
            data-aos="zoom-in"
              className="content-img"
              style={{ width: "300px", height: "200px" }}
              src={image4}
              alt=""
            />
          </div>
        </div>
        <div className="h-content right">
          <div className="imgs">
            <div>
              <img src={img1} alt="" />
            </div>
            <div>
              <img src={img2} alt="" />
            </div>
          </div>
          <div className="img3">
            <img
              style={{ width: "300px", height: "400px" }}
              src={img3}
              alt=""
            />
          </div>
          <div className="profile">
            <img
            data-aos="zoom-in"
              style={{ width: "150px", height: "170px" }}
              src={img4}
              alt=""
            />
          </div>
          <div className="text">
            <p>Full stack developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
