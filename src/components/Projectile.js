import React, { Component } from "react";

class Projectile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      y: 0,
      coef: Math.random() * 0.3 * (Math.random() < 0.5 ? -1 : 1),
      active: true
    };
    this.myRef = React.createRef();
    this.speed = 20;
  }

  fallsDown = () => {
    const { y } = this.state;
    // const computedStyle = window.getComputedStyle(this.myRef.current);
    if (y < 50) {
      this.setState({ y: y + 0.5 });
    } else {
      this.setState({ active: false });
    }
  };

  componentDidMount() {
    this.interval = setInterval(this.fallsDown, this.speed);
  }

  componentDidUpdate() {
    if (!this.state.active) {
      this.props.onDelete(this.props.id);
      window.clearTimeout(this.interval);
    }
  }

  render() {
    const { y, coef } = this.state;
    const { projectile } = this.props;
    const size = 40 * (1 + (0.89 * y) / 50);
    return (
      <img
        ref={this.myRef}
        src={projectile}
        style={{
          ...styles.projectile,
          width: size,
          top: y + "%",
          left: 50 + y * coef + "%"
        }}
        alt=""
      />
    );
  }
}

const styles = {
  projectile: {
    // borderRadius: "50%",
    // backgroundColor: "red",
    // backgroundImage: Doughnut,
    // backgroundSize: "cover",
    position: "absolute",
    filter: "drop-shadow(0 30px 2px rgba(0, 0, 0, 0.3))"
  }
};

export default Projectile;
