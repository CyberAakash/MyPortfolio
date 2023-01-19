import React from "react";

import "./Services.css";

// ICONS
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container service__container">
        {/* START OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <span>3D Design</span> : providing a 3D web design for your business ideas along with customized 3D design.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <span>Static Design</span> : simple and static web ux/ui for responsive control to the customers.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <span>Transparent Design</span> : which is more popular in recent years providing better ux/ui experience to the customers.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        {/* START OF WEB DEVELOPMENT */}
        <article className="service cen scale-105">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <span>Frontend Development</span> : Create beautiful and
                responive web for your next project.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <span>Backend Development</span> : Connect a secure and fast
                backend for your business websites
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <span>SEO ranking and analytics</span> : SEO ranking and
                analytics which is crucial for ranking your website on the
                internet
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <span>Low code web Development</span> : for low cost using
                website builder such as blogspot, w3schools, mailchimp, wix
                etc..
              </p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}

        {/* START OF CONTENT CREATION */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <span>Tech Content</span> : Technolgy had been imroving day by day which essentially attract the people..
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <span>SRS/Research paper</span> : which is more popular for many engineers to showcase their talent.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <span>Other Sections</span> : any platform or section which is going trend or interestingly viral.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
