import React, { Component } from "react";

import { Modal, ModalBody, ModalHeader, Col } from "reactstrap";

import CryptoDetailView from "./cryptoDetailView";

import apiManager from "../api/apiManager";

import store from "./store";

class Crypto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      crypto_metadata: [],
      logo: ""
    };
    this.api = new apiManager();
    this.store = new store();

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });

    if (!this.state.modal) {
      this.api.getCryptoMetaData(this.props.crypto.id).then(res => {
        let meta_array = Object.values(res.data.data);
        this.setState({ logo: meta_array[0].logo });
      });
    }

    // this.setState({ logo: this.store.getMetaData(this.props.crypto.id) });
  }

  render() {
    return (
      <Col xs="6">
        <div>
          <div id="crypto-container" onClick={this.toggle}>
            <span className="left">{this.props.crypto.name}</span>
            <span className="right">{this.props.crypto.symbol}</span>
          </div>

          <div>
            <div>
              <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
                className={this.props.className}
              >
                <ModalHeader toggle={this.toggle}>
                  {this.props.crypto.name}
                </ModalHeader>
                <ModalBody>
                  <CryptoDetailView details={this.state.logo} />
                </ModalBody>
              </Modal>
            </div>
          </div>
        </div>
      </Col>
    );
  }
}

export default Crypto;
