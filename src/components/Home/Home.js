import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/undraw_Developer_activity_re_39tg.svg";
import Home2 from "./Home2";
import Type from "./Type";
import "bootstrap/dist/css/bootstrap.min.css";
import './Home.css'
import Particle from '../Particle';
function Home() {
  return (
    <section>
    <Particle/>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> RAJBIR BANERJEE</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ marginTop:"20px" }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
