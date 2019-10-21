import React, { Component } from "react";
import "./App.css";
import Projectile from "./components/Projectile";

class App extends Component {
  constructor() {
    super();
    this.state = {
      projectiles: [],
      index: 0
    };
  }

  componentDidMount() {
    setInterval(() => {
      const { projectiles, index } = this.state;
      this.setState({
        projectiles: [...projectiles, index],
        index: index + 1
      });
      console.log(projectiles);
    }, 1000);
  }

  render() {
    const { projectiles } = this.state;
    return (
      <div className="App">
        {projectiles.map(projectile => (
          <Projectile key={projectile} />
        ))}
      </div>
    );
  }
}

export default App;
