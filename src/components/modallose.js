import React, { Component } from "react";
import "./modal.css";
import { Link } from "react-router-dom";
// import Modal from "react-responsive-modal";

class ModalLose extends Component {
  
  render() {
    return (
      <div id="containerLose">
        <div id="ModalLose">
          <p>YOU LOSE !!</p>
          <img 
            src="http://giphygifs.s3.amazonaws.com/media/A6aHBCFqlE0Rq/giphy.gif"
            alt="winner"
          />
          <p><Link to="/level/2"><p>Continue</p></Link></p>
          <p><Link to="/">Back to title</Link></p>
        </div>
      </div>
    );
  }
}

export default ModalLose;


// class ModalLose extends Component {
//   state = {
//     open: false
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
//           <p>YOU LOSE ! !</p>
//               <img
//                 src="https://media.giphy.com/media/a93jwI0wkWTQs/giphy.gif"
//                 alt="loser"
//               />
//               <p>Continue</p>
//               <p>Back to title</p>
//           </div>
//         </Modal>
//       </div>
//     );
//   }
// }

// export default ModalLose;