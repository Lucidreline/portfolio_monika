import React from 'react';
import './hero.styles.scss';
import WAVES from 'vanta/dist/vanta.waves.min';

class Hero extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }

  componentDidMount() {
    this.vantaEffect = WAVES({
      el: this.vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x1f1f1f,
      shininess: 14.0,
      waveHeight: 21.0,
      waveSpeed: 0.25,
      zoom: 0.88,
    });
    // to adjust settings: https://www.vantajs.com/?effect=waves#(backgroundAlpha:1,color:2039583,gyroControls:!f,minHeight:200,minWidth:200,mouseControls:!t,scale:1,scaleMobile:1,shininess:14,touchControls:!t,waveHeight:21,waveSpeed:0.25,zoom:0.8816376402352384)
  }

  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }

  render() {
    return (
      <section id="hero" ref={this.vantaRef}>
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
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/monika-angel-abb134161/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* eslint-disable-next-line */}
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="mailto:monikaangel.ma15@gmail.com">
                  {/* eslint-disable-next-line */}
                  <i className="far fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
