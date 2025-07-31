import React from "react";
import Image from "next/image";
import styles from "./MusicPlayer.module.css";

interface MusicPlayerProps {
  tempo: number;
  isPlaying: boolean;
  onTempoChange: (newTempo: number) => void;
  onPlayToggle: () => void;
  onLoopToggle: () => void;
}

const MusicPlayer = ({
  tempo,
  isPlaying,
  onTempoChange,
  onPlayToggle,
  onLoopToggle,
}: MusicPlayerProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.control}>
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

        <button
          onClick={onLoopToggle}
          aria-label="Toggle Loop"
          className={styles["btn-loop"]}
        >
          <Image src="/icons/app/loop.svg" alt="Loop" width={16} height={16} />
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
