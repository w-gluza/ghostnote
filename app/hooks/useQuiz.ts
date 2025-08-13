// useQuiz.ts
"use client";
import { useEffect, useState, useCallback } from "react";
import useSWR from "swr";
import { fetchJson } from "@/app/utils/fetchJson";
import { generateQuiz } from "@/app/utils/generateQuiz";
import type { PatternInterface, QuizQuestion } from "@/app/types/patterns";

export function useQuiz({
  level,
  count = 5,
  enabled = true,
}: {
  level: number;
  count?: number;
  enabled?: boolean;
}) {
  const [nonce, setNonce] = useState(0);
  const [quiz, setQuiz] = useState<QuizQuestion[]>([]);

  const key = !enabled ? null : `/api/patterns`;

  const { data, error, isLoading } = useSWR<PatternInterface[]>(
    key,
    fetchJson,
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
    }
  );

  useEffect(() => {
    if (!data?.length) return;
    setQuiz(generateQuiz({ patterns: data, count, difficulty: level }));
  }, [data, count, level, nonce]);

  // Refresh function to regenerate quiz without refetching patterns
  // Just for testing purposes
  // In production, this should be handled by backend
  const refresh = useCallback(() => {
    setNonce((n) => n + 1);
  }, []);

  return { quiz, error, isLoading, refresh: refresh };
}
