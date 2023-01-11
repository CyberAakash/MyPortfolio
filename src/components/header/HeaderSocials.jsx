import React from "react";

// ICONS
import {BsLinkedin} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import {BsMedium} from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/aakash-t-3a482620b/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/CyberAakash" target="_blank">
        <BsGithub />
      </a>
      <a href="https://medium.com/@aakashvnth" target="_blank">
        <BsMedium />
      </a>
    </div>
  );
};

export default HeaderSocials;
