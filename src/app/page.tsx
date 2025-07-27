export default function HomePage() {
  const quiz = {
    id: 'abc',
    audioUrl: '/audio/beat1.mp3',
    options: ['Pattern A', 'Pattern B', 'Pattern C', 'Pattern D'],
    correctIndex: 2
  };

  return (
    <main>
      <h1>🎧 Guess the Groove</h1>
      <audio controls src={quiz.audioUrl}  />

      <ul>
        {quiz.options.map((opt, idx) => (
          <li key={idx} >
            {opt}
          </li>
        ))}
      </ul>
    </main>
  );
}
