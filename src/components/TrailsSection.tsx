'use client';

import { useTranslations, useMessages } from 'next-intl';

type Trail = {
  name: string;
  difficulty: string;
  distance: string;
  duration: string;
  description: string;
};

export default function TrailsSection() {
  const t = useTranslations('trails');
  const messages = useMessages() as any;
  const items = (messages?.trails?.items || []) as Trail[];

  return (
    <section id="senderos" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-3 text-center"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('sectionTitle')}
        </h2>
        <p className="max-w-3xl mx-auto text-center mb-3 text-sm sm:text-base" style={{ color: 'var(--text-secondary)' }}>
          {t('subtitle')}
        </p>
        <div className="w-12 h-0.5 mb-10 mx-auto" style={{ background: 'var(--accent)' }} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((trail, i) => (
            <article
              key={i}
              className="flex flex-col rounded-xl p-6"
              style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
            >
              <h3 className="font-display text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                {trail.name}
              </h3>
              <ul className="space-y-2 mb-4 text-sm">
                <li>
                  <span
                    className="inline-block px-2.5 py-1 rounded-full text-xs font-medium"
                    style={{ background: 'var(--tag-bg)', color: 'var(--tag-text)' }}
                  >
                    {trail.difficulty}
                  </span>
                </li>
                <li style={{ color: 'var(--text-muted)' }}>{trail.distance}</li>
                <li style={{ color: 'var(--text-muted)' }}>{trail.duration}</li>
              </ul>
              <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--text-secondary)' }}>
                {trail.description}
              </p>
            </article>
          ))}
        </div>

        <div
          className="mt-10 rounded-xl p-6"
          style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--accent)' }}
        >
          <h3 className="font-display text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
            {t('nearbyTitle')}
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {t('nearbyContent')}{' '}
            <a
              href="#map"
              className="hover:underline whitespace-nowrap"
              style={{ color: 'var(--accent)' }}
            >
              {messages?.mapSection?.title || 'Location & Map'} →
            </a>
          </p>
        </div>

        <p className="mt-6 text-xs text-center" style={{ color: 'var(--text-muted)' }}>
          {t('note')}
        </p>
      </div>
    </section>
  );
}
