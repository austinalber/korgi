import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import FriendCardBtn from "../FriendCardBtn"
// import { PromiseProvider } from "mongoose";

// Exporting both FriendList and FriendListItem from this file

// FriendList renders a bootstrap list item
export function FriendList({ children }) {
  return 
  // <ul className="list-group">{children}</ul>;
}

// FriendListItem renders a bootstrap list item containing data from the recipe api call
export function FriendListItem(props) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={props.userImage} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>Name: {props.name}</h3>
            <h2>Email: {props.email}</h2>
            <a rel="noreferrer noopener" target="_blank" href={props.userImage}>
              Discover More!
            </a>
            <FriendCardBtn 
            
            onClick={props.handleBtnBlick}
            data-value='pick' />

          </Col>
        </Row>
      </Container>
    </li>
  );
}
