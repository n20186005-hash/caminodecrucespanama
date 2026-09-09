/**
 * 单景点 SEO 实体绑定配置变量表
 * ---------------------------------------------------------------
 * 一个站点只服务一个地理实体的场景下，所有 Schema / TDK / 内容中的
 * 实体字段统一收敛到本文件，保证 NAP 与坐标全站一致。
 */
export const SITE = {
  // {{DOMAIN_NAME}} 网站域名
  domain: 'caminodecrucespanama.com',
  url: 'https://caminodecrucespanama.com',

  // {{ATTRACTION_FULL_NAME}} 景点官方全称
  fullName: 'Parque Nacional Camino de Cruces',
  // {{ATTRACTION_SHORT_NAME}} 景点常用俗称/域名含义
  shortName: 'Camino de Cruces',
  zhName: '卡米诺德克鲁塞斯国家公园',

  // {{CITY_NAME}} 所在城市
  city: 'Panamá',
  // {{STATE_PROVINCE}} 所在省/州
  province: 'Provincia de Panamá',
  provinceShort: 'Panamá Province',
  // {{COUNTRY_NAME}} 所在国家（英文，用于结构化数据）
  country: 'Panama',
  // {{COUNTRY_CODE_2LETTER}} 两位国家代码
  countryCode: 'PA',

  // Plus Code（Google Maps 上展示的标准定位，作为街道地址保持 NAP 一致）
  plusCode: '2CH7+X8V',
  displayAddress: '2CH7+X8V, Panamá, Provincia de Panamá',

  // Google Maps 商户数据：评分与评价数
  rating: '4.5',
  reviewCount: 5786,

  // {{LATITUDE}} / {{LONGITUDE}} 与 Google 商户页一致的精确定位
  latitude: 9.0299945,
  longitude: -79.589284,

  // {{MAPS_SHARE_URL}} Google Maps 分享短链接
  mapsShareUrl: 'https://maps.app.goo.gl/YAmB6VusVrvnhaDs6',
  // {{MAPS_EMBED_SRC}} Google Maps 官方 embed src（来自景点商户页）
  mapsEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7008.522245689807!2d-79.589283987463!3d9.029994490993968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca79275d35797%3A0x50e67d9722b2eec4!2z5Y2h57Gz6K-65b635YWL6bKB5aGe5pav5Zu95a625YWs5Zut!5e1!3m2!1szh-CN!2s!4v1788937934268!5m2!1szh-CN!2s',

  // 首页/主视觉图（本地）
  heroImage: '/gallery/parque-nacional-camino-de-cruces-1.jpg',
  heroImageAlt: 'Parque Nacional Camino de Cruces - Main view in Panamá, Provincia de Panamá, Panama',
  heroImageAbsolute: 'https://caminodecrucespanama.com/gallery/parque-nacional-camino-de-cruces-1.jpg',

  // {{NEARBY_LANDMARK_1}} / {{NEARBY_LANDMARK_2}} 周边核心地标
  landmark1: 'Panama Canal',
  landmark2: 'Soberanía National Park',

  // {{GOVT_TOURISM_URL}} 官方旅游局页面 + 管理机构官网
  officialTourismName: 'Visit Panama - Panama Tourism Authority',
  officialTourismUrl:
    'https://www.tourismpanama.com/outdoors-and-nature/nature-parks/national-parks/camino-de-cruces-national-park/',
  managementUrl: 'https://miambiente.gob.pa/',
  unescoUrl: 'https://whc.unesco.org/en/tentativelists/6243/',

  // PWA / Analytics
  analyticsId: 'G-HXM22WWPKP',
  themeColor: '#2d5a3d',
} as const;
