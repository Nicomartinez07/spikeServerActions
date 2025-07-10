// app/api/autos/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma' // Ajustá el path si no usás alias


// GET: Listar autos
export async function GET() {
  const autos = await prisma.auto.findMany()
  return NextResponse.json(autos)
}
