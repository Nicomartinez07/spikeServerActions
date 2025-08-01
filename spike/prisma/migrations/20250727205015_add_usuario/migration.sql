-- CreateTable
CREATE TABLE "Garantia" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fecha" DATETIME NOT NULL,
    "vin" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "patente" TEXT NOT NULL,
    "empresa" TEXT NOT NULL,
    "usuario" TEXT NOT NULL,
    "clienteId" INTEGER,
    CONSTRAINT "Garantia_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Cliente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "provincia" TEXT NOT NULL,
    "localidad" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Vehiculo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fecha" DATETIME NOT NULL,
    "vin" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "nroMotor" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "año" INTEGER NOT NULL,
    "nroCertificado" TEXT NOT NULL,
    "fechaImportacion" DATETIME NOT NULL,
    "empresa" TEXT NOT NULL,
    "vendedor" TEXT,
    "patente" TEXT
);

-- CreateTable
CREATE TABLE "Empresa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "direccion" TEXT,
    "provincia" TEXT,
    "localidad" TEXT,
    "telefono1" TEXT,
    "telefono2" TEXT,
    "email" TEXT
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "taller" BOOLEAN NOT NULL DEFAULT false,
    "concesionario" BOOLEAN NOT NULL DEFAULT false,
    "notificaciones" BOOLEAN NOT NULL DEFAULT false,
    "empresaId" INTEGER,
    CONSTRAINT "Usuario_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "Empresa" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Vehiculo_vin_key" ON "Vehiculo"("vin");
