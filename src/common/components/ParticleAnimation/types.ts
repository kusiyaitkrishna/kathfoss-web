export interface Colors {
  background: string;
  link: string;
  text: string;
  particle: string;
  particleStroke: string;
}

export interface ParticleAnimationProps {
  opacity?: number;
  numParticles?: number;
  sizeMultiplier?: number;
  speed?: number;
  avoidMouse?: boolean;
  width?: number;
  connections?: boolean;
  connectionDensity?: number;
  noBounceH?: boolean;
  noBounceV?: boolean;
  speedH?: number;
  speedV?: number;
  hover?: boolean;
  colors?: Partial<Colors>;
  className?: string;
}

export interface MousePosition {
  x: number | undefined;
  y: number | undefined;
  radius: number;
}
