import { setRequestLocale, getTranslations } from 'next-intl/server';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import FloraFaunaCards from '@/components/FloraFaunaCards';
import BasicInfo from '@/components/BasicInfo';
import HistoryTimeline from '@/components/HistoryTimeline';
import RouteSection from '@/components/RouteSection';
import HoursSection from '@/components/HoursSection';
import PracticalInfo from '@/components/PracticalInfo';
import TicketsSection from '@/components/TicketsSection';
import TransportSection from '@/components/TransportSection';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import MapEmbed from '@/components/MapEmbed';
import Footer from '@/components/Footer';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tFAQ = await getTranslations('faq');
  const questions = [0, 1, 2, 3].map((index) => ({
    q: tFAQ(`questions.${index}.q`),
    a: tFAQ(`questions.${index}.a`),
  }));

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  const placeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Park',
    name: 'Parque Nacional Camino de Cruces',
    description: 'A 9,000-acre tropical forest reserve and historical national park in Panama featuring the 16th-century Camino de Cruces trail.',
    url: 'https://caminodecrucespanama.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Panamá',
      addressRegion: 'Provincia de Panamá',
      addressCountry: 'PA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '9.0494',
      longitude: '-79.5939',
    },
    publicAccess: true,
    petsAllowed: true,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }}
      />
      <Header />
      <main>
        <Hero />
        <Intro />
        <BasicInfo />
        <FloraFaunaCards />
        <HistoryTimeline />
        <RouteSection />
        <HoursSection />
        <PracticalInfo />
        <TicketsSection />
        <TransportSection />
        <Gallery />
        <Reviews />
        <MapEmbed />
      </main>
      <Footer />
    </>
  );
}
