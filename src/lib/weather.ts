export interface WeatherCurrent {
  temperature: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  weatherCode: number;
  time: string;
  uvIndex?: number;
}

export interface WeatherDay {
  date: string;
  code: number;
  max: number;
  min: number;
  precipProb: number | null;
  uvMax?: number;
}

export interface WeatherData {
  current: WeatherCurrent;
  daily: WeatherDay[];
  fetchedAt: number;
}

export function wmoKey(code: number): string {
  if (code === 0) return 'clear';
  if (code <= 2) return 'partly';
  if (code === 3) return 'overcast';
  if (code === 45 || code === 48) return 'fog';
  if (code <= 57) return 'drizzle';
  if (code <= 67) return 'rain';
  if (code <= 77) return 'snow';
  if (code <= 82) return 'showers';
  if (code === 85 || code === 86) return 'snowShowers';
  return 'thunder';
}

export async function fetchWeather(
  lat: number,
  lon: number,
  days = 5
): Promise<WeatherData> {
  const params = new URLSearchParams({
    latitude: String(lat),
    longitude: String(lon),
    current:
      'temperature_2m,apparent_temperature,relative_humidity_2m,precipitation,weather_code,wind_speed_10m,uv_index',
    daily:
      'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max',
    timezone: 'America/Panama',
    forecast_days: String(days),
  });

  const res = await fetch(`https://api.open-meteo.com/v1/forecast?${params.toString()}`);
  if (!res.ok) {
    throw new Error('weather request failed');
  }
  const json = await res.json();
  const c = json.current;
  const d = json.daily;

  const daily: WeatherDay[] = d.time.map((iso: string, i: number) => ({
    date: iso,
    code: d.weather_code[i],
    max: Math.round(d.temperature_2m_max[i]),
    min: Math.round(d.temperature_2m_min[i]),
    precipProb:
      d.precipitation_probability_max && d.precipitation_probability_max[i] != null
        ? d.precipitation_probability_max[i]
        : null,
    uvMax:
      d.uv_index_max && d.uv_index_max[i] != null ? Math.round(d.uv_index_max[i]) : undefined,
  }));

  return {
    current: {
      temperature: Math.round(c.temperature_2m),
      feelsLike: Math.round(c.apparent_temperature),
      humidity: Math.round(c.relative_humidity_2m),
      windSpeed: Math.round(c.wind_speed_10m),
      weatherCode: c.weather_code,
      time: c.time,
      uvIndex: c.uv_index != null ? Math.round(c.uv_index) : undefined,
    },
    daily,
    fetchedAt: Date.now(),
  };
}
