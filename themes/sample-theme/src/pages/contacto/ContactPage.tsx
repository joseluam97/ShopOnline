import React from 'react';

export default function ContactPage() {
  return (
    <div className="bg-white">
      
      {/* 1. SECCIÓN SUPERIOR: Información y Logo */}
      <section className="max-w-screen-xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-[#f8f9fa] rounded-sm overflow-hidden shadow-sm">

          {/* Izquierda: Textos */}
          <div className="p-8 md:p-16 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-serif text-teal-900 mb-6">Contáctanos</h1>
            <p className="text-gray-700 text-sm mb-4 leading-relaxed">
              Si tienes alguna duda sobre nuestras obras, encargos personalizados o simplemente quieres contarnos algo, ¡puedes escribirnos! ✨
            </p>
            <p className="text-gray-700 text-sm mb-8 leading-relaxed">
              Tu opinión es muy importante para nosotros. Si en algún momento tienes una pregunta, inquietud o sugerencia, no dudes en ponerte en contacto con nuestro equipo.
            </p>

            <h3 className="text-xl font-serif text-teal-900 mb-4">Horario Atención Al Cliente</h3>
            <ul className="text-gray-700 text-sm mb-8 list-disc pl-5">
              <li>Lunes - Viernes: 9:00h - 19:00h</li>
            </ul>

            <div className="space-y-2 text-sm text-gray-800">
              <p><strong className="font-semibold text-teal-900">Email:</strong> info@atlantika.com</p>
              <p><strong className="font-semibold text-teal-900">Tlf / WhatsApp:</strong> +34 600 000 000</p>
            </div>
          </div>

          {/* Derecha: Imagen/Logo */}
          <div className="bg-white flex items-center justify-center p-8 border-l border-gray-100">
            <img 
              src="/images/atlantika_logo.jpeg" 
              alt="Atlantika Logo" 
              className="max-w-xs md:max-w-sm w-full h-auto object-contain opacity-90"
            />
          </div>

        </div>
      </section>

      {/* 2. SECCIÓN INFERIOR: Formulario */}
      <section className="max-w-3xl mx-auto px-4 py-8 mb-20">
        <h2 className="text-3xl md:text-4xl font-serif text-teal-900 text-center mb-12">
          ¿Cómo te podemos ayudar?
        </h2>

        <form className="space-y-6">
          {/* Nombre */}
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Nombre</label>
            <input 
              type="text" 
              className="w-full border border-gray-300 p-3 focus:outline-none focus:border-teal-700 transition"
              placeholder="Tu nombre"
            />
          </div>

          {/* Correo */}
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Correo Electrónico *</label>
            <input 
              type="email" 
              required
              className="w-full border border-gray-300 p-3 focus:outline-none focus:border-teal-700 transition"
              placeholder="tu@email.com"
            />
          </div>

          {/* Teléfono */}
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Número de teléfono</label>
            <input 
              type="tel" 
              className="w-full border border-gray-300 p-3 focus:outline-none focus:border-teal-700 transition"
              placeholder="+34 600 00 00 00"
            />
          </div>

          {/* Comentario */}
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Comentario</label>
            <textarea 
              rows={5}
              className="w-full border border-gray-300 p-3 focus:outline-none focus:border-teal-700 transition resize-y"
              placeholder="Escribe tu mensaje aquí..."
            ></textarea>
          </div>

          {/* Botón */}
          <div className="text-center pt-6">
            {/* Nota: Es un botón visual. Más adelante lo conectaremos a un servicio de emails */}
            <button 
              type="button" 
              className="bg-teal-900 text-white font-bold tracking-widest uppercase text-sm px-12 py-4 hover:bg-teal-800 transition shadow-sm"
            >
              Enviar Mensaje
            </button>
          </div>
        </form>
      </section>

    </div>
  );
}

// Inyectamos el diseño en el cuerpo de la web
export const layout = {
  areaId: 'content',
  sortOrder: 10
};