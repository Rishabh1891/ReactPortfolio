import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiStackoverflow,
  SiVisualstudiocode,
  SiW3C,
  SiNetlify,
  SiCloudflare,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiStackoverflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiW3C />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCloudflare />
      </Col>
    </Row>
  );
}

export default Toolstack;
