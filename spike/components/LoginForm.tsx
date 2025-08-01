'use client'

import React, { useState } from 'react'
import { useFormState } from 'react-dom'
import { loginUser } from '@/app/login/action'
import { Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'

const LoginForm = () => {
  const [state, formAction] = useFormState(loginUser, { error: '' })
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/fotito.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0" />
      <div className="relative z-10 bg-gray-700 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-white text-3xl font-bold mb-6 text-center">Postventa MG</h1>
        <h2 className="text-white text-xl mb-6 text-center">Inicia Sesión con tu cuenta</h2>

        <form action={formAction}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-300 text-sm font-bold mb-2">
              Nombre de usuario
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Usuario"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 bg-gray-200 placeholder-gray-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-300 text-sm font-bold mb-2">
              Contraseña
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Contraseña"
                className="shadow appearance-none border rounded w-full py-3 px-4 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200 placeholder-gray-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600"
                aria-label="Mostrar u ocultar contraseña"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {state?.error && (
            <p className="text-red-500 text-sm mb-4 text-center">{state.error}</p>
          )}

          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center text-gray-300">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 rounded" />
              <span className="ml-2 text-sm">Recordarme</span>
            </label>
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-6 rounded"
            >
              Login
            </button>
          </div>

          <div className="text-center text-gray-300">
            <p>Si no tienes cuenta <Link href="/register" className="text-blue-500 hover:underline">
              Registrate
            </Link></p>
            
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm


