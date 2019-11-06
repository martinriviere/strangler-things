import React, { Component } from "react";
import CountUp from 'react-countup';

const counterStyle = {
  fontSize: "30px",
  fontFamily: "SimpsonFont",
  color: "white",
  textShadow: "0 0 10px #000000"}
  ;

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.prevCount=0;
  }

  componentDidUpdate() {
    this.prevCount = this.props.count
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
        <CountUp style={counterStyle} start={this.prevCount} end={this.props.count} />
      </div>
    );
  }
}

export default Counter;
