-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('VISITOR', 'RESIDENT', 'ADMIN');

-- CreateEnum
CREATE TYPE "public"."RegistrationStatus" AS ENUM ('CONFIRMED', 'CANCELLED', 'WHITELISTED');

-- CreateEnum
CREATE TYPE "public"."EntryStatus" AS ENUM ('PENDING', 'APPROVED', 'CANCELLED');

-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "phone" TEXT,
    "ResidentIdNo" TEXT NOT NULL,
    "Role" "public"."Role" NOT NULL DEFAULT 'RESIDENT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."EntryPermit" (
    "id" TEXT NOT NULL,
    "residentName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "residentPhone" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "entryId" TEXT NOT NULL,
    "status" "public"."EntryStatus" NOT NULL DEFAULT 'PENDING'
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "EntryPermit_code_key" ON "public"."EntryPermit"("code");

-- AddForeignKey
ALTER TABLE "public"."EntryPermit" ADD CONSTRAINT "EntryPermit_entryId_fkey" FOREIGN KEY ("entryId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
