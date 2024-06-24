import React, { useState } from "react";
import { Col, Button, Modal, Image } from "react-bootstrap";

export const ProjectCard = ({ title, description, detailedDescription, imgUrl, techLogos }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => setShowModal(!showModal);

  return (
    <>
      <Col size={12} sm={6} md={4}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} className="proj-img" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span style={{ marginBottom: '10px', display: 'block' }}>{description}</span>
            <Button variant="primary" onClick={handleModal} style={{ marginTop: '10px' }}>
              Voir les détails
            </Button>
          </div>
        </div>
      </Col>
      
      <Modal show={showModal} onHide={handleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Détails du Projet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{ color: 'black' }}>{detailedDescription}</p>
          <div className="tech-logos">
            {techLogos.map((logo, index) => (
              <Image key={index} src={logo} alt={`Logo ${index}`} style={{ width: '50px', marginRight: '10px', marginBottom: '10px' }} />
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModal}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
