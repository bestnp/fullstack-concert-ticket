-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER');

-- CreateEnum
CREATE TYPE "ReservationStatus" AS ENUM ('RESERVED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "ReservationAction" AS ENUM ('RESERVE', 'CANCEL');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Concert" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "totalSeats" INTEGER NOT NULL,
    "reservedSeats" INTEGER NOT NULL DEFAULT 0,
    "startDateTime" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Concert_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reservation" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "concertId" TEXT NOT NULL,
    "status" "ReservationStatus" NOT NULL DEFAULT 'RESERVED',
    "reservedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cancelledAt" TIMESTAMP(3),

    CONSTRAINT "Reservation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReservationHistory" (
    "id" TEXT NOT NULL,
    "reservationId" TEXT,
    "userId" TEXT NOT NULL,
    "concertId" TEXT NOT NULL,
    "action" "ReservationAction" NOT NULL,
    "occurredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "snapshotSeats" INTEGER NOT NULL,
    "note" TEXT,

    CONSTRAINT "ReservationHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "Concert_startDateTime_idx" ON "Concert"("startDateTime");

-- CreateIndex
CREATE UNIQUE INDEX "Reservation_userId_concertId_key" ON "Reservation"("userId", "concertId");

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_concertId_fkey" FOREIGN KEY ("concertId") REFERENCES "Concert"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReservationHistory" ADD CONSTRAINT "ReservationHistory_reservationId_fkey" FOREIGN KEY ("reservationId") REFERENCES "Reservation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReservationHistory" ADD CONSTRAINT "ReservationHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReservationHistory" ADD CONSTRAINT "ReservationHistory_concertId_fkey" FOREIGN KEY ("concertId") REFERENCES "Concert"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
