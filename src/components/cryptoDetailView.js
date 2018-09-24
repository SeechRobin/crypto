import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";

class CryptoDetailView extends Component {
  componentDidMount() {
    console.log(this.props.details.quote["EUR"]);
  }

  cleanAmount = price => {
    let clean_amount = parseFloat(Math.round(price * 100) / 100).toFixed(2);
    return clean_amount;
  };
  render() {
    return (
      <Container>
        <Row>
          <Col xs="6">
            <img width="30%" src={this.props.logo} alt="img" />
          </Col>
          <Col xs="6">
            <div>Current Price </div>
            <div>
              €{this.cleanAmount(this.props.details.quote["EUR"].price)}
            </div>
          </Col>
        </Row>

        <div>Change </div>
        <Row>
          <Col xs="6" />
          <Col xs="6">
            <div />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CryptoDetailView;
