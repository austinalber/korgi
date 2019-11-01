import React, { Component } from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import API from "../utils/API";

class About extends Component {
  state= {
    results: []
  };

  componentDidMount() {
    API.getUser()
      .then(res => this.setState({ results: res }))
      .catch(err => console.log(err));
    console.log(this.state.results);
  };
  render() {
    return (
      <div>
        <Hero backgroundImage="https://www.iconspng.com/images/contour-map/contour-map.jpg">
          <h1>Korgi</h1>
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
                Yo yo yo yo yo.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;
