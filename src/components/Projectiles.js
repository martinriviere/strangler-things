import React from "react";
import Projectile from "./Projectile";

function Projectiles({ projectiles, addProjectileToSwipeZone,removeProjectileFromSwipeZone, deleteProjectile, reduceLife }) {
  return (
    <div
      style={{
        position: "absolute",
        width: "100vw",
        height: "87vh",
        top: "13%"
      }}
    >
      <div style={{ position: "relative", height: "100%" }}>
        {projectiles.map(projectile => (
          <Projectile
            addProjectileToSwipeZone={addProjectileToSwipeZone}
            removeProjectileFromSwipeZone={removeProjectileFromSwipeZone}
            projectile={projectile}
            onDelete={deleteProjectile}
            key={projectile.id}
            reduceLife={reduceLife}
          />
        ))}
      </div>
    </div>
  );
}

export default Projectiles;
