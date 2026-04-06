import React from 'react';

export default function ProductMold() {
  return (
    <div className="container mx-auto p-8 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Lado izquierdo: Imagen del producto */}
        <div className="bg-gray-200 h-96 flex items-center justify-center rounded-lg border">
          <span className="text-gray-500 font-medium">📷 Imagen del Producto (Placeholder)</span>
        </div>

        {/* Lado derecho: Detalles del producto */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">Postal Océano Profundo</h1>
          
          <p className="text-2xl text-blue-600 font-semibold mb-6">€14.99</p>
          
          <p className="mb-8 text-gray-700 leading-relaxed">
            Esta es la descripción detallada de tu producto. Una postal de diseño exclusivo 
            inspirada en las profundidades de Atlantika. Impresa en papel fotográfico de alta 
            calidad con acabado mate. Ideal para regalar o enmarcar.
          </p>

          {/* Selector de cantidad y Botón */}
          <div className="flex gap-4">
            <input 
              type="number" 
              defaultValue="1" 
              className="border p-3 w-20 text-center rounded"
            />
            <button className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors font-bold">
              Añadir al Carrito
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

// Inyectamos este código en el área principal de la web
export const layout = {
  areaId: 'content',
  sortOrder: 1
};