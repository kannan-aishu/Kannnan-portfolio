import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kannan G </span>
            from <span className="purple"> Tiruppur, India.</span>
            <br />
            I am currently learning as a Full Stack software developer at Vites
            Technologies with hands-on Live projects.
            <br />
            I have completed (B.com) Bachelor of Commerce in Cherraan's Arts Science College.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading International External Affairs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The first step is to establish that something is possible; then
            probability will occur!"{" "}
          </p>
          <footer className="blockquote-footer">Elon Musk</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
