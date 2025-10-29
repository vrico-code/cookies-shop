export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-8">
        {/* LOGO SOLAMENTE */}
        <div className="flex items-center">
          <img
            src="/src/assets/LOGO GALLETAS.jpg"
            alt="Logo Dulce Tentación"
            className="w-12 h-12 rounded-full object-cover shadow-md"
          />
        </div>

        {/* MENÚ DE NAVEGACIÓN */}
        <nav className="hidden md:flex space-x-8 text-amber-700 font-medium">
          <a href="#features" className="hover:text-amber-900 transition">Características</a>
          <a href="#catalogo" className="hover:text-amber-900 transition">Catálogo</a>
          <a href="#contacto" className="hover:text-amber-900 transition">Contacto</a>
        </nav>
      </div>
    </header>
  );
};
