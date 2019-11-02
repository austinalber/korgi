import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
// import { PromiseProvider } from "mongoose";

// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function FriendList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function FriendListItem(props) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={props.image} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>Name: {props.name}</h3>
            <h2>Email: {props.email}</h2>
            <a rel="noreferrer noopener" target="_blank" href={props.image}>
              Discover More!
            </a>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
