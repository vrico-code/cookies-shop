import React from 'react'

export const Hero: React.FC = () => {
  return (
    <section className="bg-amber-100 min-h-[80vh] flex flex-col md:flex-row items-center justify-between px-8 md:px-16 lg:px-24 py-16 md:py-24 rounded-3xl mt-24">
      
      {/* Texto principal */}
      <div className="max-w-lg text-center md:text-left mb-10 md:mb-0">
        <h1 className="text-5xl md:text-6xl font-extrabold text-amber-900 mb-6">
          DULCE TENTACIÓN 🍪
        </h1>
        <p className="text-lg text-amber-800 mb-8">
          Hechas con amor, mantequilla real y los mejores ingredientes.
          Crujientes por fuera, suaves por dentro — ¡simplemente irresistibles!
        </p>
        
        {/* BOTÓN “Haz tu pedido” */}
        <a
          href="#catalogo"
          className="inline-block bg-rose-400 hover:bg-rose-500 text-white font-semibold py-3 px-8 rounded-full shadow-md transition duration-300"
        >
          Haz tu pedido
        </a>
      </div>

      {/* Imagen */}
      <div className="flex justify-center md:justify-end w-full md:w-1/2">
        <img
          src="/src/assets/GALLETASS.jpg"  
          alt="Galletas Dulce Tentación"
          className="rounded-3xl shadow-lg object-cover w-[400px] md:w-[500px] h-auto"
        />
      </div>
    </section>
  )
}
