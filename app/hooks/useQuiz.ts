"use client";
import { useMemo } from "react";
import useSWR from "swr";
import { fetchJson } from "@/app/utils/fetchJson";
import { generateQuiz } from "@/app/utils/generateQuiz";
import type { PatternInterface, QuizQuestion } from "@/app/types/patterns";

/**
 * Fetch patterns and build a quiz client-side.
 * TO DO - consider server-side filtering
 */
export function useQuiz({
  level,
  count = 5,
  enabled = true,
}: {
  level: number;
  count?: number;
  enabled?: boolean;
}) {
  const key = !enabled ? null : `/api/patterns`;

  const { data, error, isLoading, mutate } = useSWR<PatternInterface[]>(
    key,
    fetchJson,
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
    }
  );

  const quiz: QuizQuestion[] = useMemo(() => {
    if (!data?.length) return [];
    return generateQuiz({ patterns: data, count, difficulty: level });
  }, [data, count, level]);

  return { quiz, error, isLoading, refresh: mutate };
}
