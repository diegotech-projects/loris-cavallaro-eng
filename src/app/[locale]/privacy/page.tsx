import { useTranslations } from 'next-intl';

export default function PrivacyPage() {
  const t = useTranslations('privacy');

  return (
    <div className="container-custom py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-themeTextPrimary mb-8">
          {t('title')}
        </h1>
        
        <div className="prose prose-lg max-w-none text-themeTextSecondary">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-themeTextPrimary mb-4">
              {t('dataController.title')}
            </h2>
            <p className="mb-4">
              {t('dataController.content')}
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Nome: Loris Cavallaro</li>
              <li>Email: loriscavallaro22@gmail.com</li>
              <li>Telefono: +39 380 147 7121</li>
              <li>Indirizzo: Sicilia, Italia</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-themeTextPrimary mb-4">
              {t('dataCollection.title')}
            </h2>
            <p className="mb-4">
              {t('dataCollection.content')}
            </p>
            <div className="bg-themeSurfaceLight p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-themeTextPrimary mb-2">
                {t('dataCollection.contactForm.title')}
              </h3>
              <p className="mb-2">
                {t('dataCollection.contactForm.content')}
              </p>
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
            <h2 className="text-2xl font-semibold text-themeTextPrimary mb-4">
              {t('dataUsage.title')}
            </h2>
            <p className="mb-4">
              {t('dataUsage.content')}
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>{t('dataUsage.purposes.respond')}</li>
              <li>{t('dataUsage.purposes.quote')}</li>
              <li>{t('dataUsage.purposes.contact')}</li>
              <li>{t('dataUsage.purposes.service')}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-themeTextPrimary mb-4">
              {t('dataRetention.title')}
            </h2>
            <p className="mb-4">
              {t('dataRetention.content')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-themeTextPrimary mb-4">
              {t('userRights.title')}
            </h2>
            <p className="mb-4">
              {t('userRights.content')}
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>{t('userRights.rights.access')}</li>
              <li>{t('userRights.rights.rectification')}</li>
              <li>{t('userRights.rights.erasure')}</li>
              <li>{t('userRights.rights.portability')}</li>
              <li>{t('userRights.rights.restriction')}</li>
              <li>{t('userRights.rights.objection')}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-themeTextPrimary mb-4">
              {t('cookies.title')}
            </h2>
            <p className="mb-4">
              {t('cookies.content')}
            </p>
            <div className="bg-themeSurfaceLight p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-themeTextPrimary mb-2">
                {t('cookies.types.technical.title')}
              </h3>
              <p className="mb-2">
                {t('cookies.types.technical.content')}
              </p>
            </div>
            <div className="bg-themeSurfaceLight p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-themeTextPrimary mb-2">
                {t('cookies.types.preferences.title')}
              </h3>
              <p className="mb-2">
                {t('cookies.types.preferences.content')}
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-themeTextPrimary mb-4">
              {t('contact.title')}
            </h2>
            <p className="mb-4">
              {t('contact.content')}
            </p>
            <div className="bg-themeSecondary/10 p-4 rounded-lg">
              <p className="font-semibold text-themeTextPrimary">
                Email: loriscavallaro22@gmail.com
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-themeTextPrimary mb-4">
              {t('updates.title')}
            </h2>
            <p className="mb-4">
              {t('updates.content')}
            </p>
            <p className="text-sm text-themeTextSecondary">
              {t('updates.lastUpdate')}: {new Date().toLocaleDateString('it-IT')}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}