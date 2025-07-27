import { NextResponse } from 'next/server';

export async function GET() {
  const quiz = {
    id: 'abc',
    audioUrl: '/audio/beat1.mp3',
    options: ['Pattern A', 'Pattern B', 'Pattern C', 'Pattern D'],
    correctIndex: 2
  };

  return NextResponse.json(quiz);
}
