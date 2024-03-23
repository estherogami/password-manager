/*
  Warnings:

  - You are about to drop the column `input_type` on the `Credentials` table. All the data in the column will be lost.
  - You are about to drop the column `key` on the `Credentials` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `Credentials` table. All the data in the column will be lost.
  - Added the required column `title` to the `Credentials` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Credentials" DROP COLUMN "input_type",
DROP COLUMN "key",
DROP COLUMN "value",
ADD COLUMN     "title" VARCHAR(255) NOT NULL;

-- CreateTable
CREATE TABLE "CredentialField" (
    "id" SERIAL NOT NULL,
    "cid" INTEGER NOT NULL,
    "key" VARCHAR(255) NOT NULL,
    "value" VARCHAR(255) NOT NULL,
    "input_type" VARCHAR(50) NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CredentialField_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CredentialField" ADD CONSTRAINT "CredentialField_cid_fkey" FOREIGN KEY ("cid") REFERENCES "Credentials"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
