import React, { Component } from "react";
import bart from "../Design/Personnages/bart-lance-pierres.png";
import homer from "../Design/Personnages/homer-dos1.png";
import homerRight from "../Design/Personnages/homer-dos1-right.png";
import homerLeft from "../Design/Personnages/homer-dos1-left.png";
import homerAvoid from "../Design/Personnages/homer-dos1-avoid.png";

const charactersStyle = {
  position: "absolute",
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat"
};
const bartStyle = {
  height: "20vh",
  top: "1vh",
  zIndex: -3
};
const homerStyle = {
  bottom: "-5vh",
  height: "30vh",
  zIndex: -1
};
class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movement: "none"
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { movement } = this.props;
    if (movement !== prevProps.movement && movement) {
      console.log("update");
      this.setState({ movement: movement });
    }
    if (prevState.movement !== "none") {
      setTimeout(() => this.setState({ movement: "none" }), 200);
    }
  }

  defineHomerSrc = movement => {
    switch (movement) {
      case "none":
        return homer;
      case "right":
        return homerRight;
      case "left":
        return homerLeft;
      case "avoid":
        return homerAvoid;
    }
  };

  render() {
    return (
      <div
        id="characters"
        style={{
          display: "flex",
          position: "relative",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
          width: "100vw"
        }}
      >
        <img
          style={{ ...bartStyle, ...charactersStyle }}
          src={bart}
          alt="bart"
        />
        <img
          style={{ ...homerStyle, ...charactersStyle }}
          src={this.defineHomerSrc(this.state.movement)}
          alt="homer"
        ></img>
      </div>
    );
  }
}

export default Characters;
