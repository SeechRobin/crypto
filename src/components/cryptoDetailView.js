import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardLink,
  CardText,
  CardTitle,
  CardSubtitle
} from "reactstrap";

class CryptoDetailView extends Component {
  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
        </CardBody>
        <img width="10%" src={this.props.details} alt="img" />
        <CardBody>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </CardBody>
      </Card>
    );
  }
}

export default CryptoDetailView;
