import React from 'react';

// IMPORTANTE: Recuerda nuestra regla de oro con TypeScript en EverShop (.jsx)
import HeroSection from '../../components/home/HeroSection.jsx';
import IntroCards from '../../components/home/IntroCards.jsx';
import DynamicProducts from '../../components/home/DynamicProducts.jsx';
import PromoBanner from '../../components/home/PromoBanner.jsx';
import CustomWork from '../../components/home/CustomWork.jsx';

export default function OnlyHomePage({ products }: { products: any }) {
  // Extraemos los productos de la base de datos de EverShop
  const items = products?.items || [];

  return (
    <div className="home-page-wrapper bg-white">
      {/* 1. Banner Principal */}
      <HeroSection />

      {/* 2. Tarjetas de Introducción */}
      <IntroCards />

      {/* 3. Rejilla de Productos Dinámicos (Le pasamos los datos) */}
      <DynamicProducts items={items} />

      {/* 4. Banner Promocional Secundario */}
      <PromoBanner />

      {/* 5. Sección de Obras a Medida (Footer) */}
      <CustomWork />
    </div>
  );
}

// Inyección en la plantilla de EverShop
export const layout = {
  areaId: 'content',
  sortOrder: 10
};

// Petición GraphQL para alimentar el componente DynamicProducts
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