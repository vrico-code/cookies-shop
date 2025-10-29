import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-amber-50 text-gray-800 font-sans w-svw">
      <h1 className="text-4xl font-bold text-amber-700">🍪 Bienvenidos a Galletas Dulzura</h1>
      <p className="mt-4 text-lg">Las galletas más deliciosas hechas con amor 💛</p>
      <button className="mt-6 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700">
        Ordenar ahora
      </button>
    </div>
  );
}

export default App
