"use client";

import React, { useEffect } from "react";
import MusicPlayer from "@/app/common/MusicPlayer/MusicPlayer";
import { useDrumSampler } from "@/app/hooks/useDrumSampler";
import type { Pattern } from "@/app/types/patterns";

interface DrumMachineProps {
  pattern: Pattern;
  repeat?: number;
  stepLength: 4 | 8 | 16 | 32;
}

const DrumMachine = ({ pattern, repeat = 2, stepLength }: DrumMachineProps) => {
  const passedPattern = Array(repeat)
    .fill(null)
    .flatMap(() => pattern);

  const { isPlaying, bpm, setBpm, loop, setLoop, toggle, stop } =
    useDrumSampler(passedPattern, stepLength);

  useEffect(() => {
    return () => {
      stop();
    };
  }, [stop]);

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
