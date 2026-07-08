'use client';

import { useTranslations } from 'next-intl';

export default function PracticalInfo() {
  const t = useTranslations('practicalInfo');

  return (
    <section className="section-padding" style={{ background: 'var(--bg-tertiary)' }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-10 text-center"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>

        <div className="space-y-6">
          <div className="p-6 rounded-xl" style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)' }}>
            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
              {t('petPolicy.title')}
            </h3>
            <p className="leading-relaxed text-sm" style={{ color: 'var(--text-secondary)' }}>
              {t('petPolicy.content')}
            </p>
          </div>

          <div className="p-6 rounded-xl" style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)' }}>
            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
              {t('trailConditions.title')}
            </h3>
            <p className="leading-relaxed text-sm" style={{ color: 'var(--text-secondary)' }}>
              {t('trailConditions.content')}
            </p>
          </div>

          <div className="p-6 rounded-xl" style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)' }}>
            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
              {t('difficulty.title')}
            </h3>
            <p className="leading-relaxed text-sm" style={{ color: 'var(--text-secondary)' }}>
              {t('difficulty.content')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
