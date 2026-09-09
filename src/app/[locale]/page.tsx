import { setRequestLocale, getMessages } from 'next-intl/server';
import { SITE } from '@/lib/site';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Breadcrumb from '@/components/Breadcrumb';
import Intro from '@/components/Intro';
import NearbyLandmarks from '@/components/NearbyLandmarks';
import FloraFaunaCards from '@/components/FloraFaunaCards';
import BasicInfo from '@/components/BasicInfo';
import HistoryTimeline from '@/components/HistoryTimeline';
import RouteSection from '@/components/RouteSection';
import TrailsSection from '@/components/TrailsSection';
import HoursSection from '@/components/HoursSection';
import PracticalInfo from '@/components/PracticalInfo';
import TicketsSection from '@/components/TicketsSection';
import TransportSection from '@/components/TransportSection';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import MapEmbed from '@/components/MapEmbed';
import WeatherSection from '@/components/WeatherSection';
import FacilitiesSection from '@/components/FacilitiesSection';
import FaqSection from '@/components/FaqSection';
import SourcesSection from '@/components/SourcesSection';
import Footer from '@/components/Footer';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const messages = (await getMessages()) as any;
  const faqQuestions: { q: string; a: string }[] = messages?.faq?.questions || [];
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqQuestions.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  // 单景点实体绑定：TouristAttraction + Park + @id + image + NAP + geo
  const placeSchema = {
    '@context': 'https://schema.org',
    '@type': ['TouristAttraction', 'Park'],
    '@id': `${SITE.url}/#attraction`,
    name: SITE.fullName,
    alternateName: [SITE.shortName, `${SITE.city} ${SITE.fullName}`],
    description:
      messages?.meta?.description ||
      `Comprehensive visitor guide to ${SITE.fullName} in ${SITE.city}, ${SITE.province}, ${SITE.country}.`,
    url: `${SITE.url}/${locale}`,
    image: [SITE.heroImageAbsolute],
    // 公园设有入场门票（在线购票制），因此 not accessible for free
    isAccessibleForFree: false,
    publicAccess: true,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.plusCode,
      addressLocality: SITE.city,
      addressRegion: SITE.province,
      addressCountry: SITE.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.latitude,
      longitude: SITE.longitude,
    },
    hasMap: SITE.mapsShareUrl,
    sameAs: [
      SITE.mapsShareUrl,
      SITE.officialTourismUrl,
      SITE.managementUrl,
      SITE.unescoUrl,
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: SITE.rating,
      bestRating: '5',
      reviewCount: SITE.reviewCount,
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: messages?.breadcrumb?.home || 'Home',
        item: `${SITE.url}/${locale}`,
      },
      { '@type': 'ListItem', position: 2, name: SITE.fullName },
      { '@type': 'ListItem', position: 3, name: SITE.city },
      { '@type': 'ListItem', position: 4, name: SITE.province },
      { '@type': 'ListItem', position: 5, name: SITE.country },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main>
        <Hero />
        <Breadcrumb />
        <Intro />
        <NearbyLandmarks />
        <BasicInfo />
        <WeatherSection />
        <FloraFaunaCards />
        <HistoryTimeline />
        <RouteSection />
        <TrailsSection />
        <HoursSection />
        <PracticalInfo />
        <TicketsSection />
        <FacilitiesSection />
        <TransportSection />
        <Gallery />
        <Reviews />
        <MapEmbed />
        <FaqSection />
        <SourcesSection />
      </main>
      <Footer />
    </>
  );
}
