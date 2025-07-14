import { useTranslations } from 'next-intl';

export default function PrivacyPage() {
  const t = useTranslations('privacy');

  return (
    <div className="container-custom py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-3xl font-bold text-themeTextPrimary">
          {t('title')}
        </h1>

        <div className="prose prose-lg max-w-none text-themeTextSecondary">
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-themeTextPrimary">
              {t('dataController.title')}
            </h2>
            <p className="mb-4">{t('dataController.content')}</p>
            <ul className="mb-4 list-disc pl-6">
              <li>Nome: {process.env.NEXT_PUBLIC_ENGINEER_NAME}</li>
              <li>Email: {process.env.NEXT_PUBLIC_COMPANY_EMAIL}</li>
              <li>Telefono: {process.env.NEXT_PUBLIC_COMPANY_PHONE}</li>
              <li>Indirizzo: Sicilia, Italia</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-themeTextPrimary">
              {t('dataCollection.title')}
            </h2>
            <p className="mb-4">{t('dataCollection.content')}</p>
            <div className="mb-4 rounded-lg bg-themeSurfaceLight p-4">
              <h3 className="mb-2 font-semibold text-themeTextPrimary">
                {t('dataCollection.contactForm.title')}
              </h3>
              <p className="mb-2">{t('dataCollection.contactForm.content')}</p>
              <ul className="list-disc pl-6">
                <li>{t('dataCollection.contactForm.data.name')}</li>
                <li>{t('dataCollection.contactForm.data.email')}</li>
                <li>{t('dataCollection.contactForm.data.phone')}</li>
                <li>{t('dataCollection.contactForm.data.message')}</li>
                <li>{t('dataCollection.contactForm.data.projectType')}</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-themeTextPrimary">
              {t('dataUsage.title')}
            </h2>
            <p className="mb-4">{t('dataUsage.content')}</p>
            <ul className="mb-4 list-disc pl-6">
              <li>{t('dataUsage.purposes.respond')}</li>
              <li>{t('dataUsage.purposes.quote')}</li>
              <li>{t('dataUsage.purposes.contact')}</li>
              <li>{t('dataUsage.purposes.service')}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-themeTextPrimary">
              {t('dataRetention.title')}
            </h2>
            <p className="mb-4">{t('dataRetention.content')}</p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-themeTextPrimary">
              {t('userRights.title')}
            </h2>
            <p className="mb-4">{t('userRights.content')}</p>
            <ul className="mb-4 list-disc pl-6">
              <li>{t('userRights.rights.access')}</li>
              <li>{t('userRights.rights.rectification')}</li>
              <li>{t('userRights.rights.erasure')}</li>
              <li>{t('userRights.rights.portability')}</li>
              <li>{t('userRights.rights.restriction')}</li>
              <li>{t('userRights.rights.objection')}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-themeTextPrimary">
              {t('cookies.title')}
            </h2>
            <p className="mb-4">{t('cookies.content')}</p>
            <div className="mb-4 rounded-lg bg-themeSurfaceLight p-4">
              <h3 className="mb-2 font-semibold text-themeTextPrimary">
                {t('cookies.types.technical.title')}
              </h3>
              <p className="mb-2">{t('cookies.types.technical.content')}</p>
            </div>
            <div className="mb-4 rounded-lg bg-themeSurfaceLight p-4">
              <h3 className="mb-2 font-semibold text-themeTextPrimary">
                {t('cookies.types.preferences.title')}
              </h3>
              <p className="mb-2">{t('cookies.types.preferences.content')}</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-themeTextPrimary">
              {t('contact.title')}
            </h2>
            <p className="mb-4">{t('contact.content')}</p>
            <div className="rounded-lg bg-themeSecondary/10 p-4">
              <p className="font-semibold text-themeTextPrimary">
                Email: {process.env.NEXT_PUBLIC_COMPANY_EMAIL}
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-themeTextPrimary">
              {t('updates.title')}
            </h2>
            <p className="mb-4">{t('updates.content')}</p>
            <p className="text-sm text-themeTextSecondary">
              {t('updates.lastUpdate')}:{' '}
              {new Date().toLocaleDateString('it-IT')}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
