import React, { Component } from "react";
import Projectile from "./Projectile";
import Doughnut from "../Design/Projectiles/doughnut.png";
import Duff from "../Design/Projectiles/duff.png";
import Brocoli from "../Design/Projectiles/brocoli.png";
import Flanders from "../Design/Projectiles/flanders.png";
import { randomOf } from "./helpers";

const images = [Doughnut, Duff, Brocoli, Flanders];

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
        projectiles: [
          ...projectiles,
          { id: index, image: images[randomOf(4)] }
        ],
        index: index + 1
      });
    }, 500);
  }

  handleDelete = projectileId => {
    const projectiles = this.state.projectiles.filter(
      projectile => projectile.id !== projectileId
    );
    this.setState({ projectiles: projectiles });
  };

  render() {
    const { projectiles } = this.state;
    return (
      <div>
        {projectiles.map(projectile => (
          <Projectile
            id={projectile.id}
            projectile={projectile.image}
            onDelete={this.handleDelete}
            key={projectile.id}
          />
        ))}
      </div>
    );
  }
}

export default Projectiles;
