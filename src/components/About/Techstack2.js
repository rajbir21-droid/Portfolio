import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiPython } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
function Techstack2() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "5px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
    </Row>
  );
}

export default Techstack2;
