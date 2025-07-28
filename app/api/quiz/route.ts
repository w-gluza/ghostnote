import quizzes from "../../../data/quizzes.json";
import { NextResponse } from "next/server";

export async function GET() {
  const randomQuiz = quizzes[Math.floor(Math.random() * quizzes.length)];
  return NextResponse.json(randomQuiz);
}
