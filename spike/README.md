## Correr la app
First, run the development server:

```bash
npm install

npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Para migrar prisma:

```bash
npx prisma migrate dev

npx prisma studio 
```


Modelo de schema.prisma a desarrollar las relaciones



model Garantia {
  id        Int      @id @default(autoincrement())
  fecha     DateTime   // camelCase (mejor integración con JS/TS)
  vin       String   // minúscula si es abreviación (VIN → vin)
  modelo    String
  patente   String
  empresa   String
  usuario   String
  cliente   Cliente? @relation(fields: [clienteId], references: [id])
  clienteId Int?
}

model Cliente {
  id         Int       @id @default(autoincrement())
  nombre     String
  apellido   String
  email      String
  telefono   String
  direccion  String 
  provincia  String
  localidad  String
  garantias  Garantia[]
}

model Vehiculo {
  id               Int      @id @default(autoincrement())
  fecha            DateTime
  vin              String   @unique
  marca            String
  modelo           String
  nroMotor         String
  tipo             String
  año             Int
  nroCertificado   String
  fechaImportacion DateTime
  empresa          String
  vendedor         String?
  patente          String?
}

model Empresa {
  id              Int       @id @default(autoincrement())
  nombre          String    // Ej: "FICAR AUTO"
  direccion       String?
  provincia       String?
  localidad       String?
  telefono1       String?
  telefono2       String?
  email           String?
  usuarios        Usuario[] // Relación con usuarios
}

model Usuario {
  id              Int       @id @default(autoincrement())
  nombre          String    // Ej: "Juan Pablo Ameri"
  email           String    // Ej: "jpameri@d..."
  taller          Boolean   @default(false) // ✔ en la tabla
  concesionario   Boolean   @default(false) // ✔ en la tabla
  notificaciones  Boolean   @default(false) // ✔ en la tabla
  empresa         Empresa?  @relation(fields: [empresaId], references: [id])
  empresaId       Int?
}