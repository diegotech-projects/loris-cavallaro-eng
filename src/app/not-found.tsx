import Link from 'next/link';
import { MdHome, MdConstruction, MdArrowBack } from 'react-icons/md';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-themeSurface to-themeSurfaceLight relative overflow-hidden">
      {/* Background Engineering Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <div className="mb-8">
          <MdConstruction className="mx-auto text-6xl text-themeSecondary mb-4" />
          <h1 className="text-6xl font-bold text-themeTextPrimary mb-4">
            404
          </h1>
          <h2 className="text-2xl font-semibold text-themeTextPrimary mb-4">
            Pagina in Costruzione
          </h2>
          <p className="text-lg text-themeTextSecondary mb-8">
            La pagina che stai cercando non esiste o è stata spostata. 
            Come un cantiere in corso, stiamo sempre migliorando la nostra struttura digitale.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="flex items-center gap-2 px-6 py-3 bg-themeSecondary text-themeSurface rounded-lg hover:bg-themeAccent transition-colors font-semibold"
          >
            <MdHome className="text-xl" />
            Torna alla Home
          </Link>
          
          <Link 
            href="/contact"
            className="flex items-center gap-2 px-6 py-3 border-2 border-themeSecondary text-themeSecondary rounded-lg hover:bg-themeSecondary hover:text-themeSurface transition-colors font-semibold"
          >
            <MdArrowBack className="text-xl" />
            Contattaci
          </Link>
        </div>

        {/* Additional Info */}
        <div className="mt-12 p-6 bg-themeSurface/80 backdrop-blur-sm rounded-lg border border-themeSurfaceLight">
          <h3 className="text-lg font-semibold text-themeTextPrimary mb-3">
            Hai bisogno di aiuto?
          </h3>
          <p className="text-themeTextSecondary mb-4">
            Il nostro team di ingegneri è sempre disponibile per assistenza tecnica e consulenza.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 text-sm text-themeTextSecondary">
            <span>📧 loriscavallaro22@gmail.com</span>
            <span className="hidden sm:inline">|</span>
            <span>📞 +39 380 147 7121</span>
          </div>
        </div>

        {/* Engineering Stats */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div className="p-4 bg-themeSecondary/10 rounded-lg">
            <div className="text-2xl font-bold text-themeSecondary">50+</div>
            <div className="text-sm text-themeTextSecondary">Progetti Completati</div>
          </div>
          <div className="p-4 bg-themeSecondary/10 rounded-lg">
            <div className="text-2xl font-bold text-themeSecondary">95%</div>
            <div className="text-sm text-themeTextSecondary">Clienti Soddisfatti</div>
          </div>
          <div className="p-4 bg-themeSecondary/10 rounded-lg">
            <div className="text-2xl font-bold text-themeSecondary">24/7</div>
            <div className="text-sm text-themeTextSecondary">Supporto Tecnico</div>
          </div>
        </div>
      </div>
    </div>
  );
}