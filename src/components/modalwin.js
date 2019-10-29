import React, { Component } from "react";
import "./modal.css";
// import { Route, Link } from "react-router-dom";
// import Modal from "react-responsive-modal";

class ModalWin extends Component {

  render() {
    return (
      <div id="containerWin">
        <div id="ModalWin">
          <p>YOU WIN !!</p>
          <img 
            src="http://giphygifs.s3.amazonaws.com/media/jUwpNzg9IcyrK/giphy.gif"
            alt="winner"
          />
          <p>Continue</p>
          <p>Back to title</p>
          {/* <Link to="/level/2"><p>Continue</p></Link>
          <Route path="/level/2" exact component={LevelTwo} />
          <Link to="/"><p>Back to title</p></Link>
          <Route path="/" exact component={Home} /> */}
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
