import React, { Component } from "react";
import CountUp from "react-countup";
import "../App.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.prevCount = 0;
  }

  componentDidUpdate() {
    this.prevCount = this.props.count;
  }

  render() {
    return (
      <div className="counter-container">
        <CountUp
          className="counter-display"
          start={this.prevCount}
          end={this.props.count}
        />
        <p>Score</p>
      </div>
    );
  }
}

export default Counter;
