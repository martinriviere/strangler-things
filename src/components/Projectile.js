import React, { Component } from "react";
import "../App.css";

class Projectile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      y: 0,
      x: 50,
      size: 40,
      coef: Math.random() * 3 * (Math.random() < 0.5 ? -1 : 1),
      active: true,
      isInSwipeZone: false
    };
    this.myRef = React.createRef();
    this.speed = 100;
  }

  fallsDown = () => {
    const { y, coef, x, size, isInSwipeZone } = this.state;
    const step = this.speed / Math.sqrt(1 + coef * coef) / 30;
    const computedSize = (size / window.innerWidth) * 100;
    if (y < 100) {
      if (x + computedSize > 0.31 * y + 70 || x < -0.31 * y + 30) {
        this.setState({
          y: y + step,
          x: x + step * -coef,
          size: 40 * (1 + (0.89 * y) / 50),
          coef: -coef
        });
      } else
        this.setState({
          y: y + step,
          x: x + step * coef,
          size: 40 * (1 + (0.89 * y) / 50)
        });
    } else {
      this.setState({ active: false });
    }
    if (y > 40 && y < 90) {
      this.props.addProjectileToSwipeZone(this.props.projectile);
      !isInSwipeZone && this.setState({ isInSwipeZone: true });
      // this.props.removeRemainingProjectile();
      if (y < 50 || y > 80) {
        this.props.projectile.coeff = 0.33;
      } else if (y < 60 || y > 70) {
        this.props.projectile.coeff = 0.66;
      } else {
        this.props.projectile.coeff = 1;
      }
    }
    if (y > 90 && isInSwipeZone) {
      this.props.reduceLife();
      this.props.removeProjectileFromSwipeZone(this.props.projectile.id);
      this.setState({ isInSwipeZone: false });
    }
  };

  componentDidMount() {
    setTimeout(this.launchGame, 500);
  }

  launchGame = () => {
    this.interval = setInterval(this.fallsDown, this.speed);
  };

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  componentDidUpdate() {
    if (!this.state.active) {
      this.props.onDelete(this.props.projectile.id);
      window.clearInterval(this.interval);
    }
    if (this.props.pause) window.clearInterval(this.interval);
    if (this.props.resume) this.launchGame();
  }

  render() {
    const { y, x, size } = this.state;
    const { projectile } = this.props;
    return (
      <img
        ref={this.myRef}
        src={projectile.type.image}
        style={{
          ...styles.projectile,
          width: size,
          top: y + "%",
          left: x + "%",
          transition: `all linear ${this.speed}ms`
        }}
        alt=""
        className="projectile"
      />
    );
  }
}

const styles = {
  projectile: {
    position: "absolute",
    filter: "drop-shadow(-20px 30px 4px rgba(0, 0, 0, 0.3))",
    zIndex: -2
  }
};

export default Projectile;
