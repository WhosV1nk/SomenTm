"use client";

import Particles from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";

type Props = {
  blurred: boolean;
};

export default function ParticlesBackground({ blurred }: Props) {
  const options: ISourceOptions = {
    fullScreen: {
      enable: true,
      zIndex: 0,
    },
    background: {
      color: "#000000",
    },
    particles: {
      number: {
        value: 70,
        density: {
          enable: true,
        },
      },
      color: {
        value: "#ffffff",
      },
      links: {
        enable: true,
        color: "#ff2b2b",
        distance: 150,
        opacity: 0.25,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.6,
      },
      opacity: {
        value: 0.6,
      },
      size: {
        value: { min: 1, max: 2 },
      },
    },
    detectRetina: true,
  };

  return (
    <div className={blurred ? "particles blurred" : "particles"}>
      <Particles options={options} />
    </div>
  );
}
