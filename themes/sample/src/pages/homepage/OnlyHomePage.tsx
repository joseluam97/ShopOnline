import React from 'react';

export default function OnlyHomePage() {
  return (
    <div className="home-page-wrapper">
      
      {/* 1. HERO SECTION (Banner Principal) */}
      <section className="bg-gray-900 text-white py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          ATLANTIKA
        </h1>
        <p className="mt-4 text-xl text-gray-300 mb-8 max-w-2xl">
          Descubre los mejores estilos para este año. Calidad premium, diseños exclusivos y envío rápido a todo el mundo.
        </p>
        <a 
          href="/category/all" 
          className="inline-block bg-white text-gray-900 font-bold py-3 px-8 rounded-md hover:bg-gray-100 transition duration-300"
        >
          Comprar Ahora
        </a>
      </section>

      {/* 2. CATEGORÍAS DESTACADAS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Compra por Categoría</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tarjeta Categoría 1 */}
          <a href="/category/women" className="group relative block h-64 overflow-hidden rounded-lg bg-gray-100">
            <img 
              src="https://placehold.co/600x400/eeeeee/999999?text=Mujer" 
              alt="Categoría Mujer" 
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity"></div>
            <div className="absolute bottom-4 left-4">
              <h3 className="text-xl font-bold text-white">Mujer</h3>
            </div>
          </a>

          {/* Tarjeta Categoría 2 */}
          <a href="/category/men" className="group relative block h-64 overflow-hidden rounded-lg bg-gray-100">
            <img 
              src="https://placehold.co/600x400/eeeeee/999999?text=Hombre" 
              alt="Categoría Hombre" 
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity"></div>
            <div className="absolute bottom-4 left-4">
              <h3 className="text-xl font-bold text-white">Hombre</h3>
            </div>
          </a>

          {/* Tarjeta Categoría 3 */}
          <a href="/category/accessories" className="group relative block h-64 overflow-hidden rounded-lg bg-gray-100">
            <img 
              src="https://placehold.co/600x400/eeeeee/999999?text=Accesorios" 
              alt="Categoría Accesorios" 
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity"></div>
            <div className="absolute bottom-4 left-4">
              <h3 className="text-xl font-bold text-white">Accesorios</h3>
            </div>
          </a>
        </div>
      </section>

      {/* 3. PRODUCTOS DESTACADOS (Tendencias) */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Tendencias Actuales</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Producto 1 */}
            <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden p-4">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:h-64 mb-4">
                <img src="https://placehold.co/400x500/eeeeee/999999?text=Producto+1" alt="Producto 1" className="h-full w-full object-cover" />
              </div>
              <h3 className="text-sm text-gray-700 font-medium">Camiseta Básica Premium</h3>
              <p className="mt-1 text-lg font-bold text-gray-900">$25.00</p>
            </div>

            {/* Producto 2 */}
            <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden p-4">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:h-64 mb-4">
                <img src="https://placehold.co/400x500/eeeeee/999999?text=Producto+2" alt="Producto 2" className="h-full w-full object-cover" />
              </div>
              <h3 className="text-sm text-gray-700 font-medium">Chaqueta de Cuero Sintético</h3>
              <p className="mt-1 text-lg font-bold text-gray-900">$89.99</p>
            </div>

            {/* Producto 3 */}
            <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden p-4">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:h-64 mb-4">
                <img src="https://placehold.co/400x500/eeeeee/999999?text=Producto+3" alt="Producto 3" className="h-full w-full object-cover" />
              </div>
              <h3 className="text-sm text-gray-700 font-medium">Zapatillas Urbanas Clásicas</h3>
              <p className="mt-1 text-lg font-bold text-gray-900">$55.00</p>
            </div>

            {/* Producto 4 */}
            <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden p-4">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:h-64 mb-4">
                <img src="https://placehold.co/400x500/eeeeee/999999?text=Producto+4" alt="Producto 4" className="h-full w-full object-cover" />
              </div>
              <h3 className="text-sm text-gray-700 font-medium">Gafas de Sol Polarizadas</h3>
              <p className="mt-1 text-lg font-bold text-gray-900">$19.50</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

// Esto le dice a Evershop en qué parte de la página inyectar este componente
export const layout = {
  areaId: 'content',
  sortOrder: 10
};