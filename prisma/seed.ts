import { prisma } from "../lib/prisma.ts";
import { patterns } from "../app/data/patterns.ts";

async function main() {
  // 1. Create or update user
  await prisma.user.upsert({
    where: { email: "test@example.com" },
    update: {},
    create: {
      email: "test@example.com",
      nick: "user_1",
      xp: 0,
      level: 1,
    },
  });

  // 2. Seed patterns
  for (const pattern of patterns) {
    await prisma.pattern.upsert({
      where: { id: pattern.id },
      update: {},
      create: {
        name: pattern.name,
        bpm: pattern.bpm,
        stepLength: pattern.stepLength,
        difficulty: pattern.difficulty,
        pattern: pattern.pattern,
        description: pattern.description,
        tags: pattern.tags || [],
      },
    });
  }

  console.log("✅ Seeding complete");
}

main()
  .catch((e) => {
    console.error("❌ Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
