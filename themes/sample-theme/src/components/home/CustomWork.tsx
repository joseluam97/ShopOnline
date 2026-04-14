import React from 'react';

export default function CustomWork() {
  return (
    <section className="bg-teal-900 text-white">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row">
        {/* Mitad Imagen */}
        <div className="md:w-1/2 min-h-[400px] relative">
          <img 
            src="/images/atlantika_logo.jpeg" 
            alt="Obras a medida" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        
        {/* Mitad Texto */}
        <div className="md:w-1/2 p-12 md:p-24 flex flex-col justify-center">
          <p className="uppercase tracking-[0.2em] text-xs text-teal-200 mb-4">A tu medida</p>
          <h2 className="text-4xl font-serif mb-8">Obras creadas a medida.</h2>
          <p className="text-teal-100 mb-10 leading-relaxed max-w-md">
            Cuéntame tu idea y transformaré ese rincón especial de tu casa con una pieza única inspirada en el océano, adaptada a tus colores y medidas.
          </p>
          <div>
            <a href="/contacto" className="border border-white px-8 py-3 text-sm tracking-widest hover:bg-white hover:text-teal-900 transition inline-block">
              SOLICITAR PRESUPUESTO
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}