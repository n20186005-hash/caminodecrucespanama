'use client';

import { useTranslations } from 'next-intl';

export default function FloraFaunaCards() {
  const t = useTranslations('floraFauna');
  const cards = [0, 1, 2, 3];

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-4 text-center"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <p className="text-center max-w-3xl mx-auto mb-12 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {t('subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)' }}
            >
              <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                {t(`cards.${index}.name`)}
              </h3>
              <p className="text-sm italic mb-4" style={{ color: 'var(--accent)' }}>
                {t(`cards.${index}.latin`)}
              </p>
              <p className="leading-relaxed text-sm" style={{ color: 'var(--text-secondary)' }}>
                {t(`cards.${index}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
