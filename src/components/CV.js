import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import cvImg from '../assets/img/maho.jpg'; // Remplacez par une image de votre choix

const CV = () => {
  return (
    <section className="cv-section" id="cv">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={cvImg} alt="CV Image" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Mon CV</h2>
                  <p>Vous pouvez télécharger mon CV en cliquant sur le bouton ci-dessous.</p>
                  <a href="/CV_TOPAL_MahmutAli.pdf" download className="cv-download-btn">
                    <button type="button">
                      <span>Télécharger CV</span>
                    </button>
                  </a>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default CV;
