//connect to database

import { PrismaClient } from "@prisma/client";

export async function connect() {
  const prisma = new PrismaClient();
  try {
    // ... you will write your Prisma Client queries here
    await prisma.$connect();
  } catch (error) {
    console.error("cant connect to database", error);
  }
}
