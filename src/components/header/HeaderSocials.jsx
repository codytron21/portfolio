import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/rohan-kumar21/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/codytron21" target="_blank">
        <FaGithub />
      </a>
      <a href="" target="_blank"></a>
    </div>
  );
};

export default HeaderSocials;
