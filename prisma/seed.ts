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
  for (const p of patterns) {
    await prisma.pattern.upsert({
      where: { name: p.name },
      update: {
        bpm: p.bpm,
        stepLength: p.stepLength,
        difficulty: p.difficulty,
        pattern: p.pattern,
        description: p.description ?? null,
        tags: p.tags ?? [],
      },
      create: {
        name: p.name,
        bpm: p.bpm,
        stepLength: p.stepLength,
        difficulty: p.difficulty,
        pattern: p.pattern,
        description: p.description ?? null,
        tags: p.tags ?? [],
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
  .finally(() => prisma.$disconnect());
