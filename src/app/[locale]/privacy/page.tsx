import { useTranslations } from 'next-intl';

import { PageHero } from '@/components/page/PageParts';

export default function PrivacyPage() {
  const t = useTranslations('privacy');
  const tSheet = useTranslations('landing.sheet');

  return (
    <main className="bg-ink text-bone">
      <PageHero
        sheet={`${tSheet('short')} L.01 — ${t('title')}`}
        title={t('title')}
      />
      <div className="container-custom py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="text-lg leading-relaxed text-bone/65">
            <section className="border-t border-bone/15 py-10">
              <h2 className="mb-5 font-display text-2xl font-semibold tracking-[-0.02em] text-bone md:text-3xl">
                {t('dataController.title')}
              </h2>
              <p className="mb-4">{t('dataController.content')}</p>
              <ul className="mb-4 list-disc pl-6 marker:text-brick">
                <li>Nome: {process.env.NEXT_PUBLIC_ENGINEER_NAME}</li>
                <li>Email: {process.env.NEXT_PUBLIC_COMPANY_EMAIL}</li>
                <li>Telefono: {process.env.NEXT_PUBLIC_COMPANY_PHONE}</li>
                <li>Indirizzo: Sicilia, Italia</li>
              </ul>
            </section>

            <section className="border-t border-bone/15 py-10">
              <h2 className="mb-5 font-display text-2xl font-semibold tracking-[-0.02em] text-bone md:text-3xl">
                {t('dataCollection.title')}
              </h2>
              <p className="mb-4">{t('dataCollection.content')}</p>
              <div className="mb-4 border border-bone/15 p-5">
                <h3 className="mb-2 font-display font-semibold text-bone">
                  {t('dataCollection.contactForm.title')}
                </h3>
                <p className="mb-2">
                  {t('dataCollection.contactForm.content')}
                </p>
                <ul className="list-disc pl-6 marker:text-brick">
                  <li>{t('dataCollection.contactForm.data.name')}</li>
                  <li>{t('dataCollection.contactForm.data.email')}</li>
                  <li>{t('dataCollection.contactForm.data.phone')}</li>
                  <li>{t('dataCollection.contactForm.data.message')}</li>
                  <li>{t('dataCollection.contactForm.data.projectType')}</li>
                </ul>
              </div>
            </section>

            <section className="border-t border-bone/15 py-10">
              <h2 className="mb-5 font-display text-2xl font-semibold tracking-[-0.02em] text-bone md:text-3xl">
                {t('dataUsage.title')}
              </h2>
              <p className="mb-4">{t('dataUsage.content')}</p>
              <ul className="mb-4 list-disc pl-6 marker:text-brick">
                <li>{t('dataUsage.purposes.respond')}</li>
                <li>{t('dataUsage.purposes.quote')}</li>
                <li>{t('dataUsage.purposes.contact')}</li>
                <li>{t('dataUsage.purposes.service')}</li>
              </ul>
            </section>

            <section className="border-t border-bone/15 py-10">
              <h2 className="mb-5 font-display text-2xl font-semibold tracking-[-0.02em] text-bone md:text-3xl">
                {t('dataRetention.title')}
              </h2>
              <p className="mb-4">{t('dataRetention.content')}</p>
            </section>

            <section className="border-t border-bone/15 py-10">
              <h2 className="mb-5 font-display text-2xl font-semibold tracking-[-0.02em] text-bone md:text-3xl">
                {t('userRights.title')}
              </h2>
              <p className="mb-4">{t('userRights.content')}</p>
              <ul className="mb-4 list-disc pl-6 marker:text-brick">
                <li>{t('userRights.rights.access')}</li>
                <li>{t('userRights.rights.rectification')}</li>
                <li>{t('userRights.rights.erasure')}</li>
                <li>{t('userRights.rights.portability')}</li>
                <li>{t('userRights.rights.restriction')}</li>
                <li>{t('userRights.rights.objection')}</li>
              </ul>
            </section>

            <section className="border-t border-bone/15 py-10">
              <h2 className="mb-5 font-display text-2xl font-semibold tracking-[-0.02em] text-bone md:text-3xl">
                {t('cookies.title')}
              </h2>
              <p className="mb-4">{t('cookies.content')}</p>
              <div className="mb-4 border border-bone/15 p-5">
                <h3 className="mb-2 font-display font-semibold text-bone">
                  {t('cookies.types.technical.title')}
                </h3>
                <p className="mb-2">{t('cookies.types.technical.content')}</p>
              </div>
              <div className="mb-4 border border-bone/15 p-5">
                <h3 className="mb-2 font-display font-semibold text-bone">
                  {t('cookies.types.preferences.title')}
                </h3>
                <p className="mb-2">{t('cookies.types.preferences.content')}</p>
              </div>
            </section>

            <section className="border-t border-bone/15 py-10">
              <h2 className="mb-5 font-display text-2xl font-semibold tracking-[-0.02em] text-bone md:text-3xl">
                {t('contact.title')}
              </h2>
              <p className="mb-4">{t('contact.content')}</p>
              <div className="border border-bone/15 p-5">
                <p className="font-semibold text-bone">
                  Email: {process.env.NEXT_PUBLIC_COMPANY_EMAIL}
                </p>
              </div>
            </section>

            <section className="border-t border-bone/15 py-10">
              <h2 className="mb-5 font-display text-2xl font-semibold tracking-[-0.02em] text-bone md:text-3xl">
                {t('updates.title')}
              </h2>
              <p className="mb-4">{t('updates.content')}</p>
              <p className="text-sm text-bone/45">
                {t('updates.lastUpdate')}:{' '}
                {new Date().toLocaleDateString('it-IT')}
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
