import React from 'react'

export const Catalogo: React.FC = () => {
  const productos = [
    {
      id: 1,
      nombre: "Caja con Galletas Surtidas",
      precio: 25000,
      imagen: "/src/assets/GALLETAS1.jpeg", 
    },
    {
      id: 2,
      nombre: "Caja de Galletas con Kit Kat",
      precio: 22000,
      imagen: "/src/assets/GALLETAS2.jpeg",
    },
    {
      id: 3,
      nombre: "Caja de Galletas con Milky Way",
      precio: 24000,
      imagen: "/src/assets/GALLETAS3.JPG", 
    },
    {
      id: 4,
      nombre: "Caja de Galletas con Kinder Max",
      precio: 31000,
      imagen: "/src/assets/GALLETAS4.jpg",
    },
  ]

  return (
    <section id="catalogo" className="py-24 bg-white text-amber-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Título y opciones */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-2 text-amber-800">Galletas</h2>
            <p className="text-amber-600">Elige tus favoritas y endulza tu día</p>
          </div>
          <div className="mt-4 md:mt-0">
            <label className="text-sm font-medium text-amber-800 mr-2">
              Ordenar por:
            </label>
            <select className="border border-amber-200 rounded-lg px-3 py-2 text-sm text-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-400">
              <option>Más vendidos</option>
              <option>Precio: menor a mayor</option>
              <option>Precio: mayor a menor</option>
            </select>
          </div>
        </div>

        {/* Grid de productos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {productos.map((p) => (
            <div
              key={p.id}
              className="bg-amber-50 border border-amber-100 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 flex flex-col"
            >
              <img
                src={p.imagen}
                alt={p.nombre}
                className="w-full h-56 object-cover rounded-t-2xl"
              />
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-semibold text-lg mb-2">{p.nombre}</h3>
                <p className="text-amber-700 font-medium mb-4">
                  ${p.precio.toLocaleString()}
                </p>
                <button className="mt-auto bg-rose-400 hover:bg-rose-500 text-white font-semibold py-2 rounded-lg transition">
                  Agregar al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
