import React, { Component } from "react";

class Projectile extends Component {
  constructor() {
    super();
    this.state = {
      y: 20,
      display: "block"
    };
  }

  fallsDown = () => {
    this.state.y < 812 - 60
      ? this.setState({ y: this.state.y + 10 })
      : this.setState({ display: "none" });
    setTimeout(this.fallsDown, 20);
  };

  componentDidMount() {
    this.fallsDown();
  }

  render() {
    const { y, display } = this.state;
    return (
      <div style={{ ...styles.projectile, top: y, display: display }}></div>
    );
  }
}

const styles = {
  projectile: {
    height: 50,
    width: 50,
    borderRadius: "50%",
    backgroundColor: "red",
    position: "absolute",
    left: "50%",
    marginLeft: -25
  }
};

export default Projectile;
