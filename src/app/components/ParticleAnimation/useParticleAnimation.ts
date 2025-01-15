import { useRef, useState, useCallback, useEffect } from "react";
import { Particle } from "./Particle";

import { DEFAULT_PROPS } from "./constants";
import { MousePosition, ParticleAnimationProps } from "./types";

export const useParticleAnimation = (props: ParticleAnimationProps) => {
  const {
    numParticles,
    sizeMultiplier,
    speed,
    avoidMouse,
    width,
    connections,
    connectionDensity,
    noBounceH,
    noBounceV,
    speedH,
    speedV,
    hover,
    colors,
  } = { ...DEFAULT_PROPS, ...props };

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const particlesArrayRef = useRef<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: undefined,
    y: undefined,
    radius: 0,
  });

  const { particle: particleColor, particleStroke: strokeColor } = colors;

  const initParticles = useCallback(
    (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) => {
      particlesArrayRef.current = [];
      const numberOfParticles = canvas.width * 0.01 * numParticles;

      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * sizeMultiplier + 1;
        const x =
          Math.random() * (canvas.width - size * 2 - size * 2) + size * 2;
        const y =
          Math.random() * (canvas.height - size * 2 - size * 2) + size * 2;

        const directionX = noBounceH
          ? Math.random() * 5
          : Math.random() * 5 - 2.5;
        const directionY = noBounceV
          ? Math.random() * 5
          : Math.random() * 5 - 2.5;

        particlesArrayRef.current.push(
          new Particle(x, y, directionX, directionY, size, context, canvas)
        );
      }
    },
    [numParticles, sizeMultiplier, noBounceH, noBounceV]
  );

  const connectParticles = useCallback(
    (context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
      const particles = particlesArrayRef.current;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = dx * dx + dy * dy;

          if (
            distance <
            (canvas.width / connectionDensity) *
              (canvas.height / connectionDensity)
          ) {
            let opacityValue = 1 - distance / 20000;

            if (
              hover &&
              mousePosition.x !== undefined &&
              mousePosition.y !== undefined
            ) {
              const mouseDx = mousePosition.x - particles[a].x;
              const mouseDy = mousePosition.y - particles[a].y;
              const mouseDistance = Math.sqrt(
                mouseDx * mouseDx + mouseDy * mouseDy
              );

              if (mouseDistance < 200) {
                opacityValue = Math.min(opacityValue * 2, 1);
              }
            }

            context.globalAlpha = opacityValue;
            context.strokeStyle = strokeColor ?? "#000";
            context.lineWidth = width;
            context.beginPath();
            context.moveTo(particles[a].x, particles[a].y);
            context.lineTo(particles[b].x, particles[b].y);
            context.stroke();
          }
        }
      }
    },
    [connectionDensity, hover, mousePosition.x, strokeColor, width]
  );

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    context.clearRect(0, 0, canvas.width, canvas.height);

    const normalizedSpeed = speed !== 0 ? speed / 100 : 0;
    particlesArrayRef.current.forEach((particle) => {
      particle.update(
        mousePosition,
        avoidMouse,
        noBounceH,
        noBounceV,
        speedH,
        speedV,
        normalizedSpeed
      );
      particle.draw(particleColor ?? "#000");
    });

    if (connections) {
      connectParticles(context, canvas);
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [
    avoidMouse,
    connections,
    connectParticles,
    mousePosition,
    noBounceH,
    noBounceV,
    particleColor,
    speed,
    speedH,
    speedV,
  ]);

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    setMousePosition((prev) => ({
      ...prev,
      radius: (canvas.height / 80) * (canvas.width / 80),
    }));
    initParticles(canvas, context);
  }, [initParticles]);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    setMousePosition((prev) => ({
      ...prev,
      x: event.x,
      y: event.y,
    }));
  }, []);

  const handleMouseOut = useCallback(() => {
    setMousePosition((prev) => ({
      ...prev,
      x: undefined,
      y: undefined,
    }));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    handleResize();

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate, handleMouseMove, handleMouseOut, handleResize]);

  return { canvasRef };
};
