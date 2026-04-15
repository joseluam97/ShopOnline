import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center text-center">
      {/* Fondo con superposición oscura */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: "url('/images/atlantika_logo.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Contenido */}
      <div className="relative z-10 text-white px-4 max-w-4xl mx-auto flex flex-col items-center">
        <p className="uppercase tracking-[0.3em] text-xs md:text-sm mb-6 font-light">
          Bienvenidos a Atlantika
        </p>
        <h1 className="text-5xl md:text-7xl font-serif mb-10 text-white">
          Arte en Resina
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <a href="/all-products" className="border border-white px-10 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition duration-300">
            VER OBRAS EN STOCK
          </a>
          {/*<a href="/category/materiales" className="border border-white px-10 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition duration-300">
            COMPRAR MATERIALES
          </a>*/}
        </div>
      </div>
    </section>
  );
}