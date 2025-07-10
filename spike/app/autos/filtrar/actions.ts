'use server'

import { prisma } from '@/lib/prisma'


export async function filtrarAutos(
  prevState: { autos: any[]; error: string },
  formData: FormData
) {
  try {
    const Marca = formData.get('Marca')?.toString()
    const Modelo = formData.get('Modelo')?.toString()
    const Año = formData.get('Año')?.toString()

    const autos = await prisma.auto.findMany({
      where: {
        AND: [
          Marca ? { Marca: { contains: Marca } } : {},
          Modelo ? { Modelo: { contains: Modelo } } : {},
          Año ? { Año: parseInt(Año) } : {},
        ],
      },
    })

    return { autos, error: '' }
  } catch (e) {
    return { autos: [], error: 'Error al buscar autos' }
  }
}
