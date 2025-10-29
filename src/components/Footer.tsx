export const Footer = () => {
  return (
    <footer className="bg-amber-900 text-amber-100 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p>© {new Date().getFullYear()} Galletas Delicia. Todos los derechos reservados.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="hover:text-white transition">Instagram</a>
          <a href="#" className="hover:text-white transition">Facebook</a>
          <a href="#" className="hover:text-white transition">WhatsApp</a>
        </div>
      </div>
    </footer>
  )
}
