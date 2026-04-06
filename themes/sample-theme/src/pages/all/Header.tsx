import Area from '@components/common/Area.js';
import React from 'react';

export default function Header() {
  return (
    <header className="header bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <Area id="headerTop" className="header__top" />
      <div className="max-w-screen-2xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          
          {/* IZQUIERDA: Navegación */}
          <nav className="flex-1 flex gap-8 font-semibold text-sm text-gray-700">
            <a href="/page/productos" className="hover:text-black">LAMINAS</a>
            <a href="/page/productos" className="hover:text-black">PRODUCTOS</a>
          </nav>

          {/* CENTRO: Logo */}
          <div className="flex-none">
            <a href="/" className="block">
              <img 
                src="/images/atlantika_logo_menu.jpeg"
                alt="Logo"
                className="h-10 w-auto"
              />
            </a>
          </div>

          {/* DERECHA: Cuenta y Carrito */}
          <div className="flex-1 flex justify-end items-center gap-6">
            <a href="/account" className="text-sm font-semibold text-gray-700 hover:text-black">CUENTA</a>
            <a href="/cart" className="flex items-center bg-black text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-gray-800 transition">
              CARRITO (0)
            </a>
          </div>

        </div>
      </div>
      <Area id="headerBottom" className="header__bottom" />
    </header>
  );
}

export const layout = {
  areaId: 'wrapper',
  sortOrder: 1,
};