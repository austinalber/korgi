import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
// import API from "../utils/API";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://www.iconspng.com/images/contour-map/contour-map.jpg">
        <h1 style={{color:'#FFD402', fontWeight: '700', letterSpacing: '1.25px'}}>Korgi</h1>
        <h2>Though she be but little, she is fearless</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
