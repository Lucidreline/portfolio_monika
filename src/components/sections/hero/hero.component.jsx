import React from 'react';

import './hero.styles.scss';

const Hero = () => (
  <section id="hero">
    <div className="content">
      <h1 className="name">Monika Angel</h1>
      <span className="caption">Software Engineer</span>
      <div className="icon-links-containers">
        <ul className="icon-links-list">
          <li>
            <a
              href="https://github.com/Manikia"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* eslint-disable-next-line */}
              <i className="fab fa-github clickable-color color-hover"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/monika-angel-abb134161/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* eslint-disable-next-line */}
              <i className="fab fa-linkedin clickable-color color-hover"></i>
            </a>
          </li>
          <li>
            <a href="mailto:monikaangel.ma15@gmail.com">
              {/* eslint-disable-next-line */}
              <i className="far fa-envelope  clickable-color color-hover"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Hero;
