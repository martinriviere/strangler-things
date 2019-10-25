import React, {Component} from "react";
import Modal from "react-responsive-modal";
import "../index";

class ModalWin extends Component {
  state = {
    open: true
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
        <Modal
          open={open}
          onClose={this.onCloseModal}
          center
          styles={{ overlay: { background: "rgba(0, 0, 0, 0.47)" } }}
        >
          <div id="modalLose">
            <p>YOU WIN ! !</p>
            <br />
            <img
              src="http://giphygifs.s3.amazonaws.com/media/A6aHBCFqlE0Rq/giphy.gif"
              alt="winner"
            />
            <p>Continue</p>
            <p>Back to title</p>
          </div>
        </Modal>
      </div>
    );
  }
}

export default ModalWin;
