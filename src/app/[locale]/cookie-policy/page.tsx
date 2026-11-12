import { useTranslations } from 'next-intl';

import { PageHero } from '@/components/page/PageParts';
import { metadataFor } from '@/utils/pageMetadata';


export const generateMetadata = metadataFor('cookies', '/cookie-policy');

export default function CookiePolicyPage() {
  const t = useTranslations('cookiePolicy');
  const tSheet = useTranslations('landing.sheet');

  return (
    <main className="bg-ink text-bone">
      <PageHero
        sheet={`${tSheet('short')} L.02 · ${t('title')}`}
        title={t('title')}
      />
      <div className="container-custom py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="text-lg leading-relaxed text-bone/65">
            <section className="border-t border-bone/15 py-10">
              <h2 className="mb-5 font-display text-2xl font-semibold tracking-[-0.02em] text-bone md:text-3xl">
                {t('whatAreCookies.title')}
              </h2>
              <p className="mb-4">{t('whatAreCookies.content')}</p>
            </section>

            <section className="border-t border-bone/15 py-10">
              <h2 className="mb-5 font-display text-2xl font-semibold tracking-[-0.02em] text-bone md:text-3xl">
                {t('cookieTypes.title')}
              </h2>
              <p className="mb-4">{t('cookieTypes.content')}</p>

              <div className="space-y-4">
                <div className="border border-bone/15 p-5">
                  <h3 className="mb-2 font-semibold text-bone">
                    {t('cookieTypes.technical.title')}
                  </h3>
                  <p className="mb-2 text-bone/65">
                    {t('cookieTypes.technical.content')}
                  </p>
                  <p className="text-sm text-bone/80">
                    <strong>{t('cookieTypes.technical.consent')}</strong>
                  </p>
                </div>

                <div className="border border-bone/15 p-5">
                  <h3 className="mb-2 font-semibold text-bone">
                    {t('cookieTypes.preferences.title')}
                  </h3>
                  <p className="mb-2 text-bone/65">
                    {t('cookieTypes.preferences.content')}
                  </p>
                  <p className="text-sm text-bone/80">
                    <strong>{t('cookieTypes.preferences.consent')}</strong>
                  </p>
                </div>
              </div>
            </section>

            <section className="border-t border-bone/15 py-10">
              <h2 className="mb-5 font-display text-2xl font-semibold tracking-[-0.02em] text-bone md:text-3xl">
                {t('cookiesUsed.title')}
              </h2>
              <p className="mb-4">{t('cookiesUsed.content')}</p>

              <div className="overflow-x-auto">
                <table className="w-full border border-bone/15 text-base">
                  <thead className="bg-bone/5">
                    <tr>
                      <th className="px-4 py-2 text-left text-bone">
                        {t('cookiesUsed.table.name')}
                      </th>
                      <th className="px-4 py-2 text-left text-bone">
                        {t('cookiesUsed.table.purpose')}
                      </th>
                      <th className="px-4 py-2 text-left text-bone">
                        {t('cookiesUsed.table.duration')}
                      </th>
                      <th className="px-4 py-2 text-left text-bone">
                        {t('cookiesUsed.table.type')}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-bone/15">
                      <td className="font-mono px-4 py-2 text-sm">
                        cookieConsent
                      </td>
                      <td className="px-4 py-2">
                        {t('cookiesUsed.table.rows.consent.purpose')}
                      </td>
                      <td className="px-4 py-2">
                        {t('cookiesUsed.table.rows.consent.duration')}
                      </td>
                      <td className="px-4 py-2 text-bone/80">
                        {t('cookiesUsed.table.rows.consent.type')}
                      </td>
                    </tr>
                    <tr className="border-t border-bone/15">
                      <td className="font-mono px-4 py-2 text-sm">theme</td>
                      <td className="px-4 py-2">
                        {t('cookiesUsed.table.rows.theme.purpose')}
                      </td>
                      <td className="px-4 py-2">
                        {t('cookiesUsed.table.rows.theme.duration')}
                      </td>
                      <td className="px-4 py-2 text-bone/80">
                        {t('cookiesUsed.table.rows.theme.type')}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="border-t border-bone/15 py-10">
              <h2 className="mb-5 font-display text-2xl font-semibold tracking-[-0.02em] text-bone md:text-3xl">
                {t('cookieManagement.title')}
              </h2>
              <p className="mb-4">{t('cookieManagement.content')}</p>

              <div className="mb-4 border border-bone/15 p-5">
                <h3 className="mb-2 font-display font-semibold text-bone">
                  {t('cookieManagement.website.title')}
                </h3>
                <p className="mb-2">{t('cookieManagement.website.content')}</p>
              </div>

              <div className="mb-4 border border-bone/15 p-5">
                <h3 className="mb-2 font-display font-semibold text-bone">
                  {t('cookieManagement.browser.title')}
                </h3>
                <p className="mb-2">{t('cookieManagement.browser.content')}</p>
                <ul className="list-disc pl-6 text-sm marker:text-brick">
                  <li>
                    <strong>Chrome:</strong>{' '}
                    {t('cookieManagement.browser.chrome')}
                  </li>
                  <li>
                    <strong>Firefox:</strong>{' '}
                    {t('cookieManagement.browser.firefox')}
                  </li>
                  <li>
                    <strong>Safari:</strong>{' '}
                    {t('cookieManagement.browser.safari')}
                  </li>
                  <li>
                    <strong>Edge:</strong> {t('cookieManagement.browser.edge')}
                  </li>
                </ul>
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
