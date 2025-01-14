import { MousePosition } from "./types";

export class Particle {
  public x: number;
  public y: number;
  private directionX: number;
  private directionY: number;
  private size: number;
  private readonly canvasContext: CanvasRenderingContext2D;
  private readonly canvas: HTMLCanvasElement;

  constructor(
    x: number,
    y: number,
    directionX: number,
    directionY: number,
    size: number,
    canvasContext: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement
  ) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.canvasContext = canvasContext;
    this.canvas = canvas;
  }

  draw(particleColor: string): void {
    this.canvasContext.beginPath();
    this.canvasContext.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    this.canvasContext.fillStyle = particleColor;
    this.canvasContext.fill();
  }

  update(
    mousePosition: MousePosition,
    avoidMouse: boolean,
    noBounceH: boolean,
    noBounceV: boolean,
    speedH: number,
    speedV: number,
    normalizedSpeed: number
  ): void {
    this.handleBoundaries(noBounceH, noBounceV, speedH, speedV);
    this.handleMouseAvoidance(mousePosition, avoidMouse);
    this.move(normalizedSpeed, speedH, speedV);
  }

  private handleBoundaries(
    noBounceH: boolean,
    noBounceV: boolean,
    speedH: number,
    speedV: number
  ): void {
    if (noBounceH) {
      if (
        (speedH > 0 && this.x > this.canvas.width) ||
        (speedH < 0 && this.x < 0)
      ) {
        this.x = speedH > 0 ? 0 : this.canvas.width;
      }
    } else if (this.x > this.canvas.width || this.x < 0) {
      this.directionX = -this.directionX;
    }

    if (noBounceV) {
      if (
        (speedV > 0 && this.y > this.canvas.height) ||
        (speedV < 0 && this.y < 0)
      ) {
        this.y = speedV > 0 ? 0 : this.canvas.height;
      }
    } else if (this.y > this.canvas.height || this.y < 0) {
      this.directionY = -this.directionY;
    }
  }

  private handleMouseAvoidance(
    mousePosition: MousePosition,
    avoidMouse: boolean
  ): void {
    if (
      avoidMouse &&
      mousePosition.x !== undefined &&
      mousePosition.y !== undefined
    ) {
      const dx = mousePosition.x - this.x;
      const dy = mousePosition.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < mousePosition.radius + this.size) {
        if (
          mousePosition.x < this.x &&
          this.x < this.canvas.width - this.size * 10
        ) {
          this.x += 10;
        }
        if (mousePosition.x > this.x && this.x > this.size * 10) {
          this.x -= 10;
        }
        if (
          mousePosition.y < this.y &&
          this.y < this.canvas.height - this.size * 10
        ) {
          this.y += 10;
        }
        if (mousePosition.y > this.y && this.y > this.size * 10) {
          this.y -= 10;
        }
      }
    }
  }

  private move(normalizedSpeed: number, speedH: number, speedV: number): void {
    this.x += this.directionX * normalizedSpeed * speedH;
    this.y += this.directionY * normalizedSpeed * speedV;
  }
}
