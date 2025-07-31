import { useRef, useState } from "react";
import type { MidiNoteValue } from "@/app/utils/midiMap";
import type { Pattern } from "@/app/data/quizPatterns";
import { velocityToGain } from "../utils/tone";

type ToneModule = typeof import("tone");

export function useDrumSampler(pattern: Pattern) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState(120);
  const [loop, setLoop] = useState(false);

  const toneRef = useRef<ToneModule | null>(null);
  const samplerRef = useRef<InstanceType<ToneModule["Sampler"]> | null>(null);
  const transportRef = useRef<ReturnType<ToneModule["getTransport"]> | null>(
    null
  );
  const isSamplerLoaded = useRef(false);

  const initAudio = async () => {
    if (!toneRef.current) {
      toneRef.current = await import("tone");
    }

    const { getContext, Sampler, getTransport, start, Frequency } =
      toneRef.current;

    // Ensure AudioContext is resumed after user gesture
    const ctx = getContext();
    if (ctx.state !== "running") {
      await start();
      console.log("AudioContext resumed");
    }

    if (!samplerRef.current) {
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

      await new Promise<void>((resolve) => {
        const sampler = new Sampler({
          urls: Object.entries(sampleMap).reduce(
            (acc, [midi, url]) => {
              acc[Frequency(Number(midi), "midi").toNote()] = url;
              return acc;
            },
            {} as Record<string, string>
          ),
          onload: () => {
            console.log("Sampler fully loaded");
            isSamplerLoaded.current = true;
            resolve();
          },
        }).toDestination();

        samplerRef.current = sampler;
        transportRef.current = getTransport();
      });
    }
  };

  const start = async () => {
    if (isPlaying) return;

    await initAudio();

    if (!samplerRef.current || !isSamplerLoaded.current) {
      console.warn("Sampler not ready yet");
      return;
    }

    const { Frequency } = toneRef.current!;
    const sampler = samplerRef.current;
    const transport = transportRef.current!;

    transport.bpm.value = bpm;
    transport.cancel();
    transport.stop();
    transport.position = "0:0:0";

    pattern.forEach((step, i) => {
      const time = `${Math.floor(i / 4)}:${i % 4}:0`;

      step.forEach(([note, velocity]) => {
        const noteName = Frequency(note, "midi").toNote();
        const gain = velocityToGain(velocity);
        transport.schedule((t: number) => {
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
    if (transportRef.current) {
      transportRef.current.stop();
      setIsPlaying(false);
    }
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
