import React, { Component } from "react";
import heart from "../Design/Images/pixel-heart-2779422_960_720-1.png";

const heartStyle = {
  backgroundImage: `url(${heart})`,
  width: "4vh",
  height: "4vh",
  backgroundSize: "100% 100%"
};
class HomerLife extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lifeNumber: 5,
      lifeMax: 5
    };
  }
  initializeLifeBar = () => {
    const lifeBarDom = [];
    for (let i = 0; i < this.state.lifeNumber; i++) {
      lifeBarDom.push(<div style={heartStyle} key={i} />);
    }
    return lifeBarDom;
  };
  reduceLife = () => {
    this.state.lifeNumber !== 1
      ? this.setState(state => {
          return { lifeNumber: state.lifeNumber - 1 };
        })
      : alert("You're a loser GAMEOVER"); // Component gameOver!!!!
  };
  addLife = () => {
    this.state.lifeNumber < this.state.lifeMax &&
      this.setState(state => {
        return { lifeNumber: state.lifeNumber + 1 };
      });
  };
  render() {
    return (
      <div
        className="lifeBar"
        style={{
          flex: 1,
          flexDirection: "column",
          position: "absolute",
          left: "30px",
          top: "20px"
        }}
      >
        {this.initializeLifeBar()}
      </div>
    );
  }
}
export default HomerLife;
