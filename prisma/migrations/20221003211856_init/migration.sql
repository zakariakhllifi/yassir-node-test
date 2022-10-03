-- CreateTable
CREATE TABLE "ParisAirQuality" (
    "id" TEXT NOT NULL,
    "ts" TEXT NOT NULL,
    "aqius" INTEGER NOT NULL,
    "mainus" TEXT NOT NULL,
    "aqicn" INTEGER NOT NULL,
    "maincn" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ParisAirQuality_pkey" PRIMARY KEY ("id")
);
