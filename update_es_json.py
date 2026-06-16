#!/usr/bin/env python3
import json

# Read the es.json file
with open('src/messages/es.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Update historyTimeline section
data['historyTimeline'] = {
    "title": "Cronología Histórica",
    "items": [
      {
        "year": "Período Inicial",
        "title": "Período Inicial: Espacio Urbano",
        "plaque": "Parque Urbano (Espacio Verde)",
        "description": "Central Park Alajuela ha sido considerado durante mucho tiempo como un importante espacio verde en el corazón de la ciudad de Alajuela y un lugar importante para el ocio y entretenimiento de los residentes locales."
      },
      {
        "year": "Siglo XX",
        "title": "Siglo XX: Desarrollo Urbano",
        "plaque": "Desarrollo Urbano (Construcción del Parque)",
        "description": "Con la urbanización de Alajuela, Central Park se convirtió gradualmente en un importante espacio público en el centro de la ciudad, con edificios icónicos como la Catedral construidos cercanos."
      },
      {
        "year": "Siglo XXI",
        "title": "Siglo XXI: Destino Turístico Cultural",
        "plaque": "Hito Cultural (Desarrollo Turístico)",
        "description": "En el siglo XXI, con su ubiación geográfica superior y hermoso ambiente, ha atraído a una gran cantidad de turistas y se ha convertido en una importante carta de presentación para el turismo cultural de Alajuela."
      }
    ],
    "guideTitle": "Consejo de Guía para Visitantes",
    "guideContent": "Al visitar, puede comenzar ingresando por la entrada principal y admirando los espacios de ocio sombreados por árboles verdes; luego visite edificios históricos cercanos como la Catedral de Alajuela; si tiene suficiente tiempo, puede caminar a museos históricos y atracciones culturales cercanas. Finalmente, disfrute de la comida en cafeterías o restaurantes cercanos y sienta el relajado ritmo de vida de Alajuela."
  }

# Update officialManagement section if it exists
if 'officialManagement' in data:
    data['officialManagement'] = {
        "title": "Sobre Central Park Alajuela",
        "text": "Central Park Alajuela es una atracción urbana famosa en la provincia de Alajuela, con hermosos paisajes y un rico valor cultural urbano. Es un lugar ideal para que los residentes locales y turistas se relajen y disfruten."
    }

# Write the updated data back to the file
with open('src/messages/es.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("es.json has been updated successfully!")
