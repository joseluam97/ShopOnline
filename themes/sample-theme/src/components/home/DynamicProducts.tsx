import React from 'react';

// Este componente recibe los productos de la base de datos que le pasará OnlyHomePage
export default function DynamicProducts({ items }: { items: any[] }) {
  return (
    <section className="py-20 px-6 max-w-screen-2xl mx-auto">
      <div className="flex justify-between items-end mb-12 border-b border-gray-200 pb-4">
        <h2 className="text-3xl font-serif text-teal-900">Productos Atlantika</h2>
        <a href="/category/all" className="bg-teal-900 text-white px-6 py-2 text-xs tracking-widest uppercase hover:bg-teal-800 transition">
          Ver Todo
        </a>
      </div>

      {items.length === 0 ? (
        <p className="text-center text-gray-500 py-10">Aún no hay productos publicados.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((producto, index) => {
            const imageUrl = producto.image?.url || "/images/atlantika_logo.jpeg";
            return (
              <a key={index} href={producto.url} className="group block">
                <div className="aspect-[4/5] overflow-hidden bg-gray-100 mb-4 rounded-sm">
                  <img src={imageUrl} alt={producto.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500"/>
                </div>
                <h3 className="text-gray-800 font-serif text-lg mb-1 group-hover:text-teal-700 transition">{producto.name}</h3>
                <p className="text-gray-500 text-sm">{producto.price?.regular?.text}</p>
              </a>
            );
          })}
        </div>
      )}
    </section>
  );
}