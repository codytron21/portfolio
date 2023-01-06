import React from "react";
import "./footer.css";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Rohan Kumar
      </a>
      <ul className="permalinks">
        <li href="#">Home</li>
        <li href="#about">About</li>
        <li href="#experience">Experience</li>
        <li href=""></li>
        <li href="#portfolio">Portfolio</li>
        <li href="#contact">contact</li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/rohan-kumar21/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/codytron21">
          <BsGithub />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Rohan Kumar.</small>
      </div>
    </footer>
  );
};

export default Footer;
