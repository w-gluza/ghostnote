"use client";

import React from "react";
import MusicPlayer from "../../common/MusicPlayer/MusicPlayer";
import MusicStaff from "../../common/MusicStaff/MusicStaff";
import { useDrumSampler } from "@/app/hooks/useDrumSampler";
import type { Pattern } from "@/app/data/quizPatterns";

interface DrumMachineProps {
  pattern: Pattern;
}

const DrumMachine: React.FC<DrumMachineProps> = ({ pattern }) => {
  const { isPlaying, bpm, setBpm, loop, setLoop, toggle } =
    useDrumSampler(pattern);

  return (
    <div>
      <MusicStaff pattern={pattern} tempo={bpm} timeSignature={[4, 4]} />

      <MusicPlayer
        tempo={bpm}
        isPlaying={isPlaying}
        onTempoChange={setBpm}
        onLoopToggle={() => setLoop(!loop)}
        onPlayToggle={toggle}
      />
    </div>
  );
};

export default DrumMachine;
