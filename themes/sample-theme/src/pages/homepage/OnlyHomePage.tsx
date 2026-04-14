import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard.jsx'; // Importamos nuestro componente reusable

export default function OnlyHomePage() {
  // 1. Estados para manejar los datos
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  // 2. Pedimos los datos a la base de datos al cargar la página
  useEffect(() => {
    // Consulta GraphQL: Pedimos los últimos 4 productos
    const query = `
      query {
        products(filters: [{key: "limit", operation: "eq", value: "4"}]) {
          items {
            name
            url
            price {
              regular {
                text
              }
            }
            image {
              url
            }
          }
        }
      }
    `;

    fetch('/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    })
      .then((res) => res.json())
      .then((resultado) => {
        if (resultado.data && resultado.data.products) {
          setProductos(resultado.data.products.items);
        }
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error cargando productos:", error);
        setCargando(false);
      });
  }, []);

  return (
    <div className="home-page-wrapper">
      
      {/* 1. HERO SECTION (Se mantiene igual) */}
      <section className="bg-gray-900 text-white py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">ATLANTIKA</h1>
        <p className="mt-4 text-xl text-gray-300 mb-8 max-w-2xl">
          Descubre los mejores estilos para este año. Calidad premium, diseños exclusivos y envío rápido a todo el mundo.
        </p>
        <a href="/category/all" className="inline-block bg-white text-gray-900 font-bold py-3 px-8 rounded-md hover:bg-gray-100 transition duration-300">
          Comprar Ahora
        </a>
      </section>

      {/* 2. CATEGORÍAS DESTACADAS (Se mantiene igual, la abrevio aquí por espacio, pero mantén tu HTML original si quieres) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Compra por Categoría</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mujer */}
          <a href="/category/women" className="group relative block h-64 overflow-hidden rounded-lg bg-gray-100">
            <img src="https://placehold.co/600x400/eeeeee/999999?text=Mujer" alt="Mujer" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"/>
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity"></div>
            <div className="absolute bottom-4 left-4"><h3 className="text-xl font-bold text-white">Mujer</h3></div>
          </a>
          {/* Hombre */}
          <a href="/category/men" className="group relative block h-64 overflow-hidden rounded-lg bg-gray-100">
            <img src="https://placehold.co/600x400/eeeeee/999999?text=Hombre" alt="Hombre" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"/>
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity"></div>
            <div className="absolute bottom-4 left-4"><h3 className="text-xl font-bold text-white">Hombre</h3></div>
          </a>
          {/* Accesorios */}
          <a href="/category/accessories" className="group relative block h-64 overflow-hidden rounded-lg bg-gray-100">
            <img src="https://placehold.co/600x400/eeeeee/999999?text=Accesorios" alt="Accesorios" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"/>
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity"></div>
            <div className="absolute bottom-4 left-4"><h3 className="text-xl font-bold text-white">Accesorios</h3></div>
          </a>
        </div>
      </section>

      {/* 3. PRODUCTOS DESTACADOS DINÁMICOS */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Tendencias Actuales</h2>
          
          {cargando ? (
            <div className="text-center text-gray-500 py-10">Cargando la colección de Atlantika...</div>
          ) : productos.length === 0 ? (
            <div className="text-center text-gray-500 py-10">Aún no hay productos publicados.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Aquí usamos nuestro componente reutilizable, pasándole los datos */}
              {productos.map((producto, index) => (
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