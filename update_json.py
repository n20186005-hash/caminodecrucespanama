import json

def update_zh():
    with open('src/messages/zh.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    # 1. Update Intro
    data['intro']['description'] = "准备好踏上一场穿越时空的雨林探险了吗？卡米诺德克鲁塞斯国家公园不仅仅是一座保护着巴拿马原始生态的自然宝库，更是一座“活着的历史博物馆”。在茂密的热带雨林树冠下，你将亲脚踩在 16 世纪西班牙人铺设的原始鹅卵石古道上——几百年前，数不清的南美洲黄金与白银正是通过你脚下的这条小径运往大西洋。\n\n伴随着远处吼猴的叫声，你可以近距离观察树懒、巨嘴鸟以及在林间穿梭的蓝闪蝶。这里是历史遗迹与狂野自然的完美交汇处。由于雨林环境复杂且古道保留了原始风貌，我们强烈建议您穿戴专业的徒步装备，并在上午及早入园，或聘请经验丰富的本地向导，以获得最安全、最深度的探险体验。"
    
    data['intro']['visitGuide']['items'] = [
        "公园全年开放，建议在上午及早入园",
        "强烈建议聘请专业向导，雨林复杂易迷路",
        "穿长袖长裤防蚊虫，带上充足饮用水",
        "雨季古道极其湿滑，务必注意安全"
    ]
    
    data['intro']['alsoKnownAs']['items'] = [
        "16世纪原始鹅卵石古道：亲脚踩在历史的遗迹上，感受几百年前的运输大动脉。",
        "丰富的雨林生物：观察吼猴 (Howler monkeys)、树懒 (Sloths)、巨嘴鸟 (Toucans) 和蓝闪蝶 (Blue Morpho butterflies) 等神奇物种。",
        "连接大洋的生命线：承载着南美洲黄金与白银运往加勒比海岸的厚重历史。",
        "野性与历史的交汇：在茂密的热带雨林中探寻殖民时期的历史遗迹。"
    ]
    
    data['intro']['gearAndSafety'] = {
        "title": "徒步行前准备 (Gear & Safety)",
        "items": [
            "🥾 防滑徒步鞋（鹅卵石长满青苔，非常滑）",
            "👖 长袖与速干长裤（防蚊虫与植被剐蹭）",
            "💧 充足饮用水（雨林湿度极大，极易脱水）",
            "🗺️ 离线地图或向导（信号微弱，建议由本地向导带领）"
        ]
    }
    
    # 2. Basic Info - remove phone
    if 'phone' in data['basicInfo']:
        del data['basicInfo']['phone']
    if 'phoneValue' in data['basicInfo']:
        del data['basicInfo']['phoneValue']
        
    # 3. History Timeline
    data['historyTimeline']['items'] = [
        {
            "year": "16世纪",
            "title": "16世纪 - 黄金与海盗的生命线",
            "plaque": "西班牙人铺设鹅卵石小径",
            "description": "西班牙人铺设了这条鹅卵石小径，用于运输南美洲的黄金、白银及其他殖民地财富，这也引来了著名的海盗（如亨利·摩根）的觊觎。"
        },
        {
            "year": "19世纪",
            "title": "19世纪 - 加州淘金热的捷径",
            "plaque": "穿越热带雨林",
            "description": "在巴拿马运河和铁路建成前，成千上万的美国人为了去加州淘金，曾艰难跋涉走过这条热带雨林小径。"
        },
        {
            "year": "20世纪及以后",
            "title": "20世纪及以后 - 设立国家公园",
            "plaque": "生态与历史的保护",
            "description": "随着环境保护意识的提高，该地区被设立为国家公园，以保护其丰富的雨林生物多样性和珍贵的历史文化遗产。"
        }
    ]
    data['historyTimeline']['guideContent'] = "游客在参观时，可以先从公园主入口进入，获取地图并了解公园的历史背景；随后沿着16世纪原始的鹅卵石古道徒步，感受殖民时期的交通要道；如果您有充足的时间，可以观察丰富的热带雨林生态系统，寻找吼猴、树懒等野生动物。最后在公园内的观景点休息，感受巴拿马野性自然与历史底蕴的完美交汇。"
    
    # 4. Hours
    data['hours']['winterTime'] = "5月-11月：雨季古道极其湿滑，下午易有阵雨，建议上午及早游览"
    data['hours']['warning'] = "入园时间提示"
    data['hours']['warningTime'] = "由于徒步走完全程需要 4-6 小时，管理人员通常在 下午 1:00 或 2:00 后就会禁止新的徒步者入园，以防天黑后被困雨林。"
    data['hours']['tip'] = "强烈建议上午及早入园，以获得最安全、最深度的探险体验"
    
    with open('src/messages/zh.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

def update_en():
    with open('src/messages/en.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
        
    data['intro']['description'] = "Ready for a rainforest adventure through time? Parque Nacional Camino de Cruces is not just a natural treasure protecting Panama's pristine ecology, but also a \"living history museum.\" Beneath the dense canopy of the tropical rainforest, you will walk on the original 16th-century cobblestone trails laid by the Spanish—centuries ago, countless amounts of gold and silver from South America were transported to the Atlantic along this very path.\n\nAccompanied by the calls of howler monkeys in the distance, you can get a close look at sloths, toucans, and blue morpho butterflies fluttering through the trees. This is the perfect intersection of historical ruins and wild nature. Because of the complex rainforest environment and the trail's primitive condition, we strongly recommend wearing professional hiking gear, arriving early in the morning, or hiring an experienced local guide for the safest and most immersive adventure."
    
    data['intro']['visitGuide']['items'] = [
        "Park is open year-round, recommended to enter early in the morning",
        "Strongly recommend hiring a professional guide, as the rainforest is complex and easy to get lost in",
        "Wear long sleeves and long pants to prevent mosquito bites, and bring plenty of drinking water",
        "During the rainy season, the trail is extremely slippery, so please prioritize safety"
    ]
    
    data['intro']['alsoKnownAs']['items'] = [
        "16th-Century Original Cobblestone Trail: Walk on historical ruins and experience the transportation artery of centuries past.",
        "Rich Rainforest Biodiversity: Observe amazing species like Howler monkeys, Sloths, Toucans, and Blue Morpho butterflies.",
        "Lifeline Connecting the Oceans: Carries the heavy history of transporting South American gold and silver to the Caribbean coast.",
        "Intersection of Wild Nature and History: Explore colonial historical ruins within the dense tropical rainforest."
    ]
    
    data['intro']['gearAndSafety'] = {
        "title": "Gear & Safety Preparation",
        "items": [
            "🥾 Non-slip hiking shoes (cobblestones are mossy and very slippery)",
            "👖 Long sleeves and quick-dry pants (protection against mosquitoes and vegetation)",
            "💧 Plenty of drinking water (rainforest humidity is extremely high, causing easy dehydration)",
            "🗺️ Offline maps or a guide (signal is weak, local guide recommended)"
        ]
    }
    
    if 'phone' in data['basicInfo']:
        del data['basicInfo']['phone']
    if 'phoneValue' in data['basicInfo']:
        del data['basicInfo']['phoneValue']
        
    data['historyTimeline']['items'] = [
        {
            "year": "16th Century",
            "title": "16th Century - Lifeline of Gold and Pirates",
            "plaque": "Spanish Cobblestone Trail",
            "description": "The Spanish laid this cobblestone trail to transport South American gold, silver, and other colonial wealth, which also attracted the covetous eyes of famous pirates (like Henry Morgan)."
        },
        {
            "year": "19th Century",
            "title": "19th Century - Shortcut for the California Gold Rush",
            "plaque": "Crossing the Tropical Rainforest",
            "description": "Before the Panama Canal and railway were built, thousands of Americans trekked through this tropical rainforest trail on their way to the California Gold Rush."
        },
        {
            "year": "20th Century & Beyond",
            "title": "20th Century & Beyond - National Park Establishment",
            "plaque": "Ecological and Historical Protection",
            "description": "With rising environmental awareness, the area was established as a national park to protect its rich rainforest biodiversity and precious historical and cultural heritage."
        }
    ]
    data['historyTimeline']['guideContent'] = "When visiting, you can start from the main park entrance to get a map and learn about the park's history; then hike along the original 16th-century cobblestone trail to experience the colonial transportation route. If you have enough time, observe the rich tropical rainforest ecosystem and look out for wildlife like howler monkeys and sloths. Finally, rest at the viewpoints to appreciate the perfect intersection of Panama's wild nature and historical heritage."
    
    data['hours']['winterTime'] = "May-Nov: The trail is extremely slippery in the rainy season, and afternoon showers are common. Early morning visits are recommended."
    data['hours']['warning'] = "Entry Time Notice"
    data['hours']['warningTime'] = "Since completing the hike takes 4-6 hours, park rangers usually prohibit new hikers from entering after 1:00 PM or 2:00 PM to prevent people from getting stranded in the rainforest after dark."
    data['hours']['tip'] = "We strongly recommend entering early in the morning for the safest and most immersive adventure."

    with open('src/messages/en.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

def update_es():
    with open('src/messages/es.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
        
    data['intro']['description'] = "¿Listo para una aventura en la selva tropical a través del tiempo? El Parque Nacional Camino de Cruces no es solo un tesoro natural que protege la ecología prístina de Panamá, sino también un \"museo de historia viva\". Bajo el denso dosel del bosque tropical, caminarás sobre los senderos empedrados originales del siglo XVI construidos por los españoles—hace siglos, incontables cantidades de oro y plata de América del Sur fueron transportadas hacia el Atlántico a lo largo de este mismo camino.\n\nAcompañado por los llamados de los monos aulladores en la distancia, puedes observar de cerca perezosos, tucanes y mariposas morfo azules revoloteando entre los árboles. Esta es la intersección perfecta entre ruinas históricas y naturaleza salvaje. Debido al complejo entorno de la selva tropical y a la condición primitiva del sendero, recomendamos encarecidamente usar equipo de senderismo profesional, llegar temprano en la mañana o contratar a un guía local experimentado para la aventura más segura y profunda."
    
    data['intro']['visitGuide']['items'] = [
        "El parque está abierto todo el año, se recomienda ingresar temprano en la mañana",
        "Se recomienda encarecidamente contratar un guía profesional, ya que la selva tropical es compleja y es fácil perderse",
        "Usa mangas largas y pantalones largos para prevenir picaduras de mosquitos, y lleva mucha agua potable",
        "Durante la temporada de lluvias, el sendero es extremadamente resbaladizo, por lo que debes priorizar tu seguridad"
    ]
    
    data['intro']['alsoKnownAs']['items'] = [
        "Sendero Empedrado Original del Siglo XVI: Camina sobre ruinas históricas y experimenta la arteria de transporte de siglos pasados.",
        "Rica Biodiversidad de la Selva Tropical: Observa especies increíbles como Monos aulladores, Perezosos, Tucanes y Mariposas morfo azules.",
        "Línea de Vida que Conecta los Océanos: Lleva la pesada historia del transporte de oro y plata sudamericanos hacia la costa caribeña.",
        "Intersección de Naturaleza Salvaje e Historia: Explora ruinas históricas coloniales dentro de la densa selva tropical."
    ]
    
    data['intro']['gearAndSafety'] = {
        "title": "Preparación de Equipo y Seguridad",
        "items": [
            "🥾 Zapatos de senderismo antideslizantes (las piedras están cubiertas de musgo y son muy resbaladizas)",
            "👖 Mangas largas y pantalones de secado rápido (protección contra mosquitos y vegetación)",
            "💧 Abundante agua potable (la humedad en la selva es extremadamente alta, causando deshidratación fácil)",
            "🗺️ Mapas sin conexión o un guía (la señal es débil, se recomienda un guía local)"
        ]
    }
    
    if 'phone' in data['basicInfo']:
        del data['basicInfo']['phone']
    if 'phoneValue' in data['basicInfo']:
        del data['basicInfo']['phoneValue']
        
    data['historyTimeline']['items'] = [
        {
            "year": "Siglo XVI",
            "title": "Siglo XVI - Línea de Vida de Oro y Piratas",
            "plaque": "Sendero Empedrado Español",
            "description": "Los españoles construyeron este sendero empedrado para transportar oro, plata y otras riquezas coloniales sudamericanas, lo que también atrajo las codiciosas miradas de piratas famosos (como Henry Morgan)."
        },
        {
            "year": "Siglo XIX",
            "title": "Siglo XIX - Atajo para la Fiebre del Oro de California",
            "plaque": "Cruzando la Selva Tropical",
            "description": "Antes de que se construyera el Canal de Panamá y el ferrocarril, miles de estadounidenses recorrieron este sendero de selva tropical en su camino hacia la Fiebre del Oro de California."
        },
        {
            "year": "Siglo XX y Más Allá",
            "title": "Siglo XX y Más Allá - Establecimiento del Parque Nacional",
            "plaque": "Protección Ecológica e Histórica",
            "description": "Con el aumento de la conciencia ambiental, la zona fue establecida como un parque nacional para proteger su rica biodiversidad de la selva tropical y su precioso patrimonio histórico y cultural."
        }
    ]
    data['historyTimeline']['guideContent'] = "Al visitar, puede comenzar desde la entrada principal del parque para obtener un mapa y conocer la historia del parque; luego, caminar a lo largo del sendero empedrado original del siglo XVI para experimentar la ruta de transporte colonial. Si tiene suficiente tiempo, observe el rico ecosistema de la selva tropical y busque vida silvestre como monos aulladores y perezosos. Finalmente, descanse en los miradores para apreciar la perfecta intersección entre la naturaleza salvaje de Panamá y su patrimonio histórico."
    
    data['hours']['winterTime'] = "May-Nov: El sendero es extremadamente resbaladizo en la temporada de lluvias, y las lluvias por la tarde son comunes. Se recomiendan visitas temprano en la mañana."
    data['hours']['warning'] = "Aviso de Hora de Entrada"
    data['hours']['warningTime'] = "Dado que completar la caminata toma de 4 a 6 horas, los guardaparques generalmente prohíben la entrada de nuevos excursionistas después de la 1:00 p.m. o 2:00 p.m. para evitar que las personas queden varadas en la selva después del anochecer."
    data['hours']['tip'] = "Recomendamos encarecidamente ingresar temprano en la mañana para la aventura más segura y profunda."

    with open('src/messages/es.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

update_zh()
update_en()
update_es()
print("JSON updated successfully")
