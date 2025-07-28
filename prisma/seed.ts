import { prisma } from "../lib/prisma.ts";

async function main() {
  await prisma.user.upsert({
    where: { email: "test@example.com" },
    update: {
      xp: 90,
      level: 1,
      nick: "user_1",
    },
    create: {
      email: "test@example.com",
      nick: "user_1",
      xp: 100,
      level: 1,
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
