import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import manOnTable from '../../Assets/manOnTable.svg';
import fullStack from '../../Assets/Fullstack.svg';
import TechStack from '../About/Techstack';
import Techstack2 from "../About/Techstack2";
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              WHAT <span className="purple"> I </span> DO?
            </h1>
            <Techstack2/>
            <p className="home-about-body">
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, Javascript and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also {" "}
                <b className="purple">
                  Currently learning ML.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple"> React.js </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={manOnTable} className="img-fluid imgtable" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              FULL <span className="purple"> STACK </span> DEVELOPMENT
            </h1>
            <TechStack/>
            <p className="home-about-body">
               <i>
                <b className="purple">   ⚡Building resposive website front end using React </b>
              </i>
              <br />
              <i>
                <b className="purple">⚡ Creating application backend in Node & Express  </b>
              </i>
              <br/>
              <i>
                <b className="purple">⚡ Creating database using MongoDB  </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={fullStack} className="img-fluid imgtable" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
