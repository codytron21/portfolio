import React from "react";
import "./portfolio.css";
import PortfolioImg from "../../assets/sample.jpeg";
import { data } from "./portfolioData";
const Portfolio = () => {
  return (
    <section className="portfolio">
      <h5>My Recent Work</h5>
      <h2> Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, github, demo }) => {
          console.log(image);
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={PortfolioImg} alt="portfolio" />
              </div>
              <h3>This is a portfolio item title</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
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
