import React, { Component } from "react";
import Projectile from "./Projectile";
import Doughnut from "../Design/Projectiles/doughnut.png";
import Duff from "../Design/Projectiles/duff.png";
import Brocoli from "../Design/Projectiles/brocoli.png";
import Flanders from "../Design/Projectiles/flanders.png";

class Projectiles extends Component {
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
      // console.log(projectiles);
    }, 500);
  }

  handleDelete = projectileId => {
    const projectiles = this.state.projectiles.filter(
      projectile => projectile !== projectileId
    );
    this.setState({ projectiles: projectiles });
  };

  render() {
    const { projectiles } = this.state;
    return (
      <div>
        {projectiles.map(projectile => (
          <Projectile
            id={projectile}
            projectile={Doughnut}
            onDelete={this.handleDelete}
            key={projectile}
          />
        ))}
      </div>
    );
  }
}

export default Projectiles;
