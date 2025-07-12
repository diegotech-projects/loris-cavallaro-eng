import { useTranslations } from 'next-intl';

export default function CookiePolicyPage() {
  const t = useTranslations('cookiePolicy');

  return (
    <div className="container-custom py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-themeTextPrimary mb-8">
          {t('title')}
        </h1>
        
        <div className="prose prose-lg max-w-none text-themeTextSecondary">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-themeTextPrimary mb-4">
              {t('whatAreCookies.title')}
            </h2>
            <p className="mb-4">
              {t('whatAreCookies.content')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-themeTextPrimary mb-4">
              {t('cookieTypes.title')}
            </h2>
            <p className="mb-4">
              {t('cookieTypes.content')}
            </p>

            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">
                  {t('cookieTypes.technical.title')}
                </h3>
                <p className="text-green-700 mb-2">
                  {t('cookieTypes.technical.content')}
                </p>
                <p className="text-sm text-green-600">
                  <strong>{t('cookieTypes.technical.consent')}</strong>
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">
                  {t('cookieTypes.preferences.title')}
                </h3>
                <p className="text-blue-700 mb-2">
                  {t('cookieTypes.preferences.content')}
                </p>
                <p className="text-sm text-blue-600">
                  <strong>{t('cookieTypes.preferences.consent')}</strong>
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-themeTextPrimary mb-4">
              {t('cookiesUsed.title')}
            </h2>
            <p className="mb-4">
              {t('cookiesUsed.content')}
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border border-themeSurfaceLight rounded-lg">
                <thead className="bg-themeSurfaceLight">
                  <tr>
                    <th className="px-4 py-2 text-left text-themeTextPrimary">
                      {t('cookiesUsed.table.name')}
                    </th>
                    <th className="px-4 py-2 text-left text-themeTextPrimary">
                      {t('cookiesUsed.table.purpose')}
                    </th>
                    <th className="px-4 py-2 text-left text-themeTextPrimary">
                      {t('cookiesUsed.table.duration')}
                    </th>
                    <th className="px-4 py-2 text-left text-themeTextPrimary">
                      {t('cookiesUsed.table.type')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-themeSurfaceLight">
                    <td className="px-4 py-2 font-mono text-sm">cookieConsent</td>
                    <td className="px-4 py-2">{t('cookiesUsed.table.rows.consent.purpose')}</td>
                    <td className="px-4 py-2">{t('cookiesUsed.table.rows.consent.duration')}</td>
                    <td className="px-4 py-2 text-green-600">{t('cookiesUsed.table.rows.consent.type')}</td>
                  </tr>
                  <tr className="border-t border-themeSurfaceLight">
                    <td className="px-4 py-2 font-mono text-sm">theme</td>
                    <td className="px-4 py-2">{t('cookiesUsed.table.rows.theme.purpose')}</td>
                    <td className="px-4 py-2">{t('cookiesUsed.table.rows.theme.duration')}</td>
                    <td className="px-4 py-2 text-blue-600">{t('cookiesUsed.table.rows.theme.type')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-themeTextPrimary mb-4">
              {t('cookieManagement.title')}
            </h2>
            <p className="mb-4">
              {t('cookieManagement.content')}
            </p>
            
            <div className="bg-themeSurfaceLight p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-themeTextPrimary mb-2">
                {t('cookieManagement.website.title')}
              </h3>
              <p className="mb-2">
                {t('cookieManagement.website.content')}
              </p>
            </div>

            <div className="bg-themeSurfaceLight p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-themeTextPrimary mb-2">
                {t('cookieManagement.browser.title')}
              </h3>
              <p className="mb-2">
                {t('cookieManagement.browser.content')}
              </p>
              <ul className="list-disc pl-6 text-sm">
                <li><strong>Chrome:</strong> {t('cookieManagement.browser.chrome')}</li>
                <li><strong>Firefox:</strong> {t('cookieManagement.browser.firefox')}</li>
                <li><strong>Safari:</strong> {t('cookieManagement.browser.safari')}</li>
                <li><strong>Edge:</strong> {t('cookieManagement.browser.edge')}</li>
              </ul>
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
                Email: {process.env.NEXT_PUBLIC_COMPANY_EMAIL}
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