import { SITE } from '@/lib/site';

export interface TopicData {
  title: string;
  subtitle: string;
  intro: string;
  sections: { heading: string; body: string }[];
  faq: { q: string; a: string }[];
}

interface Sibling {
  slug: string;
  title: string;
}

export default function TopicPage({
  locale,
  topic,
  data,
  siblings,
}: {
  locale: string;
  topic: string;
  data: TopicData;
  siblings: Sibling[];
}) {
  return (
    <main>
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <nav aria-label="breadcrumb" className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
            <a href={`/${locale}`} style={{ color: 'var(--accent)' }}>
              {SITE.name}
            </a>
            <span className="mx-2">/</span>
            <span>{data.title}</span>
          </nav>

          <h1
            className="font-display text-3xl sm:text-4xl font-semibold mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            {data.title}
          </h1>
          <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
            {data.subtitle}
          </p>
          <div className="w-12 h-0.5 mb-8" style={{ background: 'var(--accent)' }} />

          <p
            className="text-base leading-relaxed mb-10"
            style={{ color: 'var(--text-secondary)' }}
          >
            {data.intro}
          </p>

          <div className="space-y-8">
            {data.sections.map((s, i) => (
              <div key={i}>
                <h2
                  className="font-display text-xl font-semibold mb-2"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {s.heading}
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="font-display text-2xl font-semibold mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            FAQ
          </h2>
          <div className="space-y-4">
            {data.faq.map((f, i) => (
              <div
                key={i}
                className="rounded-xl p-5"
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border-color)',
                }}
              >
                <p className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {f.q}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {siblings.length > 0 && (
        <section className="section-padding">
          <div className="max-w-3xl mx-auto">
            <h2
              className="font-display text-xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              {SITE.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {siblings.map((s) => (
                <a
                  key={s.slug}
                  href={`/${locale}/${s.slug}`}
                  className="group rounded-xl p-4 transition-colors"
                  style={{
                    background: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-color)',
                  }}
                >
                  <span
                    className="text-sm font-medium group-hover:text-[var(--accent)]"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {s.title}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
