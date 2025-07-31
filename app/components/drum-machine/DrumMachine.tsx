"use client";

import React from "react";
import MusicPlayer from "../../common/MusicPlayer/MusicPlayer";
import { useDrumSampler } from "@/app/hooks/useDrumSampler";
import type { Pattern } from "@/app/data/quizPatterns";

interface DrumMachineProps {
  pattern: Pattern;
  repeat?: number;
  stepLength: 4 | 8 | 16 | 32;
}

const DrumMachine = ({ pattern, repeat = 2, stepLength }: DrumMachineProps) => {
  // NOTE: This is a quick and practical way to repeat the pattern.
  // It's not musically aware — we simply duplicate the raw pattern array.
  // In real-world music, patterns are often structured in 2-bar or 4-bar phrases.
  const passedPattern = Array(repeat)
    .fill(null)
    .flatMap(() => pattern);

  const { isPlaying, bpm, setBpm, loop, setLoop, toggle } = useDrumSampler(
    passedPattern,
    stepLength
  );

  return (
    <MusicPlayer
      tempo={bpm}
      isPlaying={isPlaying}
      onTempoChange={setBpm}
      onLoopToggle={() => setLoop(!loop)}
      onPlayToggle={toggle}
    />
  );
};

export default DrumMachine;
