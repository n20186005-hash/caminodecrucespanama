import type { WeatherData } from './weather';

/**
 * 面向游客的天气建议规则引擎（纯函数，不含任何文案 / 图标）。
 *
 * 分类约定：
 *  - outfit   出行穿搭
 *  - activity 游玩安排
 *  - gear     随身物品（不满足条件即不返回，前端动态渲染）
 *  - risks    风险提醒（有触发才返回，无触发时前端显示"无风险"）
 *
 * 返回的 key 需与 messages 中 weather.advice.<key> 一一对应。
 */

export interface AdvicePlan {
  outfit: string[];
  activity: string[];
  gear: string[];
  risks: string[];
}

export type WindWord = 'calm' | 'moderate' | 'fresh' | 'strong' | 'gale';
export type UvWord = 'none' | 'low' | 'moderate' | 'high' | 'veryhigh';

export function windLevel(speedKmh: number): WindWord {
  if (speedKmh >= 50) return 'gale';
  if (speedKmh >= 39) return 'strong';
  if (speedKmh >= 29) return 'fresh';
  if (speedKmh >= 12) return 'moderate';
  return 'calm';
}

export function uvLevel(value: number | null | undefined): UvWord {
  const v = value ?? 0;
  if (v <= 0) return 'none';
  if (v < 3) return 'low';
  if (v < 6) return 'moderate';
  if (v < 8) return 'high';
  return 'veryhigh';
}

// WMO weather code 分级（0-99）
const isDrizzle = (c: number) => c >= 51 && c <= 57;
const isHeavyRain = (c: number) => (c >= 65 && c <= 67) || c === 82;
const isAnyRain = (c: number) => (c >= 51 && c <= 67) || (c >= 80 && c <= 82);
const isThunder = (c: number) => c >= 95 && c <= 99;

function pushUnique(list: string[], key: string) {
  if (!list.includes(key)) list.push(key);
}

export function buildWeatherAdvice(w: WeatherData): AdvicePlan {
  const cur = w.current;
  const day0 = w.daily[0];
  const code = cur.weatherCode;
  const dayCode = day0?.code ?? code;
  const prob = day0?.precipProb ?? null;
  const min = day0?.min ?? cur.temperature;
  const max = day0?.max ?? cur.temperature;
  // 紫外线使用"今日全天最高"做判断：游客白天出行，实时瞬时值在清晨/夜晚会低估风险
  const uvMax = day0?.uvMax ?? cur.uvIndex ?? 0;

  const nowRaining = isAnyRain(code);
  const nowDrizzle = isDrizzle(code);
  const nowHeavy = isHeavyRain(code);
  const nowThunder = isThunder(code);
  const dayThunder = isThunder(dayCode);
  const clearish = code <= 2;
  const overcast = code === 3;
  const foggy = code === 45 || code === 48;

  const hot = cur.temperature >= 32 || cur.feelsLike >= 34;
  const wind = cur.windSpeed;

  const outfit: string[] = [];
  const activity: string[] = [];
  const gear: string[] = [];
  const risks: string[] = [];

  // 出行穿搭
  if (hot) pushUnique(outfit, 'outfit_heat');
  if (max - min > 8) pushUnique(outfit, 'outfit_layers');
  if (nowRaining || (prob !== null && prob >= 60)) pushUnique(outfit, 'outfit_rain');

  // 基础游玩建议（雾 → 晴 → 阴）
  if (foggy) {
    pushUnique(activity, 'act_fog');
  } else if (clearish && (prob === null || prob < 40)) {
    pushUnique(activity, 'act_clear');
  } else if (overcast && (prob === null || prob < 40)) {
    pushUnique(activity, 'act_overcast');
  }

  // 正午暴晒提醒（晴天/阴天且高温或强紫外线）
  if ((hot || uvMax >= 6) && (activity.includes('act_clear') || activity.includes('act_overcast'))) {
    pushUnique(activity, 'act_sunHigh');
  }

  // 降雨分支：雷雨 > 强降雨 > 普通雨 > 毛毛雨 > 仅高降水概率
  if (nowThunder || (dayThunder && (prob ?? 0) >= 60)) {
    pushUnique(risks, 'risk_thunder');
    if (nowRaining || (prob ?? 0) >= 60) pushUnique(gear, 'gear_raincoat');
  } else if (nowHeavy) {
    pushUnique(risks, 'risk_rain');
    pushUnique(activity, 'act_raining');
    pushUnique(gear, 'gear_raincoat');
  } else if (nowRaining) {
    if (nowDrizzle) {
      pushUnique(activity, 'act_drizzle');
      pushUnique(gear, 'gear_umbrella');
    } else {
      pushUnique(activity, 'act_raining');
      pushUnique(gear, 'gear_raincoat');
    }
  } else if (prob !== null && prob >= 60) {
    pushUnique(activity, 'act_rainChance');
    pushUnique(gear, 'gear_umbrella');
  }

  // 风力（>=50km/h 约 6 级以上时升级为风险）
  if (wind >= 50) {
    pushUnique(risks, 'risk_wind');
  } else if (wind >= 39) {
    pushUnique(activity, 'act_windy');
  }

  // 防晒（正在下雨时不提示）
  if (!nowRaining && uvMax >= 6) pushUnique(gear, 'gear_sunscreen');
  // 补水
  if (hot || uvMax >= 8 || activity.includes('act_clear')) pushUnique(gear, 'gear_water');
  // 雨林蚊虫（高湿环境蚊虫活跃，属本公园固定场景建议）
  if (cur.humidity >= 75) pushUnique(gear, 'gear_mosquito');

  return { outfit, activity, gear, risks };
}
