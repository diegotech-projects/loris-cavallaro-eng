import Link from 'next/link';
import { MdArrowBack, MdConstruction, MdHome } from 'react-icons/md';

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-themeSurface to-themeSurfaceLight">
      {/* Background Engineering Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-2xl px-4 text-center">
        <div className="mb-8">
          <MdConstruction className="mx-auto mb-4 text-6xl text-themeSecondary" />
          <h1 className="mb-4 text-6xl font-bold text-themeTextPrimary">404</h1>
          <h2 className="mb-4 text-2xl font-semibold text-themeTextPrimary">
            Pagina in Costruzione
          </h2>
          <p className="mb-8 text-lg text-themeTextSecondary">
            La pagina che stai cercando non esiste o è stata spostata. Come un
            cantiere in corso, stiamo sempre migliorando la nostra struttura
            digitale.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-lg bg-themeSecondary px-6 py-3 font-semibold text-themeSurface transition-colors hover:bg-themeAccent"
          >
            <MdHome className="text-xl" />
            Torna alla Home
          </Link>

          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-lg border-2 border-themeSecondary px-6 py-3 font-semibold text-themeSecondary transition-colors hover:bg-themeSecondary hover:text-themeSurface"
          >
            <MdArrowBack className="text-xl" />
            Contattaci
          </Link>
        </div>

        {/* Additional Info */}
        <div className="mt-12 rounded-lg border border-themeSurfaceLight bg-themeSurface/80 p-6 backdrop-blur-sm">
          <h3 className="mb-3 text-lg font-semibold text-themeTextPrimary">
            Hai bisogno di aiuto?
          </h3>
          <p className="mb-4 text-themeTextSecondary">
            Il nostro team di ingegneri è sempre disponibile per assistenza
            tecnica e consulenza.
          </p>
          <div className="flex flex-col gap-2 text-sm text-themeTextSecondary sm:flex-row">
            <span>📧 loriscavallaro22@gmail.com</span>
            <span className="hidden sm:inline">|</span>
            <span>📞 +39 380 147 7121</span>
          </div>
        </div>

        {/* Engineering Stats */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div className="rounded-lg bg-themeSecondary/10 p-4">
            <div className="text-2xl font-bold text-themeSecondary">50+</div>
            <div className="text-sm text-themeTextSecondary">
              Progetti Completati
            </div>
          </div>
          <div className="rounded-lg bg-themeSecondary/10 p-4">
            <div className="text-2xl font-bold text-themeSecondary">95%</div>
            <div className="text-sm text-themeTextSecondary">
              Clienti Soddisfatti
            </div>
          </div>
          <div className="rounded-lg bg-themeSecondary/10 p-4">
            <div className="text-2xl font-bold text-themeSecondary">24/7</div>
            <div className="text-sm text-themeTextSecondary">
              Supporto Tecnico
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
