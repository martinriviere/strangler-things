import React, { Component } from "react";
import Doughnut from "../Design/Projectiles/doughnut.png";
import Duff from "../Design/Projectiles/duff.png";
import Brocoli from "../Design/Projectiles/brocoli.png";
import Flanders from "../Design/Projectiles/flanders.png";

class Projectile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      y: "16.2%",
      display: "block"
    };
    this.myRef = React.createRef();
    this.speed = 20;
  }

  fallsDown = () => {
    const { y } = this.state;
    // console.log(y);
    if (y < "62%") {
      this.setState({ y: `${parseFloat(y.slice(0, y.length - 1)) + 0.5}%` });
    } else {
      this.setState({ display: "none" });
    }
  };

  componentDidMount() {
    this.interval = setInterval(this.fallsDown, this.speed);
  }

  componentDidUpdate() {
    if (this.state.display === "none") {
      this.props.onDelete(this.props.id);
      window.clearTimeout(this.interval);
    }
  }

  render() {
    const { y, display } = this.state;
    const { projectile } = this.props;
    const size =
      40 *
      (1 + (0.89 * (parseInt(y.slice(0, y.length - 1)) - 16.2)) / (62 - 16.2));
    return (
      <img
        ref={this.myRef}
        src={projectile}
        style={{
          ...styles.projectile,
          width: size,
          marginLeft: -size / 2,
          top: y,
          display: display
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
    left: "50%"
  }
};

export default Projectile;
