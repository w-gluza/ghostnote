import { prisma } from "../lib/prisma.ts";

async function main() {
  // 1. Create user
  const user = await prisma.user.upsert({
    where: { email: "test@example.com" },
    update: {},
    create: {
      email: "test@example.com",
      nick: "user_1",
      xp: 0,
      level: 1,
    },
  });

  // 2. Create quiz
  const quiz = await prisma.quiz.create({
    data: {
      audioUrl: "https://example.com/audio/groove1.mp3",
      pattern: "1001001001001001", // correct pattern
      correctIndex: 2,
      options: [
        "0000000000000000",
        "1111111111111111",
        "1001001001001001", // correct
        "1010101010101010",
      ],
    },
  });

  // 3. Record a quiz result
  await prisma.quizResult.create({
    data: {
      userId: user.id,
      quizId: quiz.id,
      isCorrect: true,
      xpGained: 10,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
