import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import laptopImg from "../../Assets/undraw_Code_thinking_re_gka2.svg";
import Toolstack from "./Competetive";
import Education from "../Container/education/Education";
import Cardlist from "./CertificationList";
import "bootstrap/dist/css/bootstrap.min.css";
import './styles.css/About.css';
import Particle from '../Particle'
//import Certifications from '../Container/certification/Certification'
function About() {
  return (
    <section>
    <Particle/>
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
        <Col
            md={6}
            style={{ paddingTop: "120px", paddingBottom: "20px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
          <Col
            md={6}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
               <strong className="purple">EDUCATION</strong>
            </h1>
            <h1 className="project-heading">
           Competitive<strong className="purple"> Profile's</strong>
        </h1>
            <Toolstack />
          </Col>
          
        </Row>
        <h1 className="project-heading">
           College<strong className="purple"> Degree</strong>
        </h1>

        <Education/> 
        <Cardlist/>
      </Container>
    </Container>
    </section>
  );
}

export default About;
