import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/img/logo3.png'; // Remplacez par le chemin vers votre logo
import navIcon1 from '../assets/img/nav-icon1.svg'; // Remplacez par le chemin vers votre première icône sociale
import navIcon2 from '../assets/img/nav-icon2.svg'; // Remplacez par le chemin vers votre deuxième icône sociale
import navIcon3 from '../assets/img/nav-icon3.svg'; // Remplacez par le chemin vers votre troisième icône sociale

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={4}>
            <img src={logo} alt="Logo" className="footer-logo" />
          </Col>
          <Col size={12} sm={4} className="text-center">
            <ul className="footer-nav">
              <li><a href="#home">Acuueil</a></li>
              <li><a href="#skills">Compétences</a></li>
              <li><a href="#projet">projets</a></li>
              <li><a href="#cv">CV</a></li>
            </ul>
          </Col>
          <Col size={12} sm={4} className="text-end"> {/* Utiliser `text-end` pour aligner à droite */}
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/mahmut-ali-topal-398741258/"><img src={navIcon1} alt="Facebook Icon" /></a>
              <a href="https://github.com/TopalMahmutAli/"><img src={navIcon2} alt="Twitter Icon" /></a>
              
            </div>
            
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
