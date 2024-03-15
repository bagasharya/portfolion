import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import pp from "../Assets/paspo.jpg";

const Home = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h4>Hello, I'm</h4>
          <h2>Bagas</h2>

        </Col>
        <Col>
          <Image src={pp} rounded width={200} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
