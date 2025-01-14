import React from "react";
import { ParticleAnimationProps } from "./types";

import { useParticleAnimation } from "./useParticleAnimation";
import { DEFAULT_PROPS } from "./constants";

const ParticleAnimation: React.FC<ParticleAnimationProps> = (props) => {
  const { opacity, className } = { ...DEFAULT_PROPS, ...props };
  const { canvasRef } = useParticleAnimation(props);

  return (
    <canvas
      ref={canvasRef}
      className={`particle-animation ${className}`}
      style={{
        height: "100%",
        left: 0,
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: -999,
        opacity: opacity / 100,
      }}
    />
  );
};

export default ParticleAnimation;
