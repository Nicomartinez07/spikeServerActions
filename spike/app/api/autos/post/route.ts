// app/api/autos/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma' // Ajustá el path si no usás alias

// POST: Crear auto
export async function POST(req: Request) {
  const body = await req.json()
  const { marca, modelo, anio } = body

  try {
    const auto = await prisma.auto.create({
      data: {
        marca,
        modelo,
        anio: parseInt(anio),
      },
    })

    return NextResponse.json(auto)
  } catch (error) {
    return NextResponse.json({ error: 'Error al guardar auto' }, { status: 500 })
  }
}
