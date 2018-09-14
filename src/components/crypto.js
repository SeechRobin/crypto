import React, { Component } from "react";

import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap";

import CryptoDetailView from "./cryptoDetailView";

import apiManager from "../api/apiManager";

import store from "./store";

class Crypto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      crypto_metadata: []
    };
    this.api = new apiManager();
    this.store = new store();

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
    console.log(this);
  }

  render() {
    return (
      <div className="crypto-list">
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
                {this.props.crypto.name} {this.store.getMetaData(1)}
              </ModalHeader>
              <ModalBody>
                <CryptoDetailView />
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggle}>
                  Do Something
                </Button>{" "}
                <Button color="secondary" onClick={this.toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}

export default Crypto;
