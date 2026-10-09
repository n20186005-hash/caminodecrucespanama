import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://caminodecrucespanama.com';
  const locales = ['zh', 'en', 'es'];
  const routes = ['', '/privacy-policy', '/terms-of-service', '/cookie-settings'];
  const topics = ['senderos', 'comoLlegar', 'entradas'];

  const sitemap: MetadataRoute.Sitemap = [];

  const pushEntry = (path: string, priority: number, changeFrequency: string) => {
    const languages: Record<string, string> = {
      zh: `${baseUrl}/zh${path}`,
      en: `${baseUrl}/en${path}`,
      es: `${baseUrl}/es${path}`,
      'x-default': `${baseUrl}/es${path}`,
    };
    sitemap.push({
      url: `${baseUrl}/es${path}`,
      lastModified: new Date(),
      changeFrequency: changeFrequency as MetadataRoute.Sitemap[number]['changeFrequency'],
      priority,
      alternates: { languages },
    });
  };

  for (const route of routes) {
    pushEntry(route, route === '' ? 1 : 0.5, route === '' ? 'weekly' : 'monthly');
  }

  for (const topic of topics) {
    pushEntry(`/${topic}`, 0.7, 'monthly');
  }

  return sitemap;
}
