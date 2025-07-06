'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaBuilding, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import ContactMap from './ContactMap';
import emailjs from '@emailjs/browser';

function Appointment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
    gdprConsent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.gdprConsent) {
      alert('Devi accettare il consenso al trattamento dei dati per inviare il modulo.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration - Replace with your actual IDs
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key';

      // Template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        project_type: formData.projectType,
        message: formData.message,
        to_email: 'loriscavallaro22@gmail.com', // Loris's email
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: '',
        gdprConsent: false
      });
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
    <div className="container-custom bg-surfaceLight" id="contact-form">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Contact Form */}
        <div className="bg-opacity-45 bg-surfaceLight p-8 shadow-lg shadow-black/100 hover:shadow-2xl hover:shadow-black/100 transition-all duration-300 rounded-lg">
          <h2 className="text-4xl lg:text-5xl font-bold text-themeTextPrimary mb-6 tracking-tight">
            RICHIEDI UNA CONSULENZA
          </h2>
          <p className="text-themeTextSecondary mb-8 leading-relaxed">
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
                  className="w-full px-4 py-3 border border-themeTextSecondary border-opacity-30 bg-themeBackground text-themeTextPrimary focus:ring-2 focus:ring-themeTextPrimary focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-themeTextSecondary border-opacity-30 bg-themeBackground text-themeTextPrimary focus:ring-2 focus:ring-themeTextPrimary focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-themeTextSecondary border-opacity-30 bg-themeBackground text-themeTextPrimary focus:ring-2 focus:ring-themeTextPrimary focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-themeTextSecondary border-opacity-30 bg-themeBackground text-themeTextPrimary focus:ring-2 focus:ring-themeTextPrimary focus:border-transparent"
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
            
            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 font-medium">✅ Messaggio inviato con successo!</p>
                <p className="text-green-600 text-sm mt-1">
                  Ti risponderemo al più presto al tuo indirizzo email.
                </p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-800 font-medium">❌ Errore nell'invio del messaggio</p>
                <p className="text-red-600 text-sm mt-1">
                  Riprova o contattaci direttamente via email: loriscavallaro22@gmail.com
                </p>
              </div>
            )}
            
            <button
              type="submit"
              disabled={!formData.gdprConsent || isSubmitting}
              className="w-full border-2 border-themeTextPrimary text-themeTextPrimary px-8 py-4 font-bold tracking-wide hover:bg-themeTextPrimary hover:text-themeBackground transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'INVIO IN CORSO...' : 'INVIA RICHIESTA'}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="text-themeTextPrimary">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            INIZIA IL TUO PROGETTO OGGI
          </h2>
          <p className="text-lg text-themeTextSecondary mb-8 leading-relaxed">
            Siamo pronti ad aiutarti a trasformare le tue idee in realtà con 
            soluzioni di ingegneria innovative e sostenibili.
          </p>
          
          {/* Contact Details */}
          <div className="space-y-6 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-themeTextSecondary flex items-center justify-center">
                <FaEnvelope className="w-5 h-5 text-themeBackground" />
              </div>
              <div>
                <p className="text-themeTextPrimary font-bold tracking-wide">EMAIL</p>
                <p className="text-themeTextSecondary">loriscavallaro22@gmail.com</p>
                <p className="text-themeTextSecondary">Ingegnerelorising@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-themeTextSecondary flex items-center justify-center">
                <FaPhone className="w-5 h-5 text-themeBackground" />
              </div>
              <div>
                <p className="text-themeTextPrimary font-bold tracking-wide">TELEFONO</p>
                <p className="text-themeTextSecondary">+39 380 147 7121</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-themeTextSecondary flex items-center justify-center">
                <FaMapMarkerAlt className="w-5 h-5 text-themeBackground" />
              </div>
              <div>
                <p className="text-themeTextPrimary font-bold tracking-wide">DOVE SIAMO</p>
                <p className="text-themeTextSecondary">Sicilia, Italia</p>
                <p className="text-themeTextSecondary text-sm">Servizi su tutto il territorio nazionale</p>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mb-8">
            <h3 className="font-semibold text-lg mb-4 text-white">La nostra zona di servizio</h3>
            <ContactMap />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
