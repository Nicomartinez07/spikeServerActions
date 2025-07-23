// components/Sidebar.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  const linkStyle = (path: string): string =>
    `px-4 py-2 rounded text-white hover:bg-gray-800 transition-colors duration-200 ${
      pathname === path ? 'bg-gray-700 font-semibold' : ''
    }`;

  return (
    <nav className="bg-black text-white w-full shadow-md flex justify-around p-4">
      <Link href="/autos" className={linkStyle('/auto')}>
        Autos
      </Link>
      <Link href="/autos/filtrar" className={linkStyle('/autos/filtrar')}>
        Filtrado
      </Link>
      <Link href="/login" className={linkStyle('/login')}>
        Login
      </Link>
      <a
        href="/tarifario.txt"
        download
        className={linkStyle('/tarifario.txt')}
      >
        Tarifario
      </a>
      <a
        href="https://drive.google.com/drive/folders/1unjLakNYCpBBbOorUzeuMp0N5jAs1qSt"
        className={linkStyle('/InfoTecnica')}
        target="_blank"
        rel="noopener noreferrer"
      >
        InfoTecnica
      </a>
      
    </nav>
  );
};

export default Sidebar;
