import React, { Component } from "react";
import "./modal.css";
import { Link } from "react-router-dom";
// import Modal from "react-responsive-modal";

class ModalWin extends Component {
  render() {
    return (
      <div className="container">
        <div id="ModalWin">
          <p>YOU WIN !!</p>
          <img
            src="http://giphygifs.s3.amazonaws.com/media/jUwpNzg9IcyrK/giphy.gif"
            alt="winner"
          />
          <p onClick={this.props.initializeGame}>Continue</p>
          <p>
            <Link to="/">Back to title</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default ModalWin;

// class ModalWin extends Component {
//   state = {
//     open: true
//   };

//   onOpenModal = () => {
//     this.setState({ open: true });
//   };

//   onCloseModal = () => {
//     this.setState({ open: false });
//   };

//   render() {
//     const { open } = this.state;
//     return (
//       <div className="modal-div">
//         <button onClick={this.onOpenModal}>Open modal</button>
//         <Modal
//           open={open}
//           onClose={this.onCloseModal}
//           center
//           styles={{ overlay: { background: "rgba(0, 0, 0, 0.47)" } }}
//         >
//           <div id="modalLose">
//           <p>YOU WIN ! !</p>
//             <img
//               src="http://giphygifs.s3.amazonaws.com/media/A6aHBCFqlE0Rq/giphy.gif"
//               alt="winner"
//             />
//             <p>Continue</p>
//             <p>Back to title</p>
//           </div>
//         </Modal>
//       </div>
//     );
//   }
// }

// export default ModalWin;
