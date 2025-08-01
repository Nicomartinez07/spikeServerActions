'use client'

import React, { useState } from 'react'
import { useFormState } from 'react-dom'
import { registerUser } from '@/app/register/action'
import { Eye, EyeOff } from 'lucide-react'

const RegisterForm = () => {
  const [state, formAction] = useFormState(registerUser, {})
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Crear cuenta nueva</h1>

        <form action={formAction}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-bold mb-2">
              Nombre de usuario
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Ej: juan123"
              className="w-full px-4 py-3 rounded bg-gray-700 text-white placeholder-gray-400"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-bold mb-2">
              Contraseña
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Mínimo 6 caracteres"
                className="w-full px-4 py-3 pr-10 rounded bg-gray-700 text-white placeholder-gray-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {state?.error && (
            <p className="text-red-400 text-sm text-center mb-4">{state.error}</p>
          )}

          {state?.success && (
            <p className="text-green-400 text-sm text-center mb-4">
              ¡Usuario creado con éxito!
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded"
          >
            Registrarme
          </button>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm
