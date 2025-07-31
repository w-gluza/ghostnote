"use client";

import React from "react";
import Image from "next/image";
import styles from "./MusicPlayer.module.css";

interface MusicPlayerProps {
  tempo: number;
  isLooping: boolean;
  isPlaying: boolean;
  onTempoChange: (newTempo: number) => void;
  onPlayToggle: () => void;
  onLoopToggle: () => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({
  tempo,
  isLooping,
  isPlaying,
  onTempoChange,
  onPlayToggle,
  onLoopToggle,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.control}>
        {/* Tempo Control */}
        <div className={styles["bpm-control"]}>
          <button
            onClick={() => onTempoChange(tempo - 5)}
            aria-label="Decrease BPM"
          >
            <Image
              src="/icons/app/minus.svg"
              alt="Minus"
              width={10}
              height={10}
            />
          </button>

          <div className={styles["bpm-display"]}>
            <div className={styles["bpm-value"]}>{tempo}</div>
            <div className={styles["bpm-label"]}>BPM</div>
          </div>

          <button
            onClick={() => onTempoChange(tempo + 5)}
            aria-label="Increase BPM"
          >
            <Image
              src="/icons/app/plus.svg"
              alt="Plus"
              width={10}
              height={10}
            />
          </button>
        </div>

        {/* Play Button */}
        <button
          className={`${styles.btn} ${styles["play-toggle"]}`}
          onClick={onPlayToggle}
          aria-label="Toggle Play"
        >
          <Image
            src={`/icons/app/${isPlaying ? "pause" : "play"}.svg`}
            alt="Play/Pause"
            width={14}
            height={14}
          />
        </button>

        {/* Loop Button */}
        <button onClick={onLoopToggle} aria-label="Toggle Loop">
          <Image src="/icons/app/loop.svg" alt="Loop" width={14} height={14} />
          {isLooping && "Looping:)"}
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
