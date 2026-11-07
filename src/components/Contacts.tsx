'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

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

  // Preselect the line when coming from a "request a quote" button (?linea=solar)
  useEffect(() => {
    const line = new URLSearchParams(window.location.search).get('linea');
    if (line && ['solar', 'prefab', 'renovation'].includes(line)) {
      setFormData((prev) => ({ ...prev, projectType: line }));
    }
  }, []);

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

  const cell =
    'group relative bg-ink px-5 py-4 transition-colors focus-within:bg-[#151412] md:px-6 md:py-5';
  const labelClass =
    'mb-2 flex justify-between font-display text-[10px] uppercase tracking-[0.25em] text-bone/50';
  const inputClass =
    'w-full border-0 bg-transparent p-0 font-display text-lg text-bone placeholder:text-bone/25 focus:outline-none focus:ring-0';
  // Brick bar that marks the focused field
  const focusBar = (
    <span className="absolute inset-y-0 left-0 w-[2px] origin-top scale-y-0 bg-brick transition-transform duration-300 group-focus-within:scale-y-100" />
  );

  return (
    <div className="container-custom" id="contact-form">
      <div className="mb-10 grid gap-6 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <p className="mb-5 font-display text-xs uppercase tracking-[0.3em] text-bone/50">
            {t('form.sheet')}
          </p>
          <h2 className="font-display text-4xl font-semibold leading-[1.02] tracking-[-0.035em] text-bone md:text-6xl">
            {t('form.title')}
          </h2>
        </div>
        <p className="leading-relaxed text-bone/60 lg:col-span-4">
          {t('form.description')}
        </p>
      </div>

      <div className="grid gap-px border border-bone/15 bg-bone/15 lg:grid-cols-12">
        {/* Request form */}
        <form
          onSubmit={handleSubmit}
          className="grid gap-px bg-bone/15 md:grid-cols-2 lg:col-span-8"
        >
          <div className={cell}>
            {focusBar}
            <label htmlFor="name" className={labelClass}>
              <span>
                {t('form.name')} {t('form.required')}
              </span>
              <span className="tabular-nums">01</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          <div className={cell}>
            {focusBar}
            <label htmlFor="email" className={labelClass}>
              <span>
                {t('form.email')} {t('form.required')}
              </span>
              <span className="tabular-nums">02</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          <div className={cell}>
            {focusBar}
            <label htmlFor="phone" className={labelClass}>
              <span>{t('form.phone')}</span>
              <span className="tabular-nums">03</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          <div className={cell}>
            {focusBar}
            <label htmlFor="projectType" className={labelClass}>
              <span>{t('form.projectType')}</span>
              <span className="tabular-nums">04</span>
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className={`${inputClass} cursor-pointer bg-[right_0_center] pr-8`}
            >
              <option className="bg-ink" value="">
                {t('form.projectTypes.placeholder')}
              </option>
              <option className="bg-ink" value="solar">
                {t('form.projectTypes.solar')}
              </option>
              <option className="bg-ink" value="prefab">
                {t('form.projectTypes.prefab')}
              </option>
              <option className="bg-ink" value="renovation">
                {t('form.projectTypes.renovation')}
              </option>
              <option className="bg-ink" value="residential">
                {t('form.projectTypes.residential')}
              </option>
              <option className="bg-ink" value="commercial">
                {t('form.projectTypes.commercial')}
              </option>
              <option className="bg-ink" value="structural">
                {t('form.projectTypes.structural')}
              </option>
              <option className="bg-ink" value="energy">
                {t('form.projectTypes.energy')}
              </option>
              <option className="bg-ink" value="permits">
                {t('form.projectTypes.permits')}
              </option>
              <option className="bg-ink" value="consulting">
                {t('form.projectTypes.consulting')}
              </option>
            </select>
          </div>
          <div className={`${cell} md:col-span-2`}>
            {focusBar}
            <label htmlFor="message" className={labelClass}>
              <span>
                {t('form.message')} {t('form.required')}
              </span>
              <span className="tabular-nums">05</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder={t('form.messagePlaceholder')}
              className={`${inputClass} resize-none text-base leading-relaxed`}
            />
          </div>

          {/* GDPR consent */}
          <div className={`${cell} md:col-span-2`}>
            <div className="flex items-start gap-4">
              <input
                type="checkbox"
                id="gdprConsent"
                name="gdprConsent"
                required
                checked={formData.gdprConsent}
                onChange={handleChange}
                className="mt-1 size-4 rounded-none border-bone/40 bg-transparent text-brick focus:ring-brick focus:ring-offset-ink"
              />
              <label htmlFor="gdprConsent" className="text-sm text-bone/55">
                <span className="font-medium text-bone">
                  {t('form.gdprConsent')} {t('form.required')}
                </span>
                <br />
                {t('form.gdprText')}{' '}
                <Link
                  href="/privacy"
                  className="text-bone underline underline-offset-4 hover:text-brick"
                >
                  {t('form.privacyPolicy')}
                </Link>
                .
              </label>
            </div>
          </div>

          {/* Success/Error Messages */}
          {submitStatus === 'success' && (
            <div className={`${cell} border-l-2 border-plaster md:col-span-2`}>
              <p className="font-display font-medium text-bone">
                {t('form.success')}
              </p>
              <p className="mt-1 text-sm text-bone/60">
                {t('form.successDescription')}
              </p>
            </div>
          )}
          {submitStatus === 'error' && (
            <div className={`${cell} border-l-2 border-brick md:col-span-2`}>
              <p className="font-display font-medium text-bone">
                {t('form.error')}
              </p>
              <p className="mt-1 text-sm text-bone/60">
                {t('form.errorDescription')}{' '}
                {process.env.NEXT_PUBLIC_COMPANY_EMAIL ||
                  'loriscavallaro22@gmail.com'}
              </p>
            </div>
          )}

          <button
            type="submit"
            disabled={!formData.gdprConsent || isSubmitting}
            className="group flex items-center justify-between bg-bone p-6 text-left font-display text-lg font-semibold text-ink transition-colors hover:bg-brick hover:text-bone disabled:cursor-not-allowed disabled:bg-bone/10 disabled:text-bone/40 md:col-span-2"
          >
            {isSubmitting ? t('form.submitting') : t('form.submit')}
            <FaArrowRight className="size-4 transition-transform group-hover:translate-x-1 group-disabled:translate-x-0" />
          </button>
        </form>

        {/* Contact details */}
        <div className="grid content-start gap-px bg-bone/15 lg:col-span-4">
          <div className={cell}>
            <p className={labelClass}>
              <span>{t('info.email')}</span>
              <span>E</span>
            </p>
            <p className="font-display text-bone">
              {process.env.NEXT_PUBLIC_COMPANY_EMAIL ||
                'loriscavallaro22@gmail.com'}
            </p>
            <p className="font-display text-bone/60">
              {process.env.NEXT_PUBLIC_COMPANY_EMAIL_SECONDARY ||
                'Ingegnerelorising@gmail.com'}
            </p>
            {process.env.NEXT_PUBLIC_COMPANY_PEC && (
              <p className="mt-1 text-sm text-bone/50">
                PEC: {process.env.NEXT_PUBLIC_COMPANY_PEC}
              </p>
            )}
          </div>
          <div className={cell}>
            <p className={labelClass}>
              <span>{t('info.phone')}</span>
              <span>T</span>
            </p>
            <p className="font-display text-bone">
              +39 {process.env.NEXT_PUBLIC_COMPANY_PHONE || '380 147 7121'}
            </p>
          </div>
          <div className={cell}>
            <p className={labelClass}>
              <span>{t('info.location')}</span>
              <span>L</span>
            </p>
            <p className="font-display text-bone">
              {tFooter('contact.location')}
            </p>
            <p className="text-sm text-bone/50">{t('info.nationalService')}</p>
          </div>
          <div className={cell}>
            <p className={labelClass}>
              <span>{t('info.serviceArea')}</span>
              <span>1:500.000</span>
            </p>
            <div className="mt-2 grayscale-[0.6]">
              <ContactMap />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
