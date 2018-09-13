import React, { Component } from "react";
import Crypto from "./crypto";

import axios from "axios";

import apiManager from "../api/apiManager";

class Cryptos extends Component {
  state = { cryptos: [] };

  constructor(props) {
    super(props);

    this.api = new apiManager();
  }

  componentDidMount() {
    this.api.getAllLatestCryptos().then(res => {
      this.setState({ cryptos: res.data.data });
    });
  }

  render() {
    return (
      <div>
        {this.state.cryptos.map(crypto => (
          <Crypto key={crypto.id} crypto={crypto} />
        ))}
      </div>
    );
  }
}
export default Cryptos;
