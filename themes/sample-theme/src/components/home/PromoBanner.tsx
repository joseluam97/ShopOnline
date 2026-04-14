import React from 'react';

export default function PromoBanner() {
  return (
    <section className="relative py-32 flex items-center justify-center text-center my-12">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/atlantika_logo.jpeg')" }}>
        <div className="absolute inset-0 bg-teal-900/60 mix-blend-multiply"></div>
      </div>
      <div className="relative z-10 text-white px-4">
        <p className="uppercase tracking-[0.2em] text-xs mb-4">Vuelve a conectar con el océano</p>
        <h2 className="text-4xl md:text-5xl font-serif mb-8">La Magia del Mar en tu Hogar</h2>
        <a href="/category/obras" className="bg-white text-teal-900 px-8 py-3 text-sm font-bold tracking-widest hover:bg-gray-100 transition">
          VER OBRAS DISPONIBLES
        </a>
      </div>
    </section>
  );
}