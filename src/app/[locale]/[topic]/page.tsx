import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { SITE } from '@/lib/site';
import TopicPage from '@/components/TopicPage';

const TOPICS = ['senderos', 'comoLlegar', 'entradas'] as const;
const TOPIC_SET = new Set<string>(TOPICS);

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    TOPICS.map((topic) => ({ locale, topic }))
  );
}

function buildAlternateUrls(topic: string) {
  const { url } = SITE;
  return {
    zh: `${url}/zh/${topic}`,
    en: `${url}/en/${topic}`,
    es: `${url}/es/${topic}`,
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; topic: string }>;
}): Promise<Metadata> {
  const { locale, topic } = await params;
  if (!TOPIC_SET.has(topic)) return {};

  const t = await getTranslations({ locale, namespace: 'topics' });
  const title = t(`${topic}.title`);
  const description = t(`${topic}.intro`);

  const urls = buildAlternateUrls(topic);
  const selfUrl = urls[locale as 'zh' | 'en' | 'es'] ?? urls.es;
  const langMap: Record<string, string> = {
    zh: 'zh_CN',
    en: 'en_US',
    es: 'es_MX',
  };

  return {
    title,
    description,
    alternates: {
      canonical: selfUrl,
      languages: {
        zh: urls.zh,
        en: urls.en,
        es: urls.es,
        'x-default': urls.es,
      } as Record<string, string>,
    },
    openGraph: {
      title,
      description,
      url: selfUrl,
      siteName: SITE.fullName,
      locale: langMap[locale] || 'zh_CN',
      type: 'article',
    },
  };
}

export default async function TopicRoute({
  params,
}: {
  params: Promise<{ locale: string; topic: string }>;
}) {
  const { locale, topic } = await params;
  if (!TOPIC_SET.has(topic)) notFound();

  const t = await getTranslations({ locale, namespace: 'topics' });
  const data = {
    title: t(`${topic}.title`),
    subtitle: t(`${topic}.subtitle`),
    intro: t(`${topic}.intro`),
    sections: t.raw(`${topic}.sections`) as { heading: string; body: string }[],
    faq: t.raw(`${topic}.faq`) as { q: string; a: string }[],
  };

  const others = TOPICS.filter((x) => x !== topic);
  const siblings = await Promise.all(
    others.map(async (slug) => ({ slug, title: t(`${slug}.title`) }))
  );

  const urls = buildAlternateUrls(topic);
  const selfUrl = urls[locale as 'zh' | 'en' | 'es'] ?? urls.es;

  const breadcrumbJson = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${SITE.url}/${locale}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: data.title,
        item: selfUrl,
      },
    ],
  };

  const faqJson = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
      />
      <TopicPage locale={locale} topic={topic} data={data} siblings={siblings} />
    </>
  );
}
