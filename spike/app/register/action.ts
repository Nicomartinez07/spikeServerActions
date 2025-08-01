'use server'

import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

type RegisterFormState = {
  error?: string
  success?: boolean
}

export async function registerUser(
  prevState: RegisterFormState,
  formData: FormData
): Promise<RegisterFormState> {
  const username = formData.get('username') as string
  const password = formData.get('password') as string

  if (!username || !password) {
    return { error: 'Ambos campos son obligatorios' }
  }

  const existingUser = await prisma.usuario.findUnique({
    where: { username },
  })

  if (existingUser) {
    return { error: 'Ese nombre de usuario ya existe' }
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  await prisma.usuario.create({
    data: {
      username,
      password: hashedPassword,
    },
  })

  return { success: true }
}
