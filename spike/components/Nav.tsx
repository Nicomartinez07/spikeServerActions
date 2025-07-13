'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()

  const linkStyle = (path: string) =>
    `px-4 py-2 rounded hover:bg-gray-800 transition ${
      pathname === path ? 'bg-gray-700 font-semibold' : ''
    }`

  return (
    <nav className="w-full flex gap-4 p-4 bg-black text-white shadow-md">
      <Link href="/autos" className={linkStyle('/auto')}>
        Autos
      </Link>
      <Link href="/autos/filtrar" className={linkStyle('/autos/filtrar')}>
        Filtrado
      </Link>
    </nav>
  )
}
