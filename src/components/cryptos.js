import React, { Component } from "react";
import Crypto from "./crypto";

import { Container, Row } from "reactstrap";

import apiManager from "../api/apiManager";
import store from "./store";

import Loader from "react-loader-spinner";

class Cryptos extends Component {
  state = { cryptos: [], currentStartPage: 1, isLoading: true };

  constructor(props) {
    super(props);
    this.api = new apiManager();
    this.store = new store();
    this.handleNextPage = this.handleNextPage.bind(this);
  }

  componentDidMount() {
    this.api.getAllLatestCryptos(this.state.currentStartPage, 20).then(res => {
      this.setState({ cryptos: res.data.data, isLoading: false });
    });
  }

  handlePreviousPage = () => {
    console.log(this.state.currentStartPage);
    let prevPosition = this.state.currentStartPage - 10;

    if (prevPosition > 0) {
      this.setState({ currentStartPage: prevPosition, isLoading: true });
      this.api.getAllLatestCryptos(prevPosition, 20).then(res => {
        this.setState({ cryptos: res.data.data, isLoading: false });
      });
    }
  };

  handleNextPage = () => {
    console.log(this.state.currentStartPage);
    let nextPosition = this.state.currentStartPage + 10;
    this.setState({ currentStartPage: nextPosition, isLoading: true });
    this.api.getAllLatestCryptos(nextPosition, 20).then(res => {
      this.setState({ cryptos: res.data.data, isLoading: false });
    });
  };

  renderLoading() {
    return (
      <div className="loading-spinner">
        <Loader type="ThreeDots" color="#00BFFF" height="250" width="250" />
      </div>
    );
  }

  render() {
    if (this.state.isLoading) {
      return this.renderLoading();
    } else {
      return (
        <div>
          <Container>
            <Row>
              {this.state.cryptos.map(crypto => (
                <Crypto key={crypto.id} crypto={crypto} />
              ))}
            </Row>

            <div className="pagination-buttons">
              <button onClick={this.handlePreviousPage} className="button">
                Prev
              </button>
              <button onClick={this.handleNextPage} className="button">
                Next
              </button>
            </div>
          </Container>
        </div>
      );
    }
  }
}
export default Cryptos;
