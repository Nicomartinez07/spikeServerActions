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
  });

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Filtrar Autos</h1>

      <form action={formAction} style={{
        display: 'flex',
        gap: '1rem',
        marginBottom: '1.5rem',
        alignItems: 'flex-end',
        flexWrap: 'wrap'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', }}>
          <label>Marca:</label>
          <input name="Marca" style={{ padding: '0.5rem', border: '1px solid black' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label>Modelo:</label>
          <input name="Modelo" style={{ padding: '0.5rem' ,  border: '1px solid black'}} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label>Año:</label>
          <input type="number" name="Año" style={{ padding: '0.5rem' ,  border: '1px solid black'}} />
        </div>
        <button type="submit" style={{ padding: '0.6rem 1rem' , border: '1px solid black' }}>Buscar</button>
      </form>

      {state.error && <p style={{ color: 'red' }}>{state.error}</p>}

      {state.autos.length > 0 ? (
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginTop: '1rem'
        }}>
          <thead>
            <tr style={{ backgroundColor: '#f0f0f0' }}>
              <th style={{ padding: '0.5rem', border: '1px solid black' }}>Marca</th>
              <th style={{ padding: '0.5rem', border: '1px solid black' }}>Modelo</th>
              <th style={{ padding: '0.5rem', border: '1px solid black' }}>Año</th>
            </tr>
          </thead>
          <tbody>
            {state.autos.map((auto: Auto) => (
              <tr key={auto.id}>
                <td style={{ padding: '0.5rem', border: '1px solid black' }}>{auto.Marca}</td>
                <td style={{ padding: '0.5rem', border: '1px solid black' }}>{auto.Modelo}</td>
                <td style={{ padding: '0.5rem', border: '1px solid black' }}>{auto.Año}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No se encontraron autos.</p>
      )}
    </main>
  )
}
