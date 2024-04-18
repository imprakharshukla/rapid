
import { PrismaClient } from "@prisma/client";
export * from "@prisma/client";

const globalForPrisma = globalThis as { prisma?: PrismaClient };

export const db = globalForPrisma.prisma || new PrismaClient();

export {
    PrismaClient as PrismaClientSingleton,
};

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
