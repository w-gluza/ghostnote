import { useRef, useState } from "react";
import type { MidiNoteValue } from "@/app/utils/midiMap";
import type { Pattern } from "@/app/data/quizPatterns";
import { velocityToGain } from "../utils/tone";

type ToneModule = typeof import("tone");
type StepsLength = 4 | 8 | 16 | 32;

const noteDurations = {
  4: "4n",
  8: "8n",
  16: "16n",
  32: "32n",
} as const;

export function useDrumSampler(pattern: Pattern, stepLength: StepsLength) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState(120);
  const [loop, setLoop] = useState(false);
  const toneRef = useRef<ToneModule | null>(null);
  const isSamplerLoaded = useRef(false);
  const stopListenerRef = useRef<(() => void) | null>(null);
  const samplerRef = useRef<InstanceType<ToneModule["Sampler"]> | null>(null);
  const transportRef = useRef<ReturnType<ToneModule["getTransport"]> | null>(
    null
  );

  /**
   * Ensures AudioContext is resumed and samples are loaded before playback.
   */
  const initAudio = async () => {
    if (!toneRef.current) {
      toneRef.current = await import("tone");
    }

    const { getContext, Sampler, getTransport, start, Frequency } =
      toneRef.current;

    // Resume AudioContext if not already running (required by browsers)
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
        45: "/samples/floor.wav",
        47: "/samples/tom1.wav",
        48: "/samples/tom2.wav",
      };

      // Load sampler and wait for all samples to finish loading
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

  /**
   * Starts playback of the provided pattern.
   * Reschedules all notes and starts Tone.Transport.
   */
  const start = async () => {
    if (isPlaying) return;

    await initAudio();

    if (!samplerRef.current || !isSamplerLoaded.current) {
      console.warn("Sampler not ready yet");
      return;
    }

    const { Frequency, Time } = toneRef.current!;
    const sampler = samplerRef.current;
    const transport = transportRef.current!;

    // Reset and configure transport
    transport.bpm.value = bpm;
    transport.cancel();
    transport.stop();
    transport.position = "0:0:0";

    pattern.forEach((step, i) => {
      const stepsPerBar = stepLength;
      const stepDurationInBeats = 4 / stepsPerBar;

      const bar = Math.floor(i / stepsPerBar);
      const stepInBar = i % stepsPerBar;
      const time = `${bar}:${stepInBar * stepDurationInBeats}`;

      step.forEach(([note, velocity]) => {
        const noteName = Frequency(note, "midi").toNote();
        const gain = velocityToGain(velocity);
        transport.schedule((t: number) => {
          sampler.triggerAttackRelease(
            noteName,
            noteDurations[stepLength],
            t,
            gain
          );
        }, time);
      });
    });

    // Configure loop settings
    const loopEndBars = Math.ceil(pattern.length / stepLength);
    transport.loop = loop;
    transport.loopStart = "0:0:0";
    transport.loopEnd = `${loopEndBars}:0:0`;

    // 🔁 Auto-stop: if not looping, reset isPlaying when transport ends
    if (!loop) {
      const endTime = Time(transport.loopEnd).toSeconds();
      const stopId = transport.scheduleOnce(() => {
        setIsPlaying(false);
      }, endTime);

      // Store cancel function in case stop is called manually
      stopListenerRef.current = () => {
        transport.clear(stopId);
      };
    }

    transport.start();
    setIsPlaying(true);
  };

  /**
   * Stops transport and clears any scheduled events.
   */
  const stop = () => {
    const transport = transportRef.current;
    if (!transport) return;

    transport.stop();

    if (stopListenerRef.current) {
      stopListenerRef.current();
      stopListenerRef.current = null;
    }

    setIsPlaying(false);
  };

  /**
   * Toggles playback on/off.
   */
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
