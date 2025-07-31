import type { PatternDefinition, QuizQuestion } from "@/app/types/patterns";

interface QuizGenerationOptions {
  patterns: PatternDefinition[];
  count: number; // Number of questions
  optionsPerQuestion?: number; // Default 4
  difficulty?: number; // Optional filter by difficulty level
}

export function generateQuiz({
  patterns,
  count,
  optionsPerQuestion = 4,
  difficulty,
}: QuizGenerationOptions): QuizQuestion[] {
  const filteredPatterns =
    difficulty !== undefined
      ? patterns.filter((p) => p.difficulty === difficulty)
      : patterns;

  const shuffled = [...filteredPatterns].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, count);

  return selected.map((correctPattern) => {
    const otherOptions = filteredPatterns
      .filter((p) => p.id !== correctPattern.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, optionsPerQuestion - 1);

    const options = [...otherOptions, correctPattern].sort(
      () => Math.random() - 0.5
    );

    return {
      correctPatternId: correctPattern.id,
      stepLength: correctPattern.stepLength,
      options,
    };
  });
}
