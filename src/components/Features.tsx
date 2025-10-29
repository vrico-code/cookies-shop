import React from 'react'

export const Features: React.FC = () => {
  const features = [
    {
      icon: '🌿',
      title: 'Ingredientes naturales',
      desc: 'Hechas con mantequilla real, harina artesanal y chispas de chocolate 100% cacao.',
    },
    {
      icon: '🍪',
      title: 'Sabor irresistible',
      desc: 'Cada galleta tiene el equilibrio perfecto entre lo crujiente y lo suave. ¡Una delicia en cada bocado!',
    },
    {
      icon: '❤️',
      title: 'Horneadas con amor',
      desc: 'Preparadas a diario por manos expertas, frescas y con ese toque casero que enamora.',
    },
  ]

  return (
    <section id="features" className="bg-rose-100 py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-16 text-rose-800">
          ¿Por qué amar nuestras galletas?
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-md p-10 hover:shadow-xl transition w-full md:w-1/3 border border-rose-200"
            >
              <div className="text-6xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-rose-800">{item.title}</h3>
              <p className="text-rose-700 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
