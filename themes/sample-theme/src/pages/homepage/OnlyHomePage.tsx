import React from 'react';
// IMPORTANTE: Ponemos .jsx al final para que el compilador de EverShop no explote
import ProductCard from '../../components/ProductCard.jsx';

export default function OnlyHomePage({ products }: { products: any }) {
  // Extraemos los items de forma segura
  const items = products?.items || [];

  return (
    <div className="home-page-wrapper">
      
      {/* HERO SECTION */}
      <section className="bg-gray-900 text-white py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">ATLANTIKA</h1>
        <p className="mt-4 text-xl text-gray-300 mb-8 max-w-2xl">
          Descubre los mejores estilos para este año. Calidad premium, diseños exclusivos y envío rápido a todo el mundo.
        </p>
        <a href="/category/all" className="inline-block bg-white text-gray-900 font-bold py-3 px-8 rounded-md hover:bg-gray-100 transition duration-300">
          Comprar Ahora
        </a>
      </section>

      {/* CATEGORÍAS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Compra por Categoría</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a href="/category/women" className="group relative block h-64 overflow-hidden rounded-lg bg-gray-100">
            <img src="https://placehold.co/600x400/eeeeee/999999?text=Mujer" alt="Mujer" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"/>
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30"></div>
            <div className="absolute bottom-4 left-4"><h3 className="text-xl font-bold text-white">Mujer</h3></div>
          </a>
          <a href="/category/men" className="group relative block h-64 overflow-hidden rounded-lg bg-gray-100">
            <img src="https://placehold.co/600x400/eeeeee/999999?text=Hombre" alt="Hombre" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"/>
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30"></div>
            <div className="absolute bottom-4 left-4"><h3 className="text-xl font-bold text-white">Hombre</h3></div>
          </a>
          <a href="/category/accessories" className="group relative block h-64 overflow-hidden rounded-lg bg-gray-100">
            <img src="https://placehold.co/600x400/eeeeee/999999?text=Accesorios" alt="Accesorios" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"/>
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30"></div>
            <div className="absolute bottom-4 left-4"><h3 className="text-xl font-bold text-white">Accesorios</h3></div>
          </a>
        </div>
      </section>

      {/* PRODUCTOS DINÁMICOS */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Tendencias Actuales</h2>
          
          {items.length === 0 ? (
            <div className="text-center text-gray-500 py-10">Aún no hay productos publicados.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {items.map((producto: any, index: number) => (
                <ProductCard key={index} product={producto} />
              ))}
            </div>
          )}
        </div>
      </section>

    </div>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 10
};

export const query = `
  query {
    products(filters: [{key: "limit", operation: eq, value: "4"}]) {
      items {
        name
        url
        price { regular { text } }
        image { url }
      }
    }
  }
`;