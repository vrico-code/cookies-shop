
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Catalogo } from './components/Catalogo'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-rose-50 text-rose-900">
      {/* HEADER */}
      <Header />

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-grow">
        <Hero />
        <Features />
        <Catalogo />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}
