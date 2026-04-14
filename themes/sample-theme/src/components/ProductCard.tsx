import React from 'react';

// Definimos qué datos necesita recibir nuestra tarjeta
interface ProductCardProps {
  product: {
    name: string;
    url: string;
    price: {
      regular: {
        text: string;
      };
    };
    image?: {
      url: string;
    };
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  // Imagen por defecto por si el producto no tiene foto en el admin
  const imageUrl = product.image?.url || "https://placehold.co/400x500/eeeeee/999999?text=Sin+Imagen";

  return (
    <a href={product.url} className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden p-4 block">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:h-64 mb-4 relative">
        <img 
          src={imageUrl} 
          alt={product.name} 
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
      </div>
      <h3 className="text-sm text-gray-700 font-medium line-clamp-1">{product.name}</h3>
      <p className="mt-1 text-lg font-bold text-gray-900">{product.price?.regular?.text}</p>
    </a>
  );
}