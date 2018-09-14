import React, { Component } from "react";
import Crypto from "./crypto";

import { Jumbotron } from "reactstrap";

import apiManager from "../api/apiManager";
import store from "./store";

class Cryptos extends Component {
  state = { cryptos: [] };

  constructor(props) {
    super(props);
    this.api = new apiManager();
    this.store = new store();
  }

  componentDidMount() {
    this.api.getAllLatestCryptos().then(res => {
      this.setState({ cryptos: res.data.data });
      this.store.storeMetaData(this.state.cryptos.length); // length of results to cache the equivalent size
    });
  }

  render() {
    return (
      <div>
        <Jumbotron>Latest</Jumbotron>
        {this.state.cryptos.map(crypto => (
          <Crypto key={crypto.id} crypto={crypto} />
        ))}
      </div>
    );
  }
}
export default Cryptos;
