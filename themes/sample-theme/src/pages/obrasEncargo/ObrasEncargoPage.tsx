import React from 'react';

export default function ObrasEncargoPage() {
  return (
    <div className="bg-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center text-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: "url('/images/atlantika_logo.jpeg')" }}
        >
          <div className="absolute inset-0 bg-teal-900/40"></div>
        </div>
        
        <div className="relative z-10 text-white px-4 max-w-4xl mx-auto flex flex-col items-center">
          <p className="uppercase tracking-[0.2em] text-xs mb-4">A Tu Medida</p>
          <h1 className="text-4xl md:text-6xl font-serif mb-8 text-white drop-shadow-md">
            Obras únicas creadas para ti.
          </h1>
          <a href="#formulario-encargo" className="bg-white text-teal-900 px-8 py-3 text-sm font-bold tracking-widest hover:bg-gray-100 transition shadow-lg">
            SOLICITAR PRESUPUESTO
          </a>
        </div>
      </section>

      {/* 2. INTRODUCCIÓN */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-serif text-teal-900 mb-8">Cada rincón cuenta una historia</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Transforma tu espacio con una obra de arte original inspirada en la belleza y la fuerza del océano. 
          Trabajaremos juntos para elegir la paleta de colores, las dimensiones exactas y el estilo que mejor 
          se adapte a tu hogar o lugar de trabajo.
        </p>
        <p className="text-gray-600 leading-relaxed font-semibold">
          El proceso es sencillo y estarás involucrado en cada etapa de la creación.
        </p>
      </section>

      {/* 3. PROCESO (Iconos o Pasos) */}
      <section className="bg-[#f8f9fa] py-16 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {[
            { step: '1', title: 'Tu Idea', desc: 'Cuéntame qué tienes en mente, medidas y colores.' },
            { step: '2', title: 'Presupuesto', desc: 'Te enviaré una propuesta detallada sin compromiso.' },
            { step: '3', title: 'Creación', desc: 'Te enviaré fotos del proceso de tu obra.' },
            { step: '4', title: 'Envío', desc: 'Recibe tu obra lista para colgar y disfrutar.' }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full border border-teal-900 text-teal-900 flex items-center justify-center font-serif text-xl mb-4">
                {item.step}
              </div>
              <h3 className="font-serif text-lg text-teal-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. GALERÍA INSPIRACIONAL */}
      <section className="max-w-screen-2xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-serif text-teal-900 text-center mb-12">Obras que ya han encontrado su hogar</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img src="/images/atlantika_logo.jpeg" alt="Obra 1" className="w-full h-[400px] object-cover hover:opacity-90 transition"/>
          <img src="/images/atlantika_logo.jpeg" alt="Obra 2" className="w-full h-[400px] object-cover hover:opacity-90 transition"/>
          <img src="/images/atlantika_logo.jpeg" alt="Obra 3" className="w-full h-[400px] object-cover hover:opacity-90 transition"/>
        </div>
      </section>

      {/* 5. FORMULARIO DE ENCARGO */}
      <section id="formulario-encargo" className="bg-teal-900 text-white py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Realiza tu Encargo</h2>
            <p className="text-teal-100/80 text-sm">Rellena este formulario y me pondré en contacto contigo lo antes posible para darle vida a tu idea.</p>
          </div>

          <form className="space-y-6 bg-white text-gray-800 p-8 md:p-12 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Nombre *</label>
                <input type="text" required className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-teal-700 transition bg-transparent" placeholder="Tu nombre completo"/>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email *</label>
                <input type="email" required className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-teal-700 transition bg-transparent" placeholder="tu@email.com"/>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Teléfono</label>
                <input type="tel" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-teal-700 transition bg-transparent" placeholder="+34 600 000 000"/>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Medidas Aproximadas</label>
                <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-teal-700 transition bg-transparent" placeholder="Ej: 120x80 cm"/>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Cuéntame tu idea *</label>
              <textarea rows={4} required className="w-full border border-gray-300 p-3 focus:outline-none focus:border-teal-700 transition resize-y bg-transparent" placeholder="Tonos azules, para un salón luminoso..."></textarea>
            </div>

            <div className="text-center pt-6">
              <button type="button" className="bg-teal-900 text-white font-bold tracking-widest uppercase text-sm px-12 py-4 hover:bg-teal-800 transition w-full md:w-auto">
                ENVIAR SOLICITUD
              </button>
            </div>
          </form>

        </div>
      </section>

    </div>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 10
};