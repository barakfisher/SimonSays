import React from "react";
import { Card, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CV from "../barakfisher.pdf";
import {
  faEnvelope,
  faPhone,
  faLink,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import "../css/about.css";
const About = () => {
  return (
    <Container className="about-container p-16">
      <Card className="my-card">
        <div className="">
          <h1>Barak Fisher</h1>
          <h4>Full Stack Web Developer</h4>
        </div>
        <div className="contact-info">
          <ul>
            <li>
              <FontAwesomeIcon
                className="list-icon"
                color={"#666"}
                icon={faPhone}
              />
              Phone: 054-2135101
            </li>
            <li>
              <FontAwesomeIcon
                className="list-icon"
                color={"#666"}
                icon={faEnvelope}
              />
              E-Mail: barakfisher@gmail.com
            </li>
            <li>
              <FontAwesomeIcon
                className="list-icon"
                color={"#666"}
                icon={faLink}
              />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/barak-fisher-ab305883/"
              >
                https://www.linkedin.com/in/barak-fisher-ab305883/
              </a>
            </li>
            <li>
              <FontAwesomeIcon
                className="list-icon"
                color={"#666"}
                icon={faFilePdf}
              />
              <a href={CV} style={{"marginLeft":"4px"}} alt="CV_Link" download>
              Download BarakFisher_CV.pdf
              </a>
            </li>
          </ul>
        </div>
      </Card>
    </Container>
  );
};
export default About;
