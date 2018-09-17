import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";

import Cryptos from "./cryptos";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="main-heading"> Latest</h1>
          </Container>
        </Jumbotron>
        <Cryptos />
      </div>
    );
  }
}

export default Home;
