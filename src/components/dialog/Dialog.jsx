import React from 'react';
import Modal from './Modal';
import { connect } from 'react-redux';

class Dialog extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
      return (
        <Modal {...this.props.option}>
          {this.props.children}
        </Modal>
      );
    }
}

const addModal = (option) => {
  return {
    type: 'MAXIMIZE_MODAL',
    option
  }
}


export const dialog = function(options){

}

export default Dialog;
