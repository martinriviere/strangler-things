import React, { Component } from "react";

const counterStyle = {
  fontSize: "30px",
  fontFamily: "SimpsonFont",
  color: "white",
  textShadow: "0 0 10px #000000"}
  ;

class Counter extends Component {
  constructor(count) {
    super(count);
    this.state = {
    };
  }

  render() {
    return (
      <div
        className="counter-container"
        style={{
          flex: 1,
          flexDirection: "column",
          position: "absolute",
          right: "5vw",
          top: "20vh"
        }}
      >
        <h3 style={counterStyle}>{this.props.count}</h3>
      </div>
    );
  }
}

export default Counter;
