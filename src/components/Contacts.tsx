'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaBuilding, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import ContactMap from './ContactMap';

function Appointment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
    gdprConsent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value;
    
    setFormData({
      ...formData,
      [target.name]: value
    });
  };

  return (
    <div className="container-custom">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-themeTextPrimary mb-6">
            Richiedi una Consulenza
          </h2>
          <p className="text-themeTextSecondary mb-8">
            Contattaci per discutere del tuo progetto di ingegneria civile. 
            Il nostro team ti fornirà una consulenza professionale personalizzata.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-themeTextPrimary mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-themeAccent focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-themeTextPrimary mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-themeAccent focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-themeTextPrimary mb-2">
                  Telefono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-themeAccent focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-themeTextPrimary mb-2">
                  Tipo di Progetto
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-themeAccent focus:border-transparent"
                >
                  <option value="">Seleziona tipo progetto</option>
                  <option value="residential">Progettazione Residenziale</option>
                  <option value="commercial">Progettazione Commerciale</option>
                  <option value="structural">Calcoli Strutturali</option>
                  <option value="energy">Efficienza Energetica</option>
                  <option value="permits">Pratiche Urbanistiche</option>
                  <option value="consulting">Consulenza Tecnica</option>
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-themeTextPrimary mb-2">
                Descrizione Progetto *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Descrivi brevemente il tuo progetto, le tue esigenze e i tuoi obiettivi..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-themeAccent focus:border-transparent"
              />
            </div>
            
            {/* GDPR Consent Checkbox */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="gdprConsent"
                  name="gdprConsent"
                  required
                  checked={formData.gdprConsent}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 text-themeSecondary bg-gray-100 border-gray-300 rounded focus:ring-themeAccent focus:ring-2"
                />
                <label htmlFor="gdprConsent" className="text-sm text-themeTextSecondary">
                  <span className="font-medium text-themeTextPrimary">Consenso al trattamento dei dati personali *</span>
                  <br />
                  Acconsento al trattamento dei miei dati personali per rispondere alla mia richiesta di contatto, 
                  come descritto nella{' '}
                  <Link href="/privacy" className="text-themeSecondary hover:text-themeAccent underline">
                    Privacy Policy
                  </Link>
                  . I dati verranno utilizzati esclusivamente per fornire le informazioni richieste e non verranno 
                  condivisi con terze parti.
                </label>
              </div>
            </div>
            
            <button
              type="submit"
              disabled={!formData.gdprConsent}
              className="w-full bg-themeSecondary text-white px-8 py-4 rounded-lg font-semibold hover:bg-themeAccent transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Invia Richiesta
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="text-white">
          <h2 className="text-3xl font-bold mb-6">
            Inizia il Tuo Progetto Oggi
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Siamo pronti ad aiutarti a trasformare le tue idee in realtà con 
            soluzioni di ingegneria innovative e sostenibili.
          </p>
          
          {/* Contact Details */}
          <div className="space-y-6 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-themeAccent rounded-lg flex items-center justify-center">
                <FaEnvelope className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold">Email</p>
                <p className="text-white/80">loriscavallaro22@gmail.com</p>
                <p className="text-white/80">Ingegnerelorising@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-themeAccent rounded-lg flex items-center justify-center">
                <FaPhone className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold">Telefono</p>
                <p className="text-white/80">+39 380 147 7121</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-themeAccent rounded-lg flex items-center justify-center">
                <FaMapMarkerAlt className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold">Dove siamo</p>
                <p className="text-white/80">Sicilia, Italia</p>
                <p className="text-white/60 text-sm">Servizi su tutto il territorio nazionale</p>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mb-8">
            <h3 className="font-semibold text-lg mb-4 text-white">La nostra zona di servizio</h3>
            <ContactMap />
          </div>

          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-slate-700">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-themeAccent rounded-lg flex items-center justify-center">
                  <FaBuilding className="text-white text-sm" />
                </div>
                <span className="font-bold text-lg">XYZENGINEERING</span>
              </div>
              <p className="text-slate-400 text-sm mb-4">
                Studio di ingegneria civile e ambientale specializzato in progettazione, 
                sostenibilità e innovazione tecnica.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white">Navigazione</h3>
              <div className="space-y-2 text-slate-400">
                <Link href="/" className="block hover:text-white transition-colors">Home</Link>
                <Link href="/about" className="block hover:text-white transition-colors">Chi Siamo</Link>
                <Link href="/services" className="block hover:text-white transition-colors">Servizi</Link>
                <Link href="/projects" className="block hover:text-white transition-colors">Progetti</Link>
                <Link href="/contact" className="block hover:text-white transition-colors">Contatti</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
