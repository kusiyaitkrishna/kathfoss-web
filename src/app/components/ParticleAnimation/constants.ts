import { Colors } from "./types";

export const DEFAULT_COLORS: Colors = {
  background: "#000000",
  link: "#476c76",
  text: "#ebe7c5",
  particle: "#476c76",
  particleStroke: "#476c76",
};

export const DEFAULT_PROPS = {
  opacity: 75,
  numParticles: 7,
  sizeMultiplier: 5,
  speed: 15,
  avoidMouse: false,
  width: 1,
  connections: true,
  connectionDensity: 7,
  noBounceH: false,
  noBounceV: false,
  speedH: 0.001,
  speedV: 0.001,
  hover: true,
  colors: DEFAULT_COLORS,
  className: "",
};
