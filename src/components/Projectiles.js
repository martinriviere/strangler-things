import React from "react";
import Projectile from "./Projectile";

function Projectiles({
  projectiles,
  addProjectileToSwipeZone,
  removeProjectileFromSwipeZone,
  deleteProjectile,
  removeRemainingProjectile,
  reduceLife,
  pause,
  resume
}) {
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
            removeRemainingProjectile={removeRemainingProjectile}
            key={projectile.id}
            reduceLife={reduceLife}
            pause={pause}
            resume={resume}
          />
        ))}
      </div>
    </div>
  );
}

export default Projectiles;
