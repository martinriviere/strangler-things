import React, { Component } from "react";

class Projectile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      y: "16.2%",
      display: "block"
    };
    this.myRef = React.createRef();
  }

  fallsDown = () => {
    const { y } = this.state;
    if (y < "62%") {
      this.setState({ y: `${parseInt(y.slice(0, y.length - 1)) + 1}%` });
    } else {
      console.log("hide");
      this.setState({ display: "none" });
    }
  };

  componentDidMount() {
    this.interval = setInterval(this.fallsDown, 20);
  }

  componentDidUpdate() {
    if (this.state.display === "none") {
      this.props.onDelete(this.props.id);
      window.clearTimeout(this.interval);
    }
  }

  render() {
    const { y, display } = this.state;
    return (
      <div
        ref={this.myRef}
        style={{ ...styles.projectile, top: y, display: display }}
      ></div>
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
