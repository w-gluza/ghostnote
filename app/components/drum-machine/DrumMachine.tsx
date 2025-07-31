"use client";
import * as Tone from "tone";
import { useState } from "react";

const patternA = [
  [
    [36, 100],
    [42, 100],
  ],
  [[42, 100]],
  [
    [38, 100],
    [42, 100],
  ],
  [[42, 100]],
  [
    [36, 100],
    [42, 100],
  ],
  [[42, 100]],
  [
    [38, 100],
    [42, 100],
  ],
  [[42, 100]],
];

const drumUrls: Record<number, string> = {
  36: "/samples/kick.wav",
  38: "/samples/snare.wav",
  42: "/samples/hihat.wav",
};

let players: Record<number, Tone.Player> = {};
let currentStep = 0;
let loop: Tone.Loop;

export default function DrumMachine() {
  const [isPlaying, setIsPlaying] = useState(false);

  const loadSamples = async () => {
    await Tone.start(); // unlock audio on user interaction

    players = Object.fromEntries(
      Object.entries(drumUrls).map(([note, url]) => [
        parseInt(note),
        new Tone.Player(url).toDestination(),
      ])
    );
  };

  const start = async () => {
    await loadSamples();

    currentStep = 0;

    loop = new Tone.Loop((time) => {
      const step = patternA[currentStep];

      step.forEach(([note, velocity]) => {
        const player = players[note];
        if (player) {
          player.volume.value = Tone.gainToDb(velocity / 127);
          player.start(time);
        }
      });

      currentStep = (currentStep + 1) % patternA.length;
    }, "8n");

    Tone.Transport.start();
    loop.start(0);
    setIsPlaying(true);
  };

  const stop = () => {
    loop.stop();
    Tone.Transport.stop();
    setIsPlaying(false);
  };

  return (
    <div className="p-4">
      <button
        onClick={isPlaying ? stop : start}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        {isPlaying ? "Stop" : "Play"}
      </button>
    </div>
  );
}
