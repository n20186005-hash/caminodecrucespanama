'use client';

import { useLocale, useTranslations } from 'next-intl';

const CARDS = [
  { slug: 'senderos', icon: '🥾' },
  { slug: 'comoLlegar', icon: '🚗' },
  { slug: 'entradas', icon: '🎟️' },
] as const;

export default function TopicLinks() {
  const t = useTranslations('topicLinks');
  const locale = useLocale();

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <p className="text-sm mb-8" style={{ color: 'var(--text-muted)' }}>
          {t('subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map(({ slug, icon }) => {
            const titleKey = slug as 'senderos' | 'comoLlegar' | 'entradas';
            return (
              <a
                key={slug}
                href={`/${locale}/${slug}`}
                className="group block rounded-2xl p-6 transition-transform hover:-translate-y-1"
                style={{
                  background: 'var(--card-bg)',
                  boxShadow: 'var(--card-shadow)',
                  border: '1px solid var(--border-color)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-4"
                  style={{ background: 'var(--bg-tertiary)' }}
                >
                  {icon}
                </div>
                <h3
                  className="font-display text-xl font-semibold mb-2 group-hover:text-[var(--accent)]"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {t(titleKey)}
                </h3>
                <span
                  className="inline-flex items-center gap-1 text-sm font-medium"
                  style={{ color: 'var(--accent)' }}
                >
                  {t('more')}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
