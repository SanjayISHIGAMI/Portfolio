import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sanjay Kumar Mohanty </span>
            from <span className="purple"> Puri, India.</span>
            <br />
            I am currently pursuing a PhD in Computational Biology at IIIT-Delhi, India.
            <br />
            I have hold an Masters (M.Sc.) in Bioinformatics from Central University of South Bihar, India.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
            <li className="about-activity">
              <ImPointRight /> Going through latest Mangas and Animes
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Harnessing data to drive discoveries that matter!"{" "}
          </p>
          <footer className="blockquote-footer">Sanjay</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
