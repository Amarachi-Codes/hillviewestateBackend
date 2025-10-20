/*
  Warnings:

  - You are about to drop the column `ResidentIdNo` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Role` on the `User` table. All the data in the column will be lost.
  - Added the required column `residentIdNo` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EntryPermit" ADD CONSTRAINT "EntryPermit_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" DROP COLUMN "ResidentIdNo",
DROP COLUMN "Role",
ADD COLUMN     "residentIdNo" TEXT NOT NULL,
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'RESIDENT';
