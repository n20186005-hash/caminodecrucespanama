'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useCallback, useEffect, useRef, useState } from 'react';
import { SITE } from '@/lib/site';
import { fetchWeather, wmoKey, type WeatherData } from '@/lib/weather';
import { buildWeatherAdvice, uvLevel, windLevel } from '@/lib/weatherAdvice';

const CACHE_KEY = 'camino-de-cruces:weather';
const CACHE_TTL = 15 * 60 * 1000;

function intlLocale(locale: string) {
  if (locale === 'es') return 'es-PA';
  if (locale === 'en') return 'en-US';
  return 'zh-CN';
}

function formatTime(ts: number, locale: string) {
  return new Intl.DateTimeFormat(intlLocale(locale), {
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(ts));
}

function dayLabel(iso: string, index: number, todayLabel: string, locale: string) {
  if (index === 0) return todayLabel;
  const date = new Date(`${iso}T00:00:00`);
  return new Intl.DateTimeFormat(intlLocale(locale), { weekday: 'short' }).format(date);
}

function dateShort(iso: string, locale: string) {
  const date = new Date(`${iso}T00:00:00`);
  return new Intl.DateTimeFormat(intlLocale(locale), {
    month: 'numeric',
    day: 'numeric',
  }).format(date);
}

export default function WeatherSection() {
  const t = useTranslations('weather');
  const locale = useLocale();
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const mounted = useRef(true);

  const load = useCallback(() => {
    setLoading(true);
    setError(false);
    try {
      const raw = window.localStorage.getItem(CACHE_KEY);
      if (raw) {
        const cached = JSON.parse(raw) as WeatherData;
        if (Date.now() - cached.fetchedAt < CACHE_TTL) {
          setData(cached);
          setLoading(false);
          return;
        }
      }
    } catch {
      // ignore cache errors
    }
    fetchWeather(SITE.latitude, SITE.longitude, 5)
      .then((w) => {
        if (!mounted.current) return;
        try {
          window.localStorage.setItem(CACHE_KEY, JSON.stringify(w));
        } catch {
          // ignore storage errors
        }
        setData(w);
        setLoading(false);
      })
      .catch(() => {
        if (!mounted.current) return;
        setError(true);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    mounted.current = true;
    load();
    return () => {
      mounted.current = false;
    };
  }, [load]);

  return (
    <section id="weather" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>
          {t('sectionTitle')}
        </h2>
        <div className="w-12 h-0.5 mb-6" style={{ background: 'var(--accent)' }} />
        <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
          {t('subtitle')}
        </p>

        {loading && (
          <div className="rounded-xl p-8 text-center" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', color: 'var(--text-muted)' }}>
            {t('loading')}
          </div>
        )}

        {!loading && error && (
          <div className="rounded-xl p-8 text-center" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>
            <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>{t('unavailable')}</p>
            <button type="button" onClick={load} className="px-5 py-2 rounded-lg text-sm font-medium" style={{ background: 'var(--accent)', color: '#fff' }}>
              {t('refresh')}
            </button>
          </div>
        )}

        {!loading && !error && data && (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Current conditions */}
              <div className="rounded-xl p-6 lg:col-span-1 flex flex-col" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>
                <span className="text-sm font-semibold mb-3" style={{ color: 'var(--text-muted)' }}>
                  {t('nowTitle')}
                </span>
                <div className="flex items-end gap-2 mb-1">
                  <span className="text-6xl font-bold leading-none" style={{ color: 'var(--text-primary)' }}>
                    {data.current.temperature}°
                  </span>
                  <span className="text-2xl mb-1" style={{ color: 'var(--accent)' }}>
                    {t(`codes.${wmoKey(data.current.weatherCode)}`)}
                  </span>
                </div>
                <span className="text-xs mb-5" style={{ color: 'var(--text-muted)' }}>
                  {t('location')}
                </span>
                <div className="grid grid-cols-2 gap-3 text-sm mt-auto">
                  <Stat label={t('feelsLike')} value={`${data.current.feelsLike}°`} />
                  <Stat label={t('humidity')} value={`${data.current.humidity}%`} />
                  <Stat label={t('wind')} value={`${data.current.windSpeed}`} />
                  <Stat label={t('precipToday')} value={data.daily[0]?.precipProb != null ? `${data.daily[0].precipProb}%` : '–'} />
                </div>
              </div>

              {/* Multi-day forecast */}
              <div className="rounded-xl p-6 lg:col-span-2" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>
                <span className="text-sm font-semibold mb-4 block" style={{ color: 'var(--text-muted)' }}>
                  {t('forecastTitle')}
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {data.daily.map((d, i) => (
                    <div key={d.date} className="rounded-lg p-3 text-center" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
                      <div className="text-sm font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                        {dayLabel(d.date, i, t('today'), locale)}
                      </div>
                      <div className="text-xs mb-2" style={{ color: 'var(--text-muted)' }}>
                        {dateShort(d.date, locale)}
                      </div>
                      <div className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                        {d.max}°
                      </div>
                      <div className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>
                        {d.min}°
                      </div>
                      <div className="text-xs leading-tight" style={{ color: 'var(--accent)' }}>
                        {t(`codes.${wmoKey(d.code)}`)}
                      </div>
                      {d.precipProb != null && (
                        <div className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                          {d.precipProb}%
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <WeatherAdvice data={data} />

            <div className="flex flex-wrap items-center justify-between gap-3 mt-6 text-xs" style={{ color: 'var(--text-muted)' }}>
              <span>
                {t('updatedAt')} {formatTime(data.fetchedAt, locale)} · {t('wind')}: {data.current.windSpeed} {t('unitKmh')}
              </span>
              <button type="button" onClick={load} className="px-4 py-1.5 rounded-lg text-xs font-medium" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}>
                {t('refresh')}
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg px-3 py-2" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
      <div className="text-[11px]" style={{ color: 'var(--text-muted)' }}>{label}</div>
      <div className="font-semibold text-base" style={{ color: 'var(--text-primary)' }}>{value}</div>
    </div>
  );
}

const COND_ICON: Record<string, string> = {
  clear: '☀️',
  partly: '⛅',
  overcast: '☁️',
  fog: '🌫️',
  drizzle: '🌦️',
  rain: '🌧️',
  showers: '🌦️',
  snow: '❄️',
  snowShowers: '🌨️',
  thunder: '⛈️',
};

type AdviceCat = 'outfit' | 'activity' | 'gear';

function WeatherAdvice({ data }: { data: WeatherData }) {
  const t = useTranslations('weather');
  const cur = data.current;
  const day0 = data.daily[0];
  const plan = buildWeatherAdvice(data);

  const codeKey = wmoKey(cur.weatherCode);
  const cond = `${COND_ICON[codeKey] ?? ''} ${t(`codes.${codeKey}`)}`;
  const uv = uvLevel(day0?.uvMax ?? cur.uvIndex ?? 0);
  const prob = day0?.precipProb != null ? `${day0.precipProb}%` : '—';
  const nowLine = t('advice.now', {
    cond,
    temp: cur.temperature,
    prob,
    wind: t(`advice.wind.${windLevel(cur.windSpeed)}`),
  });

  const hasGroups = plan.outfit.length > 0 || plan.activity.length > 0 || plan.gear.length > 0;

  const renderGroup = (cat: AdviceCat) => {
    const keys = plan[cat];
    if (keys.length === 0) return null;
    return (
      <div className="rounded-lg p-4" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
        <div
          className="text-xs font-semibold mb-3 uppercase tracking-wide"
          style={{ color: 'var(--text-muted)' }}
        >
          {t(`advice.labels.${cat}`)}
        </div>
        <ul className="space-y-2">
          {keys.map((k) => (
            <li key={k} className="flex gap-2 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <span style={{ color: 'var(--accent)' }} aria-hidden="true">•</span>
              <span>{t(`advice.${k}`)}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="mt-6 rounded-xl p-6" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--accent)' }}>
      <div className="flex flex-wrap items-center gap-2 mb-1">
        <h3 className="font-display text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
          {t('advice.title')}
        </h3>
      </div>
      <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm mb-5" style={{ color: 'var(--text-secondary)' }}>
        <span>{nowLine}</span>
        {uv !== 'none' && (
          <span
            className="inline-block px-2 py-0.5 rounded-full text-xs font-medium"
            style={{
              background: uv === 'high' || uv === 'veryhigh' ? 'rgba(249,115,22,0.15)' : 'var(--bg-secondary)',
              color: uv === 'high' || uv === 'veryhigh' ? '#ea580c' : 'var(--text-secondary)',
              border: '1px solid var(--border-color)',
            }}
          >
            {t('advice.uvLabel')}: {t(`advice.uv.${uv}`)}
          </span>
        )}
      </p>

      {plan.risks.length > 0 ? (
        <div className="rounded-xl p-4 mb-5" style={{ background: 'rgba(220,38,38,0.08)', border: '1px solid rgba(220,38,38,0.45)' }}>
          <div className="text-sm font-semibold mb-2" style={{ color: '#dc2626' }}>
            ⚠️ {t('advice.riskTitle')}
          </div>
          <ul className="space-y-1.5 text-sm leading-relaxed" style={{ color: '#b91c1c' }}>
            {plan.risks.map((k) => (
              <li key={k}>{t(`advice.${k}`)}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-sm mb-5" style={{ color: 'var(--accent)' }}>
          ✔ {t('advice.noRisk')}
        </p>
      )}

      {hasGroups && <div className="grid sm:grid-cols-3 gap-4">{renderGroup('outfit')}{renderGroup('activity')}{renderGroup('gear')}</div>}
    </div>
  );
}
