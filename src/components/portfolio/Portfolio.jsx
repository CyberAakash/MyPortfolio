import { React, useState, useEffect } from "react";

import "./Portfolio.css";

// PORTFOLIO-IMAGEs
// import IMG1 from "../../assets/portfolio1.jpg";
// import IMG2 from "../../assets/portfolio2.jpg";
// import IMG3 from "../../assets/portfolio3.jpg";
// import IMG4 from "../../assets/portfolio4.jpg";
// import IMG5 from "../../assets/portfolio5.png";
// import IMG6 from "../../assets/portfolio6.jpg";
import { portfolioItems } from "../../contansts/link.js";

// ICONS
import { GoLogoGithub } from "react-icons/go";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {portfolioItems.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="image1" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn btn-primary" target="_blank">
                  {/* <GoLogoGithub /> */}
                  Github
                </a>
                <a href={demo} className="btn" target="_blank">
                  Coming soon...
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;

// PORTFOLIO-TEMP
{
  /* PORTFOLIO STARTS */
}
{
  /* <article className="portfolio__item">
  <div className="portfolio__item-image">
    <img src={IMG1} alt="image1" />
  </div>
  <h3>Sint ullamco aliqua reprehenderit.</h3>
  <div className="portfolio__item-cta">
    <a
      href="https://www.github.com/cyberaakash"
      className="btn"
      target="_blank"
    >
      Github
    </a>
    <a href="#" className="btn btn-primary" target="_blank">
      Live Demo
    </a>
  </div>
</article>; */
}
{
  /* PORTFOLIO ENDS */
}
