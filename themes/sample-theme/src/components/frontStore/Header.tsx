import Area from '@components/common/Area.js';
import React, { useState } from 'react';

// OJO: Es export function, SIN 'default'
export function Header() {
  // Estados para controlar los menús en la versión móvil
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileJoyeriaOpen, setIsMobileJoyeriaOpen] = useState(false);

  return (
    <header className="header bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <Area id="headerTop" className="header__top" />
      <div className="max-w-screen-2xl mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          
          {/* === IZQUIERDA: Menú Hamburguesa (Móvil) + Navegación (Desktop) === */}
          <div className="flex-1 flex items-center">
            
            {/* Botón Hamburguesa (Solo visible en móviles y tablets) */}
            <button 
              className="lg:hidden p-2 text-gray-700 hover:text-black"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>

            {/* Navegación Desktop (Oculta en móvil, se muestra a partir de pantallas grandes) */}
            <nav className="hidden lg:flex gap-6 xl:gap-8 font-semibold text-xs xl:text-sm text-gray-700 items-center">
              <a href="/all-products" className="hover:text-teal-700 transition whitespace-nowrap">OBRAS EN STOCK</a>
              <a href="/commissioned-works" className="hover:text-teal-700 transition whitespace-nowrap">OBRAS POR ENCARGO</a>
              
              {/* DESPLEGABLE: Joyería */}
              <div className="relative group py-4">
                <button className="hover:text-teal-700 transition whitespace-nowrap flex items-center gap-1 uppercase">
                  Joyería
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </button>
                {/* Menú flotante invisible hasta que pasas el ratón (group-hover) */}
                <div className="absolute top-full left-0 w-48 bg-white border border-gray-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col z-50">
                  <a href="/all-products/joyeria-oceanica" className="px-4 py-3 hover:bg-gray-50 hover:text-teal-700 border-b border-gray-50 whitespace-nowrap">Joyería Oceánica</a>
                  <a href="/all-products/joyeria-floral" className="px-4 py-3 hover:bg-gray-50 hover:text-teal-700 whitespace-nowrap">Joyería Floral</a>
                </div>
              </div>

              <a href="/all-products/prints" className="hover:text-teal-700 transition whitespace-nowrap">PRINTS</a>
              <a href="/contacto" className="hover:text-teal-700 transition whitespace-nowrap">CONTACTO</a>
              {/*<a href="/atlantika" className="hover:text-teal-700 transition whitespace-nowrap">ATLANTIKA</a>*/}
            </nav>
          </div>

          {/* === CENTRO: Logo === */}
          <div className="flex-none flex justify-center">
            <a href="/" className="block">
              <img 
                src="/images/atlantika_logo_menu.jpeg"
                alt="Logo Atlantika"
                className="h-10 md:h-12 w-auto"
              />
            </a>
          </div>

          {/* === DERECHA: Icono del Carrito === */}
          <div className="flex-1 flex justify-end items-center">
            <a href="/cart" className="relative p-2 text-gray-700 hover:text-teal-700 transition flex items-center group">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              {/* Globo numérico del carrito */}
              <span className="absolute top-0 right-0 bg-teal-800 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                0
              </span>
            </a>
          </div>

        </div>
      </div>
      
      {/* =========================================================
          MENÚ LATERAL MÓVIL (Se desliza desde la izquierda)
          ========================================================= */}
      <div className={`fixed inset-0 z-[100] lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        
        {/* Fondo oscuro para cerrar al hacer clic fuera */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
        
        {/* Panel blanco del menú */}
        <div className={`absolute top-0 left-0 w-4/5 max-w-sm h-full bg-white shadow-2xl transition-transform duration-300 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} overflow-y-auto`}>
          
          {/* Cabecera del menú móvil */}
          <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
            <img src="/images/atlantika_logo_menu.jpeg" alt="Logo" className="h-8 w-auto" />
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-gray-500 hover:text-black bg-white rounded-full shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Enlaces del menú móvil */}
          <nav className="flex flex-col p-6 font-semibold text-sm text-gray-800 tracking-wide">
            <a href="/page/productos" className="py-4 border-b border-gray-100 hover:text-teal-700">OBRAS EN STOCK</a>
            <a href="/page/productos" className="py-4 border-b border-gray-100 hover:text-teal-700">OBRAS POR ENCARGO</a>
            
            {/* Acordeón de Joyería (Móvil) */}
            <div className="border-b border-gray-100">
              <button 
                className="w-full text-left py-4 flex justify-between items-center uppercase hover:text-teal-700"
                onClick={() => setIsMobileJoyeriaOpen(!isMobileJoyeriaOpen)}
              >
                Joyería
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-5 h-5 transition-transform duration-300 ${isMobileJoyeriaOpen ? 'rotate-180 text-teal-700' : 'text-gray-400'}`}>
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              {/* Opciones internas del acordeón */}
              <div className={`flex flex-col overflow-hidden transition-all duration-300 ${isMobileJoyeriaOpen ? 'max-h-40 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                <a href="/page/productos" className="py-2 pl-4 text-gray-500 hover:text-teal-700 border-l-2 border-transparent hover:border-teal-700 transition">Joyería Oceánica</a>
                <a href="/page/productos" className="py-2 pl-4 text-gray-500 hover:text-teal-700 border-l-2 border-transparent hover:border-teal-700 transition">Joyería Floral</a>
              </div>
            </div>

            <a href="/page/productos" className="py-4 border-b border-gray-100 hover:text-teal-700">PRINTS</a>
            <a href="/page/productos" className="py-4 border-b border-gray-100 hover:text-teal-700">CONTACTO</a>
            <a href="/page/productos" className="py-4 hover:text-teal-700">ATLANTIKA</a>
          </nav>
        </div>
      </div>

      <Area id="headerBottom" className="header__bottom" />
    </header>
  );
}