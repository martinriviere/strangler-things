import React, { Component } from "react";

class SwipeDetection extends Component {
  constructor(props) {
    super(props);
    this.startPosition = null;
  }

  handleTouch = event => {
    const endPosition = event.changedTouches[0].screenX;
    const positionChange = endPosition - this.startPosition;
    if (positionChange < -30) {
      this.props.handleSwipe("left");
    } else if (positionChange > 30) {
      this.props.handleSwipe("right");
    } else {
      this.props.handleSwipe("touch");
    }
  };

  render() {
    const boxStyle = {
      width: "100vw",
      height: "100vh",
      position: "absolute",
      top: 0,
      zIndex: 1021
    };

    return (
      <div
        style={boxStyle}
        onTouchStart={event =>
          (this.startPosition = event.changedTouches["0"].screenX)
        }
        onTouchEnd={this.handleTouch}
      ></div>
    );
  }
}

export default SwipeDetection;
