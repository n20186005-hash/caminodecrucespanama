import { getTranslations } from 'next-intl/server';

export default async function FacilitiesSection() {
  const t = await getTranslations('facilities');
  const items = (t.raw('items') || []) as [string, string][];

  return (
    <section id="facilities" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>
          {t('sectionTitle')}
        </h2>
        <div className="w-12 h-0.5 mb-6" style={{ background: 'var(--accent)' }} />
        <p className="text-base leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
          {t('subtitle')}
        </p>
        <p className="text-sm mb-10" style={{ color: 'var(--text-muted)' }}>
          {t('note')}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map(([name, desc], i) => (
            <div
              key={i}
              className="rounded-xl p-5"
              style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
            >
              <h3 className="font-semibold text-base mb-2" style={{ color: 'var(--accent)' }}>
                {name}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
