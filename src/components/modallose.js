import React, {Component} from 'react';
import Modal from 'react-responsive-modal';
import '../index'

class ModalLose extends Component {
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
        <Modal open={open} onClose={this.onCloseModal} center styles={{ overlay: { background: "rgba(0, 0, 0, 0.47)" } }}>
        <div id="modalLose">  
          <p>YOU LOSE ! !</p><br/>
          <img src='https://media.giphy.com/media/a93jwI0wkWTQs/giphy.gif' />
          <p>Continue</p>
          <p>Back to title</p>
        </div> 
        </Modal>
      </div>
    );
  }
}

export default ModalLose;