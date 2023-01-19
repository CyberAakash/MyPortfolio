import React from 'react';

import "./Footer.css";

// ICONS
import { TiSocialInstagramCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import {TiSocialTwitterCircular} from "react-icons/ti";


const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        CyberSpacia
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Postfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/cyberaakash/">
          <TiSocialInstagramCircular />
        </a>
        <a href="https://www.instagram.com/cyberaakash/">
          <TiSocialLinkedinCircular />
        </a>
        <a href="https://www.instagram.com/cyberaakash/">
          <TiSocialTwitterCircular />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          <em> &copy; CYBERAAKASH private space. All rights reserved</em>
        </small>
      </div>
    </footer>
  );
}

export default Footer