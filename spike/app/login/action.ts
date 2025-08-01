'use server'

import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'
import bcrypt from 'bcryptjs'
import { cookies } from 'next/headers'

type LoginFormState = {
  error?: string
}

export async function loginUser(
  prevState: LoginFormState,
  formData: FormData
): Promise<LoginFormState> {
  const username = formData.get('username') as string
  const password = formData.get('password') as string
  const remember = formData.get('remember') === 'on'

  if (!username || !password) {
    return { error: 'Usuario y contraseña son obligatorios' }
  }

  const user = await prisma.usuario.findUnique({ where: { username } })
  if (!user) {
    return { error: 'Usuario no encontrado' }
  }

  const passwordCorrect = await bcrypt.compare(password, user.password)
  if (!passwordCorrect) {
    return { error: 'Contraseña incorrecta' }
  }

  // Guardar cookie
  const cookieStore = cookies()
  cookieStore.set('user_id', String(user.id), {
    path: '/',
    httpOnly: true,
    maxAge: remember ? 60 * 60 * 24 * 30 : 60 * 60 * 2, // 30 días o 2 horas
  })

  redirect('/autos') // Redirige si todo sale bien
}
