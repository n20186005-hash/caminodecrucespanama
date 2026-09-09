import { getTranslations } from 'next-intl/server';

export default async function NearbyLandmarks() {
  const t = await getTranslations('landmarks');
  const items = (t.raw('items') || []) as { name: string; desc: string }[];

  return (
    <section id="landmarks" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-8" style={{ background: 'var(--accent)' }} />

        <p
          className="text-lg leading-relaxed mb-4"
          style={{ color: 'var(--text-secondary)' }}
        >
          {t('subtitle')}
        </p>
        <p
          className="text-xs sm:text-sm mb-10 font-medium tracking-wide"
          style={{ color: 'var(--text-muted)' }}
        >
          {t('geoLabel')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-xl p-6"
              style={{
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-color)',
              }}
            >
              <h3
                className="font-display text-lg font-semibold mb-3"
                style={{ color: 'var(--text-primary)' }}
              >
                {item.name}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
