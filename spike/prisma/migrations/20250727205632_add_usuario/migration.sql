/*
  Warnings:

  - You are about to drop the `Cliente` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Empresa` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Garantia` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Vehiculo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `concesionario` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `empresaId` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `nombre` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `notificaciones` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `taller` on the `Usuario` table. All the data in the column will be lost.
  - Added the required column `password` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Vehiculo_vin_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Cliente";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Empresa";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Garantia";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Vehiculo";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL
);
INSERT INTO "new_Usuario" ("id") SELECT "id" FROM "Usuario";
DROP TABLE "Usuario";
ALTER TABLE "new_Usuario" RENAME TO "Usuario";
CREATE UNIQUE INDEX "Usuario_username_key" ON "Usuario"("username");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
