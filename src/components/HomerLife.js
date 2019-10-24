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

  }
  initializeLifeBar = () => {
    const lifeBarDom = [];
    for (let i = 0; i < this.props.lifeNumber; i++) {
      lifeBarDom.push(<div style={heartStyle} key={i} />);
    }
    return lifeBarDom;
  };

  render() {
    return (
      <div
        className="lifeBar"
        style={{
          flex: 1,
          flexDirection: "column",
          position: "absolute",
          left: "5vw",
          top: "20vh"
        }}
      >
        {this.initializeLifeBar()}
      </div>
    );
  }
}
export default HomerLife;
