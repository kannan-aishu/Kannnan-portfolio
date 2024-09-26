import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png.png";

import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Bliss Vista"
              description="If you're looking to clone or recreate a layout or content from a site like W3Schools, the process generally involves analyzing the structure and style of the desired component and then recreating it with your own HTML, CSS."
              ghLink="https://github.com/kannan-aishu/test"
              demoLink="https://kannan-aishu.github.io/test/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Educational Web App"
              description="I developed a website adding few templates for my client using HTML, CSS and JavaScript. Purchased domain and hosted it successfully. You can click the Live Demo button to visit the live Domain."
              ghLink="https://github.com/kannan-aishu/CEA-Website-main"
              demoLink="https://kannan-aishu.github.io/CEA-Website-main/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Portfolio"
              description="Created my latest portfolio web app using React Js. You are already inside my web app and it is live ASAP!"
              ghLink="https://github.com/kannan-aishu/kannan-portfolio"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
