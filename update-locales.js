const fs = require('fs');

const updateJson = (file, locale) => {
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  
  // Historical Lore
  if (locale === 'zh') {
    data.historyTimeline = {
      "title": "历史解密与变迁 (Historical Lore & Timeline)",
      "items": [
        {
          "year": "16世纪",
          "title": "16世纪 - 黄金与海盗的生命线",
          "plaque": "西班牙人铺设鹅卵石小径",
          "description": "西班牙人铺设了这条鹅卵石小径，用于运输南美洲的黄金、白银及其他殖民地财富。1671年，臭名昭著的海盗亨利·摩根（Henry Morgan）正是利用这条隐蔽的雨林捷径，成功避开了西班牙人的主要防线，最终洗劫并烧毁了老巴拿马城（Panamá Viejo）。"
        },
        {
          "year": "19世纪",
          "title": "19世纪 - 加州淘金热的残酷现实",
          "plaque": "穿越热带雨林",
          "description": "在巴拿马运河建成前，成千上万的美国淘金者（49ers）为了前往加州，踏上了这条“捷径”。当时的探险者日记记录了他们如何在这里对抗霍乱、黄热病以及极端潮湿的雨林环境，许多人未能走完这条沉重的生命线。"
        },
        {
          "year": "20世纪及以后",
          "title": "20世纪及以后 - 设立国家公园",
          "plaque": "生态与历史的保护",
          "description": "随着环境保护意识的提高，该地区被设立为国家公园，以保护其丰富的雨林生物多样性和珍贵的历史文化遗产。"
        }
      ],
      "guideTitle": "游客导览建议",
      "guideContent": "游客在参观时，可以先从公园主入口进入，获取地图并了解公园的历史背景；随后沿着16世纪原始的鹅卵石古道徒步，感受殖民时期的交通要道；如果您有充足的时间，可以观察丰富的热带雨林生态系统，寻找吼猴、树懒等野生动物。最后在公园内的观景点休息，感受巴拿马野性自然与历史底蕴的完美交汇。"
    };
    data.floraFauna = {
      "title": "物种档案卡 (Species Archives)",
      "subtitle": "占地 9000 英亩的热带森林保护区内，生存着无数令人惊叹的动植物。以下是几种标志性生物的自然生存法则：",
      "cards": [
        {
          "name": "蓝闪蝶 (Blue Morpho Butterfly)",
          "latin": "Morpho peleides",
          "description": "巨大的蓝色翅膀并非由色素构成，而是利用微观结构折射光线。这种“结构色”让它们在雨林穿梭时闪烁着耀眼的光芒，能有效迷惑捕食者。"
        },
        {
          "name": "吼猴 (Mantled Howler Monkey)",
          "latin": "Alouatta palliata",
          "description": "它们的舌骨演化成了一个共鸣腔，使得吼叫声在茂密的雨林中能传播长达 3 英里（约 4.8 公里），主要用于标记领地和避免群际冲突。"
        },
        {
          "name": "褐喉树懒 (Brown-throated Sloth)",
          "latin": "Bradypus variegatus",
          "description": "极致的节能主义者。它们的毛发中常长有共生绿藻，不仅能在雨林冠层提供极佳的保护色，甚至还能为它们补充微量营养。"
        },
        {
          "name": "栗嘴巨嘴鸟 (Chestnut-mandibled Toucan)",
          "latin": "Ramphastos swainsonii",
          "description": "其巨大且色彩鲜艳的喙虽然看起来沉重，但内部呈海绵状，异常轻巧，不仅是取食利器，更是热带雨林中调节体温的绝佳散热器。"
        }
      ]
    };
    data.practicalInfo = {
      "title": "深度探索实用指南 (Practical Exploration Guide)",
      "petPolicy": {
        "title": "🐕 宠物政策与注意事项",
        "content": "公园允许携带宠物狗入内。但由于是原始雨林环境，请务必全程牵绳，避免惊扰吼猴和巨嘴鸟等野生动物。建议提前为狗狗做好防蜱虫（Ticks）处理，并携带充足的宠物饮水。"
      },
      "trailConditions": {
        "title": "🥾 真实路况与地质提示",
        "content": "古道路基主要由16世纪的河卵石铺就。在雨季（5月-11月），巨大的降水量会导致长满青苔的石头变得异常湿滑。旱季（12月-4月）路况较好，但高温高湿依然是对体能的考验。"
      },
      "difficulty": {
        "title": "⛰️ 徒步难度评级",
        "content": "难度评级：中等至困难（取决于季节）。全长约 10 公里（单程），累计爬升约 200 米。完成整个经典穿越路段通常需要 4-6 小时的精准时间，请务必合理规划体力。"
      }
    };
    data.footer.furtherReadingTitle = "延伸阅读 (Further Reading)";
    data.footer.furtherReading = {
      "paper1": {
        "name": "《16世纪巴拿马地峡的物流与贸易网络》 - 历史学论文",
        "url": "#"
      },
      "book1": {
        "name": "《The Path Between the Seas》 - 探险与运河史",
        "url": "#"
      },
      "report1": {
        "name": "Camino de Cruces 考古发掘初步报告",
        "url": "#"
      }
    };
    data.faq = {
      "title": "常见问题 (FAQ)",
      "questions": [
        {
          "q": "卡米诺德克鲁塞斯国家公园的门票是多少？",
          "a": "外国成人门票为 $5.00 USD，本国居民为 $3.00 USD，学生及退休人员为 $1.00 USD，12岁以下儿童免费。请务必提前通过巴拿马环境部官方网站在线购票。"
        },
        {
          "q": "走完古道需要多长时间？",
          "a": "完成整个经典穿越路段通常需要 4-6 小时，全长约 10 公里，难度属于中等至困难。建议在上午及早入园。"
        },
        {
          "q": "公园允许带狗吗？",
          "a": "允许。公园允许携带宠物狗入内，但必须全程牵绳以防惊扰野生动物，并建议提前做好防蜱虫处理。"
        },
        {
          "q": "什么时候是游览的最佳季节？",
          "a": "旱季（12月-4月）是徒步的最佳季节，此时天气晴朗路况较好。雨季（5月-11月）古道极其湿滑，徒步难度大幅增加。"
        }
      ]
    };
  } else if (locale === 'en') {
    data.historyTimeline = {
      "title": "Historical Lore & Timeline",
      "items": [
        {
          "year": "16th Century",
          "title": "16th Century - Lifeline of Gold & Pirates",
          "plaque": "Spaniards lay cobblestone trail",
          "description": "The Spanish laid this cobblestone path to transport South American gold, silver, and other colonial wealth. In 1671, the notorious pirate Henry Morgan used this hidden rainforest shortcut to successfully bypass the main Spanish defenses, ultimately sacking and burning Panamá Viejo."
        },
        {
          "year": "19th Century",
          "title": "19th Century - The Cruel Reality of the Gold Rush",
          "plaque": "Crossing the rainforest",
          "description": "Before the Panama Canal was built, thousands of American prospectors (49ers) trekked this \"shortcut\" to reach California. Explorer diaries from the time record how they battled cholera, yellow fever, and extreme rainforest humidity here, with many failing to complete this heavy lifeline."
        },
        {
          "year": "20th Century & Beyond",
          "title": "20th Century & Beyond - National Park Established",
          "plaque": "Protection of ecology and history",
          "description": "With rising environmental awareness, the area was established as a national park to protect its rich rainforest biodiversity and precious historical and cultural heritage."
        }
      ],
      "guideTitle": "Visitor Guide Recommendations",
      "guideContent": "Visitors can enter through the main park entrance, obtain a map, and learn about the park's historical background; then hike along the original 16th-century cobblestone trail to experience the colonial transportation hub; if you have enough time, you can observe the rich tropical rainforest ecosystem and look for wildlife like howler monkeys and sloths. Finally, rest at the park's viewpoints to feel the perfect intersection of Panama's wild nature and historical heritage."
    };
    data.floraFauna = {
      "title": "Species Archives",
      "subtitle": "Within this 9,000-acre tropical forest reserve live countless amazing plants and animals. Here are the natural survival rules of some iconic species:",
      "cards": [
        {
          "name": "Blue Morpho Butterfly",
          "latin": "Morpho peleides",
          "description": "Their massive blue wings aren't made of pigment, but use microstructures to refract light. This \"structural color\" makes them flash dazzlingly as they navigate the rainforest, effectively confusing predators."
        },
        {
          "name": "Mantled Howler Monkey",
          "latin": "Alouatta palliata",
          "description": "Their hyoid bone has evolved into a resonating chamber, allowing their howls to travel up to 3 miles (about 4.8 km) through the dense rainforest, primarily used to mark territory and avoid inter-group conflicts."
        },
        {
          "name": "Brown-throated Sloth",
          "latin": "Bradypus variegatus",
          "description": "The ultimate energy savers. Their fur often hosts symbiotic green algae, which not only provides excellent camouflage in the rainforest canopy but even supplements them with trace nutrients."
        },
        {
          "name": "Chestnut-mandibled Toucan",
          "latin": "Ramphastos swainsonii",
          "description": "While their large, brightly colored beaks look heavy, the inside is spongy and exceptionally light, serving not just as a feeding tool but as an excellent radiator to regulate body temperature in the tropical rainforest."
        }
      ]
    };
    data.practicalInfo = {
      "title": "Practical Exploration Guide",
      "petPolicy": {
        "title": "🐕 Pet Policy & Precautions",
        "content": "Dogs are allowed in the park. However, due to the pristine rainforest environment, please keep them on a leash at all times to avoid disturbing wildlife like howler monkeys and toucans. It is recommended to treat your dog for ticks beforehand and bring plenty of water for them."
      },
      "trailConditions": {
        "title": "🥾 Real Trail Conditions & Geological Tips",
        "content": "The trail base is primarily composed of 16th-century river cobblestones. During the rainy season (May-Nov), massive rainfall makes the moss-covered stones exceptionally slippery. The dry season (Dec-Apr) offers better conditions, but high heat and humidity remain a physical challenge."
      },
      "difficulty": {
        "title": "⛰️ Hiking Difficulty Rating",
        "content": "Difficulty Rating: Moderate to Hard (depending on the season). Total length is about 10 km (one way) with an elevation gain of around 200 meters. Completing the classic crossing typically requires 4-6 hours of precise time, so please manage your stamina accordingly."
      }
    };
    data.footer.furtherReadingTitle = "Further Reading";
    data.footer.furtherReading = {
      "paper1": {
        "name": "Logistics and Trade Networks of the Panama Isthmus in the 16th Century - Historical Paper",
        "url": "#"
      },
      "book1": {
        "name": "The Path Between the Seas - History of Exploration and the Canal",
        "url": "#"
      },
      "report1": {
        "name": "Preliminary Report on the Archaeological Excavation of Camino de Cruces",
        "url": "#"
      }
    };
    data.faq = {
      "title": "Frequently Asked Questions (FAQ)",
      "questions": [
        {
          "q": "How much is the entrance fee for Parque Nacional Camino de Cruces?",
          "a": "Foreign adult tickets are $5.00 USD, national residents are $3.00 USD, students and retirees are $1.00 USD, and children under 12 are free. Please ensure you purchase tickets online in advance through the official MiAMBIENTE website."
        },
        {
          "q": "How long does it take to walk the trail?",
          "a": "Completing the entire classic crossing section typically takes 4-6 hours, covering about 10 km, with a moderate to hard difficulty level. It is recommended to enter the park early in the morning."
        },
        {
          "q": "Are dogs allowed in the park?",
          "a": "Yes. Dogs are allowed in the park, but they must be kept on a leash at all times to prevent disturbing wildlife, and tick prevention treatment is recommended beforehand."
        },
        {
          "q": "When is the best season to visit?",
          "a": "The dry season (December-April) is the best time for hiking, with clear weather and better trail conditions. During the rainy season (May-November), the trail becomes extremely slippery, significantly increasing the hiking difficulty."
        }
      ]
    };
  } else if (locale === 'es') {
    data.historyTimeline = {
      "title": "Lore Histórico y Línea de Tiempo",
      "items": [
        {
          "year": "Siglo XVI",
          "title": "Siglo XVI - Línea de vida de oro y piratas",
          "plaque": "Los españoles construyen el camino empedrado",
          "description": "Los españoles construyeron este camino empedrado para transportar oro, plata y otras riquezas coloniales de América del Sur. En 1671, el infame pirata Henry Morgan utilizó este atajo oculto en la selva para evadir con éxito las principales defensas españolas, saqueando y quemando finalmente Panamá Viejo."
        },
        {
          "year": "Siglo XIX",
          "title": "Siglo XIX - La cruel realidad de la Fiebre del Oro",
          "plaque": "Cruzando la selva tropical",
          "description": "Antes de que se construyera el Canal de Panamá, miles de buscadores de oro estadounidenses (49ers) recorrieron este \"atajo\" para llegar a California. Los diarios de exploradores de la época registran cómo lucharon contra el cólera, la fiebre amarilla y la humedad extrema de la selva aquí, y muchos no lograron completar esta pesada línea de vida."
        },
        {
          "year": "Siglo XX y más allá",
          "title": "Siglo XX y más allá - Creación del Parque Nacional",
          "plaque": "Protección de la ecología y la historia",
          "description": "Con el aumento de la conciencia ambiental, el área fue establecida como parque nacional para proteger su rica biodiversidad selvática y su precioso patrimonio histórico y cultural."
        }
      ],
      "guideTitle": "Recomendaciones para visitantes",
      "guideContent": "Los visitantes pueden ingresar por la entrada principal del parque, obtener un mapa y conocer los antecedentes históricos del parque; luego caminar por el sendero empedrado original del siglo XVI para experimentar el centro de transporte colonial; si tiene suficiente tiempo, puede observar el rico ecosistema de la selva tropical y buscar vida silvestre como monos aulladores y perezosos. Finalmente, descanse en los miradores del parque para sentir la intersección perfecta de la naturaleza salvaje y el patrimonio histórico de Panamá."
    };
    data.floraFauna = {
      "title": "Archivos de Especies",
      "subtitle": "Dentro de esta reserva de bosque tropical de 9,000 acres viven innumerables plantas y animales sorprendentes. Aquí están las reglas de supervivencia natural de algunas especies icónicas:",
      "cards": [
        {
          "name": "Mariposa Morpho Azul",
          "latin": "Morpho peleides",
          "description": "Sus enormes alas azules no están hechas de pigmento, sino que utilizan microestructuras para refractar la luz. Este \"color estructural\" las hace destellar deslumbrantemente mientras navegan por la selva, confundiendo efectivamente a los depredadores."
        },
        {
          "name": "Mono Aullador",
          "latin": "Alouatta palliata",
          "description": "Su hueso hioides ha evolucionado hasta convertirse en una cámara de resonancia, lo que permite que sus aullidos viajen hasta 3 millas (unos 4,8 km) a través de la densa selva, utilizados principalmente para marcar territorio y evitar conflictos entre grupos."
        },
        {
          "name": "Perezoso de Tres Dedos",
          "latin": "Bradypus variegatus",
          "description": "Los máximos ahorradores de energía. Su pelaje a menudo alberga algas verdes simbióticas, que no solo proporcionan un excelente camuflaje en el dosel de la selva tropical, sino que incluso los complementan con nutrientes traza."
        },
        {
          "name": "Tucán de Pico Castaño",
          "latin": "Ramphastos swainsonii",
          "description": "Si bien sus picos grandes y de colores brillantes parecen pesados, el interior es esponjoso y excepcionalmente liviano, sirviendo no solo como herramienta de alimentación sino como un excelente radiador para regular la temperatura corporal en la selva tropical."
        }
      ]
    };
    data.practicalInfo = {
      "title": "Guía Práctica de Exploración",
      "petPolicy": {
        "title": "🐕 Política de Mascotas y Precauciones",
        "content": "Se permiten perros en el parque. Sin embargo, debido al entorno de selva virgen, manténgalos atados en todo momento para evitar perturbar a la vida silvestre como los monos aulladores y los tucanes. Se recomienda tratar a su perro contra las garrapatas de antemano y llevar mucha agua para ellos."
      },
      "trailConditions": {
        "title": "🥾 Condiciones Reales del Sendero y Consejos Geológicos",
        "content": "La base del sendero está compuesta principalmente por cantos rodados de río del siglo XVI. Durante la temporada de lluvias (mayo-nov), las lluvias masivas hacen que las piedras cubiertas de musgo sean excepcionalmente resbaladizas. La temporada seca (dic-abr) ofrece mejores condiciones, pero el alto calor y la humedad siguen siendo un desafío físico."
      },
      "difficulty": {
        "title": "⛰️ Calificación de Dificultad de Senderismo",
        "content": "Calificación de Dificultad: Moderada a Difícil (dependiendo de la temporada). La longitud total es de unos 10 km (solo ida) con un desnivel positivo de unos 200 metros. Completar el cruce clásico generalmente requiere de 4 a 6 horas de tiempo preciso, así que administre su resistencia en consecuencia."
      }
    };
    data.footer.furtherReadingTitle = "Otras Lecturas";
    data.footer.furtherReading = {
      "paper1": {
        "name": "Redes de Logística y Comercio del Istmo de Panamá en el Siglo XVI - Artículo Histórico",
        "url": "#"
      },
      "book1": {
        "name": "The Path Between the Seas - Historia de la Exploración y el Canal",
        "url": "#"
      },
      "report1": {
        "name": "Informe Preliminar sobre la Excavación Arqueológica del Camino de Cruces",
        "url": "#"
      }
    };
    data.faq = {
      "title": "Preguntas Frecuentes (FAQ)",
      "questions": [
        {
          "q": "¿Cuánto cuesta la entrada al Parque Nacional Camino de Cruces?",
          "a": "Los boletos para adultos extranjeros cuestan $5.00 USD, para residentes nacionales $3.00 USD, estudiantes y jubilados $1.00 USD, y los niños menores de 12 años entran gratis. Asegúrese de comprar los boletos en línea con anticipación a través del sitio web oficial de MiAMBIENTE."
        },
        {
          "q": "¿Cuánto tiempo se tarda en caminar el sendero?",
          "a": "Completar toda la sección del cruce clásico suele llevar de 4 a 6 horas, cubriendo unos 10 km, con un nivel de dificultad de moderado a difícil. Se recomienda ingresar al parque temprano en la mañana."
        },
        {
          "q": "¿Se permiten perros en el parque?",
          "a": "Sí. Se permiten perros en el parque, pero deben mantenerse con correa en todo momento para evitar molestar a la vida silvestre, y se recomienda un tratamiento preventivo contra las garrapatas de antemano."
        },
        {
          "q": "¿Cuándo es la mejor temporada para visitar?",
          "a": "La temporada seca (diciembre-abril) es el mejor momento para hacer senderismo, con clima despejado y mejores condiciones en los senderos. Durante la temporada de lluvias (mayo-noviembre), el sendero se vuelve extremadamente resbaladizo, aumentando significativamente la dificultad del senderismo."
        }
      ]
    };
  }

  fs.writeFileSync(file, JSON.stringify(data, null, 2) + '\n');
  console.log(`Updated ${file}`);
};

['en', 'es', 'zh'].forEach(locale => {
  updateJson(`src/messages/${locale}.json`, locale);
});
