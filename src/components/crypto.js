import React, { Component } from "react";

import CryptoDetailView from "./cryptoDetailView";

class Crypto extends Component {
  render() {
    return (
      <div className="App">
        <div id="crypto-container">
          <span className="left">{this.props.crypto.name}</span>
          <span className="right">{this.props.crypto.symbol}</span>
          <CryptoDetailView />
        </div>
      </div>
    );
  }
}

export default Crypto;
