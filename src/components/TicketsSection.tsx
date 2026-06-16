'use client';

import { useTranslations } from 'next-intl';

export default function TicketsSection() {
  const t = useTranslations('tickets');

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Prices */}
          <div
            className="rounded-2xl p-6 sm:p-8 flex flex-col h-full"
            style={{ background: 'var(--bg-tertiary)', border: '2px solid var(--accent)' }}
          >
            <h3 className="font-display text-xl font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>
              {t('prices.title')}
            </h3>
            <div className="space-y-4 flex-grow">
              <PriceRow label={t('prices.foreigners')} value={t('prices.foreignersPrice')} />
              <PriceRow label={t('prices.nationals')} value={t('prices.nationalsPrice')} />
              <PriceRow label={t('prices.students')} value={t('prices.studentsPrice')} />
              <PriceRow label={t('prices.children')} value={t('prices.childrenPrice')} />
            </div>
          </div>

          {/* Booking Info */}
          <div
            className="rounded-2xl p-6 sm:p-8 flex flex-col h-full"
            style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
          >
            <h3 className="font-display text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              {t('booking.title')}
            </h3>
            <p className="leading-relaxed flex-grow" style={{ color: 'var(--text-secondary)' }}>
              {t('booking.notice')}
              <a 
                href={t('booking.linkUrl')} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline font-medium px-1"
                style={{ color: 'var(--accent)' }}
              >
                {t('booking.linkText')}
              </a>
              {t('booking.noticeEnd')}
            </p>
          </div>
        </div>

        {/* Facilities */}
        <div
          className="rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-4 sm:gap-6"
          style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
        >
          <div className="flex-shrink-0 mt-1">
            <h3 className="font-display text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>
              {t('facilities.title')}
            </h3>
          </div>
          <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {t('facilities.desc')}
          </p>
        </div>
      </div>
    </section>
  );
}

function PriceRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-dashed last:border-0" style={{ borderColor: 'var(--border-color)' }}>
      <span style={{ color: 'var(--text-secondary)' }}>{label}</span>
      <span className="font-medium" style={{ color: 'var(--text-primary)' }}>{value}</span>
    </div>
  );
}