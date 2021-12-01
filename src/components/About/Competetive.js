import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiCodechef } from "react-icons/si";
import { SiHackerrank } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a style={{color:"white"}} href="https://www.codechef.com/users/rajbir21"><SiCodechef /></a>
        <p style={{fontSize:"20px"}}>Codechef</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" >
        <a style={{color:"green"}} href="https://www.hackerrank.com/banerjeerajbir21"><SiHackerrank/></a>
        <p style={{fontSize:"20px",color:"green"}}>Hackerrank</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a style={{color:"red"}}href="https://codeforces.com/profile/Rajbir21"><SiCodeforces /></a>
        <p style={{fontSize:"20px",color:"red"}}>Codeforces</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a style={{color:"yellow"}} href="https://leetcode.com/banerjeerajbir2888/"><SiLeetcode /></a>
        <p style={{fontSize:"20px",color:"yellow"}}>Leetcode</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
