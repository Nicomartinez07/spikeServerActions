import { prisma } from '@/lib/prisma'

// 1. Función Server Action que se encarga de guardar un auto, tipo recibe los datos del 
//form y los inserta a la db
export async function guardarAuto(formData: FormData) {
  'use server'

  //convierte los datitos a string
  const Marca = formData.get('Marca')?.toString()
  const Modelo = formData.get('Modelo')?.toString()
  const Año = parseInt(formData.get('Año')?.toString() || '0')

  //Se fija si falta algun datito
  if (!Marca || !Modelo || !Año) {
    throw new Error('Datos incompletos')
  }

  //inserta en la DB
  await prisma.auto.create({
    data: { Marca, Modelo, Año },
  })
}

// 2. Componente del formulario 
export default function AutosPage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Registrar Auto (Probando a ver si funciona mi Server Action 🥴)</h1>
      <form action={guardarAuto}>
        <div>
          <label>Marca:</label>
          <input name="Marca" required />
        </div>
        <div>
          <label>Modelo:</label>
          <input name="Modelo" required />
        </div>
        <div>
          <label>Año:</label>
          <input name="Año" required />
        </div>
        <button type="submit">Guardar Auto</button>
      </form>
    </main>
  )
}
