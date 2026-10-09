'use client';

import { useTranslations } from 'next-intl';

export default function StatusSection() {
  const t = useTranslations('status');

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-4xl mx-auto">
        <div
          className="rounded-2xl p-6 sm:p-8"
          style={{
            background: 'var(--bg-tertiary)',
            border: '1px solid var(--accent)',
          }}
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
              style={{ background: 'var(--accent)', color: '#fff' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              {t('badge')}
            </span>
            <h2
              className="font-display text-2xl sm:text-3xl font-semibold"
              style={{ color: 'var(--text-primary)' }}
            >
              {t('title')}
            </h2>
          </div>

          <p className="text-xs font-medium mb-3" style={{ color: 'var(--text-muted)' }}>
            {t('updated')}
          </p>

          <p
            className="text-sm sm:text-base leading-relaxed mb-4"
            style={{ color: 'var(--text-secondary)' }}
          >
            {t('body')}
          </p>

          <a
            href={t('linkUrl')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors"
            style={{
              background: 'var(--accent)',
              color: '#fff',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            {t('linkText')}
          </a>

          <p className="text-xs mt-4" style={{ color: 'var(--text-muted)' }}>
            {t('note')}
          </p>
        </div>
      </div>
    </section>
  );
}
