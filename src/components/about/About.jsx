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
              <h5>Experience</h5>
              <small>Duis mollit enim nisi nostrud.</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Experience</h5>
              <small>Duis mollit enim nisi nostrud.</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Experience</h5>
              <small>Duis mollit enim nisi nostrud.</small>
            </article>
          </div>

          {/* PARAGRAPH */}
          <p>Mollit cillum quis esse minim et. Sint ex officia officia fugiat. 
             Dolor aliqua dolor duis nulla. Est eu quis magna aliqua eiusmod elit aliqua consectetur ex consequat id officia minim incididunt.
             Non tempor minim ipsum velit cillum id qui in do deserunt qui ea laboris.
          </p>

          {/* CALL BUTTON */}
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  );
}

export default About