import { getTranslations } from 'next-intl/server';

export default async function SourcesSection() {
  const t = await getTranslations('sources');
  const items = (t.raw('items') || []) as { label: string; url: string }[];

  return (
    <section id="sources" className="section-padding" style={{ background: 'var(--bg-tertiary)' }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-6" style={{ background: 'var(--accent)' }} />

        <p
          className="text-sm sm:text-base leading-relaxed mb-8"
          style={{ color: 'var(--text-muted)' }}
        >
          {t('intro')}
        </p>

        <ul className="space-y-3">
          {items.map((item, i) => (
            <li key={i}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-2 rounded-lg px-4 py-3 transition-colors"
                style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-secondary)',
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2"
                  className="flex-shrink-0 mt-0.5"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                <span className="text-sm group-hover:underline underline-offset-2">
                  {item.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
