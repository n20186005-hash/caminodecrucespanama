import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

export default function Breadcrumb() {
  const t = useTranslations('breadcrumb');
  const locale = useLocale();
  const homeHref = `/${locale}`;

  return (
    <nav
      aria-label={t('ariaLabel')}
      className="py-3 px-4 sm:px-6"
      style={{
        background: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border-color)',
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm">
        <a
          href={homeHref}
          className="hover:underline"
          style={{ color: 'var(--text-secondary)' }}
        >
          {t('home')}
        </a>
        <Chevron />
        <span
          className="font-medium"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('park')}
        </span>
        <Chevron />
        <span style={{ color: 'var(--text-muted)' }}>{t('geo')}</span>
      </div>
    </nav>
  );
}

function Chevron() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--text-muted)"
      strokeWidth="2"
      className="flex-shrink-0"
      aria-hidden="true"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}
