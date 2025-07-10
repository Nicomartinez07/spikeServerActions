'use client'

import { useFormState } from 'react-dom'
import { filtrarAutos } from './actions'


interface Auto {
    id: number | null | undefined;
    Marca: string;  
    Modelo: string;  
    Año: string;  

}

export default function FiltrarAutosForm() {
  const [state, formAction] = useFormState(filtrarAutos, {
    autos: [],
    error: '',
  })

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Filtrar Autos con Server Actions</h1>

      <form action={formAction}>
        <div>
          <label>Marca:</label>
          <input name="Marca" />
        </div>
        <div>
          <label>Modelo:</label>
          <input name="Modelo" />
        </div>
        <div>
          <label>Año:</label>
          <input type="number" name="Año" />
        </div>
        <button type="submit">Buscar</button>
      </form>

      <h2>Resultados:</h2>
      {state.error && <p style={{ color: 'red' }}>{state.error}</p>}

      <ul>
        {state.autos.map((auto: Auto) => (
          <li key={auto.id}>
            {auto.Marca} - {auto.Modelo} ({auto.Año})
          </li>
        ))}
      </ul>
    </main>
  )
}
