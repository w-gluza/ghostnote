import { useEffect, useRef, useState } from "react";
import * as Tone from "tone";
import type { MidiNoteValue } from "@/app/utils/midiMap";
import type { Pattern } from "@/app/data/quizPatterns";
import { getTransport } from "tone";
import { midiToNote, velocityToGain } from "../utils/tone";

export function useDrumSampler(pattern: Pattern) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState(120);
  const [loop, setLoop] = useState(false);
  const samplerRef = useRef<Tone.Sampler | null>(null);

  useEffect(() => {
    const sampleMap: Record<MidiNoteValue, string> = {
      36: "/samples/kick.wav",
      38: "/samples/snare.wav",
      42: "/samples/hihat.wav",
      49: "/samples/crash.wav",
      51: "/samples/cymbal.wav",
      45: "/samples/floor_placeholder.wav",
      47: "/samples/tom1_placeholder.wav",
      48: "/samples/tom2_placeholder.wav",
    };

    const sampler = new Tone.Sampler(sampleMap).toDestination();
    samplerRef.current = sampler;

    return () => {
      sampler.dispose();
    };
  }, []);

  const start = () => {
    if (isPlaying) return;

    const transport = getTransport();
    transport.bpm.value = bpm;
    transport.cancel();
    transport.stop();
    transport.position = "0:0:0";

    const sampler = samplerRef.current;
    if (!sampler) return;

    pattern.forEach((step, i) => {
      const time = `${Math.floor(i / 4)}:${i % 4}:0`;

      step.forEach(([note, velocity]) => {
        const noteName = midiToNote(note);
        const gain = velocityToGain(velocity);
        transport.schedule((t) => {
          sampler.triggerAttackRelease(noteName, "8n", t, gain);
        }, time);
      });
    });

    transport.loop = loop;
    transport.loopStart = "0:0:0";
    transport.loopEnd = `${Math.ceil(pattern.length / 4)}:0:0`;

    transport.start();
    setIsPlaying(true);
  };

  const stop = () => {
    const transport = getTransport();
    transport.stop();
    setIsPlaying(false);
  };

  const toggle = () => {
    if (isPlaying) stop();
    else start();
  };

  return {
    isPlaying,
    bpm,
    setBpm,
    loop,
    setLoop,
    start,
    stop,
    toggle,
  };
}
