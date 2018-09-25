import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";

class CryptoDetailView extends Component {
  state = { percantage_change: "" };
  componentDidMount() {
    console.log(this.props.details.quote["EUR"]);
  }

  cleanAmount = price => {
    let clean_amount = parseFloat(Math.round(price * 100) / 100).toFixed(2);
    return clean_amount;
  };

  getChangeClasses = percentage => {
    let classes = "";
    let clean_percantage = parseFloat(
      Math.round(percentage * 100) / 100
    ).toFixed(2);
    classes += clean_percantage > 0 ? "arrow-up" : "arrow-down";
    return classes;
  };

  render() {
    return (
      <Container>
        <div className="crytpo-modal">
          <div className="price">
            <Row>
              <Col xs="6">
                <img width="40%" src={this.props.logo} alt="img" />
              </Col>
              <Col xs="6">
                <div>Price </div>
                <div>
                  € {this.cleanAmount(this.props.details.quote["EUR"].price)}
                </div>
              </Col>
            </Row>
          </div>

          <div className="percantage-changes">
            <Row>
              <p>1h</p>
              <Col className="change">
                <div
                  className={this.getChangeClasses(
                    this.props.details.quote["EUR"].percent_change_1h
                  )}
                >
                  {this.cleanAmount(
                    this.props.details.quote["EUR"].percent_change_1h
                  )}
                  %
                </div>
              </Col>
              <p>24h</p>
              <Col className="change">
                <div
                  className={this.getChangeClasses(
                    this.props.details.quote["EUR"].percent_change_24h
                  )}
                >
                  {this.cleanAmount(
                    this.props.details.quote["EUR"].percent_change_24h
                  )}
                  %
                </div>
              </Col>
              <p>7d</p>
              <Col className="change">
                <div
                  className={this.getChangeClasses(
                    this.props.details.quote["EUR"].percent_change_7d
                  )}
                >
                  {this.cleanAmount(
                    this.props.details.quote["EUR"].percent_change_7d
                  )}
                  %
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    );
  }
}

export default CryptoDetailView;
