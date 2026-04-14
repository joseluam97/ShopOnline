import React from 'react';

export default function IntroCards() {
  return (
    <section className="py-24 px-6 max-w-screen-2xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-serif text-teal-900 mb-16 max-w-2xl mx-auto leading-relaxed">
        El alma del Mar capturada en resina.
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: 'Conoce mi historia', btn: 'SOBRE MÍ' },
          { title: 'Aprende conmigo', btn: 'CURSOS ONLINE' },
          { title: 'Decora tu hogar', btn: 'OBRAS ORIGINALES' }
        ].map((card, i) => (
          <div key={i} className="group relative h-96 overflow-hidden rounded-sm cursor-pointer">
            <img 
              src="/images/atlantika_logo.jpeg" 
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
              <h3 className="text-white text-xl font-serif mb-4 drop-shadow-md">{card.title}</h3>
              <span className="bg-white/90 text-teal-900 px-6 py-2 text-xs font-bold tracking-widest uppercase hover:bg-white transition">
                {card.btn}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}