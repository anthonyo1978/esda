import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // idempotent: only seed if empty
  const count = await prisma.item.count();
  if (count === 0) {
    await prisma.item.create({ data: { title: "Welcome to ESDA" } });
    console.log("Seeded 1 item");
  } else {
    console.log(`Items already present: ${count} (no new seed)`);
  }
}

main()
  .catch((e) => {
    console.error("Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
