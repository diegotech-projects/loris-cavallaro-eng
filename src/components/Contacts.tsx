'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FaBuilding, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import ContactMap from './ContactMap';
import emailjs from '@emailjs/browser';

function Appointment() {
  const t = useTranslations('contact');
  const tFooter = useTranslations('footer');
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
      alert(t('form.gdprRequired'));
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
        to_email: process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'loriscavallaro22@gmail.com', // Loris's email
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
            {t('form.title')}
          </h2>
          <p className="text-themeTextSecondary mb-8 leading-relaxed">
            {t('form.description')}
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-themeTextPrimary mb-2">
                  {t('form.name')} {t('form.required')}
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
                  {t('form.email')} {t('form.required')}
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
                  {t('form.phone')}
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
                  {t('form.projectType')}
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-themeTextSecondary border-opacity-30 bg-themeBackground text-themeTextPrimary focus:ring-2 focus:ring-themeTextPrimary focus:border-transparent"
                >
                  <option value="">{t('form.projectTypes.placeholder')}</option>
                  <option value="residential">{t('form.projectTypes.residential')}</option>
                  <option value="commercial">{t('form.projectTypes.commercial')}</option>
                  <option value="structural">{t('form.projectTypes.structural')}</option>
                  <option value="energy">{t('form.projectTypes.energy')}</option>
                  <option value="permits">{t('form.projectTypes.permits')}</option>
                  <option value="consulting">{t('form.projectTypes.consulting')}</option>
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-themeTextPrimary mb-2">
                {t('form.message')} {t('form.required')}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder={t('form.messagePlaceholder')}
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
                  <span className="font-medium text-themeTextPrimary">{t('form.gdprConsent')} {t('form.required')}</span>
                  <br />
                  {t('form.gdprText')}{' '}
                  <Link href="/privacy" className="text-themeSecondary hover:text-themeAccent underline">
                    {t('form.privacyPolicy')}
                  </Link>
                  .
                </label>
              </div>
            </div>
            
            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 font-medium">{t('form.success')}</p>
                <p className="text-green-600 text-sm mt-1">
                  {t('form.successDescription')}
                </p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-800 font-medium">{t('form.error')}</p>
                <p className="text-red-600 text-sm mt-1">
                  {t('form.errorDescription')} {process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'loriscavallaro22@gmail.com'}
                </p>
              </div>
            )}
            
            <button
              type="submit"
              disabled={!formData.gdprConsent || isSubmitting}
              className="w-full border-2 border-themeTextPrimary text-themeTextPrimary px-8 py-4 font-bold tracking-wide hover:bg-themeTextPrimary hover:text-themeBackground transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? t('form.submitting') : t('form.submit')}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="text-themeTextPrimary">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            {t('info.title')}
          </h2>
          <p className="text-lg text-themeTextSecondary mb-8 leading-relaxed">
            {t('info.description')}
          </p>
          
          {/* Contact Details */}
          <div className="space-y-6 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-themeTextSecondary flex items-center justify-center">
                <FaEnvelope className="w-5 h-5 text-themeBackground" />
              </div>
              <div>
                <p className="text-themeTextPrimary font-bold tracking-wide">{t('info.email')}</p>
                <p className="text-themeTextSecondary">{process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'loriscavallaro22@gmail.com'}</p>
                <p className="text-themeTextSecondary">{process.env.NEXT_PUBLIC_COMPANY_EMAIL_SECONDARY || 'Ingegnerelorising@gmail.com'}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-themeTextSecondary flex items-center justify-center">
                <FaPhone className="w-5 h-5 text-themeBackground" />
              </div>
              <div>
                <p className="text-themeTextPrimary font-bold tracking-wide">{t('info.phone')}</p>
                <p className="text-themeTextSecondary">+39 {process.env.NEXT_PUBLIC_COMPANY_PHONE || '380 147 7121'}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-themeTextSecondary flex items-center justify-center">
                <FaMapMarkerAlt className="w-5 h-5 text-themeBackground" />
              </div>
              <div>
                <p className="text-themeTextPrimary font-bold tracking-wide">{t('info.location')}</p>
                <p className="text-themeTextSecondary">{tFooter('contact.location')}</p>
                <p className="text-themeTextSecondary text-sm">{t('info.nationalService')}</p>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mb-8">
            <h3 className="font-semibold text-lg mb-4 text-white">{t('info.serviceArea')}</h3>
            <ContactMap />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
