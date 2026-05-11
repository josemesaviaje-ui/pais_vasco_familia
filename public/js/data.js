const TRIP_DATA = {
  meta: {
    name: "País Vasco en Familia",
    subtitle: "Diario ilustrado · 2–9 Agosto",
    startDate: "2026-08-02",
    endDate: "2026-08-09",
    families: [
      "Familia Pulido - Cubero",
      "Familia Mesa - Muñoz"
    ],
    lodgingTotal: 2452.05,
    lodgingPerFamily: 1226.03,
    estimatedKm: 2100
  },

  hotels: [
    {
      id: "burgos",
      icon: "🏨",
      name: "Edificio Aptos Turísticos Burgos",
      date: "2 Agosto",
      address: "7 Calle Hospital de los Ciegos, 09003 Burgos",
      city: "Burgos",
      cost: 328.05,
      notes: "Primera noche de descanso tras la salida desde Doña Mencía.",
      maps: "https://www.google.com/maps/search/?api=1&query=7+Calle+Hospital+de+los+Ciegos+09003+Burgos"
    },
    {
      id: "donamaria",
      icon: "🏡",
      name: "Casa Rural Donamariako Benta",
      date: "3–8 Agosto",
      address: "Barrio Ventas, 4, 31750 Donamaría",
      city: "Donamaría",
      cost: 1750,
      checkin: "17:00–22:00",
      notes: "Base principal del viaje. Perfecta para costa vasca, San Sebastián, Navarra norte y frontera francesa.",
      maps: "https://www.google.com/maps/search/?api=1&query=Casa+Rural+Donamariako+Benta+Donamaria"
    },
    {
      id: "turegano",
      icon: "🏰",
      name: "Posada el Zaguán",
      date: "8 Agosto",
      address: "Plaza de España 16, 40370 Turégano",
      city: "Turégano",
      cost: 374,
      notes: "Noche final de vuelta. Ideal para descansar, cenar tranquilo y cerrar gastos.",
      maps: "https://www.google.com/maps/search/?api=1&query=Posada+el+Zaguan+Turegano"
    }
  ],

  days: [
    {
      id: "day2",
      day: "Día 2",
      date: "2 Agosto",
      icon: "🚗",
      title: "Doña Mencía → Burgos",
      km: "≈ 640 km",
      drive: "≈ 6 h 30 min",
      mood: "Día de carretera + Burgos de noche",
      route: ["Doña Mencía", "Madrid", "Aranda de Duero", "Burgos"],
      plan: [
        "Salida temprano desde Doña Mencía.",
        "Parada cómoda para comer por Aranda de Duero.",
        "Llegada a Burgos y check-in.",
        "Paseo por Catedral, Espolón y Plaza Mayor.",
        "Cena de tapas cerca del centro."
      ],
      tips: [
        "Llevar agua, snacks, cargadores y algo de desayuno para el coche.",
        "No apurar la llegada: mejor disfrutar Burgos sin prisas.",
        "Una vez aparcado, moverse andando por el centro."
      ],
      rainPlan: "Catedral, tapeo cubierto y paseo corto por el centro.",
      mustSee: [
        {
          title: "Catedral de Burgos",
          text: "Parada imprescindible. De noche suele lucir preciosa iluminada y la zona es perfecta para pasear."
        },
        {
          title: "Paseo del Espolón",
          text: "Paseo elegante junto al río Arlanzón, ideal para estirar piernas tras muchas horas de coche."
        },
        {
          title: "Plaza Mayor",
          text: "Buen punto para cenar sin complicarse y tener ambiente de primera noche."
        }
      ],
      curiosities: [
        "Burgos es una de las grandes ciudades históricas del Camino de Santiago.",
        "La Catedral de Burgos está reconocida como Patrimonio Mundial por la UNESCO.",
        "El centro histórico se disfruta mejor caminando: calles cortas, plazas y mucho ambiente."
      ],
      alerts: [
        "Día largo de carretera: mejor no planear visita intensa.",
        "Revisar parking cercano al alojamiento antes de llegar.",
        "Si llegáis tarde, priorizar cena cómoda y descanso."
      ],
      smartTips: [
  "🚗 Día de carretera larga: salir con margen y no cargar la tarde.",
  "🥩 Si queréis hacer comida especial, Aranda de Duero es buena parada para lechazo.",
  "🏨 Al llegar a Burgos, mejor aparcar una vez y moverse andando.",
  "📸 Foto TOP: Catedral de Burgos iluminada por la noche."
],
      foodGuide: [
        {
          title: "Morcilla de Burgos",
          text: "Producto típico de la ciudad, hecha tradicionalmente con arroz. Buena para probar en tapas o raciones."
        },
        {
          title: "Lechazo castellano",
          text: "Plato clásico de la provincia, especialmente famoso en zonas como Aranda de Duero. Ideal si paráis a comer antes de llegar a Burgos."
        },
        {
          title: "Cena fácil",
          text: "Para este día conviene tapeo céntrico: Cervecería Morito, Mesón La Cueva o zona Plaza Mayor / Catedral."
        }
      ],
      services: [
        "🅿️ Parking recomendado: buscar Parking Catedral / Parking Plaza Mayor Burgos.",
        "🛒 Supermercado cerca: buscar Carrefour Express / supermercados centro Burgos.",
        "💊 Farmacia: buscar farmacia de guardia Burgos centro.",
        "🏥 Urgencias generales en España: 112.",
        "📍 Alojamiento: 7 Calle Hospital de los Ciegos, Burgos."
      ],
shopping: [
  {
    name: "Centro Burgos",
    type: "Paseo / compras",
    area: "Plaza Mayor y alrededores",
    note: "Zona agradable para primeras compras rápidas y paseo nocturno.",
    maps: "https://www.google.com/maps/search/?api=1&query=Plaza+Mayor+Burgos"
  },
  {
    name: "El Corte Inglés Burgos",
    type: "Compras rápidas",
    area: "Centro",
    note: "Muy útil si olvidáis algo importante del viaje.",
    maps: "https://www.google.com/maps/search/?api=1&query=El+Corte+Ingles+Burgos"
  }
],

supermarkets: [
  {
    name: "Mercadona Burgos",
    note: "Muy útil para agua, desayuno o provisiones básicas.",
    maps: "https://www.google.com/maps/search/?api=1&query=Mercadona+Burgos"
  },
  {
    name: "Carrefour Burgos",
    note: "Buena opción si queréis compra rápida antes de descansar.",
    maps: "https://www.google.com/maps/search/?api=1&query=Carrefour+Burgos"
  }
],

pharmacies: [
  {
    name: "Farmacia centro Burgos",
    note: "Por si hace falta algo tras el viaje largo.",
    maps: "https://www.google.com/maps/search/?api=1&query=farmacia+centro+Burgos"
  }
],

parkings: [
  {
    name: "Parking centro Burgos",
    note: "Mejor dejar coche y olvidarse del tráfico del casco histórico.",
    maps: "https://www.google.com/maps/search/?api=1&query=parking+centro+Burgos"
  },
  {
    name: "Consejo Burgos",
    note: "No merece la pena mover el coche una vez aparcado.",
    maps: "https://www.google.com/maps/search/?api=1&query=Burgos+centro"
  }
],

coffee: [
  {
    name: "Cafés Plaza Mayor",
    note: "Muy buena parada tranquila después de carretera.",
    maps: "https://www.google.com/maps/search/?api=1&query=cafeteria+Plaza+Mayor+Burgos"
  }
],

desserts: [
  {
    name: "Pastelerías Burgos",
    note: "Perfecto para cerrar la primera noche con algo dulce.",
    maps: "https://www.google.com/maps/search/?api=1&query=pasteleria+Burgos+centro"
  }
],

kids: [
  {
    name: "Paseo Espolón",
    note: "Muy cómodo para caminar después del coche.",
    maps: "https://www.google.com/maps/search/?api=1&query=Paseo+del+Espolon+Burgos"
  }
],

sunset: [
  {
    name: "Catedral iluminada",
    note: "Muy recomendable verla de noche el primer día.",
    maps: "https://www.google.com/maps/search/?api=1&query=Catedral+de+Burgos"
  }
],
      foodArea: "Burgos"
    },

    {
      id: "day3",
      day: "Día 3",
      date: "3 Agosto",
      icon: "🏡",
      title: "Burgos → Donamaría",
      km: "≈ 240 km",
      drive: "≈ 2 h 45 min",
      mood: "Llegada a la casa rural",
      route: ["Burgos", "Vitoria-Gasteiz", "Pamplona", "Donamaría"],
      plan: [
        "Desayuno tranquilo en Burgos.",
        "Ruta hacia Donamaría sin prisas.",
        "Compra inicial para la casa rural.",
        "Check-in entre 17:00 y 22:00.",
        "Cena sencilla y organización del viaje."
      ],
      tips: [
        "Comprar agua, leche, café, fruta, pan, snacks y algo fácil para cenar.",
        "Repartir habitaciones y dejar gastos iniciales anotados.",
        "Preparar mochila, calzado y ropa para el primer día fuerte."
      ],
      rainPlan: "Llegada tranquila, compra y tarde de casa rural.",
      mustSee: [
        {
          title: "Llegada a Donamaría",
          text: "El alojamiento será el campamento base. Conviene llegar con calma, ordenar y descansar."
        },
        {
          title: "Compra inicial",
          text: "Clave para no depender cada mañana de cafeterías o supermercados."
        },
        {
          title: "Primer paseo rural",
          text: "Si da tiempo, paseo corto por la zona para ubicarse y respirar ambiente norte."
        }
      ],
      curiosities: [
        "Donamaría está en una zona rural muy bien situada para combinar Navarra norte, Gipuzkoa y costa.",
        "Dormir en base rural permite hacer excursiones sin cambiar maletas cada día.",
        "El valle tiene ambiente tranquilo: ideal para recuperar fuerzas después de los días de coche."
      ],
      alerts: [
        "Check-in de 17:00 a 22:00: no apurar la llegada.",
        "Revisar si hay supermercados abiertos según horario y día.",
        "Anotar desde este día todos los gastos comunes."
      ],
      smartTips: [
  "🛒 Prioridad real del día: hacer buena compra para la casa rural.",
  "🏡 No apretar el plan: es día de llegada, habitaciones y organización.",
  "🚐 Revisar combustible antes de entrar en zona rural.",
  "🎒 Dejar preparada mochila para el primer día fuerte de costa."
],
      foodGuide: [
        {
          title: "Compra para la casa",
          text: "Prioridad: desayunos, agua, fruta, pan, embutidos, leche, café, algo fácil para cenas y snacks para excursiones."
        },
        {
          title: "Cocina navarra sencilla",
          text: "Si cenáis fuera por la zona, buscar comida casera: menestra, verduras, carnes, queso, cuajada o platos de temporada."
        },
        {
          title: "Pamplona como recurso",
          text: "Si necesitáis más opciones de compra o comida, Pamplona es el punto urbano más práctico."
        }
      ],
      services: [
        "🛒 Supermercados: buscar supermercados Doneztebe / Santesteban o Elizondo.",
        "💊 Farmacia: buscar farmacia de guardia Doneztebe / Santesteban.",
        "⛽ Gasolinera: revisar combustible antes de llegar a zona rural.",
        "🏥 Urgencias generales: 112.",
        "📍 Alojamiento: Casa Rural Donamariako Benta, Barrio Ventas 4, Donamaría."
      ],
shopping: [
  {
    name: "Pamplona compras rápidas",
    type: "Parada útil",
    area: "Pamplona",
    note: "Buen sitio para última compra grande antes de llegar a la casa rural.",
    maps: "https://www.google.com/maps/search/?api=1&query=Pamplona+compras"
  },
  {
    name: "Centro Comercial La Morea",
    type: "Centro comercial",
    area: "Pamplona",
    note: "Muy práctico para supermercados, ropa, olvidos y descanso.",
    maps: "https://www.google.com/maps/search/?api=1&query=Centro+Comercial+La+Morea+Pamplona"
  }
],

supermarkets: [
  {
    name: "Mercadona Pamplona",
    note: "Muy buena opción para llenar la casa rural desde el primer día.",
    maps: "https://www.google.com/maps/search/?api=1&query=Mercadona+Pamplona"
  },
  {
    name: "Eroski Navarra",
    note: "Muy habitual en la zona y cómodo para compras rápidas.",
    maps: "https://www.google.com/maps/search/?api=1&query=Eroski+Pamplona"
  }
],

pharmacies: [
  {
    name: "Farmacia Pamplona",
    note: "Conviene resolver cualquier necesidad antes de ir a zona rural.",
    maps: "https://www.google.com/maps/search/?api=1&query=farmacia+Pamplona"
  }
],

parkings: [
  {
    name: "Parking La Morea",
    note: "Muy cómodo para compra grande y reorganizar el coche.",
    maps: "https://www.google.com/maps/search/?api=1&query=Parking+La+Morea+Pamplona"
  }
],

coffee: [
  {
    name: "Cafeterías Pamplona",
    note: "Parada perfecta antes del último tramo hasta Donamaría.",
    maps: "https://www.google.com/maps/search/?api=1&query=cafeteria+Pamplona"
  }
],

desserts: [
  {
    name: "Pastelerías navarras",
    note: "Muy buena zona para comprar desayuno o dulce para la casa rural.",
    maps: "https://www.google.com/maps/search/?api=1&query=pasteleria+Pamplona"
  }
],

kids: [
  {
    name: "Parada tranquila Pamplona",
    note: "Buen punto para descansar antes de instalarse en Donamaría.",
    maps: "https://www.google.com/maps/search/?api=1&query=Pamplona"
  }
],

sunset: [
  {
    name: "Llegada rural",
    note: "La llegada a Donamaría debe ser tranquila y sin prisas.",
    maps: "https://www.google.com/maps/search/?api=1&query=Donamaria"
  }
],
      foodArea: "Donamaría / Pamplona"
    },

    {
      id: "day4",
      day: "Día 4",
      date: "4 Agosto",
      icon: "🌊",
      title: "San Sebastián + Hondarribia",
      km: "≈ 150 km",
      drive: "≈ 2 h total",
      mood: "Ciudad, playa, pintxos y casco histórico",
      route: ["Donamaría", "San Sebastián", "Hondarribia", "Donamaría"],
      plan: [
        "Mañana en San Sebastián: La Concha, puerto y Parte Vieja.",
        "Pintxos o comida en zona centro.",
        "Monte Igueldo si el tiempo acompaña.",
        "Tarde en Hondarribia: casco histórico y barrio de la Marina.",
        "Vuelta tranquila a Donamaría."
      ],
      tips: [
        "Salir temprano para aparcar mejor.",
        "Llevar bañador, toalla ligera y chaqueta fina.",
        "Reservar comida si queréis mesa cómoda para las dos familias."
      ],
      rainPlan: "Aquarium, Parte Vieja, cafés y paseo cubierto por zonas céntricas.",
      mustSee: [
        {
          title: "Bahía de La Concha",
          text: "La imagen más famosa de San Sebastián. Ideal para paseo y fotos familiares."
        },
        {
          title: "Parte Vieja",
          text: "Zona perfecta para pintxos, ambiente y calles con mucho encanto."
        },
        {
          title: "Hondarribia",
          text: "Casco histórico amurallado y barrio de la Marina con casas de colores."
        }
      ],
      curiosities: [
        "San Sebastián es una de las capitales gastronómicas más conocidas de España.",
        "La Concha es una bahía urbana muy protegida, por eso suele ser agradable para pasear.",
        "Hondarribia conserva un casco histórico fortificado con mucho carácter."
      ],
      alerts: [
        "San Sebastián en agosto puede estar muy concurrida.",
        "Parking: mejor decidir antes si usar parking céntrico o zona más alejada.",
        "No intentar hacerlo todo: La Concha + Parte Vieja + Hondarribia ya es un día completo."
      ],
      smartTips: [
  "🌊 Si hace buen día, priorizar La Concha y paseo exterior.",
  "🍢 En Parte Vieja, mejor probar pocos pintxos en varios sitios que sentarse demasiado pronto.",
  "🅿️ Decidir parking antes de entrar en San Sebastián evita perder tiempo.",
  "📸 Foto TOP: barandilla de La Concha y casas de colores en Hondarribia."
],
      foodGuide: [
        {
          title: "Pintxos en Parte Vieja",
          text: "Zona clásica para probar pintxos. Buena idea: pedir poco en cada bar y moverse."
        },
        {
          title: "Qué probar",
          text: "Gilda, tortilla, bacalao, carrilleras, txuleta en ración, anchoas, tarta de queso vasca."
        },
        {
          title: "Hondarribia",
          text: "El barrio de la Marina es ideal para tomar algo o cenar entre casas de colores y ambiente marinero."
        }
      ],
      services: [
        "🅿️ San Sebastián: buscar Parking Kursaal / Parking Boulevard / Parking La Concha.",
        "💊 Farmacia: buscar farmacia de guardia San Sebastián centro.",
        "🛒 Supermercado: buscar supermercado San Sebastián Parte Vieja / Centro.",
        "🧒 Con niños: evitar mover el coche entre La Concha y Parte Vieja.",
        "🏥 Urgencias generales: 112."
      ],
      shopping: [
  {
    name: "Zara San Sebastián",
    type: "Moda",
    area: "Calle Urbieta, 9",
    note: "Opción rápida en pleno centro. Buena si queréis combinar compras con paseo por La Concha / Centro.",
    maps: "https://www.google.com/maps/search/?api=1&query=Zara+Calle+Urbieta+9+San+Sebastian"
  },
  {
    name: "Mango San Sebastián",
    type: "Moda mujer",
    area: "Getaria Kalea, 11",
    note: "Muy céntrico y cómodo para ellas. Teléfono oficial tienda: 943 066 909.",
    maps: "https://www.google.com/maps/search/?api=1&query=Mango+Getaria+Kalea+11+San+Sebastian"
  },
  {
    name: "Primark Donostia · Garbera",
    type: "Moda económica",
    area: "Centro Comercial Garbera",
    note: "Mejor opción si queréis Primark, compras grandes, baños, wifi y parking. Está fuera del centro.",
    maps: "https://www.google.com/maps/search/?api=1&query=Primark+Garbera+San+Sebastian"
  },
  {
    name: "Centro Comercial Garbera",
    type: "Centro comercial",
    area: "Garbera Zeharbidea, 1",
    note: "Plan cubierto si llueve o apetece compras. Tiene Zara Garbera, Primark y otras tiendas.",
    maps: "https://www.google.com/maps/search/?api=1&query=Centro+Comercial+Garbera+San+Sebastian"
  },
  {
    name: "Zona Getaria / San Marcial / Urbieta",
    type: "Calles comerciales",
    area: "Centro",
    note: "Mejor zona para compras de moda sin sacar el coche del centro.",
    maps: "https://www.google.com/maps/search/?api=1&query=Calle+Getaria+San+Marcial+Urbieta+San+Sebastian"
  }
],

supermarkets: [
  {
    name: "Carrefour Express Centro",
    note: "Compra rápida: agua, snacks, fruta o algo para volver a Donamaría.",
    maps: "https://www.google.com/maps/search/?api=1&query=Carrefour+Express+Centro+San+Sebastian"
  },
  {
    name: "Mercadona Amara",
    note: "Mejor para compra más grande si vais a volver a la casa rural con provisiones.",
    maps: "https://www.google.com/maps/search/?api=1&query=Mercadona+Amara+San+Sebastian"
  },
  {
    name: "Super Amara",
    note: "Cadena muy práctica en San Sebastián para compras rápidas de calidad.",
    maps: "https://www.google.com/maps/search/?api=1&query=Super+Amara+San+Sebastian+centro"
  }
],

pharmacies: [
  {
    name: "Farmacia de guardia San Sebastián centro",
    note: "Usar esta búsqueda porque horarios y guardias cambian. Ideal si estáis por Centro / Parte Vieja.",
    maps: "https://www.google.com/maps/search/?api=1&query=farmacia+de+guardia+San+Sebastian+centro"
  },
  {
    name: "Farmacia zona Boulevard",
    note: "Práctica si aparcáis cerca del Boulevard o coméis por Parte Vieja.",
    maps: "https://www.google.com/maps/search/?api=1&query=farmacia+Boulevard+San+Sebastian"
  }
],

parkings: [
  {
    name: "Parking Boulevard",
    note: "La opción más rápida para Parte Vieja, pintxos y centro. Gestionable/reservable con Telpark. Suele ser cómodo, pero no siempre barato.",
    maps: "https://www.google.com/maps/search/?api=1&query=Parking+Boulevard+San+Sebastian"
  },
  {
    name: "Parking Kursaal",
    note: "Muy buena opción para entrar fácil, cruzar al centro y evitar meterse demasiado por calles interiores.",
    maps: "https://www.google.com/maps/search/?api=1&query=Parking+Kursaal+San+Sebastian"
  },
  {
    name: "Parking Garbera",
    note: "Mejor opción si el plan principal son compras tipo Primark/Zara Garbera. Más cómodo para compras grandes que aparcar en centro.",
    maps: "https://www.google.com/maps/search/?api=1&query=Parking+Garbera+San+Sebastian"
  },
  {
    name: "Opción económica",
    note: "Comparar antes en Telpark. Algunos parkings permiten reserva o pases desde app; los precios cambian según día/hora.",
    maps: "https://www.google.com/maps/search/?api=1&query=Telpark+San+Sebastian+parking"
  }
],

coffee: [
  {
    name: "Old Town Coffee",
    note: "Café de especialidad en Donostia. Buena parada si queréis café bueno; ojo, puede ser pequeño y no siempre ideal para sentarse mucho rato.",
    maps: "https://www.google.com/maps/search/?api=1&query=Old+Town+Coffee+San+Sebastian"
  },
  {
    name: "Cafés zona La Concha",
    note: "Mejor para descansar con vistas y no alejarse del paseo.",
    maps: "https://www.google.com/maps/search/?api=1&query=cafeteria+La+Concha+San+Sebastian"
  },
  {
    name: "Cafés zona Boulevard",
    note: "Punto práctico entre Parte Vieja, compras y parking.",
    maps: "https://www.google.com/maps/search/?api=1&query=cafeteria+Boulevard+San+Sebastian"
  }
],

desserts: [
  {
    name: "La Viña",
    note: "Parada muy famosa por la tarta de queso. Mejor ir con paciencia porque puede haber mucha gente.",
    maps: "https://www.google.com/maps/search/?api=1&query=La+Vi%C3%B1a+San+Sebastian"
  },
  {
    name: "Heladería Arnoldo",
    note: "Clásico donostiarra. Arnoldo tiene tradición desde 1935 y es buena opción para helado familiar.",
    maps: "https://www.google.com/maps/search/?api=1&query=Heladeria+Arnoldo+San+Sebastian"
  },
  {
    name: "Gelateria Boulevard",
    note: "Helado cómodo si estáis cerca de Parte Vieja / Boulevard.",
    maps: "https://www.google.com/maps/search/?api=1&query=Gelateria+Boulevard+San+Sebastian"
  },
  {
    name: "Oiartzun",
    note: "Pastelería clásica para dulce, café o merienda cuidada en el centro.",
    maps: "https://www.google.com/maps/search/?api=1&query=Pasteleria+Oiartzun+San+Sebastian"
  }
],

kids: [
  {
    name: "Aquarium San Sebastián",
    note: "Plan interior perfecto si llueve o si se quiere cortar el día de paseo.",
    maps: "https://www.google.com/maps/search/?api=1&query=Aquarium+San+Sebastian"
  },
  {
    name: "Playa de La Concha",
    note: "Paseo, baño si apetece y descanso fácil. Ideal para familias si el tiempo acompaña.",
    maps: "https://www.google.com/maps/search/?api=1&query=Playa+de+La+Concha+San+Sebastian"
  },
  {
    name: "Monte Igueldo",
    note: "Mirador + plan divertido. Muy buena opción si hay buena visibilidad.",
    maps: "https://www.google.com/maps/search/?api=1&query=Monte+Igueldo+San+Sebastian"
  },
  {
    name: "Garbera si llueve",
    note: "Plan comodín: compras, baños, parking y refugio cubierto.",
    maps: "https://www.google.com/maps/search/?api=1&query=Centro+Comercial+Garbera"
  }
],

sunset: [
  {
    name: "Monte Igueldo",
    note: "Mejor mirador para foto familiar completa de La Concha si el cielo está despejado.",
    maps: "https://www.google.com/maps/search/?api=1&query=Monte+Igueldo+San+Sebastian"
  },
  {
    name: "Paseo de La Concha",
    note: "Más fácil y sin mover coche. Buenas fotos al final de la tarde.",
    maps: "https://www.google.com/maps/search/?api=1&query=Paseo+de+La+Concha+San+Sebastian"
  },
  {
    name: "Hondarribia · Barrio de la Marina",
    note: "Ideal para cerrar el día: casas de colores, ambiente y paseo tranquilo.",
    maps: "https://www.google.com/maps/search/?api=1&query=Barrio+de+la+Marina+Hondarribia"
  }
],

      foodArea: "San Sebastián / Hondarribia"
    },

    {
      id: "day5",
      day: "Día 5",
      date: "5 Agosto",
      icon: "🐚",
      title: "Zumaia + Getaria + Zarautz",
      km: "≈ 190 km",
      drive: "≈ 2 h 45 min total",
      mood: "Costa vasca brutal",
      route: ["Donamaría", "Zumaia", "Getaria", "Zarautz", "Donamaría"],
      plan: [
        "Zumaia por la mañana: flysch y miradores.",
        "Getaria para comer pescado o menú familiar.",
        "Paseo por puerto y casco antiguo.",
        "Tarde en Zarautz: playa, helado y paseo marítimo.",
        "Vuelta antes de que se haga tarde."
      ],
      tips: [
        "Calzado cómodo para Zumaia.",
        "Mirar mareas si queréis disfrutar mejor el flysch.",
        "Llevar toalla ligera, crema solar y ropa de cambio."
      ],
      rainPlan: "Getaria, cafés, comida larga y paseo corto por Zarautz si abre el tiempo.",
      mustSee: [
        {
          title: "Flysch de Zumaia",
          text: "Acantilados y capas geológicas espectaculares. Mejor con buena luz y consultando mareas."
        },
        {
          title: "Puerto de Getaria",
          text: "Uno de los mejores lugares del viaje para comer pescado y pasear junto al mar."
        },
        {
          title: "Playa de Zarautz",
          text: "Gran playa abierta, ambiente surfero y paseo marítimo perfecto para la tarde."
        }
      ],
      curiosities: [
        "El flysch muestra capas de roca formadas durante millones de años.",
        "Getaria está muy ligada al mar y a la tradición pesquera vasca.",
        "Zarautz es uno de los grandes puntos surferos de la costa guipuzcoana."
      ],
      alerts: [
        "Consultar mareas antes de acercarse demasiado al flysch.",
        "No bajar a zonas resbaladizas si el mar está alto.",
        "Getaria puede llenarse para comer: mejor reservar o llegar pronto."
      ],
      
      smartTips: [
  "🌊 Zumaia depende mucho de la marea: si está alta, mejor miradores y paseo; si está baja, disfrutar más el flysch con cuidado.",
  "🐟 Getaria merece reserva si queréis comer pescado a la brasa sin esperar.",
  "🏖️ Zarautz es perfecto como plan flexible: playa si apetece, paseo y helado si está nublado.",
  "📸 Foto TOP: entorno de la ermita de San Telmo en Zumaia y puerto de Getaria."
],
      foodGuide: [
        {
          title: "Pescado a la brasa en Getaria",
          text: "Getaria es uno de los mejores puntos del viaje para comer rodaballo, besugo, bonito del norte o pescado de temporada."
        },
        {
          title: "Txakoli",
          text: "Vino blanco vasco típico de la zona, muy asociado a Getaria. Combina especialmente bien con pescado."
        },
        {
          title: "Zarautz informal",
          text: "Para gastar menos, Zarautz es buena opción para menú familiar, hamburguesas, raciones o comida rápida cerca de la playa."
        }
      ],
      services: [
        "🌊 Zumaia: consultar mareas antes del flysch.",
        "🅿️ Zumaia: buscar parking Ermita de San Telmo / centro Zumaia.",
        "🅿️ Getaria: llegar pronto para aparcar cerca del puerto.",
        "💊 Farmacia: buscar farmacia de guardia Zumaia / Getaria / Zarautz.",
        "🛒 Supermercado: buscar supermercado Zarautz si hace falta compra rápida.",
        "🏥 Urgencias generales: 112."
      ],
shopping: [
  {
    name: "Zona comercial Zarautz",
    type: "Tiendas / paseo",
    area: "Calle Nagusia y paseo marítimo",
    note: "La mejor zona para paseo tranquilo, compras de verano, surf y ambiente vacacional.",
    maps: "https://www.google.com/maps/search/?api=1&query=Calle+Nagusia+Zarautz"
  },
  {
    name: "Tiendas surf Zarautz",
    type: "Surf / ropa",
    area: "Centro y paseo playa",
    note: "Zarautz está lleno de tiendas surf, ropa y ambiente joven.",
    maps: "https://www.google.com/maps/search/?api=1&query=surf+shop+Zarautz"
  },
  {
    name: "Eroski Zarautz",
    type: "Supermercado grande",
    area: "Zarautz",
    note: "Buena opción si queréis comprar bebida, snacks o cosas para volver a la casa rural.",
    maps: "https://www.google.com/maps/search/?api=1&query=Eroski+Zarautz"
  },
  {
    name: "Centro Zarautz",
    type: "Compras rápidas",
    area: "Centro",
    note: "Ideal para paseo relajado sin sensación de centro comercial grande.",
    maps: "https://www.google.com/maps/search/?api=1&query=Centro+Zarautz"
  }
],

supermarkets: [
  {
    name: "Eroski Zarautz",
    note: "Muy práctico para volver cargados a Donamaría sin pagar supermercados turísticos pequeños.",
    maps: "https://www.google.com/maps/search/?api=1&query=Eroski+Zarautz"
  },
  {
    name: "BM Supermercados",
    note: "Cadena muy habitual en Euskadi. Buena calidad y productos preparados.",
    maps: "https://www.google.com/maps/search/?api=1&query=BM+Supermercados+Zarautz"
  },
  {
    name: "Supermercados Getaria",
    note: "Mejor para compras pequeñas rápidas cerca del puerto.",
    maps: "https://www.google.com/maps/search/?api=1&query=supermercado+Getaria"
  }
],

pharmacies: [
  {
    name: "Farmacia Zarautz centro",
    note: "Más cómoda si pasáis la tarde en playa y paseo marítimo.",
    maps: "https://www.google.com/maps/search/?api=1&query=farmacia+centro+Zarautz"
  },
  {
    name: "Farmacia de guardia Zumaia",
    note: "Consultar guardias actualizadas si hacéis mañana larga por flysch.",
    maps: "https://www.google.com/maps/search/?api=1&query=farmacia+de+guardia+Zumaia"
  }
],

parkings: [
  {
    name: "Parking Zumaia centro",
    note: "Mejor llegar temprano. En agosto puede llenarse rápido por el flysch.",
    maps: "https://www.google.com/maps/search/?api=1&query=parking+Zumaia+centro"
  },
  {
    name: "Parking Zarautz playa",
    note: "Muy práctico para paseo y playa. Algunas zonas son OTA/pago según horario.",
    maps: "https://www.google.com/maps/search/?api=1&query=parking+playa+Zarautz"
  },
  {
    name: "Parking Getaria puerto",
    note: "Cómodo para comer pescado y pasear sin subir demasiadas cuestas.",
    maps: "https://www.google.com/maps/search/?api=1&query=parking+Getaria+puerto"
  },
  {
    name: "Consejo parking",
    note: "En costa vasca merece la pena pagar parking cómodo y evitar perder tiempo buscando hueco.",
    maps: "https://www.google.com/maps/search/?api=1&query=parking+Zarautz"
  }
],

coffee: [
  {
    name: "Cafés paseo marítimo Zarautz",
    note: "Muy buena zona para café relajado mirando la playa.",
    maps: "https://www.google.com/maps/search/?api=1&query=cafe+playa+Zarautz"
  },
  {
    name: "Café puerto Getaria",
    note: "Ideal tras comer pescado o antes de volver.",
    maps: "https://www.google.com/maps/search/?api=1&query=cafeteria+puerto+Getaria"
  },
  {
    name: "Cafeterías Zumaia",
    note: "Perfectas para desayunar antes de flysch y paseo.",
    maps: "https://www.google.com/maps/search/?api=1&query=cafeteria+Zumaia"
  }
],

desserts: [
  {
    name: "Helados paseo Zarautz",
    note: "Uno de los mejores planes tranquilos del día: paseo + helado + playa.",
    maps: "https://www.google.com/maps/search/?api=1&query=heladeria+Zarautz"
  },
  {
    name: "Pastelerías Getaria",
    note: "Buena parada dulce después de comer en puerto.",
    maps: "https://www.google.com/maps/search/?api=1&query=pasteleria+Getaria"
  },
  {
    name: "Heladería Zumaia",
    note: "Perfecta para cortar la mañana tras el flysch.",
    maps: "https://www.google.com/maps/search/?api=1&query=heladeria+Zumaia"
  }
],

kids: [
  {
    name: "Playa Zarautz",
    note: "Muy cómoda para familias. Amplia, fácil para pasear y ambiente surfero tranquilo.",
    maps: "https://www.google.com/maps/search/?api=1&query=Playa+Zarautz"
  },
  {
    name: "Paseo marítimo Zarautz",
    note: "Ideal para niños: espacio, helados, paseo y ambiente relajado.",
    maps: "https://www.google.com/maps/search/?api=1&query=paseo+maritimo+Zarautz"
  },
  {
    name: "Miradores Zumaia",
    note: "Buenas fotos familiares sin necesidad de hacer rutas largas.",
    maps: "https://www.google.com/maps/search/?api=1&query=mirador+flysch+Zumaia"
  }
],

sunset: [
  {
    name: "Atardecer en Zarautz",
    note: "Muy probablemente uno de los mejores atardeceres del viaje.",
    maps: "https://www.google.com/maps/search/?api=1&query=atardecer+Zarautz"
  },
  {
    name: "Mirador Getaria",
    note: "Buenas vistas del puerto y la costa antes de volver.",
    maps: "https://www.google.com/maps/search/?api=1&query=mirador+Getaria"
  },
  {
    name: "Paseo playa Zarautz",
    note: "Perfecto para terminar el día sin prisas.",
    maps: "https://www.google.com/maps/search/?api=1&query=paseo+playa+Zarautz"
  }
],
      
      foodArea: "Zumaia / Getaria / Zarautz"
    },

    {
      id: "day6",
      day: "Día 6",
      date: "6 Agosto",
      icon: "🏙️",
      title: "Bilbao + Guggenheim",
      km: "≈ 260 km",
      drive: "≈ 3 h 10 min total",
      mood: "Ciudad, arte y pintxos",
      route: ["Donamaría", "Bilbao", "Donamaría"],
      plan: [
        "Llegada a Bilbao por la mañana.",
        "Guggenheim exterior e interior opcional.",
        "Puppy, ría y paseo urbano.",
        "Comida por Plaza Nueva o Mercado de la Ribera.",
        "Tarde en Casco Viejo."
      ],
      tips: [
        "Reservar entrada si vais al Guggenheim.",
        "Usar parking céntrico para no perder tiempo.",
        "Día perfecto si hace peor tiempo en costa."
      ],
      rainPlan: "Guggenheim, Mercado de la Ribera, tiendas, cafés y Casco Viejo.",
      mustSee: [
        {
          title: "Guggenheim Bilbao",
          text: "Exterior espectacular junto a la ría. Aunque no se entre, merece muchísimo la visita."
        },
        {
          title: "Puppy",
          text: "La escultura floral de Jeff Koons es una de las fotos más clásicas de Bilbao."
        },
        {
          title: "Casco Viejo",
          text: "Calles, Plaza Nueva, pintxos y ambiente urbano muy cómodo para la tarde."
        }
      ],
      curiosities: [
        "El Guggenheim cambió la imagen moderna de Bilbao y su zona de la ría.",
        "Bilbao combina arquitectura contemporánea con casco histórico tradicional.",
        "La Plaza Nueva es una de las zonas más cómodas para pintxos con grupo."
      ],
      alerts: [
        "Comprobar horarios y entradas del Guggenheim antes de salir.",
        "En agosto puede haber colas en zonas turísticas.",
        "Si hace calor, alternar paseo exterior con paradas interiores."
      ],
      smartTips: [
  "🌧️ Bilbao es el mejor comodín si la costa sale lluviosa.",
  "🎟️ Si entráis al Guggenheim, comprar entradas antes evita colas.",
  "🍢 Plaza Nueva funciona muy bien para comer por pintxos con grupo.",
  "📸 Foto TOP: Puppy, fachada del Guggenheim y paseo junto a la ría."
],
      foodGuide: [
        {
          title: "Plaza Nueva",
          text: "Zona clásica de pintxos en Bilbao. Cómoda para ir probando varios bares sin alejarse del Casco Viejo."
        },
        {
          title: "Mercado de la Ribera",
          text: "Muy práctico para grupo: gastrobares, opciones variadas y espacio cubierto si hace mal tiempo."
        },
        {
          title: "Qué probar",
          text: "Gildas, bacalao, txangurro, tortilla, rabas, pintxos calientes y dulces vascos."
        }
      ],
      services: [
        "🅿️ Bilbao: buscar Parking Arenal / Parking Plaza Nueva / Parking Guggenheim.",
        "🎟️ Guggenheim: revisar entradas y horarios antes de salir.",
        "💊 Farmacia: buscar farmacia de guardia Bilbao Casco Viejo.",
        "🛒 Supermercado: buscar supermercado Bilbao Casco Viejo / Abando.",
        "🌧️ Si llueve, priorizar Guggenheim + Mercado de la Ribera.",
        "🏥 Urgencias generales: 112."
      ],
shopping: [
  {
    name: "Gran Vía de Bilbao",
    type: "Zona comercial principal",
    area: "Gran Vía Don Diego López de Haro",
    note: "La gran avenida comercial de Bilbao. Zara, Mango, Oysho, Massimo Dutti, El Corte Inglés y muchísimo ambiente.",
    maps: "https://www.google.com/maps/search/?api=1&query=Gran+Via+Bilbao"
  },
  {
    name: "Zara Bilbao Gran Vía",
    type: "Moda",
    area: "Gran Vía",
    note: "La tienda Zara principal y más cómoda para compras en el centro.",
    maps: "https://www.google.com/maps/search/?api=1&query=Zara+Gran+Via+Bilbao"
  },
  {
    name: "Mango Bilbao",
    type: "Moda mujer",
    area: "Gran Vía",
    note: "Muy cerca de toda la zona comercial principal.",
    maps: "https://www.google.com/maps/search/?api=1&query=Mango+Bilbao+Gran+Via"
  },
  {
    name: "Primark Bilbao",
    type: "Moda económica",
    area: "Gran Vía",
    note: "Muy práctico si queréis compras rápidas o ropa para el viaje.",
    maps: "https://www.google.com/maps/search/?api=1&query=Primark+Bilbao"
  },
  {
    name: "El Corte Inglés Bilbao",
    type: "Centro comercial",
    area: "Gran Vía",
    note: "Perfecto para baños, descanso, compras rápidas y climatización si hace calor o llueve.",
    maps: "https://www.google.com/maps/search/?api=1&query=El+Corte+Ingles+Bilbao"
  },
  {
    name: "Centro Comercial Zubiarte",
    type: "Centro comercial",
    area: "Zona Guggenheim",
    note: "Muy útil si combináis Guggenheim + compras sin mover coche.",
    maps: "https://www.google.com/maps/search/?api=1&query=Centro+Comercial+Zubiarte+Bilbao"
  },
  {
    name: "FNAC Bilbao",
    type: "Tecnología / libros",
    area: "Centro",
    note: "Buena parada para tecnología, libros, juegos o aire acondicionado.",
    maps: "https://www.google.com/maps/search/?api=1&query=FNAC+Bilbao"
  }
],

supermarkets: [
  {
    name: "Carrefour Express Bilbao centro",
    note: "Perfecto para bebida fría, snacks o compra rápida.",
    maps: "https://www.google.com/maps/search/?api=1&query=Carrefour+Express+Bilbao+centro"
  },
  {
    name: "Mercadona Bilbao",
    note: "La opción más económica para cargar cosas antes de volver a Donamaría.",
    maps: "https://www.google.com/maps/search/?api=1&query=Mercadona+Bilbao"
  },
  {
    name: "Supermercados BM",
    note: "Cadena muy habitual en Euskadi y muy cómoda para compras rápidas.",
    maps: "https://www.google.com/maps/search/?api=1&query=BM+Supermercados+Bilbao"
  }
],

pharmacies: [
  {
    name: "Farmacia Gran Vía",
    note: "Muy útil si estáis haciendo compras o paseo centro.",
    maps: "https://www.google.com/maps/search/?api=1&query=farmacia+Gran+Via+Bilbao"
  },
  {
    name: "Farmacia Guggenheim",
    note: "Práctica si estáis en zona museo / Zubiarte.",
    maps: "https://www.google.com/maps/search/?api=1&query=farmacia+Guggenheim+Bilbao"
  }
],

parkings: [
  {
    name: "Parking Guggenheim",
    note: "La opción más cómoda para museo y paseo por la ría. Suele llenarse antes al mediodía.",
    maps: "https://www.google.com/maps/search/?api=1&query=Parking+Guggenheim+Bilbao"
  },
  {
    name: "Parking Zubiarte",
    note: "Muy cómodo para combinar Guggenheim + compras + cafés.",
    maps: "https://www.google.com/maps/search/?api=1&query=Parking+Zubiarte+Bilbao"
  },
  {
    name: "Parking Plaza Euskadi",
    note: "Buena ubicación y normalmente más tranquilo que otras opciones.",
    maps: "https://www.google.com/maps/search/?api=1&query=Parking+Plaza+Euskadi+Bilbao"
  },
  {
    name: "Consejo parking Bilbao",
    note: "Bilbao merece parking cómodo. La diferencia de precio compensa por tiempo y estrés.",
    maps: "https://www.google.com/maps/search/?api=1&query=parking+Bilbao+centro"
  }
],

coffee: [
  {
    name: "Cafés Guggenheim",
    note: "Muy buena zona para descansar viendo la ría y el museo.",
    maps: "https://www.google.com/maps/search/?api=1&query=cafeteria+Guggenheim+Bilbao"
  },
  {
    name: "Cafeterías Plaza Moyúa",
    note: "Zona elegante y muy cómoda para pausa de compras.",
    maps: "https://www.google.com/maps/search/?api=1&query=cafeteria+Plaza+Moyua+Bilbao"
  },
  {
    name: "Specialty coffee Bilbao",
    note: "Bilbao tiene muy buen café de especialidad repartido por centro y Casco Viejo.",
    maps: "https://www.google.com/maps/search/?api=1&query=specialty+coffee+Bilbao"
  }
],

desserts: [
  {
    name: "Helados junto a la ría",
    note: "Muy buena idea para paseo tranquilo después de comer.",
    maps: "https://www.google.com/maps/search/?api=1&query=heladeria+ria+Bilbao"
  },
  {
    name: "Pastelería Don Manuel",
    note: "Clásico dulce bilbaíno muy conocido.",
    maps: "https://www.google.com/maps/search/?api=1&query=Pasteleria+Don+Manuel+Bilbao"
  },
  {
    name: "Heladerías Gran Vía",
    note: "Perfectas para cortar tarde de compras.",
    maps: "https://www.google.com/maps/search/?api=1&query=heladeria+Gran+Via+Bilbao"
  }
],

kids: [
  {
    name: "Puppy",
    note: "Foto obligatoria para niños y familias.",
    maps: "https://www.google.com/maps/search/?api=1&query=Puppy+Bilbao"
  },
  {
    name: "Paseo de la ría",
    note: "Muy cómodo para descansar sin hacer rutas largas.",
    maps: "https://www.google.com/maps/search/?api=1&query=ria+Bilbao"
  },
  {
    name: "Zubiarte",
    note: "Buen plan comodín si llueve o alguien quiere descansar.",
    maps: "https://www.google.com/maps/search/?api=1&query=Centro+Comercial+Zubiarte+Bilbao"
  },
  {
    name: "Funicular Artxanda",
    note: "Muy buena vista panorámica si sobra tiempo y el día está despejado.",
    maps: "https://www.google.com/maps/search/?api=1&query=Funicular+Artxanda+Bilbao"
  }
],

sunset: [
  {
    name: "Ría de Bilbao",
    note: "La luz al final de la tarde junto al Guggenheim suele ser espectacular.",
    maps: "https://www.google.com/maps/search/?api=1&query=ria+Bilbao+atardecer"
  },
  {
    name: "Mirador Artxanda",
    note: "Las mejores vistas generales de Bilbao.",
    maps: "https://www.google.com/maps/search/?api=1&query=Mirador+Artxanda+Bilbao"
  },
  {
    name: "Zona Guggenheim",
    note: "Muy buena para terminar el día sin alejarse demasiado del coche.",
    maps: "https://www.google.com/maps/search/?api=1&query=Guggenheim+Bilbao"
  }
],
      
      foodArea: "Bilbao"
    },

    {
      id: "day7",
      day: "Día 7",
      date: "7 Agosto",
      icon: "🏰",
      title: "Gaztelugatxe + Bermeo + Mundaka",
      km: "≈ 280 km",
      drive: "≈ 3 h 40 min total",
      mood: "Acantilados, mar y pueblos marineros",
      route: ["Donamaría", "San Juan de Gaztelugatxe", "Bermeo", "Mundaka", "Donamaría"],
      plan: [
        "Salida temprano hacia Gaztelugatxe.",
        "Subida y fotos con calma.",
        "Bermeo para comer o tomar algo en el puerto.",
        "Mundaka por la tarde: miradores y ambiente surfero.",
        "Vuelta a Donamaría."
      ],
      tips: [
        "Comprobar si hace falta reserva gratuita para Gaztelugatxe.",
        "Llevar calzado cómodo, agua y algo de snack.",
        "No cargar demasiado el día: la subida cansa."
      ],
      rainPlan: "Bermeo + Mundaka + comida marinera, dejando Gaztelugatxe si el tiempo mejora.",
      mustSee: [
        {
          title: "San Juan de Gaztelugatxe",
          text: "Uno de los paisajes más icónicos del viaje: escaleras, ermita, mar y acantilados."
        },
        {
          title: "Puerto de Bermeo",
          text: "Ambiente marinero, buena parada para comer y descansar tras la subida."
        },
        {
          title: "Mundaka",
          text: "Famosa por su ola izquierda y sus vistas sobre la desembocadura."
        }
      ],
      curiosities: [
        "Gaztelugatxe significa algo parecido a castillo o roca fortificada junto al mar.",
        "La ermita está unida a tierra por un puente y una subida de escaleras.",
        "Mundaka es conocida internacionalmente en el mundo del surf."
      ],
      alerts: [
        "Gaztelugatxe puede requerir ticket gratuito según calendario oficial.",
        "No ir con calzado de playa: mejor zapatilla cómoda.",
        "Si hay viento fuerte o lluvia, valorar cambiar el orden del día."
      ],
      smartTips: [
  "🏰 Gaztelugatxe conviene hacerlo temprano y solo si el tiempo acompaña.",
  "🎟️ Revisar ticket gratuito antes de ir para evitar sorpresa en el acceso.",
  "👟 No ir con chanclas: la subida y bajada cansan.",
  "📸 Foto TOP: puente y escaleras de Gaztelugatxe desde el mirador."
],
      foodGuide: [
        {
          title: "Bermeo marinero",
          text: "Buen lugar para comer pescado, raciones o algo sencillo en ambiente de puerto."
        },
        {
          title: "Mundaka con vistas",
          text: "Ideal para café, helado, pintxo o cena temprana mirando hacia la ría de Urdaibai."
        },
        {
          title: "Qué probar",
          text: "Bonito, anchoas, marmitako si lo encontráis, rabas, pescado de temporada y pintxos marineros."
        }
      ],
      services: [
        "🎟️ Gaztelugatxe: revisar si ese día requiere ticket gratuito.",
        "🅿️ Gaztelugatxe: buscar parking San Juan de Gaztelugatxe.",
        "💧 Llevar agua antes de iniciar la subida.",
        "💊 Farmacia: buscar farmacia de guardia Bermeo.",
        "🛒 Supermercado: buscar supermercado Bermeo antes de volver.",
        "🏥 Urgencias generales: 112."
      ],
shopping: [
  {
    name: "Tiendas puerto Bermeo",
    type: "Local / paseo",
    area: "Puerto viejo",
    note: "Pequeñas tiendas marineras, recuerdos y ambiente auténtico vasco.",
    maps: "https://www.google.com/maps/search/?api=1&query=Puerto+Bermeo"
  },
  {
    name: "Tiendas surf Mundaka",
    type: "Surf / ropa",
    area: "Centro Mundaka",
    note: "Mundaka tiene varias tiendas surferas pequeñas con mucho ambiente.",
    maps: "https://www.google.com/maps/search/?api=1&query=surf+shop+Mundaka"
  },
  {
    name: "Eroski Bermeo",
    type: "Supermercado",
    area: "Bermeo",
    note: "Muy útil para agua fría, snacks o cosas rápidas antes de volver.",
    maps: "https://www.google.com/maps/search/?api=1&query=Eroski+Bermeo"
  }
],

supermarkets: [
  {
    name: "Eroski Bermeo",
    note: "La mejor opción práctica de la zona.",
    maps: "https://www.google.com/maps/search/?api=1&query=Eroski+Bermeo"
  },
  {
    name: "BM Supermercados",
    note: "Muy útil para compras rápidas y productos preparados.",
    maps: "https://www.google.com/maps/search/?api=1&query=BM+Bermeo"
  }
],

pharmacies: [
  {
    name: "Farmacia Bermeo centro",
    note: "Más práctica si necesitáis algo después de Gaztelugatxe.",
    maps: "https://www.google.com/maps/search/?api=1&query=farmacia+Bermeo+centro"
  },
  {
    name: "Farmacia Mundaka",
    note: "Buena opción si termináis tarde por la costa.",
    maps: "https://www.google.com/maps/search/?api=1&query=farmacia+Mundaka"
  }
],

parkings: [
  {
    name: "Parking Gaztelugatxe",
    note: "Llegar temprano es CLAVE. En agosto puede saturarse rápido.",
    maps: "https://www.google.com/maps/search/?api=1&query=Parking+Gaztelugatxe"
  },
  {
    name: "Parking Bermeo puerto",
    note: "Muy cómodo para comer y descansar después de la subida.",
    maps: "https://www.google.com/maps/search/?api=1&query=Parking+Puerto+Bermeo"
  },
  {
    name: "Parking Mundaka",
    note: "Mejor dejar coche y recorrer andando el pueblo.",
    maps: "https://www.google.com/maps/search/?api=1&query=Parking+Mundaka"
  },
  {
    name: "Consejo Gaztelugatxe",
    note: "Llevar agua, zapatillas cómodas y no cargar mochilas innecesarias.",
    maps: "https://www.google.com/maps/search/?api=1&query=San+Juan+de+Gaztelugatxe"
  }
],

coffee: [
  {
    name: "Café puerto Bermeo",
    note: "Muy buena parada tras la caminata de Gaztelugatxe.",
    maps: "https://www.google.com/maps/search/?api=1&query=cafe+puerto+Bermeo"
  },
  {
    name: "Cafeterías Mundaka",
    note: "Perfectas para terminar tarde relajada mirando el mar.",
    maps: "https://www.google.com/maps/search/?api=1&query=cafeteria+Mundaka"
  },
  {
    name: "Terrazas marineras",
    note: "Uno de los días más bonitos para parar sin prisa.",
    maps: "https://www.google.com/maps/search/?api=1&query=terraza+Bermeo"
  }
],

desserts: [
  {
    name: "Helados Bermeo",
    note: "Muy buena idea después de comer junto al puerto.",
    maps: "https://www.google.com/maps/search/?api=1&query=heladeria+Bermeo"
  },
  {
    name: "Heladería Mundaka",
    note: "Ideal para paseo final tranquilo.",
    maps: "https://www.google.com/maps/search/?api=1&query=heladeria+Mundaka"
  },
  {
    name: "Pastelerías locales",
    note: "Pequeñas pastelerías vascas tradicionales por la zona del puerto.",
    maps: "https://www.google.com/maps/search/?api=1&query=pasteleria+Bermeo"
  }
],

kids: [
  {
    name: "Puerto de Bermeo",
    note: "Muy entretenido para niños: barcos, ambiente y paseo cómodo.",
    maps: "https://www.google.com/maps/search/?api=1&query=Puerto+Bermeo"
  },
  {
    name: "Mundaka paseo",
    note: "Pueblo pequeño, cómodo y muy agradable para familias.",
    maps: "https://www.google.com/maps/search/?api=1&query=Mundaka"
  },
  {
    name: "Gaztelugatxe",
    note: "La subida puede cansar. Mejor tomárselo sin prisas.",
    maps: "https://www.google.com/maps/search/?api=1&query=San+Juan+de+Gaztelugatxe"
  }
],

sunset: [
  {
    name: "Miradores Mundaka",
    note: "Uno de los mejores cierres del viaje si el cielo acompaña.",
    maps: "https://www.google.com/maps/search/?api=1&query=Mirador+Mundaka"
  },
  {
    name: "Puerto Bermeo",
    note: "Muy bonito al final de la tarde con ambiente marinero.",
    maps: "https://www.google.com/maps/search/?api=1&query=Puerto+Bermeo"
  },
  {
    name: "Costa Gaztelugatxe",
    note: "La luz del atardecer aquí puede ser espectacular.",
    maps: "https://www.google.com/maps/search/?api=1&query=Gaztelugatxe+atardecer"
  }
],
      
      foodArea: "Bermeo / Mundaka"
    },

    {
      id: "day8",
      day: "Día 8",
      date: "8 Agosto",
      icon: "🚐",
      title: "Donamaría → Turégano",
      km: "≈ 430 km",
      drive: "≈ 4 h 45 min",
      mood: "Vuelta con parada castellana",
      route: ["Donamaría", "Burgos", "Segovia", "Turégano"],
      plan: [
        "Check-out y salida tranquila.",
        "Parada para comer de camino.",
        "Llegada a Turégano.",
        "Paseo por plaza, castillo y cena relajada.",
        "Cerrar gastos del viaje."
      ],
      tips: [
        "No salir demasiado tarde.",
        "Dejar maletas organizadas la noche anterior.",
        "Buen día para revisar Bizum pendientes."
      ],
      rainPlan: "Ruta directa, comida en interior y tarde de posada.",
      mustSee: [
        {
          title: "Turégano",
          text: "Pueblo castellano tranquilo para dormir y partir el regreso sin hacer una paliza de coche."
        },
        {
          title: "Castillo de Turégano",
          text: "Imagen principal del pueblo. Perfecto para paseo de tarde y foto familiar."
        },
        {
          title: "Cierre de viaje",
          text: "Día ideal para revisar gastos, fotos y dejar todo cuadrado."
        }
      ],
      curiosities: [
        "Turégano conserva mucho ambiente castellano y una plaza muy agradable.",
        "El castillo domina la silueta del pueblo.",
        "Partir el regreso hace el viaje mucho más cómodo para las familias."
      ],
      alerts: [
        "Revisar objetos antes de dejar la casa rural.",
        "Comprobar hora de llegada a la posada.",
        "Anotar combustible, peajes y comida de este día."
      ],
      smartTips: [
  "🚐 Día de transición: no salir tarde de Donamaría.",
  "💸 Buen momento para revisar gastos antes de la última noche.",
  "🏰 Si llegáis con energía, paseo corto por Turégano y castillo.",
  "📸 Foto TOP: plaza y castillo de Turégano al atardecer."
],
      foodGuide: [
        {
          title: "Comida de ruta",
          text: "Mejor comida fácil en carretera o parada castellana sin alargar demasiado."
        },
        {
          title: "Cena en Turégano",
          text: "Buscar comida castellana sencilla: asador, raciones, carnes o platos caseros."
        },
        {
          title: "Segovia como opción",
          text: "Si vais bien de tiempo, zona Segovia ofrece cochinillo, judiones, ponche segoviano y asadores."
        }
      ],
      services: [
        "⛽ Revisar combustible antes de salir de Donamaría.",
        "🛒 Comprar agua/snacks antes de la ruta larga.",
        "💊 Farmacia: buscar farmacia de guardia Turégano / Segovia.",
        "🅿️ Turégano: revisar aparcamiento cerca de Plaza de España.",
        "🏥 Urgencias generales: 112.",
        "📍 Alojamiento: Posada el Zaguán, Plaza de España 16, Turégano."
      ],
shopping: [
  {
    name: "Segovia centro",
    type: "Paseo / compras",
    area: "Zona Acueducto",
    note: "Buena parada si queréis estirar piernas y comprar algo antes de volver al sur.",
    maps: "https://www.google.com/maps/search/?api=1&query=Acueducto+Segovia"
  },
  {
    name: "Tiendas castellanas",
    type: "Productos locales",
    area: "Segovia",
    note: "Buen sitio para llevar dulces, embutidos o recuerdos tranquilos del viaje.",
    maps: "https://www.google.com/maps/search/?api=1&query=productos+locales+Segovia"
  },
  {
    name: "Supermercado Segovia",
    type: "Compra rápida",
    area: "Ruta",
    note: "Ideal para agua, snacks y preparar el último tramo del viaje.",
    maps: "https://www.google.com/maps/search/?api=1&query=Mercadona+Segovia"
  }
],

supermarkets: [
  {
    name: "Mercadona Segovia",
    note: "Muy práctico antes de llegar a Turégano.",
    maps: "https://www.google.com/maps/search/?api=1&query=Mercadona+Segovia"
  },
  {
    name: "Carrefour Segovia",
    note: "Buena parada si necesitáis compra más grande o combustible cerca.",
    maps: "https://www.google.com/maps/search/?api=1&query=Carrefour+Segovia"
  }
],

pharmacies: [
  {
    name: "Farmacia Segovia centro",
    note: "Más cómoda si hacéis parada urbana.",
    maps: "https://www.google.com/maps/search/?api=1&query=farmacia+Segovia+centro"
  },
  {
    name: "Farmacia Turégano",
    note: "Pequeña pero útil para cualquier imprevisto antes de volver.",
    maps: "https://www.google.com/maps/search/?api=1&query=farmacia+Turegano"
  }
],

parkings: [
  {
    name: "Parking Acueducto Segovia",
    note: "La opción más cómoda para ver Segovia sin complicarse.",
    maps: "https://www.google.com/maps/search/?api=1&query=parking+acueducto+Segovia"
  },
  {
    name: "Parking Turégano",
    note: "Muy sencillo comparado con ciudades grandes. No suele haber demasiados problemas.",
    maps: "https://www.google.com/maps/search/?api=1&query=parking+Turegano"
  },
  {
    name: "Consejo vuelta",
    note: "Mejor no cargar demasiado el día. Conviene llegar tranquilos a la posada.",
    maps: "https://www.google.com/maps/search/?api=1&query=Turegano"
  }
],

coffee: [
  {
    name: "Café plaza Turégano",
    note: "Perfecto para terminar el día relajado.",
    maps: "https://www.google.com/maps/search/?api=1&query=cafeteria+plaza+Turegano"
  },
  {
    name: "Cafeterías Segovia",
    note: "Muy buena pausa de carretera antes del último tramo.",
    maps: "https://www.google.com/maps/search/?api=1&query=cafeteria+Segovia+centro"
  }
],

desserts: [
  {
    name: "Ponche segoviano",
    note: "Uno de los dulces típicos más famosos de Segovia.",
    maps: "https://www.google.com/maps/search/?api=1&query=ponche+segoviano"
  },
  {
    name: "Pastelerías Segovia",
    note: "Buena oportunidad para llevar algo dulce a casa.",
    maps: "https://www.google.com/maps/search/?api=1&query=pasteleria+Segovia"
  }
],

kids: [
  {
    name: "Acueducto Segovia",
    note: "Parada rápida muy buena para fotos familiares.",
    maps: "https://www.google.com/maps/search/?api=1&query=Acueducto+Segovia"
  },
  {
    name: "Plaza Turégano",
    note: "Ambiente tranquilo y cómodo para descansar después de carretera.",
    maps: "https://www.google.com/maps/search/?api=1&query=Plaza+Turegano"
  }
],

sunset: [
  {
    name: "Castillo de Turégano",
    note: "Muy bonito para paseo corto y cierre relajado del viaje.",
    maps: "https://www.google.com/maps/search/?api=1&query=Castillo+de+Turegano"
  },
  {
    name: "Plaza Mayor Turégano",
    note: "Buen ambiente tranquilo de pueblo castellano.",
    maps: "https://www.google.com/maps/search/?api=1&query=Plaza+Mayor+Turegano"
  }
],
      
      foodArea: "Turégano / Segovia"
    },

    {
      id: "day9",
      day: "Día 9",
      date: "9 Agosto",
      icon: "🏁",
      title: "Turégano → Doña Mencía",
      km: "≈ 520 km",
      drive: "≈ 5 h 30 min",
      mood: "Vuelta final",
      route: ["Turégano", "Madrid", "Doña Mencía"],
      plan: [
        "Desayuno y salida.",
        "Paradas cortas durante la ruta.",
        "Llegada a casa.",
        "Resumen final de gastos.",
        "Seleccionar mejores fotos del viaje."
      ],
      tips: [
        "Evitar comidas pesadas si queda mucha carretera.",
        "Revisar objetos olvidados antes de salir.",
        "Guardar el álbum final."
      ],
      rainPlan: "Ruta directa y paradas breves.",
      mustSee: [
        {
          title: "Balance final",
          text: "Comprobar quién pagó qué y dejar Bizum pendientes marcados."
        },
        {
          title: "Álbum familiar",
          text: "Seleccionar las mejores fotos de cada día antes de que se mezclen en la galería."
        },
        {
          title: "Recuerdo del viaje",
          text: "Guardar una foto portada y una frase resumen de cada familia."
        }
      ],
      curiosities: [
        "Los mejores recuerdos suelen salir de los momentos pequeños: desayunos, paradas y fotos improvisadas.",
        "Cerrar gastos el mismo día evita líos posteriores.",
        "La app puede quedar como diario permanente del viaje."
      ],
      alerts: [
        "Último repaso de cargadores, documentación y compras.",
        "Anotar último gasto de combustible.",
        "No borrar fotos duplicadas hasta revisar el álbum final."
      ],
      smartTips: [
  "🏁 Último día: ruta directa y paradas cortas.",
  "💶 Anotar combustible y cafés finales antes de cerrar gastos.",
  "📸 Elegir una foto portada del viaje antes de que se mezclen todas.",
  "✅ Al llegar, exportar gastos y dejar Bizum pendientes claros."
],
      foodGuide: [
        {
          title: "Comida ligera de vuelta",
          text: "Evitar comidas pesadas. Mejor bocadillos buenos, menú sencillo o parada corta."
        },
        {
          title: "Snacks y agua",
          text: "Dejar preparado desde Turégano agua, fruta, frutos secos o algo fácil para no depender de áreas caras."
        },
        {
          title: "Cierre de gastos",
          text: "Anotar último combustible, cafés y comidas para exportar el resumen final."
        }
      ],
      services: [
        "⛽ Repostar antes de entrar en tramos largos.",
        "🛒 Comprar agua/snacks antes de salir de Turégano.",
        "💊 Farmacia: buscar farmacia de guardia en ruta si hiciera falta.",
        "🏥 Urgencias generales: 112.",
        "📤 Al llegar: exportar gastos y revisar Bizum pendientes."
      ],
shopping: [
  {
    name: "Última parada ruta",
    type: "Compra rápida",
    area: "Área servicio",
    note: "Buen momento para agua, snacks o cafés antes del tramo final.",
    maps: "https://www.google.com/maps/search/?api=1&query=area+de+servicio+Madrid+Andalucia"
  },
  {
    name: "Compras pendientes",
    type: "Últimos detalles",
    area: "Ruta",
    note: "Mejor resolver cualquier compra antes de entrar en el tramo largo hacia Andalucía.",
    maps: "https://www.google.com/maps/search/?api=1&query=centro+comercial+ruta+Madrid+Andalucia"
  }
],

supermarkets: [
  {
    name: "Mercadona ruta A4",
    note: "Muy práctico para comprar algo rápido sin desviarse demasiado.",
    maps: "https://www.google.com/maps/search/?api=1&query=Mercadona+A4+Madrid+Andalucia"
  },
  {
    name: "Carrefour ruta",
    note: "Cómodo para combustible, baños y última compra.",
    maps: "https://www.google.com/maps/search/?api=1&query=Carrefour+autovia+A4"
  }
],

pharmacies: [
  {
    name: "Farmacia ruta",
    note: "Usar Maps directamente si hace falta durante el trayecto.",
    maps: "https://www.google.com/maps/search/?api=1&query=farmacia+ruta+A4"
  }
],

parkings: [
  {
    name: "Paradas cómodas",
    note: "Mejor hacer paradas cortas cada cierto tiempo y no intentar llegar del tirón.",
    maps: "https://www.google.com/maps/search/?api=1&query=area+servicio+A4"
  },
  {
    name: "Consejo final",
    note: "Último día: prioridad absoluta a viajar tranquilos.",
    maps: "https://www.google.com/maps/search/?api=1&query=A4+Andalucia"
  }
],

coffee: [
  {
    name: "Café ruta",
    note: "Mejor hacer una parada cómoda a media mañana o media tarde.",
    maps: "https://www.google.com/maps/search/?api=1&query=cafeteria+autovia+A4"
  }
],

desserts: [
  {
    name: "Último helado del viaje",
    note: "Buen momento para cerrar el viaje con una parada tranquila.",
    maps: "https://www.google.com/maps/search/?api=1&query=heladeria+ruta+A4"
  }
],

kids: [
  {
    name: "Paradas amplias",
    note: "Buscar áreas con espacio y baños cómodos para evitar hacer el viaje pesado.",
    maps: "https://www.google.com/maps/search/?api=1&query=area+servicio+familiar+A4"
  }
],

sunset: [
  {
    name: "Llegada a casa",
    note: "El verdadero final del viaje será descargar fotos y recordar anécdotas.",
    maps: "https://www.google.com/maps/search/?api=1&query=Do%C3%B1a+Mencia"
  }
],
      
      foodArea: "Ruta de vuelta"
    }
  ],

restaurants: [
{
  zone: "Burgos",
  name: "Cervecería Morito",
  budget: "economico",
  icon: "🍢",
  type: "Tapas / raciones / informal",
  tags: ["rapido", "pintxos", "economico", "imprescindible"],
  note: "Clásico muy popular para cenar rápido y barato en el centro. Suele estar muy concurrido. Ideal para primera noche si no queréis complicaros.",
  maps: "https://www.google.com/maps/search/?api=1&query=Cerveceria+Morito+Calle+Diego+Porcelos+1+Burgos"
},
{
  zone: "Burgos",
  name: "La Favorita",
  budget: "medio",
  icon: "🍽️",
  type: "Taberna urbana / tapas cuidadas",
  tags: ["familiar", "pintxos", "terraza"],
  note: "Situada en Calle Avellanos, zona muy cómoda del casco histórico. Buena opción si queréis algo más cuidado que tapeo rápido.",
  maps: "https://www.google.com/maps/search/?api=1&query=La+Favorita+Calle+Avellanos+8+Burgos"
},
{
  zone: "Burgos",
  name: "Casa Ojeda",
  budget: "premium",
  icon: "🥩",
  type: "Castellano / lechazo / clásico",
  tags: ["premium", "carne", "imprescindible"],
  note: "Restaurante histórico de Burgos para comida castellana más seria. Mejor si buscáis experiencia tradicional y presupuesto más alto.",
  maps: "https://www.google.com/maps/search/?api=1&query=Casa+Ojeda+Calle+Vitoria+5+Burgos"
},
{
  zone: "Burgos",
  name: "Zona Catedral / Plaza Mayor",
  budget: "economico",
  icon: "🌙",
  type: "Cena flexible",
  tags: ["rapido", "familiar", "terraza", "economico"],
  note: "Recurso perfecto si llegáis cansados: paseo corto, tapas, bocadillos o raciones sin reservar. Ideal para no cargar el primer día.",
  maps: "https://www.google.com/maps/search/?api=1&query=cenar+Plaza+Mayor+Catedral+Burgos"
},
{
  zone: "Aranda de Duero",
  name: "El Lagar de Isilla",
  budget: "premium",
  icon: "🥩",
  type: "Asador / lechazo / bodega",
  tags: ["premium", "carne", "imprescindible"],
  note: "Opción muy potente para parada castellana especial. Está en Calle Isilla 18 y es conocido por lechazo, horno de leña y bodega histórica bajo el restaurante.",
  maps: "https://www.google.com/maps/search/?api=1&query=El+Lagar+de+Isilla+Calle+Isilla+18+Aranda+de+Duero"
},
{
  zone: "Aranda de Duero",
  name: "Asador Tudanca",
  budget: "medio",
  icon: "🔥",
  type: "Asador de ruta / lechazo",
  tags: ["carne", "familiar", "rapido"],
  note: "Muy práctico si queréis comer bien sin entrar mucho en el centro de Aranda. Buena opción de carretera para lechazo y comida castellana.",
  maps: "https://www.google.com/maps/search/?api=1&query=Asador+Tudanca+Aranda+de+Duero"
},
{
  zone: "Aranda de Duero",
  name: "Centro de Aranda",
  budget: "economico",
  icon: "🍷",
  type: "Tapas / Ribera del Duero",
  tags: ["rapido", "pintxos", "terraza", "economico"],
  note: "Alternativa flexible: parar, pasear y tomar tapas o raciones sin hacer comida larga. Buena si vais justos de tiempo.",
  maps: "https://www.google.com/maps/search/?api=1&query=tapas+centro+Aranda+de+Duero"
},
{
  zone: "San Sebastián / Hondarribia",
  name: "Bar Néstor",
  budget: "medio",
  icon: "🥩",
  type: "Pintxos / tortilla / txuleta",
  tags: ["pintxos", "carne", "imprescindible"],
  note: "Uno de los sitios más famosos de Donostia. Muy conocido por tortilla y txuleta. Pequeño y suele llenarse rápido.",
  maps: "https://www.google.com/maps/search/?api=1&query=Bar+Nestor+San+Sebastian"
},
{
  zone: "San Sebastián / Hondarribia",
  name: "Ganbara",
  budget: "medio",
  icon: "🍢",
  type: "Pintxos clásicos",
  tags: ["pintxos", "imprescindible"],
  note: "Muy famoso por sus pintxos y setas. Buena experiencia auténtica de Parte Vieja.",
  maps: "https://www.google.com/maps/search/?api=1&query=Ganbara+San+Sebastian"
},
{
  zone: "San Sebastián / Hondarribia",
  name: "La Viña",
  budget: "medio",
  icon: "🍰",
  type: "Tarta de queso / pintxos",
  tags: ["dulce", "imprescindible", "familiar"],
  note: "Parada obligatoria para probar la famosa tarta de queso vasca.",
  maps: "https://www.google.com/maps/search/?api=1&query=La+Vi%C3%B1a+San+Sebastian"
},
{
  zone: "San Sebastián / Hondarribia",
  name: "Bodega Donostiarra",
  budget: "economico",
  icon: "🍢",
  type: "Pintxos rápidos",
  tags: ["rapido", "pintxos", "economico"],
  note: "Muy buena relación calidad-precio y menos presión turística que otras zonas.",
  maps: "https://www.google.com/maps/search/?api=1&query=Bodega+Donostiarra+San+Sebastian"
},
{
  zone: "San Sebastián / Hondarribia",
  name: "Bar Sport",
  budget: "economico",
  icon: "🍤",
  type: "Pintxos / rápido",
  tags: ["rapido", "pintxos", "economico"],
  note: "Muy cómodo para ir probando pintxos sin comida formal.",
  maps: "https://www.google.com/maps/search/?api=1&query=Bar+Sport+San+Sebastian"
},
{
  zone: "San Sebastián / Hondarribia",
  name: "Narru",
  budget: "premium",
  icon: "👑",
  type: "Cocina vasca moderna",
  tags: ["premium", "familiar", "imprescindible"],
  note: "Restaurante elegante y más tranquilo que la Parte Vieja. Muy buena opción premium familiar.",
  maps: "https://www.google.com/maps/search/?api=1&query=Narru+San+Sebastian"
},
{
  zone: "San Sebastián / Hondarribia",
  name: "Casa Urola",
  budget: "premium",
  icon: "🐟",
  type: "Pescado / cocina vasca",
  tags: ["premium", "marinero", "imprescindible"],
  note: "Muy conocido por pescado y producto vasco. Recomendable reservar.",
  maps: "https://www.google.com/maps/search/?api=1&query=Casa+Urola+San+Sebastian"
},
{
  zone: "San Sebastián / Hondarribia",
  name: "Hondarribia Marina",
  budget: "medio",
  icon: "⚓",
  type: "Cena familiar",
  tags: ["familiar", "terraza", "vistas", "marinero"],
  note: "Toda la zona de la Marina es perfecta para cenar relajados entre casas de colores y ambiente marinero.",
  maps: "https://www.google.com/maps/search/?api=1&query=Barrio+Marina+Hondarribia"
},
{
  zone: "San Sebastián / Hondarribia",
  name: "Kaiela",
  budget: "medio",
  icon: "🌊",
  type: "Terraza / familiar",
  tags: ["familiar", "terraza", "vistas", "marinero"],
  note: "Muy buena opción en Hondarribia para comer o cenar cómodos cerca del puerto.",
  maps: "https://www.google.com/maps/search/?api=1&query=Kaiela+Hondarribia"
},
{
  zone: "San Sebastián / Hondarribia",
  name: "Helados Arnoldo",
  budget: "economico",
  icon: "🍦",
  type: "Heladería clásica",
  tags: ["dulce", "rapido", "familiar", "economico"],
  note: "Heladería histórica muy famosa en San Sebastián.",
  maps: "https://www.google.com/maps/search/?api=1&query=Heladeria+Arnoldo+San+Sebastian"
},
{
  zone: "San Sebastián / Hondarribia",
  name: "Garbera Restauración",
  budget: "familiar",
  icon: "🛍️",
  type: "Plan rápido / lluvia",
  tags: ["familiar", "rapido", "lluvia"],
  note: "Perfecto si llueve o alguien quiere descanso, compras y comida fácil sin complicarse.",
  maps: "https://www.google.com/maps/search/?api=1&query=Centro+Comercial+Garbera"
},
{
  zone: "Zumaia / Getaria / Zarautz",
  name: "Elkano",
  budget: "premium",
  icon: "👑",
  type: "Pescado a la parrilla / experiencia top",
  tags: ["premium", "marinero", "imprescindible"],
  note: "Uno de los grandes templos del pescado a la parrilla en Getaria. Experiencia premium: imprescindible reservar y asumir presupuesto alto.",
  maps: "https://www.google.com/maps/search/?api=1&query=Restaurante+Elkano+Getaria"
},
{
  zone: "Zumaia / Getaria / Zarautz",
  name: "Kaia-Kaipe",
  budget: "premium",
  icon: "🐟",
  type: "Pescado / marisco / parrilla",
  tags: ["premium", "marinero", "vistas"],
  note: "Restaurante junto al puerto de Getaria, con producto local y de temporada, parrilla, marisco fresco y gran bodega. Muy buena opción si queréis comida especial.",
  maps: "https://www.google.com/maps/search/?api=1&query=Kaia+Kaipe+Getaria"
},
{
  zone: "Zumaia / Getaria / Zarautz",
  name: "Karlos Arguiñano",
  budget: "medio",
  icon: "🍽️",
  type: "Restaurante familiar / vistas playa",
  tags: ["familiar", "vistas", "playa"],
  note: "Hotel-restaurante en Zarautz, junto a la playa. Cocina vasca con producto local y ambiente familiar. Buena opción si queréis comer cómodos con vistas.",
  maps: "https://www.google.com/maps/search/?api=1&query=Karlos+Argui%C3%B1ano+Zarautz"
},
{
  zone: "Zumaia / Getaria / Zarautz",
  name: "Bar / pintxos Karlos Arguiñano",
  budget: "medio",
  icon: "🍢",
  type: "Pintxos / rápido con vistas",
  tags: ["rapido", "pintxos", "vistas", "playa"],
  note: "Buena opción si no queréis comida larga. Suele haber pintxos, raciones y zona dulce de Joseba Arguiñano.",
  maps: "https://www.google.com/maps/search/?api=1&query=Bar+Karlos+Argui%C3%B1ano+Zarautz"
},
{
  zone: "Zumaia / Getaria / Zarautz",
  name: "Kirkilla Enea",
  budget: "medio",
  icon: "🥘",
  type: "Cocina vasca / menú",
  tags: ["familiar"],
  note: "Restaurante en Zarautz con cocina vasca. Buena alternativa si queréis sentaros sin ir a pescado premium de Getaria.",
  maps: "https://www.google.com/maps/search/?api=1&query=Kirkilla+Enea+Zarautz"
},
{
  zone: "Zumaia / Getaria / Zarautz",
  name: "Astillero Getaria",
  budget: "medio",
  icon: "⚓",
  type: "Puerto / pescado / familiar",
  tags: ["familiar", "marinero", "vistas"],
  note: "Restaurante en el puerto de Getaria. Buena opción para comer pescado en zona marinera sin ir directamente a las opciones más premium.",
  maps: "https://www.google.com/maps/search/?api=1&query=Restaurante+Astillero+Getaria"
},
{
  zone: "Zumaia / Getaria / Zarautz",
  name: "Idoia Ardotegia",
  budget: "medio",
  icon: "🍷",
  type: "Zumaia / cocina local",
  tags: ["familiar", "rapido"],
  note: "Opción interesante en Zumaia para comer después del flysch sin desplazarse aún a Getaria.",
  maps: "https://www.google.com/maps/search/?api=1&query=Idoia+Ardotegia+Zumaia"
},
{
  zone: "Zumaia / Getaria / Zarautz",
  name: "Amama Taberna",
  budget: "economico",
  icon: "🍢",
  type: "Taberna / informal",
  tags: ["rapido", "economico", "pintxos"],
  note: "Opción informal en Zumaia para comer algo más rápido y flexible después del paseo por la zona del flysch.",
  maps: "https://www.google.com/maps/search/?api=1&query=Amama+Taberna+Zumaia"
},
{
  zone: "Zumaia / Getaria / Zarautz",
  name: "Playa de Zarautz · opción rápida",
  budget: "economico",
  icon: "🏖️",
  type: "Rápido / familiar / playa",
  tags: ["rapido", "familiar", "playa", "economico"],
  note: "Si el día se alarga, lo más práctico puede ser comer o merendar por el paseo de Zarautz: hamburguesas, raciones, helados o menú sencillo.",
  maps: "https://www.google.com/maps/search/?api=1&query=comer+paseo+maritimo+Zarautz"
},
{
  zone: "Zumaia / Getaria / Zarautz",
  name: "Sidrería Izeta",
  budget: "medio",
  icon: "🍏",
  type: "Sidrería / familiar",
  tags: ["familiar", "carne", "terraza"],
  note: "Opción familiar entre Zarautz y Aia, conocida por sidra, parrilla y ambiente amplio. Puede ser buena alternativa si queréis salir del circuito playa.",
  maps: "https://www.google.com/maps/search/?api=1&query=Sidreria+Izeta+Zarautz+Aia"
},
{
  zone: "Bilbao",
  name: "Mercado de la Ribera",
  budget: "medio",
  icon: "🧺",
  type: "Mercado gastronómico / familiar",
  tags: ["familiar", "rapido", "lluvia", "imprescindible"],
  note: "La mejor opción flexible para grupos. Mucha variedad, ambiente y posibilidad de que cada uno coma algo distinto.",
  maps: "https://www.google.com/maps/search/?api=1&query=Mercado+de+la+Ribera+Bilbao"
},
{
  zone: "Bilbao",
  name: "Plaza Nueva Pintxos",
  budget: "economico",
  icon: "🍢",
  type: "Pintxos / informal",
  tags: ["pintxos", "rapido", "economico", "imprescindible"],
  note: "Zona clásica de pintxos en Bilbao. Perfecta para ir probando varios bares sin comida larga.",
  maps: "https://www.google.com/maps/search/?api=1&query=Plaza+Nueva+Bilbao"
},
{
  zone: "Bilbao",
  name: "Café Iruña",
  budget: "medio",
  icon: "☕",
  type: "Histórico / familiar",
  tags: ["familiar", "dulce", "imprescindible", "lluvia"],
  note: "Uno de los cafés más famosos de Bilbao. Muy bonito interior y buena parada para descansar del centro.",
  maps: "https://www.google.com/maps/search/?api=1&query=Cafe+Iru%C3%B1a+Bilbao"
},
{
  zone: "Bilbao",
  name: "La Viña del Ensanche",
  budget: "medio",
  icon: "🍷",
  type: "Cocina vasca / pintxos",
  tags: ["familiar", "pintxos", "imprescindible"],
  note: "Muy buena mezcla entre restaurante cómodo y barra de pintxos. Muy recomendable para familias.",
  maps: "https://www.google.com/maps/search/?api=1&query=La+Vi%C3%B1a+del+Ensanche+Bilbao"
},
{
  zone: "Bilbao",
  name: "Gure Toki",
  budget: "medio",
  icon: "🍤",
  type: "Pintxos modernos",
  tags: ["pintxos", "imprescindible"],
  note: "Uno de los bares más conocidos de Plaza Nueva para pintxos más elaborados.",
  maps: "https://www.google.com/maps/search/?api=1&query=Gure+Toki+Bilbao"
},
{
  zone: "Bilbao",
  name: "Sorginzulo",
  budget: "economico",
  icon: "🍢",
  type: "Pintxos / rápido",
  tags: ["rapido", "pintxos", "economico"],
  note: "Muy práctico para comer informalmente en Casco Viejo sin gastar demasiado.",
  maps: "https://www.google.com/maps/search/?api=1&query=Sorginzulo+Bilbao"
},
{
  zone: "Bilbao",
  name: "Nura Bilbao",
  budget: "medio",
  icon: "🍔",
  type: "Hamburguesas / familiar",
  tags: ["familiar", "rapido"],
  note: "Muy buena opción moderna para familias o si alguien quiere salir del típico pintxo vasco.",
  maps: "https://www.google.com/maps/search/?api=1&query=Nura+Bilbao"
},
{
  zone: "Bilbao",
  name: "Bascook",
  budget: "premium",
  icon: "👑",
  type: "Cocina moderna vasca",
  tags: ["premium", "imprescindible"],
  note: "Restaurante más gastronómico y elegante. Muy recomendable si queréis una comida premium en Bilbao.",
  maps: "https://www.google.com/maps/search/?api=1&query=Bascook+Bilbao"
},
{
  zone: "Bilbao",
  name: "Nerua Guggenheim",
  budget: "premium",
  icon: "⭐",
  type: "Alta cocina",
  tags: ["premium"],
  note: "Experiencia Michelin dentro del Guggenheim. Solo recomendable si buscáis experiencia gastronómica top y reserva previa.",
  maps: "https://www.google.com/maps/search/?api=1&query=Nerua+Guggenheim+Bilbao"
},
{
  zone: "Bilbao",
  name: "Dock",
  budget: "familiar",
  icon: "🛍️",
  type: "Rápido / terraza",
  tags: ["familiar", "rapido", "terraza", "vistas"],
  note: "Muy útil cerca de la ría para comer algo cómodo, descansar o parar durante el paseo.",
  maps: "https://www.google.com/maps/search/?api=1&query=Dock+Bilbao"
},
{
  zone: "Bilbao",
  name: "Pastelería Don Manuel",
  budget: "economico",
  icon: "🍰",
  type: "Dulces / postres",
  tags: ["dulce", "economico", "rapido"],
  note: "Pastelería clásica bilbaína. Buena parada para café y dulce.",
  maps: "https://www.google.com/maps/search/?api=1&query=Pasteleria+Don+Manuel+Bilbao"
},
{
  zone: "Bilbao",
  name: "Helados junto a la ría",
  budget: "economico",
  icon: "🍦",
  type: "Helados / paseo",
  tags: ["dulce", "vistas", "rapido", "economico"],
  note: "Muy buena opción para descansar después del Guggenheim o compras.",
  maps: "https://www.google.com/maps/search/?api=1&query=heladeria+ria+Bilbao"
},
{
  zone: "Bermeo / Mundaka",
  name: "Kai Alde",
  budget: "medio",
  icon: "🐟",
  type: "Marinero / pescado",
  tags: ["marinero", "familiar", "imprescindible"],
  note: "Muy buena opción en Bermeo para comer pescado fresco y cocina vasca tradicional cerca del puerto.",
  maps: "https://www.google.com/maps/search/?api=1&query=Kai+Alde+Bermeo"
},
{
  zone: "Bermeo / Mundaka",
  name: "Cannon Etxea",
  budget: "medio",
  icon: "⚓",
  type: "Puerto / familiar",
  tags: ["familiar", "marinero", "vistas"],
  note: "Muy cómodo para familias después de Gaztelugatxe. Buena relación calidad-precio y ambiente marinero.",
  maps: "https://www.google.com/maps/search/?api=1&query=Cannon+Etxea+Bermeo"
},
{
  zone: "Bermeo / Mundaka",
  name: "Artza",
  budget: "economico",
  icon: "🍢",
  type: "Pintxos / rápido",
  tags: ["rapido", "pintxos", "economico"],
  note: "Perfecto si queréis comer informalmente sin perder demasiado tiempo.",
  maps: "https://www.google.com/maps/search/?api=1&query=Artza+Bermeo"
},
{
  zone: "Bermeo / Mundaka",
  name: "Izaro Irish Pub",
  budget: "economico",
  icon: "🍔",
  type: "Hamburguesas / informal",
  tags: ["familiar", "rapido", "terraza", "economico"],
  note: "Muy práctico para familias, adolescentes o comida rápida con terraza.",
  maps: "https://www.google.com/maps/search/?api=1&query=Izaro+Irish+Pub+Bermeo"
},
{
  zone: "Bermeo / Mundaka",
  name: "Asador Cannon",
  budget: "premium",
  icon: "🔥",
  type: "Brasa / pescado",
  tags: ["premium", "marinero", "carne"],
  note: "Muy buena opción si queréis comida marinera más seria tras Gaztelugatxe.",
  maps: "https://www.google.com/maps/search/?api=1&query=Asador+Cannon+Bermeo"
},
{
  zone: "Bermeo / Mundaka",
  name: "Mundaka Hostel & Sports Café",
  budget: "economico",
  icon: "🏄",
  type: "Surf / casual",
  tags: ["rapido", "familiar", "terraza", "economico"],
  note: "Muy buen ambiente surfero en Mundaka. Perfecto para café, hamburguesas o cena informal.",
  maps: "https://www.google.com/maps/search/?api=1&query=Mundaka+Hostel+Sports+Cafe"
},
{
  zone: "Bermeo / Mundaka",
  name: "La Leñera",
  budget: "medio",
  icon: "🥩",
  type: "Brasa / familiar",
  tags: ["familiar", "carne"],
  note: "Muy buena alternativa si alguien prefiere carne o comida más contundente.",
  maps: "https://www.google.com/maps/search/?api=1&query=La+Le%C3%B1era+Bermeo"
},
{
  zone: "Bermeo / Mundaka",
  name: "Restaurante Portuondo",
  budget: "medio",
  icon: "🌅",
  type: "Vistas / tradicional",
  tags: ["vistas", "terraza", "familiar", "marinero"],
  note: "Muy conocido por sus vistas sobre Urdaibai. Buena parada tranquila.",
  maps: "https://www.google.com/maps/search/?api=1&query=Restaurante+Portuondo+Mundaka"
},
{
  zone: "Bermeo / Mundaka",
  name: "Bar Atxetak",
  budget: "economico",
  icon: "🍺",
  type: "Pintxos / terraza",
  tags: ["pintxos", "terraza", "rapido", "economico"],
  note: "Muy cómodo para cerveza, rabas o pintxos rápidos mirando el puerto.",
  maps: "https://www.google.com/maps/search/?api=1&query=Bar+Atxetak+Bermeo"
},
{
  zone: "Bermeo / Mundaka",
  name: "Heladerías puerto Bermeo",
  budget: "economico",
  icon: "🍦",
  type: "Helados / paseo",
  tags: ["dulce", "rapido", "familiar", "economico"],
  note: "Perfecto después de comer o tras la subida de Gaztelugatxe.",
  maps: "https://www.google.com/maps/search/?api=1&query=heladeria+puerto+Bermeo"
},
{
  zone: "Bermeo / Mundaka",
  name: "Cafés Mundaka",
  budget: "economico",
  icon: "☕",
  type: "Café / relax",
  tags: ["dulce", "vistas", "terraza", "economico"],
  note: "Muy buen final de tarde mirando el mar y el ambiente surfero.",
  maps: "https://www.google.com/maps/search/?api=1&query=cafeteria+Mundaka"
},
{
  zone: "Bermeo / Mundaka",
  name: "Terrazas puerto Bermeo",
  budget: "economico",
  icon: "🌊",
  type: "Terraza / vistas",
  tags: ["terraza", "vistas", "marinero", "imprescindible"],
  note: "Uno de los mejores sitios del viaje para sentarse sin prisa y disfrutar ambiente marinero real.",
  maps: "https://www.google.com/maps/search/?api=1&query=terraza+puerto+Bermeo"
},
{
  zone: "Turégano / Segovia",
  name: "Mesón de Cándido",
  budget: "premium",
  icon: "🐷",
  type: "Cochinillo / histórico",
  tags: ["premium", "carne", "imprescindible"],
  note: "Uno de los restaurantes más famosos de Segovia para probar cochinillo castellano tradicional.",
  maps: "https://www.google.com/maps/search/?api=1&query=Meson+de+Candido+Segovia"
},
{
  zone: "Turégano / Segovia",
  name: "José María",
  budget: "premium",
  icon: "🍖",
  type: "Asador castellano",
  tags: ["premium", "carne", "imprescindible"],
  note: "Muy conocido en Segovia. Excelente carne y cocina castellana cuidada.",
  maps: "https://www.google.com/maps/search/?api=1&query=Restaurante+Jose+Maria+Segovia"
},
{
  zone: "Turégano / Segovia",
  name: "Asador Maribel",
  budget: "medio",
  icon: "🔥",
  type: "Asador / familiar",
  tags: ["familiar", "carne"],
  note: "Muy buena relación calidad-precio para comida castellana.",
  maps: "https://www.google.com/maps/search/?api=1&query=Asador+Maribel+Segovia"
},
{
  zone: "Turégano / Segovia",
  name: "El Bernardino",
  budget: "medio",
  icon: "🍷",
  type: "Tradicional castellano",
  tags: ["familiar", "carne"],
  note: "Muy cómodo para comida tranquila sin ir al máximo presupuesto.",
  maps: "https://www.google.com/maps/search/?api=1&query=El+Bernardino+Segovia"
},
{
  zone: "Turégano / Segovia",
  name: "Casa Zaca",
  budget: "economico",
  icon: "🍽️",
  type: "Menú / tradicional",
  tags: ["familiar", "rapido", "economico"],
  note: "Muy buena opción económica para familias y comida rápida de ruta.",
  maps: "https://www.google.com/maps/search/?api=1&query=Casa+Zaca+Segovia"
},
{
  zone: "Turégano / Segovia",
  name: "Burguer Piscis",
  budget: "economico",
  icon: "🍔",
  type: "Hamburguesas / informal",
  tags: ["rapido", "familiar", "economico"],
  note: "Perfecto si alguien quiere comida rápida o cena relajada.",
  maps: "https://www.google.com/maps/search/?api=1&query=Burguer+Piscis+Segovia"
},
{
  zone: "Turégano / Segovia",
  name: "Cafeterías Acueducto",
  budget: "economico",
  icon: "☕",
  type: "Café / descanso",
  tags: ["dulce", "rapido", "economico", "vistas"],
  note: "Muy buena zona para parar antes del último tramo hacia Turégano.",
  maps: "https://www.google.com/maps/search/?api=1&query=cafeteria+Acueducto+Segovia"
},
{
  zone: "Turégano / Segovia",
  name: "Pastelería Limon y Menta",
  budget: "economico",
  icon: "🍰",
  type: "Pastelería",
  tags: ["dulce", "imprescindible", "economico"],
  note: "Muy buena parada dulce para probar ponche segoviano.",
  maps: "https://www.google.com/maps/search/?api=1&query=Limon+y+Menta+Segovia"
},
{
  zone: "Turégano / Segovia",
  name: "Heladerías Segovia centro",
  budget: "economico",
  icon: "🍦",
  type: "Helados / paseo",
  tags: ["dulce", "rapido", "economico"],
  note: "Perfecto para paseo tranquilo por la zona del Acueducto.",
  maps: "https://www.google.com/maps/search/?api=1&query=heladeria+Segovia+centro"
},
{
  zone: "Turégano / Segovia",
  name: "Restaurante La Antigua Posada",
  budget: "medio",
  icon: "🏰",
  type: "Castellano / rural",
  tags: ["familiar", "carne", "terraza"],
  note: "Muy buena opción tranquila cerca de Turégano para la última noche.",
  maps: "https://www.google.com/maps/search/?api=1&query=Restaurante+La+Antigua+Posada+Turegano"
},
{
  zone: "Turégano / Segovia",
  name: "Mesón Villa de Turégano",
  budget: "medio",
  icon: "🍷",
  type: "Mesón castellano",
  tags: ["familiar", "carne", "terraza"],
  note: "Cena relajada y ambiente de pueblo castellano para cerrar el viaje.",
  maps: "https://www.google.com/maps/search/?api=1&query=Meson+Villa+de+Turegano"
},
{
  zone: "Turégano / Segovia",
  name: "Terrazas Plaza Mayor Turégano",
  budget: "economico",
  icon: "🌙",
  type: "Terraza / noche tranquila",
  tags: ["terraza", "familiar", "economico"],
  note: "Muy buen cierre final del viaje sin complicarse demasiado.",
  maps: "https://www.google.com/maps/search/?api=1&query=Plaza+Mayor+Turegano"
}
],

  bookings: [
    {
      id: "gaztelugatxe",
      icon: "🏰",
      title: "San Juan de Gaztelugatxe",
      day: "Día 7",
      type: "Visita",
      status: "pendiente",
      cost: "Gratis",
      priority: "alta",
      note: "Comprobar calendario oficial y reservar ticket gratuito si el día requiere acceso controlado.",
      maps: "https://www.google.com/maps/search/?api=1&query=San+Juan+de+Gaztelugatxe"
    },
    {
      id: "guggenheim",
      icon: "🏙️",
      title: "Museo Guggenheim Bilbao",
      day: "Día 6",
      type: "Entrada opcional",
      status: "pendiente",
      cost: "Consultar tarifa",
      priority: "media",
      note: "Revisar horarios y comprar entradas si decidís visitar el interior.",
      maps: "https://www.google.com/maps/search/?api=1&query=Guggenheim+Bilbao"
    },
    {
      id: "monte-igueldo",
      icon: "🎡",
      title: "Monte Igueldo",
      day: "Día 4",
      type: "Plan panorámico",
      status: "pendiente",
      cost: "Consultar",
      priority: "media",
      note: "Muy recomendable si el día está despejado. Ideal para foto familiar sobre La Concha.",
      maps: "https://www.google.com/maps/search/?api=1&query=Monte+Igueldo+San+Sebastian"
    },
    {
      id: "comida-getaria",
      icon: "🐟",
      title: "Comida en Getaria",
      day: "Día 5",
      type: "Restaurante",
      status: "pendiente",
      cost: "€€ / €€€",
      priority: "alta",
      note: "Reservar si queréis comer pescado a la brasa sin esperar demasiado.",
      maps: "https://www.google.com/maps/search/?api=1&query=restaurante+pescado+Getaria"
    },
    {
      id: "cena-burgos",
      icon: "🍢",
      title: "Cena en Burgos",
      day: "Día 2",
      type: "Restaurante",
      status: "pendiente",
      cost: "€ / €€",
      priority: "media",
      note: "Mejor algo céntrico, cómodo y sin desplazar el coche tras llegar.",
      maps: "https://www.google.com/maps/search/?api=1&query=cenar+centro+Burgos"
    },
    {
      id: "comida-bilbao",
      icon: "🧺",
      title: "Comida en Bilbao",
      day: "Día 6",
      type: "Restaurante / mercado",
      status: "pendiente",
      cost: "€ / €€",
      priority: "media",
      note: "Plaza Nueva o Mercado de la Ribera son buenas opciones para grupo.",
      maps: "https://www.google.com/maps/search/?api=1&query=Plaza+Nueva+Bilbao+comer"
    }
  ],

  documents: [
    {
      id: "doc-burgos",
      icon: "🏨",
      title: "Reserva Burgos",
      type: "Reserva Burgos",
      note: "Edificio Aptos Turísticos Burgos · 2 Agosto · 328,05€",
      link: "https://www.google.com/maps/search/?api=1&query=7+Calle+Hospital+de+los+Ciegos+09003+Burgos"
    },
    {
      id: "doc-donamaria",
      icon: "🏡",
      title: "Reserva Donamaría",
      type: "Reserva Donamaría",
      note: "Casa Rural Donamariako Benta · 3–8 Agosto · Check-in 17:00–22:00",
      link: "https://www.google.com/maps/search/?api=1&query=Casa+Rural+Donamariako+Benta+Donamaria"
    },
    {
      id: "doc-turegano",
      icon: "🏰",
      title: "Reserva Turégano",
      type: "Reserva Turégano",
      note: "Posada el Zaguán · 8 Agosto · Última noche del viaje",
      link: "https://www.google.com/maps/search/?api=1&query=Posada+el+Zaguan+Turegano"
    },
    {
      id: "doc-dni",
      icon: "🪪",
      title: "Documentación",
      type: "DNI / documentación",
      note: "Comprobar DNI, tarjetas sanitarias y documentación importante antes de salir.",
      link: ""
    },
    {
      id: "doc-gazte",
      icon: "🎟️",
      title: "Gaztelugatxe",
      type: "Entrada / actividad",
      note: "Revisar si necesita ticket gratuito según fecha y aforo.",
      link: "https://www.google.com/maps/search/?api=1&query=San+Juan+de+Gaztelugatxe"
    },
    {
      id: "doc-mareas",
      icon: "🌊",
      title: "Consultar mareas Zumaia",
      type: "Enlace útil",
      note: "Muy recomendable para disfrutar el flysch correctamente.",
      link: "https://www.google.com/search?q=mareas+zumaia"
    }
  ],

  checklist: [
    {
      id: "c1",
      family: "General",
      text: "Revisar documentación reservas",
      done: false
    },
    {
      id: "c2",
      family: "General",
      text: "Preparar cargadores y batería externa",
      done: false
    },
    {
      id: "c3",
      family: "Familia Pulido - Cubero",
      text: "Bañadores y toallas",
      done: false
    },
    {
      id: "c4",
      family: "Familia Mesa - Muñoz",
      text: "Botiquín del viaje",
      done: false
    }
  ],
  
  dayPlans: [
  {
    dayId: "day2",
    blocks: [
      { id: "p2-1", moment: "Mañana", icon: "🚗", text: "Salida tranquila desde Doña Mencía.", done: false },
      { id: "p2-2", moment: "Comida", icon: "🥩", text: "Parada flexible por Aranda de Duero o ruta.", done: false },
      { id: "p2-3", moment: "Tarde", icon: "🏨", text: "Llegada a Burgos y check-in.", done: false },
      { id: "p2-4", moment: "Noche", icon: "🍢", text: "Paseo por Catedral y cena de tapas.", done: false }
    ]
  },
  {
    dayId: "day3",
    blocks: [
      { id: "p3-1", moment: "Mañana", icon: "☕", text: "Desayuno en Burgos sin prisas.", done: false },
      { id: "p3-2", moment: "Ruta", icon: "🚐", text: "Camino hacia Donamaría.", done: false },
      { id: "p3-3", moment: "Tarde", icon: "🛒", text: "Compra inicial para la casa rural.", done: false },
      { id: "p3-4", moment: "Noche", icon: "🏡", text: "Cena sencilla y organización.", done: false }
    ]
  },
  {
    dayId: "day4",
    blocks: [
      { id: "p4-1", moment: "Mañana", icon: "🌊", text: "San Sebastián: La Concha, puerto y Parte Vieja.", done: false },
      { id: "p4-2", moment: "Comida", icon: "🍢", text: "Pintxos o comida cómoda según ritmo.", done: false },
      { id: "p4-3", moment: "Tarde", icon: "🏘️", text: "Hondarribia: casco histórico y barrio de la Marina.", done: false },
      { id: "p4-4", moment: "Libre", icon: "🎡", text: "Monte Igueldo solo si apetece y el tiempo acompaña.", done: false }
    ]
  },
  {
    dayId: "day5",
    blocks: [
      { id: "p5-1", moment: "Mañana", icon: "🐚", text: "Zumaia y flysch, revisando mareas.", done: false },
      { id: "p5-2", moment: "Comida", icon: "🐟", text: "Getaria: pescado o menú familiar.", done: false },
      { id: "p5-3", moment: "Tarde", icon: "🏖️", text: "Zarautz: playa, paseo o helado.", done: false },
      { id: "p5-4", moment: "Libre", icon: "🌅", text: "Volver antes si el día se alarga.", done: false }
    ]
  },
  {
    dayId: "day6",
    blocks: [
      { id: "p6-1", moment: "Mañana", icon: "🏙️", text: "Bilbao: Guggenheim exterior/interior opcional.", done: false },
      { id: "p6-2", moment: "Comida", icon: "🧺", text: "Plaza Nueva o Mercado de la Ribera.", done: false },
      { id: "p6-3", moment: "Tarde", icon: "🏛️", text: "Casco Viejo y paseo junto a la ría.", done: false },
      { id: "p6-4", moment: "Plan lluvia", icon: "🌧️", text: "Día perfecto para mover aquí si llueve en costa.", done: false }
    ]
  },
  {
    dayId: "day7",
    blocks: [
      { id: "p7-1", moment: "Mañana", icon: "🏰", text: "Gaztelugatxe si el tiempo acompaña.", done: false },
      { id: "p7-2", moment: "Comida", icon: "⚓", text: "Bermeo: comida marinera o raciones.", done: false },
      { id: "p7-3", moment: "Tarde", icon: "🌊", text: "Mundaka: miradores y ambiente surfero.", done: false },
      { id: "p7-4", moment: "Libre", icon: "💧", text: "Recortar plan si la subida cansa.", done: false }
    ]
  },
  {
    dayId: "day8",
    blocks: [
      { id: "p8-1", moment: "Mañana", icon: "🏡", text: "Check-out y salida tranquila.", done: false },
      { id: "p8-2", moment: "Ruta", icon: "🚐", text: "Camino hacia Turégano con parada flexible.", done: false },
      { id: "p8-3", moment: "Tarde", icon: "🏰", text: "Paseo por Turégano si hay ganas.", done: false },
      { id: "p8-4", moment: "Noche", icon: "💸", text: "Cena tranquila y revisión de gastos.", done: false }
    ]
  },
  {
    dayId: "day9",
    blocks: [
      { id: "p9-1", moment: "Mañana", icon: "☕", text: "Desayuno y salida.", done: false },
      { id: "p9-2", moment: "Ruta", icon: "🚗", text: "Paradas cortas durante el regreso.", done: false },
      { id: "p9-3", moment: "Tarde", icon: "🏁", text: "Llegada a casa.", done: false },
      { id: "p9-4", moment: "Cierre", icon: "📸", text: "Exportar gastos y elegir mejores fotos.", done: false }
    ]
  }
],

  initialChat: [
    {
      author: "App del viaje",
      text: "Bienvenidos al diario ilustrado del País Vasco. Aquí irán los avisos y mensajes del grupo.",
      me: false
    },
    {
      author: "App del viaje",
      text: "Familias del viaje: Pulido - Cubero y Mesa - Muñoz.",
      me: false
    },
    {
      author: "App del viaje",
      text: "Primer objetivo: tener todo organizado antes de salir de Doña Mencía.",
      me: false
    }
  ]
};