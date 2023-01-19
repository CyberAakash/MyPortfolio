import React from 'react';

import './About.css'

import ME from "../../assets/aakash_3d-blue.png";

// ICONS
import {FaAward} from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About CyberAakash" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>WEB DEVELOPER</h5>
              <small>
                know latest trends and designs/rules.
              </small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>ETHICAL HACKER</h5>
              <small>
                certified redhat administrator.
              </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>BLOCKCHAIN DEVELOPER</h5>
              <small>
                xdc, plugin, ethereum, and bigchainDB
              </small>
            </article>
          </div>

          {/* PARAGRAPH */}
          <p>
            I self trained myself for about 4 years in developing my Web/App
            developing skills and new technological knowledge. I also
            participated in various Hackathons and events across India. One of
            my favourite is working with <a href=''>blockchain</a>. Apart from
            coding, I am a certified <a href=''>Redhat administrator</a>. From my childhood i
            very much interested in hacking stuffs. And also trained myself in
            various editing tools such as <a href="">Figma</a>, <a href="">Blender</a>
          </p>

          {/* CALL BUTTON */}
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About