import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/bikelife.png";
import projImg2 from "../assets/img/starki.png";
import projImg3 from "../assets/img/calculatrice.jpg";
import projImg4 from "../assets/img/titanic.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import html from "../assets/img/html.svg";
import css from "../assets/img/css.svg";
import js from "../assets/img/js.svg";
import php from "../assets/img/php1.svg";
import mysql from "../assets/img/mysql.svg";
import java from "../assets/img/java.svg";
import python from "../assets/img/python.svg";
import jupytern from "../assets/img/jupytern.svg";

export const Projects = () => {
  const projects = [
    {
      title: "Développement d'un forum en ligne pour une communauté de motard",
      description: "Design & Development",
      imgUrl: projImg1,
      detailedDescription: "Ce projet a duré 4 mois et j'étais en binôme. L'objectif était de créer un site web pour une communauté de fans de moto, en utilisant toutes les connaissances acquises dans les compétences précédentes. J'ai contribué à la réalisation du cahier des charges et à l'élaboration d'une liste d'exigences fonctionnelles et non fonctionnelles. J'ai également conçu une maquette sur Figma avant de coder les pages en HTML, CSS et JavaScript. De plus je me suis chargé du développement du backend en mettant en place certaines fonctionnalités essentiel du site tels que le forum, permettre au utilisateur d’envoyer des messages, de supprimer des messages, de répondre au messages, etc. En outre, j'ai participé à la création d'une base de données sous MySQL, en créant un modèle entité-association. Nous avons utilisé des outils de gestion de projet tels que le diagramme de Gantt et Trello pour bien nous organiser et mener le projet à terme. Pendant ces quatre mois, j'ai amélioré mon organisation du travail et mes aptitudes à travailler en équipe. J'ai su m'adapter à mon binôme pour garantir une bonne communication et un travail collaboratif efficace.  ",
      techLogos: [html, css, js, php, mysql], // Exemple de logos pour React et JavaScript
    },
    {
      title: "Développement d'une caisse enregistreuse pour le Bureau des Etudiants",
      description: "Design & Development",
      imgUrl: projImg2,
      detailedDescription: "Ce projet a duré 3 mois et j'étais en groupe avec 4 autres étudiants. L'objectif était de créer un site web pour un vrai client, le BDE de l'université, en utilisant toutes les connaissances acquises dans les compétences précédentes. J'ai contribué à la réalisation du cahier des charges et à l'élaboration d'une liste d'exigences fonctionnelles et non fonctionnelles. J'ai également conçu une maquette sur Figma avant de coder les pages en HTML, CSS et JavaScript. En outre, j'ai participé à la création d'une base de données sous MySQL, en créant un modèle entité-association. Nous avons utilisé des outils de gestion de projet tels que le diagramme de Gantt et Trello pour bien nous organiser et mener le projet à terme. Pendant ces trois mois, j'ai amélioré mon organisation du travail et mes aptitudes à travailler en équipe. J'ai su m'adapter à chaque membre de l'équipe pour garantir une bonne communication et un travail collaboratif efficace. ",
      techLogos: [html, css, js, php, mysql], // Vous pouvez ajouter les logos appropriés ici
    },
    {
      title: "Développement d'une Calculatrice",
      description: "Developement Java",
      imgUrl: projImg3,
      detailedDescription: "Cette SAE a duré 2 mois et j'étais en binôme. Il y avait deux livrables à rendre pour ce projet, qui consistait à créer une calculatrice en Java. Tout d'abord, nous avons créé un diagramme UML pour représenter la situation, puis nous avons codé en nous basant sur la modélisation effectuée. Le deuxième livrable consistait à ajouter une classe supplémentaire, ce qui a modifié le diagramme UML et la modélisation. Nous avons travaillé sous Linux et avons utilisé Java et Diadiagramme pour les diagrammes UML.",
      techLogos: [java], // Vous pouvez ajouter les logos appropriés ici
    },
    {
      title: "Titanic",
      description: "Analyse de base de donnée",
      imgUrl: projImg4,
      detailedDescription: "Cette SAE était la première de l'année, d'une durée de 2 mois et à réaliser en binôme. Cependant, j'ai rencontré plusieurs problèmes à ce niveau-là. Tout d'abord, mon premier binôme a arrêté la formation, puis mon deuxième binôme n'a pas travaillé, donc j'ai finalement réalisé le projet seul. Le projet consistait à traiter des informations provenant d'une base de données publique, en l'occurrence les données du Titanic. J'ai dû créer une base de données et y insérer les informations des passagers du Titanic. Ensuite, j'ai manipulé cette base de données en effectuant des requêtes SQL et j'ai rendu les livrables sur JupyterNotebook. J'ai utilisé comme outils JupyterNotebook, SQL ainsi que Linux. Cette SAE m'a permis de travailler en autonomie et de m'organiser seul. ",
      techLogos: [mysql, python, jupytern], // Vous pouvez ajouter les logos appropriés ici
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projets Universitaires (SAE)</h2>
            <p>
            Durant mes 3 années, j'ai eu l'occasion de participer à plusieurs projets dans lesquels j'ai mis en œuvre les compétences que j'ai acquises. Voici quelques exemples :
            </p>
            <Row>
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  detailedDescription={project.detailedDescription}
                  imgUrl={project.imgUrl}
                  techLogos={project.techLogos}
                />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"></img>
    </section>
  );
};
