import React from 'react';
import Modal from 'react-responsive-modal';
import '../index'

class ModalWin extends React.Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div className="modal-div">
        <button onClick={this.onOpenModal}>Open modal</button>
        <Modal open={open} onClose={this.onCloseModal} center styles={{ overlay: { background: "rgba(0, 0, 0, 0.47)" } }}>
        <div id="modalWin">  
          <p>YOU WIN ! !</p><br/>
          <p>Continue</p>
          <p>Back to title</p>
        </div> 
        </Modal>
      </div>
    );
  }
}

export default ModalWin;