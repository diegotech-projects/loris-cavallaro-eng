'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

import ContactMap from './ContactMap';

function Appointment() {
  const t = useTranslations('contact');
  const tFooter = useTranslations('footer');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
    gdprConsent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.gdprConsent) {
      alert(t('form.gdprRequired'));
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          projectType: formData.projectType,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      setSubmitStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: '',
        gdprConsent: false,
      });
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { target } = e;
    const value =
      target.type === 'checkbox'
        ? (target as HTMLInputElement).checked
        : target.value;

    setFormData({
      ...formData,
      [target.name]: value,
    });
  };

  return (
    <div className="container-custom bg-surfaceLight" id="contact-form">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
        {/* Contact Form */}
        <div className="bg-surfaceLight rounded-lg bg-opacity-45 p-8 shadow-lg shadow-black/100 transition-all duration-300 hover:shadow-2xl hover:shadow-black/100">
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-themeTextPrimary lg:text-5xl">
            {t('form.title')}
          </h2>
          <p className="mb-8 leading-relaxed text-themeTextSecondary">
            {t('form.description')}
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-themeTextPrimary"
                >
                  {t('form.name')} {t('form.required')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-themeTextSecondary border-opacity-30 bg-themeBackground px-4 py-3 text-themeTextPrimary focus:border-transparent focus:ring-2 focus:ring-themeTextPrimary"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-themeTextPrimary"
                >
                  {t('form.email')} {t('form.required')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-themeTextSecondary border-opacity-30 bg-themeBackground px-4 py-3 text-themeTextPrimary focus:border-transparent focus:ring-2 focus:ring-themeTextPrimary"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-themeTextPrimary"
                >
                  {t('form.phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-themeTextSecondary border-opacity-30 bg-themeBackground px-4 py-3 text-themeTextPrimary focus:border-transparent focus:ring-2 focus:ring-themeTextPrimary"
                />
              </div>
              <div>
                <label
                  htmlFor="projectType"
                  className="mb-2 block text-sm font-medium text-themeTextPrimary"
                >
                  {t('form.projectType')}
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full border border-themeTextSecondary border-opacity-30 bg-themeBackground px-4 py-3 text-themeTextPrimary focus:border-transparent focus:ring-2 focus:ring-themeTextPrimary"
                >
                  <option value="">{t('form.projectTypes.placeholder')}</option>
                  <option value="residential">
                    {t('form.projectTypes.residential')}
                  </option>
                  <option value="commercial">
                    {t('form.projectTypes.commercial')}
                  </option>
                  <option value="structural">
                    {t('form.projectTypes.structural')}
                  </option>
                  <option value="energy">
                    {t('form.projectTypes.energy')}
                  </option>
                  <option value="permits">
                    {t('form.projectTypes.permits')}
                  </option>
                  <option value="consulting">
                    {t('form.projectTypes.consulting')}
                  </option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-themeTextPrimary"
              >
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
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-themeAccent"
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
                  className="mt-1 size-4 rounded border-gray-300 bg-gray-100 text-themeSecondary focus:ring-2 focus:ring-themeAccent"
                />
                <label
                  htmlFor="gdprConsent"
                  className="text-sm text-themeTextSecondary"
                >
                  <span className="font-medium text-themeTextPrimary">
                    {t('form.gdprConsent')} {t('form.required')}
                  </span>
                  <br />
                  {t('form.gdprText')}{' '}
                  <Link
                    href="/privacy"
                    className="text-themeSecondary underline hover:text-themeAccent"
                  >
                    {t('form.privacyPolicy')}
                  </Link>
                  .
                </label>
              </div>
            </div>

            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="rounded-lg border border-green-200 bg-green-50 p-4">
                <p className="font-medium text-green-800">
                  {t('form.success')}
                </p>
                <p className="mt-1 text-sm text-green-600">
                  {t('form.successDescription')}
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                <p className="font-medium text-red-800">{t('form.error')}</p>
                <p className="mt-1 text-sm text-red-600">
                  {t('form.errorDescription')}{' '}
                  {process.env.NEXT_PUBLIC_COMPANY_EMAIL ||
                    'loriscavallaro22@gmail.com'}
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={!formData.gdprConsent || isSubmitting}
              className="w-full border-2 border-themeTextPrimary px-8 py-4 font-bold tracking-wide text-themeTextPrimary transition-colors hover:bg-themeTextPrimary hover:text-themeBackground disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? t('form.submitting') : t('form.submit')}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="text-themeTextPrimary">
          <h2 className="mb-6 text-4xl font-bold tracking-tight lg:text-5xl">
            {t('info.title')}
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-themeTextSecondary">
            {t('info.description')}
          </p>

          {/* Contact Details */}
          <div className="mb-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex size-12 items-center justify-center bg-themeTextSecondary">
                <FaEnvelope className="size-5 text-themeBackground" />
              </div>
              <div>
                <p className="font-bold tracking-wide text-themeTextPrimary">
                  {t('info.email')}
                </p>
                <p className="text-themeTextSecondary">
                  {process.env.NEXT_PUBLIC_COMPANY_EMAIL ||
                    'loriscavallaro22@gmail.com'}
                </p>
                <p className="text-themeTextSecondary">
                  {process.env.NEXT_PUBLIC_COMPANY_EMAIL_SECONDARY ||
                    'Ingegnerelorising@gmail.com'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex size-12 items-center justify-center bg-themeTextSecondary">
                <FaPhone className="size-5 text-themeBackground" />
              </div>
              <div>
                <p className="font-bold tracking-wide text-themeTextPrimary">
                  {t('info.phone')}
                </p>
                <p className="text-themeTextSecondary">
                  +39 {process.env.NEXT_PUBLIC_COMPANY_PHONE || '380 147 7121'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex size-12 items-center justify-center bg-themeTextSecondary">
                <FaMapMarkerAlt className="size-5 text-themeBackground" />
              </div>
              <div>
                <p className="font-bold tracking-wide text-themeTextPrimary">
                  {t('info.location')}
                </p>
                <p className="text-themeTextSecondary">
                  {tFooter('contact.location')}
                </p>
                <p className="text-sm text-themeTextSecondary">
                  {t('info.nationalService')}
                </p>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mb-8">
            <h3 className="mb-4 text-lg font-semibold text-white">
              {t('info.serviceArea')}
            </h3>
            <ContactMap />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
