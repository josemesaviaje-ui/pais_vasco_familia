(() => {
  "use strict";

  const $ = (id) => document.getElementById(id);
  const money = (n) => `${Number(n || 0).toFixed(2).replace(".", ",")} €`;

  const LS_EXPENSES = "pv_trip_expenses_v1";
  const LS_CHAT = "pv_trip_chat_v1";
  const LS_BOOKINGS = "pv_trip_bookings_v1";
  const LS_DOCUMENTS = "pv_trip_documents_v1";
  const LS_PHOTOS = "pv_trip_photos_v1";
  const LS_WEATHER_MODE = "pv_trip_weather_mode_v1";
  const LS_CHECKLIST = "pv_trip_checklist_v1";
  const LS_DAY_PLANS = "pv_trip_day_plans_v1";
  const LS_FAVORITES = "pv_trip_favorites_v1";
  const LS_PENDING = "pv_trip_pending_v1";
  const EXPENSE_PIN = "2026";
  let expensesUnlocked = false;
  
  const API_BASE = "http://127.0.0.1:3050";

let lastServerUpdatedAt = null;
let socket = null;

async function apiGetState() {
  const res = await fetch(`${API_BASE}/api/state?t=${Date.now()}`);
  return res.json();
}

async function apiPostItem(type, item) {
  const res = await fetch(`${API_BASE}/api/item/${type}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(item)
  });

  return res.json();
}

async function apiPutList(type, items) {
  const res = await fetch(`${API_BASE}/api/list/${type}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ items })
  });

  return res.json();
}

async function syncFullState() {
  await apiPutList("expenses", state.expenses);
  await apiPutList("bookings", state.bookings);
  await apiPutList("documents", state.documents);
  await apiPutList("checklist", state.checklist);
  await apiPutList("dayPlans", state.dayPlans);
  await apiPutList("favorites", state.favorites);
  await apiPutList("pending", state.pending);

  await liveSyncPull();
}

async function apiUploadPhotos(formData) {
  const res = await fetch(`${API_BASE}/api/photos`, {
    method: "POST",
    body: formData
  });

  return res.json();
}

async function apiDeletePhoto(id) {
  const res = await fetch(`${API_BASE}/api/photos/${id}`, {
    method: "DELETE"
  });

  return res.json();
}

function applyRemoteState(remote) {

  if (!remote) return;

  state.chat = Array.isArray(remote.chat)
    ? remote.chat
    : [];

  state.photos = Array.isArray(remote.photos)
    ? remote.photos
    : [];

  state.expenses = Array.isArray(remote.expenses)
    ? remote.expenses
    : [];

  state.bookings = Array.isArray(remote.bookings)
    ? remote.bookings
    : [];

  state.documents = Array.isArray(remote.documents)
    ? remote.documents
    : [];

  state.checklist = Array.isArray(remote.checklist)
    ? remote.checklist
    : [];

  state.dayPlans = Array.isArray(remote.dayPlans)
    ? remote.dayPlans
    : [];

  state.favorites = Array.isArray(remote.favorites)
    ? remote.favorites
    : [];

  state.pending = Array.isArray(remote.pending)
    ? remote.pending
    : [];

  saveChat();
  savePhotos();
  saveExpenses();
  saveBookings();
  saveDocuments();
  saveChecklist();
  saveDayPlans();
  saveFavorites();
  savePending();

  renderChat();
  renderPhotos();
  renderExpenses();
  renderBookings();
  renderDocuments();
  renderChecklist();
  renderTopFavorites();
  renderPending();

  if ($("dayDetail")) {
    renderDayDetail();
  }

  try {
    renderHome();
  } catch {}

  try {
    renderRoutes();
  } catch {}

  try {
    renderFood();
  } catch {}

  console.log("✅ Estado remoto actualizado");
}

async function liveSyncPull() {
  try {
    const data = await apiGetState();

    if (!data.ok || !data.state) return;

    if (
      data.state.updatedAt &&
      data.state.updatedAt === lastServerUpdatedAt
    ) {
      return;
    }

    lastServerUpdatedAt = data.state.updatedAt;

    applyRemoteState(data.state);
  } catch (err) {
    console.warn("Live sync offline:", err.message);
  }
}

function startRealtimeSocket() {

  try {

    socket = io(API_BASE, {
      transports: ["websocket", "polling"]
    });

    socket.on("connect", () => {
      console.log("Realtime conectado");
    });

    socket.on("disconnect", () => {
      console.warn("Realtime desconectado");
    });

    socket.on("state:update", (remoteState) => {

      if (!remoteState) return;

      if (
        remoteState.updatedAt &&
        remoteState.updatedAt === lastServerUpdatedAt
      ) {
        return;
      }

      lastServerUpdatedAt = remoteState.updatedAt;

      applyRemoteState(remoteState);

      console.log("Estado sincronizado realtime");
    });

  } catch (err) {

    console.warn(
      "Realtime no disponible:",
      err.message
    );
  }
}

function startLiveSync() {

  liveSyncPull();

  setInterval(async () => {

    try {
      await liveSyncPull();
    } catch (err) {
      console.warn("Live sync offline");
    }

  }, 5000);
}


  const FAMILY_A = TRIP_DATA.meta.families[0];
  const FAMILY_B = TRIP_DATA.meta.families[1];

  function loadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;

    const parsed = JSON.parse(raw);
    return parsed ?? fallback;
  } catch (err) {
    console.warn("Dato local corrupto, limpiando:", key);
    localStorage.removeItem(key);
    return fallback;
  }
}

  function safeArray(value) {
  return Array.isArray(value) ? value : [];
}
  
  const state = {
  activeDay: 0,
  foodPrice: "all",
  foodTag: "all",

  expenses: loadJSON(LS_EXPENSES, []),
  chat: loadJSON(LS_CHAT, TRIP_DATA.initialChat || []),
  bookings: loadJSON(LS_BOOKINGS, TRIP_DATA.bookings || []),
  documents: loadJSON(LS_DOCUMENTS, TRIP_DATA.documents || []),
  photos: loadJSON(LS_PHOTOS, []),

  weatherMode: localStorage.getItem(LS_WEATHER_MODE) || "sun",

  checklist: loadJSON(LS_CHECKLIST, TRIP_DATA.checklist || []),
  dayPlans: loadJSON(LS_DAY_PLANS, TRIP_DATA.dayPlans || []),
  favorites: loadJSON(LS_FAVORITES, []),
  pending: loadJSON(LS_PENDING, [])
};

  function saveExpenses() {
    localStorage.setItem(LS_EXPENSES, JSON.stringify(state.expenses));
  }

  function saveChat() {
    localStorage.setItem(LS_CHAT, JSON.stringify(state.chat));
  }
  
  function saveBookings() {
  localStorage.setItem(LS_BOOKINGS, JSON.stringify(state.bookings));
  }
  
  function saveDocuments() {
  localStorage.setItem(LS_DOCUMENTS, JSON.stringify(state.documents));
  }
  
  function savePhotos() {
  localStorage.setItem(LS_PHOTOS, JSON.stringify(state.photos));
  }
  
  function saveChecklist() {
  localStorage.setItem(LS_CHECKLIST, JSON.stringify(state.checklist));
}

  function saveFavorites() {
  localStorage.setItem(
    LS_FAVORITES,
    JSON.stringify(state.favorites)
  );
}

  function savePending() {
  localStorage.setItem(LS_PENDING, JSON.stringify(state.pending));
}

  function saveDayPlans() {
  localStorage.setItem(
    LS_DAY_PLANS,
    JSON.stringify(state.dayPlans)
  );
}

  function setView(view) {
    document.querySelectorAll(".view").forEach((el) => {
      el.classList.toggle("active", el.id === `view-${view}`);
    });

    document.querySelectorAll(".bottom-nav button").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.view === view);
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderCountdown() {
    const target = new Date(`${TRIP_DATA.meta.startDate}T06:30:00`);
    const now = new Date();
    const diff = target - now;

    if (diff <= 0) {
      $("countdown").textContent = "¡Viaje en marcha!";
      return;
    }

    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);

    $("countdown").textContent = `${days} días · ${hours} h`;
  }
  
  function getTripStatus() {
  const today = new Date();
  const start = new Date(`${TRIP_DATA.meta.startDate}T00:00:00`);
  const end = new Date(`${TRIP_DATA.meta.endDate}T23:59:59`);

  if (today < start) return "before";
  if (today > end) return "after";
  return "during";
}

  function getNextTripDay() {
  const today = new Date();
  const tripDays = TRIP_DATA.days.map((day) => {
    const dayNumber = Number(day.date.split(" ")[0]);
    const date = new Date(`2026-08-${String(dayNumber).padStart(2, "0")}T00:00:00`);

    return {
      ...day,
      realDate: date
    };
  });

  return tripDays.find((day) => day.realDate >= today) || tripDays[0];
}

function getWeatherLocation(day) {
  const locations = {
    day2: {
      name: "Burgos",
      lat: 42.3439,
      lon: -3.6969
    },
    day3: {
      name: "Donamaría",
      lat: 43.1167,
      lon: -1.6667
    },
    day4: {
      name: "San Sebastián",
      lat: 43.3183,
      lon: -1.9812
    },
    day5: {
      name: "Zumaia",
      lat: 43.2947,
      lon: -2.2534
    },
    day6: {
      name: "Bilbao",
      lat: 43.263,
      lon: -2.935
    },
    day7: {
      name: "Bermeo",
      lat: 43.4209,
      lon: -2.7215
    },
    day8: {
      name: "Turégano",
      lat: 41.1556,
      lon: -4.0067
    },
    day9: {
      name: "Doña Mencía",
      lat: 37.5535,
      lon: -4.356
    }
  };

  return locations[day.id] || locations.day2;
}

function weatherCodeIcon(code) {
  if ([0].includes(code)) return "☀️";
  if ([1, 2].includes(code)) return "🌤️";
  if ([3].includes(code)) return "☁️";
  if ([45, 48].includes(code)) return "🌫️";
  if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) return "🌧️";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "❄️";
  if ([95, 96, 99].includes(code)) return "⛈️";
  return "🌦️";
}

async function renderNextWeather() {
  const day = getNextTripDay();
  const loc = getWeatherLocation(day);

  const weatherIcon = $("nextWeatherIcon");
  const weatherPlace = $("nextWeatherPlace");
  const weatherText = $("nextWeatherText");
const nextStopIcon = $("nextStopIcon");
const nextStopText = $("nextStopText");
const nextStopMeta = $("nextStopMeta");

if (nextStopIcon) {
  nextStopIcon.textContent = day.icon || "📍";
}

if (nextStopText) {
  nextStopText.textContent = loc.name;
}

if (nextStopMeta) {
  nextStopMeta.textContent = `${day.date} · ${day.km} · ${day.drive}`;
}

  if (weatherPlace) {
    weatherPlace.textContent = `Tiempo ${loc.name}`;
  }

  try {
    const url =
      `https://api.open-meteo.com/v1/forecast` +
      `?latitude=${loc.lat}` +
      `&longitude=${loc.lon}` +
      `&current=temperature_2m,weather_code` +
      `&daily=temperature_2m_max,temperature_2m_min` +
      `&timezone=auto`;

    const res = await fetch(url);
    if (!res.ok) throw new Error("Weather API error");

    const data = await res.json();

    const temp = Math.round(data.current.temperature_2m);
    const code = data.current.weather_code;
    const max = Math.round(data.daily.temperature_2m_max[0]);
    const min = Math.round(data.daily.temperature_2m_min[0]);
    const icon = weatherCodeIcon(code);

    if (weatherIcon) weatherIcon.textContent = icon;
    if (weatherText) weatherText.textContent = `${temp}º · ${min}/${max}º`;
  } catch (err) {
    if (weatherIcon) weatherIcon.textContent = "🌦️";
    if (weatherText) weatherText.textContent = "Sin conexión";
  }
}

function renderSmartRecommendation() {
  const day = getNextTripDay();

  const icon = $("smartRecIcon");
  const title = $("smartRecTitle");
  const text = $("smartRecText");

  if (!day || !icon || !title || !text) return;
  
  const tripStatus = getTripStatus();

if (tripStatus === "before") {
  const weather =
    localStorage.getItem(LS_WEATHER_MODE) ||
    state.weatherMode ||
    "sun";

  const prepMessages = {
    sun: [
      "🧳",
      "Preparando el viaje",
      "Buen momento para revisar reservas, checklist y primera parada: Burgos."
    ],

    cloud: [
      "📋",
      "Organización tranquila",
      "Día ideal para repasar documentos, hoteles, rutas y pendientes."
    ],

    rain: [
      "☔",
      "Plan B preparado",
      "Aprovechad para revisar planes de lluvia, reservas y alternativas cubiertas."
    ],

    coast: [
      "🌊",
      "Costa en mente",
      "Dejad localizados Zumaia, Zarautz, Hondarribia y los planes de playa."
    ]
  };

  const rec = prepMessages[weather] || prepMessages.sun;

  icon.textContent = rec[0];
  title.textContent = rec[1];
  text.textContent = rec[2];

  return;
}

if (tripStatus === "after") {
  icon.textContent = "📸";
  title.textContent = "Viaje completado";
  text.textContent = "Buen momento para revisar fotos, cerrar gastos y guardar los mejores recuerdos.";
  return;
}

  const hour = new Date().getHours();
  const weather = localStorage.getItem(LS_WEATHER_MODE) || state.weatherMode || "sun";

  const base = {
    day2: {
      sun: ["🏰", "Burgos iluminado", "La Catedral de noche puede ser el primer gran momento del viaje."],
      cloud: ["☕", "Paseo tranquilo", "Burgos es perfecto para callejear sin calor y cenar de tapas."],
      rain: ["⛪", "Catedral + tapeo", "Plan cubierto sencillo para la primera noche sin cargar el día."],
      coast: ["🏰", "Primera parada", "Burgos será la entrada bonita al viaje familiar."]
    },

    day3: {
      sun: ["🏡", "Llegada rural", "Buen día para instalarse, comprar y disfrutar la casa sin prisas."],
      cloud: ["🛒", "Compra inteligente", "La prioridad es dejar la casa preparada para los días grandes."],
      rain: ["🏡", "Tarde de casa", "Plan perfecto para organizar habitaciones, compra y descanso."],
      coast: ["🎒", "Preparar mochila", "Dejad listo lo de costa: toallas, calzado, crema y chaqueta fina."]
    },

    day4: {
      sun: ["🌊", "La Concha temprano", "Paseo, playa, fotos y pintxos antes de Hondarribia."],
      cloud: ["🍢", "Parte Vieja", "Día cómodo para pintxos, paseo urbano y tarde en Hondarribia."],
      rain: ["🐠", "Aquarium + cafés", "Mejor plan cubierto para disfrutar Donostia sin mojarse demasiado."],
      coast: ["🌅", "Hondarribia al final", "Casas de colores, puerto y ambiente perfecto para cerrar el día."]
    },

    day5: {
      sun: ["🐚", "Flysch + playa", "Zumaia, Getaria y Zarautz pueden ser uno de los días estrella."],
      cloud: ["🐟", "Getaria sin prisa", "Pescado, puerto y paseo costero sin calor fuerte."],
      rain: ["☕", "Getaria + cafés", "Si llueve, mejor comida larga y paseo corto cuando abra el cielo."],
      coast: ["🌅", "Atardecer en Zarautz", "La luz de la tarde puede regalar una foto espectacular."]
    },

    day6: {
      sun: ["🏙️", "Bilbao completo", "Guggenheim, ría, Casco Viejo y compras con buen ritmo."],
      cloud: ["🎨", "Guggenheim ideal", "Día perfecto para ciudad, museo, cafés y pintxos."],
      rain: ["🌧️", "Bilbao es el comodín", "Si la costa sale fea, Bilbao encaja perfecto con lluvia."],
      coast: ["🌉", "Ría al atardecer", "Terminar junto al Guggenheim puede quedar precioso."]
    },

    day7: {
      sun: ["🏰", "Gaztelugatxe temprano", "Calzado cómodo, agua y ritmo tranquilo para disfrutarlo bien."],
      cloud: ["⚓", "Bermeo marinero", "Buen día para puerto, raciones y Mundaka sin calor excesivo."],
      rain: ["🐟", "Bermeo + Mundaka", "Si llueve, dejad Gaztelugatxe solo si mejora el tiempo."],
      coast: ["🌊", "Mundaka con vistas", "Final perfecto mirando al mar y ambiente surfero."]
    },

    day8: {
      sun: ["🏰", "Turégano tranquilo", "Día de transición: llegar, pasear y cerrar el viaje sin prisas."],
      cloud: ["🚐", "Ruta cómoda", "Buen día para conducir sin calor y llegar con calma."],
      rain: ["☕", "Posada y descanso", "Ruta directa, café y tarde tranquila en Turégano."],
      coast: ["📸", "Últimas fotos", "Buen momento para seleccionar recuerdos del viaje."]
    },

    day9: {
      sun: ["🏁", "Vuelta tranquila", "Paradas cortas, agua, café y llegada sin prisas."],
      cloud: ["🚗", "Ruta cómoda", "Buen día para volver sin calor fuerte ni planes extras."],
      rain: ["🌧️", "Vuelta directa", "Mejor evitar rodeos y priorizar seguridad en carretera."],
      coast: ["📸", "Cierre del álbum", "Al llegar, elegid la foto portada del viaje."]
    }
  };

  let mode = weather;
  if (!["sun", "cloud", "rain", "coast"].includes(mode)) {
    mode = "sun";
  }

  let rec = base[day.id]?.[mode] || base.day2.sun;

  if (hour >= 21 || hour <= 6) {
    rec = ["🌙", "Momento tranquilo", "Ideal para revisar fotos, preparar mochila y descansar."];
  }

  icon.textContent = rec[0];
  title.textContent = rec[1];
  text.textContent = rec[2];
}

function applyDynamicHero() {
  const hero = document.querySelector(".hero");
  const rain = $("heroRain");

  if (!hero) return;

  hero.classList.remove(
    "dynamic-sun",
    "dynamic-cloud",
    "dynamic-rain",
    "dynamic-coast",
    "dynamic-night"
  );

  if (rain) {
    rain.innerHTML = "";
  }

  const hour = new Date().getHours();

  if (hour >= 21 || hour <= 6) {
    hero.classList.add("dynamic-night");
    return;
  }

  const weather =
    localStorage.getItem("trip_weather_mode") ||
    state.weatherMode ||
    "sun";

  if (weather === "sun") {
    hero.classList.add("dynamic-sun");
  }

  if (weather === "cloud") {
    hero.classList.add("dynamic-cloud");
  }

  if (weather === "coast") {
    hero.classList.add("dynamic-coast");
  }

  if (weather === "rain") {
    hero.classList.add("dynamic-rain");

    if (rain) {
      for (let i = 0; i < 42; i++) {
        const drop = document.createElement("span");

        drop.style.left = Math.random() * 100 + "%";
        drop.style.animationDuration = (0.75 + Math.random() * 0.75) + "s";
        drop.style.animationDelay = Math.random() * 1.2 + "s";
        drop.style.opacity = 0.25 + Math.random() * 0.45;

        rain.appendChild(drop);
      }
    }
  }
}
  
  function renderHome() {
    const first = TRIP_DATA.days[0];
    $("nextPlanTitle").textContent = `${first.icon} ${first.title}`;
    $("nextPlanText").textContent = `${first.date} · ${first.km} · ${first.drive}`;
    $("totalKm").textContent = `~${TRIP_DATA.meta.estimatedKm.toLocaleString("es-ES")} km`;
    
    renderNextWeather();
    renderSmartRecommendation();
    applyDynamicHero();
  }

  function renderDaysTabs() {
    const box = $("daysTabs");
    box.innerHTML = "";

    TRIP_DATA.days.forEach((day, index) => {
      const btn = document.createElement("button");
      btn.className = `day-tab ${index === state.activeDay ? "active" : ""}`;
      btn.innerHTML = `${day.icon} ${day.day}`;
      btn.addEventListener("click", () => {
        state.activeDay = index;
        renderDaysTabs();
        renderDayDetail();
      });
      box.appendChild(btn);
    });
  }

function renderDayDetail() {
  const day = TRIP_DATA.days[state.activeDay];
  const box = $("dayDetail");

  const mustSee = safeArray(day.mustSee);
  const curiosities = safeArray(day.curiosities);
  const alerts = safeArray(day.alerts);
  const foodGuide = safeArray(day.foodGuide);
  const smartTips = safeArray(day.smartTips);

  box.innerHTML = `
    <div class="day-head">
      <div>
        <p class="day-date">${day.date}</p>
        <h3>${day.icon} ${day.title}</h3>
        <p>${day.mood}</p>
      </div>
      <div class="meta-line">
        <span class="pill">🚗 ${day.km}</span>
        <span class="pill">⏱️ ${day.drive}</span>
      </div>
    </div>

    <div class="day-grid">

      <article class="note-card" data-label="Plan del día">
        <h4>📌 Plan recomendado</h4>
        <ul>${day.plan.map((x) => `<li>${x}</li>`).join("")}</ul>
      </article>

      <article class="note-card" data-label="No perderse">
        <h4>⭐ Imprescindibles</h4>
        <div class="guide-highlight">
          ${mustSee.map((x, idx) => `
  <div class="mustsee-item">

    <div>
      <strong>${x.title}</strong>
      <p>${x.text}</p>
    </div>

    <button
      class="fav-btn"
      data-fav-title="${x.title}"
      data-fav-day="${day.day}"
    >
      ⭐
    </button>

  </div>
`).join("")}
        </div>
      </article>

      <article class="note-card" data-label="Curiosidades">
        <h4>✏️ Mini guía</h4>
        <ul>${curiosities.map((x) => `<li>${x}</li>`).join("")}</ul>
      </article>
      
      ${smartTips.length ? `
  <article class="note-card" data-label="Consejos PRO">
    <h4>🧠 Recomendaciones inteligentes</h4>
    <ul>${smartTips.map((x) => `<li>${x}</li>`).join("")}</ul>
  </article>
` : ""}

      <article class="note-card" data-label="Avisos útiles">
        <h4>🧠 Consejos y avisos</h4>
        <ul>${day.tips.map((x) => `<li>${x}</li>`).join("")}</ul>
        ${alerts.length ? `<ul>${alerts.map((x) => `<li>${x}</li>`).join("")}</ul>` : ""}
      </article>

      <article class="note-card" data-label="Ruta">
        <h4>🗺️ Ruta en coche</h4>
        <ul>${day.route.map((x) => `<li>${x}</li>`).join("")}</ul>
      </article>
      
${foodGuide.length ? `
  <article class="note-card" data-label="Comer aquí">
    <h4>🍴 Gastronomía y platos típicos</h4>
    <div class="guide-highlight">
      ${foodGuide.map((x) => `
        <div>
          <strong>${x.title}</strong>
          <p>${x.text}</p>
        </div>
      `).join("")}
    </div>
  </article>
` : ""}

      <article class="note-card" data-label="Plan B">
        <h4>☔ Plan lluvia</h4>
        <p>${day.rainPlan}</p>

        <a
          class="map-link"
          target="_blank"
          rel="noopener"
          href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(day.title)}"
        >
          Abrir en Maps
        </a>
      </article>
      
      ${renderMiniGuide("Compras y tiendas", "🛍️", day.shopping)}
      ${renderMiniGuide("Supermercados", "🛒", day.supermarkets)}
      ${renderMiniGuide("Farmacias", "💊", day.pharmacies)}
      ${renderMiniGuide("Parking útil", "🅿️", day.parkings)}
      ${renderMiniGuide("Cafés y descansos", "☕", day.coffee)}
      ${renderMiniGuide("Dulces y postres", "🍰", day.desserts)}
      ${renderMiniGuide("Planes con niños", "👨‍👩‍👧", day.kids)}
      ${renderMiniGuide("Atardeceres", "🌅", day.sunset)}

      ${renderFlexiblePlan(day)}

    </div>
  `;
}

function renderRoutes() {
  const box = $("routeList");

  box.innerHTML = TRIP_DATA.days.map((day, index) => `
    
    <article class="route-timeline-card" data-label="Ruta ${day.day}">

      <div class="timeline-left">
        <div class="timeline-dot">
          ${day.icon}
        </div>

        ${
          index !== TRIP_DATA.days.length - 1
            ? `<div class="timeline-line"></div>`
            : ""
        }
      </div>

      <div class="timeline-content">

        <div class="timeline-top">
          <div>
            <p class="timeline-day">${day.day}</p>
            <h3>${day.title}</h3>
          </div>

          <div class="timeline-km">
            🚗 ${day.km}
          </div>
        </div>

        <div class="meta-line">
          <span class="pill">📅 ${day.date}</span>
          <span class="pill">⏱️ ${day.drive}</span>
        </div>

        <div class="route-steps">
          ${day.route.map((step, i) => `
            <span>
              ${step}
              ${
                i !== day.route.length - 1
                  ? `<b>→</b>`
                  : ""
              }
            </span>
          `).join("")}
        </div>

        <p class="timeline-mood">
          ${day.mood}
        </p>

        <div class="timeline-actions">

          <a
            class="map-link"
            target="_blank"
            rel="noopener"
            href="https://www.google.com/maps/dir/${day.route.map(encodeURIComponent).join("/")}"
          >
            🗺️ Abrir ruta
          </a>

          <button
            class="timeline-open"
            data-open-day="${index}"
          >
            📓 Ver día
          </button>

        </div>

      </div>

    </article>

  `).join("");

  document.querySelectorAll("[data-open-day]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.activeDay = Number(btn.dataset.openDay);

      renderDaysTabs();
      renderDayDetail();

      setView("days");
    });
  });
}

  function renderHotels() {
    const box = $("hotelList");

    box.innerHTML = TRIP_DATA.hotels.map((hotel) => `
      <article class="info-card" data-label="Alojamiento">
        <h3>${hotel.icon} ${hotel.name}</h3>
        <div class="meta-line">
          <span class="pill">📅 ${hotel.date}</span>
          <span class="pill">📍 ${hotel.city}</span>
          <span class="pill">💰 ${money(hotel.cost)}</span>
          ${hotel.checkin ? `<span class="pill">🕔 Check-in ${hotel.checkin}</span>` : ""}
        </div>
        <p><strong>Dirección:</strong> ${hotel.address}</p>
        <p>${hotel.notes}</p>
        <a class="map-link" target="_blank" rel="noopener" href="${hotel.maps}">
          Abrir ubicación
        </a>
      </article>
    `).join("");
  }

function renderFood() {
  const box = $("foodList");
  if (!box) return;

  const priceLabel = {
    economico: "€ Económico",
    medio: "€€ Medio",
    premium: "€€€ Premium",
    familiar: "👨‍👩‍👧 Familiar"
  };

  const tagLabel = {
    familiar: "Familiar",
    rapido: "Rápido",
    pintxos: "Pintxos",
    dulce: "Dulce",
    terraza: "Terraza",
    vistas: "Vistas",
    imprescindible: "TOP",
    lluvia: "Lluvia",
    marinero: "Marinero",
    carne: "Carne",
    playa: "Playa",
    economico: "Económico",
    premium: "Premium"
  };

const list = TRIP_DATA.restaurants.filter((item) => {
  const tags = Array.isArray(item.tags) ? item.tags : [];

  const matchPrice =
    state.foodPrice === "all" || item.budget === state.foodPrice;

  const matchTag =
    state.foodTag === "all" || tags.includes(state.foodTag);

  return matchPrice && matchTag;
});

const summary = $("foodResultsSummary");

if (summary) {
  const priceText =
    state.foodPrice === "all"
      ? "Todos los precios"
      : priceLabel[state.foodPrice] || state.foodPrice;

  const tagText =
    state.foodTag === "all"
      ? "Todos los tipos"
      : tagLabel[state.foodTag] || state.foodTag;

  summary.textContent =
    `🍴 ${list.length} opciones · ${priceText} · ${tagText}`;
}

  if (!list.length) {
    box.innerHTML = `
      <article class="info-card" data-label="Comer">
        <h3>🍽️ Sin resultados</h3>
        <p>No hay restaurantes con esos filtros. Prueba otro precio o tipo de plan.</p>
      </article>
    `;
    return;
  }

  const grouped = list.reduce((acc, item) => {
    if (!acc[item.zone]) acc[item.zone] = [];
    acc[item.zone].push(item);
    return acc;
  }, {});

  box.innerHTML = Object.entries(grouped).map(([zone, items]) => `
    <section class="food-zone-block">
      <div class="food-zone-title">
        <span>📍</span>
        <div>
          <h3>${zone}</h3>
          <p>${items.length} opciones encontradas</p>
        </div>
      </div>

      <div class="food-zone-list">
        ${items.map((item) => {
          const tags = Array.isArray(item.tags) ? item.tags : [];
          const isTop = tags.includes("imprescindible");

          return `
            <article class="info-card food-card-pro ${isTop ? "food-top-card" : ""}" data-label="${priceLabel[item.budget] || item.budget}">
              ${isTop ? `<div class="food-top-ribbon">⭐ TOP</div>` : ""}

              <h3>${item.icon} ${item.name}</h3>

              <div class="meta-line">
                <span class="pill">🍴 ${item.type}</span>
                <span class="pill price-badge price-${item.budget}">💶 ${priceLabel[item.budget] || item.budget}</span>
              </div>

              ${
                tags.length
                  ? `
                    <div class="food-tags">
                      ${tags.map((tag) => `
                        <span>${tagLabel[tag] || tag}</span>
                      `).join("")}
                    </div>
                  `
                  : ""
              }

              <p>${item.note}</p>

              <a class="map-link" target="_blank" rel="noopener" href="${item.maps}">
                Ver en Maps
              </a>
            </article>
          `;
        }).join("")}
      </div>
    </section>
  `).join("");
}

function renderExpenses() {
  const box = $("expenseList");
  if (!box) return;

  const total = state.expenses.reduce(
    (sum, item) => sum + Number(item.amount || 0),
    0
  );

  const paidA = state.expenses
    .filter((item) => item.payer === FAMILY_A)
    .reduce((sum, item) => sum + Number(item.amount || 0), 0);

  const paidB = state.expenses
    .filter((item) => item.payer === FAMILY_B)
    .reduce((sum, item) => sum + Number(item.amount || 0), 0);

  const shouldPayEach = total / 2;
  const balanceA = paidA - shouldPayEach;
  const balanceB = paidB - shouldPayEach;

  const expenseTotal = $("expenseTotal");
  const expenseBalance = $("expenseBalance");
  const paidFamilyA = $("paidFamilyA");
  const paidFamilyB = $("paidFamilyB");

  if (expenseTotal) expenseTotal.textContent = money(total);
  if (paidFamilyA) paidFamilyA.textContent = money(paidA);
  if (paidFamilyB) paidFamilyB.textContent = money(paidB);

  if (expenseBalance) {
    if (!state.expenses.length) {
      expenseBalance.textContent = "Sin pagos todavía";
    } else if (balanceA > balanceB) {
      expenseBalance.textContent = `Bizum sugerido: ${FAMILY_B} → ${FAMILY_A} ${money(Math.abs(balanceB))}`;
    } else if (balanceB > balanceA) {
      expenseBalance.textContent = `Bizum sugerido: ${FAMILY_A} → ${FAMILY_B} ${money(Math.abs(balanceA))}`;
    } else {
      expenseBalance.textContent = "Todo equilibrado";
    }
  }

  if (!state.expenses.length) {
    box.innerHTML = `
      <article class="info-card" data-label="Caja">
        <h3>💳 Caja común sin pagos</h3>
        <p>Añadid aquí comidas, gasolina, compras o pagos compartidos de forma tranquila.</p>
      </article>
    `;
    return;
  }

  box.innerHTML = state.expenses.slice().reverse().map((item) => `
    <article class="info-card" data-label="Pago">
      <h3>💶 ${item.title}</h3>

      <div class="meta-line">
        <span class="pill">Pagó: ${item.payer}</span>
        <span class="pill">${money(item.amount)}</span>
        <span class="pill">Caja común</span>
      </div>

      <p>Pago registrado para equilibrar entre familias cuando apetezca.</p>
      <div class="booking-actions">

  <button
    data-expense-edit="${item.id}"
  >
    ✏️ Editar
  </button>

  <button
    data-expense-delete="${item.id}"
  >
    🗑️ Eliminar
  </button>

</div>
    </article>
  `).join("");
}

async function addExpense(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const data = new FormData(form);

  const item = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    title: data.get("title").trim(),
    amount: Number(data.get("amount")),
    payer: data.get("payer"),
    createdAt: new Date().toISOString()
  };

  state.expenses.push(item);

  saveExpenses();
  form.reset();
  renderExpenses();

  try {
    const result = await apiPostItem("expenses", item);

    if (result.ok && result.state) {
      applyRemoteState(result.state);
    }
  } catch (err) {
    console.warn("Gasto guardado solo local:", err.message);
  }
}

async function handleExpenseActions(e) {

  const editBtn = e.target.closest("[data-expense-edit]");
  const deleteBtn = e.target.closest("[data-expense-delete]");

  if (deleteBtn) {

    const id = deleteBtn.dataset.expenseDelete;

    const ok = confirm("¿Eliminar este gasto?");
    if (!ok) return;

    state.expenses = state.expenses.filter(
      (x) => x.id !== id
    );

    saveExpenses();
    renderExpenses();

    try {
      await syncFullState();
    } catch (err) {
      console.warn(err);
    }

    return;
  }

  if (editBtn) {

    const id = editBtn.dataset.expenseEdit;

    const item = state.expenses.find(
      (x) => x.id === id
    );

    if (!item) return;

    const title = prompt(
      "Concepto:",
      item.title
    );

    if (!title) return;

    const amount = prompt(
      "Importe:",
      item.amount
    );

    if (!amount) return;

    item.title = title.trim();
    item.amount = Number(amount);

    saveExpenses();
    renderExpenses();

    try {
      await syncFullState();
    } catch (err) {
      console.warn(err);
    }
  }
}

function renderBookings() {
  const box = $("bookingList");
  if (!box) return;

  const statusLabel = {
    pendiente: "Pendiente",
    reservado: "Reservado",
    confirmado: "Confirmado",
    cancelado: "Cancelado"
  };

  const priorityLabel = {
    alta: "Prioridad alta",
    media: "Prioridad media",
    baja: "Prioridad baja"
  };

  if (!state.bookings.length) {
    box.innerHTML = `
      <article class="info-card" data-label="Reservas">
        <h3>🎟️ Sin reservas activas</h3>
        <p>No hay reservas pendientes. Puedes añadirlas más adelante cuando conectemos el módulo PRO.</p>
      </article>
    `;
    return;
  }

  box.innerHTML = state.bookings.map((item) => `
    <article class="info-card booking-card" data-label="${item.day}">
      <h3>${item.icon} ${item.title}</h3>

      <div class="meta-line">
        <span class="pill">🎟️ ${item.type}</span>
        <span class="pill booking-status ${item.status}">📌 ${statusLabel[item.status] || item.status}</span>
        <span class="pill">💶 ${item.cost}</span>
        <span class="pill">⚠️ ${priorityLabel[item.priority] || item.priority}</span>
      </div>

      <p>${item.note}</p>

      <div class="booking-actions">
        <button data-booking-action="confirm" data-id="${item.id}">✅ Confirmar</button>
        <button data-booking-action="day" data-id="${item.id}">📅 Cambiar día</button>
        <button data-booking-action="cancel" data-id="${item.id}">❌ Anular</button>
        <button data-booking-action="delete" data-id="${item.id}">🗑️ Eliminar</button>
      </div>

      <a class="map-link" target="_blank" rel="noopener" href="${item.maps}">
        Abrir ubicación
      </a>
    </article>
  `).join("");
}

function renderDocuments() {
  const box = $("documentList");
  if (!box) return;

  if (!state.documents.length) {
    box.innerHTML = `
      <article class="info-card" data-label="Documentos">
        <h3>🪪 Sin documentos</h3>
        <p>Aquí aparecerán reservas, entradas, enlaces útiles y notas importantes.</p>
      </article>
    `;
    return;
  }

  const grouped = state.documents.reduce((acc, doc) => {
    const type = doc.type || "Otros";
    if (!acc[type]) acc[type] = [];
    acc[type].push(doc);
    return acc;
  }, {});

  box.innerHTML = Object.entries(grouped).map(([type, docs]) => `
    <section class="document-group">
      <div class="document-group-title">
        <span>📂</span>
        <div>
          <h3>${type}</h3>
          <p>${docs.length} documentos</p>
        </div>
      </div>

      <div class="document-group-list">
        ${docs.map((doc) => `
          <article class="info-card document-card-pro" data-label="${doc.type}">
            <div class="document-card-head">
              <span>${doc.icon || "📎"}</span>
              <div>
                <p>${doc.type}</p>
                <h3>${doc.title}</h3>
              </div>
            </div>

            <p>${doc.note || "Sin notas."}</p>

            <div class="booking-actions">
              ${
                doc.link
                  ? `
                    <a class="map-link" target="_blank" rel="noopener" href="${doc.link}">
                      Abrir enlace
                    </a>
                  `
                  : ""
              }

              <button data-doc-delete="${doc.id}">
                🗑️ Eliminar
              </button>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `).join("");
}

  function addDocument(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const data = new FormData(form);

  const title = data.get("title").trim();
  if (!title) return;

  const type = data.get("type");

  const icons = {
    "Reserva Burgos": "🏨",
    "Reserva Donamaría": "🏡",
    "Reserva Turégano": "🏰",
    "Entrada / actividad": "🎟️",
    "DNI / documentación": "🪪",
    "Enlace útil": "🔗",
    "Ticket / justificante": "🧾",
    "Nota importante": "📝",
    "Otro": "📎"
  };

  state.documents.unshift({
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    icon: icons[type] || "📎",
    title,
    type,
    note: data.get("note").trim(),
    link: data.get("link").trim()
  });

saveDocuments();
form.reset();
renderDocuments();

try {
  syncFullState();
} catch (err) {
  console.warn("Documento guardado solo local:", err.message);
}
}

  function handleDocumentDelete(e) {
  const btn = e.target.closest("[data-doc-delete]");
  if (!btn) return;

  const id = btn.dataset.docDelete;

  const ok = confirm("¿Eliminar este documento?");
  if (!ok) return;

  state.documents = state.documents.filter((doc) => doc.id !== id);

saveDocuments();
renderDocuments();

try {
  syncFullState();
} catch (err) {
  console.warn("Documento eliminado solo local:", err.message);
}
}

  

  function handleBookingAction(e) {
  const btn = e.target.closest("[data-booking-action]");
  if (!btn) return;

  const id = btn.dataset.id;
  const action = btn.dataset.bookingAction;

  const booking = state.bookings.find((item) => item.id === id);
  if (!booking) return;

  if (action === "confirm") {
    booking.status = "confirmado";
  }

  if (action === "cancel") {
    booking.status = "cancelado";
  }

  if (action === "day") {
    const newDay = prompt(
      "Nuevo día para esta reserva:",
      booking.day || "Día 4"
    );

    if (!newDay) return;
    booking.day = newDay.trim();
  }

  if (action === "delete") {
    const ok = confirm(`¿Eliminar "${booking.title}" de la lista?`);
    if (!ok) return;

    state.bookings = state.bookings.filter((item) => item.id !== id);
  }

  saveBookings();
  renderBookings();

try {
  syncFullState();
} catch (err) {
  console.warn("Reservas solo local:", err.message);
}
}

async function addBooking(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const data = new FormData(form);

  const title = data.get("title").trim();
  if (!title) return;

  const type = data.get("type");

  const defaultIcon = {
    Restaurante: "🍴",
    Visita: "📍",
    Entrada: "🎟️",
    Actividad: "🎒",
    Parking: "🅿️",
    Otro: "📌"
  };

  state.bookings.unshift({
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    icon: defaultIcon[type] || "📌",
    title,
    day: data.get("day"),
    type,
    status: "pendiente",
    cost: data.get("cost").trim() || "Consultar",
    priority: data.get("priority"),
    note: data.get("note").trim() || "Reserva añadida manualmente.",
    maps: data.get("maps").trim() || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(title)}`
  });

  saveBookings();
  form.reset();
  renderBookings();

  try {
    await syncFullState();
  } catch (err) {
    console.warn("Reserva guardada solo local:", err.message);
  }
}

function renderPhotos() {
  const box = $("photoGrid");

  if (!state.photos.length) {
    box.innerHTML = `
      <div class="empty-photos">
        📸 Todavía no hay recuerdos guardados del viaje
      </div>
    `;
    return;
  }

  box.innerHTML = state.photos.map((photo) => {
    let imageSrc = photo.image || photo.url || "";

    if (imageSrc.startsWith("/uploads")) {
      imageSrc = `${API_BASE}${imageSrc}`;
    }

    return `
      <article class="photo-card">

        <button
          class="photo-delete"
          data-photo-delete="${photo.id}"
        >
          ✕
        </button>

        <img src="${imageSrc}" alt="Foto viaje" />

        <div class="photo-day">
          ${photo.day}
        </div>

        <div class="photo-caption">
          ${photo.caption || "Recuerdo del viaje"}
        </div>

      </article>
    `;
  }).join("");
}

async function addPhotos(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const input = $("photoInput");
  const files = Array.from(input.files || []);

  if (!files.length) {
    alert("Selecciona al menos una foto.");
    return;
  }

  const formData = new FormData();
  formData.append("day", form.day.value);
  formData.append("caption", form.caption.value.trim());

  files.forEach((file) => {
    formData.append("photos", file);
  });

  try {
    const result = await apiUploadPhotos(formData);

    if (result.ok && result.state) {
      applyRemoteState(result.state);
      form.reset();
      return;
    }
  } catch (err) {
    console.warn("Servidor no disponible, guardando local:", err.message);
  }

  const day = form.day.value;
  const caption = form.caption.value.trim();

  for (const file of files) {
    const reader = new FileReader();

    await new Promise((resolve) => {
      reader.onload = () => {
        state.photos.unshift({
          id: crypto.randomUUID
            ? crypto.randomUUID()
            : String(Date.now() + Math.random()),

          day,
          caption,
          image: reader.result,
          createdAt: new Date().toISOString()
        });

        resolve();
      };

      reader.readAsDataURL(file);
    });
  }

  savePhotos();
  renderPhotos();
  form.reset();
}

async function handlePhotoDelete(e) {
  const btn = e.target.closest("[data-photo-delete]");
  if (!btn) return;

  const ok = confirm("¿Eliminar esta foto?");
  if (!ok) return;

  const id = btn.dataset.photoDelete;

  state.photos = state.photos.filter(
    (photo) => photo.id !== id
  );

  savePhotos();
  renderPhotos();

  try {
    const result = await apiDeletePhoto(id);

    if (result.ok && result.state) {
      applyRemoteState(result.state);
    }
  } catch (err) {
    console.warn("Foto eliminada solo local:", err.message);
  }
}

   function renderChecklist() {
  const box = $("checklistGroups");
  if (!box) return;

  const groups = [
    "General",
    "Familia Pulido - Cubero",
    "Familia Mesa - Muñoz"
  ];

  box.innerHTML = groups.map((group) => {
    const items = state.checklist.filter((item) => item.family === group);

    return `
      <article class="note-card checklist-card" data-label="${group}">
        <h4>🧳 ${group}</h4>

        <div class="checklist-items">
          ${
            !items.length
              ? `<p class="empty-checklist">Sin elementos todavía</p>`
              : items.map((item) => `
                <label class="checklist-item ${item.done ? "done" : ""}">
                  <input
                    type="checkbox"
                    data-check-id="${item.id}"
                    ${item.done ? "checked" : ""}
                  />

                  <span>${item.text}</span>

                  <button
                    type="button"
                    class="check-delete"
                    data-delete-check="${item.id}"
                  >
                    ✕
                  </button>
                </label>
              `).join("")
          }
        </div>
      </article>
    `;
  }).join("");
}

  function renderFlexiblePlan(day) {

  const data = state.dayPlans.find(
    (x) => x.dayId === day.id
  );

  if (!data || !data.blocks?.length) {
    return "";
  }

  return `
    <article class="note-card flexible-plan-card" data-label="Flexible">

      <h4>🧭 Plan flexible</h4>

      <div class="flex-plan-list">

        ${data.blocks.map((item) => `
          <div class="
            flex-plan-item
            ${item.done ? "done" : ""}
          ">

            <button
              class="flex-check"
              data-plan-check="${day.id}"
              data-id="${item.id}"
            >
              ${item.done ? "✅" : "⭕"}
            </button>

            <div class="flex-plan-content">
              <span class="flex-moment">
                ${item.icon} ${item.moment}
              </span>

              <p>${item.text}</p>
            </div>

            <button
              class="flex-delete"
              data-plan-delete="${day.id}"
              data-id="${item.id}"
            >
              ✕
            </button>

          </div>
        `).join("")}

      </div>

      <button
        class="add-flex-btn"
        data-add-plan="${day.id}"
      >
        ➕ Añadir plan libre
      </button>

    </article>
  `;
}

  function renderMiniGuide(title, icon, items = []) {
  items = safeArray(items);
if (!items.length) return "";

  return `
    <article class="note-card mini-guide-card" data-label="${title}">
      <h4>${icon} ${title}</h4>

      <div class="mini-guide-list">
        ${items.map((item) => `
          <a
            class="mini-guide-item"
            href="${item.maps}"
            target="_blank"
            rel="noopener"
          >
            <div>
              <strong>${item.name}</strong>

              ${item.area ? `<span>${item.area}</span>` : ""}
              ${item.type ? `<em>${item.type}</em>` : ""}

              <p>${item.note}</p>
            </div>

            <span class="mini-guide-arrow">↗</span>
          </a>
        `).join("")}
      </div>
    </article>
  `;
}

function addChecklistItem(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const family = form.family.value;
  const text = form.task.value.trim();

  if (!text) return;

  state.checklist.push({
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    family,
    text,
    done: false
  });

saveChecklist();
renderChecklist();
form.reset();

try {
  syncFullState();
} catch (err) {
  console.warn("Checklist solo local:", err.message);
}
}

async function handleChecklistActions(e) {
  const check = e.target.closest("[data-check-id]");

  if (check) {
    const item = state.checklist.find(
      (x) => x.id === check.dataset.checkId
    );

    if (!item) return;

    item.done = check.checked;

    saveChecklist();
    renderChecklist();

    try {
      await syncFullState();
    } catch (err) {
      console.warn("Checklist solo local:", err.message);
    }

    return;
  }

  const del = e.target.closest("[data-delete-check]");

  if (del) {
    const ok = confirm("¿Eliminar este elemento de la checklist?");
    if (!ok) return;

    state.checklist = state.checklist.filter(
      (x) => x.id !== del.dataset.deleteCheck
    );

    saveChecklist();
    renderChecklist();

    try {
      await syncFullState();
    } catch (err) {
      console.warn("Checklist solo local:", err.message);
    }
  }
}

  function handleFavorites(e) {
  const btn = e.target.closest(".fav-btn");
  if (!btn) return;

  const title = btn.dataset.favTitle;
  const day = btn.dataset.favDay;

  const exists = state.favorites.find(
    (x) => x.title === title
  );

  if (exists) {
    alert("⭐ Ya está guardado en favoritos");
    return;
  }

  state.favorites.unshift({
    id: crypto.randomUUID
      ? crypto.randomUUID()
      : String(Date.now()),

    title,
    day
  });

  saveFavorites();
  renderTopFavorites();

  btn.classList.add("saved");

  setTimeout(() => {
    btn.classList.remove("saved");
  }, 800);
}

async function handleFlexiblePlanActions(e) {
  const checkBtn = e.target.closest("[data-plan-check]");

  if (checkBtn) {
    const dayId = checkBtn.dataset.planCheck;
    const id = checkBtn.dataset.id;

    const day = state.dayPlans.find((x) => x.dayId === dayId);
    if (!day) return;

    const item = day.blocks.find((x) => x.id === id);
    if (!item) return;

    item.done = !item.done;

    saveDayPlans();
    renderDayDetail();

    try {
      await syncFullState();
    } catch (err) {
      console.warn("Plan flexible solo local:", err.message);
    }

    return;
  }

  const deleteBtn = e.target.closest("[data-plan-delete]");

  if (deleteBtn) {
    const dayId = deleteBtn.dataset.planDelete;
    const id = deleteBtn.dataset.id;

    const day = state.dayPlans.find((x) => x.dayId === dayId);
    if (!day) return;

    const ok = confirm("¿Eliminar este plan flexible?");
    if (!ok) return;

    day.blocks = day.blocks.filter((x) => x.id !== id);

    saveDayPlans();
    renderDayDetail();

    try {
      await syncFullState();
    } catch (err) {
      console.warn("Plan flexible solo local:", err.message);
    }

    return;
  }

  const addBtn = e.target.closest("[data-add-plan]");

  if (addBtn) {
    const dayId = addBtn.dataset.addPlan;

    const text = prompt("Nuevo plan flexible:");
    if (!text) return;

    const day = state.dayPlans.find((x) => x.dayId === dayId);
    if (!day) return;

    day.blocks.push({
      id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
      moment: "Libre",
      icon: "✨",
      text: text.trim(),
      done: false
    });

    saveDayPlans();
    renderDayDetail();

    try {
      await syncFullState();
    } catch (err) {
      console.warn("Plan flexible solo local:", err.message);
    }
  }
}

  function renderChat() {
  const box = $("chatBox");

  box.innerHTML = state.chat.map((msg) => `

    <div class="
      chat-message
      ${msg.me ? "me" : ""}
      ${msg.system ? "system" : ""}
    ">

      <strong>
        ${msg.system ? "📌 " : ""}
        ${msg.author}
      </strong>

      <p>${msg.text}</p>

    </div>

  `).join("");

  box.scrollTop = box.scrollHeight;
}

async function addChatMessage(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const data = new FormData(form);

  const text = data.get("message").trim();
  if (!text) return;

  const author = data.get("author");

  const msg = {
    id: crypto.randomUUID
      ? crypto.randomUUID()
      : String(Date.now()),

    author,
    text,

    me: author === "Familia Mesa - Muñoz",

    system: author === "Mensaje del viaje",

    createdAt: new Date().toISOString()
  };

  state.chat.push(msg);

  saveChat();

  form.reset();

  renderChat();

  try {
    const result = await apiPostItem("chat", msg);

    if (result.ok && result.state) {
      applyRemoteState(result.state);
    }
  } catch (err) {
    console.warn("Mensaje guardado solo local:", err.message);
  }
}

  function bindNavigation() {
    document.querySelectorAll(".bottom-nav button").forEach((btn) => {
      btn.addEventListener("click", () => setView(btn.dataset.view));
    });

    document.querySelectorAll("[data-go]").forEach((btn) => {
      btn.addEventListener("click", () => setView(btn.dataset.go));
    });
  }

function bindFoodFilter() {
  document.querySelectorAll("[data-food-price]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.foodPrice = btn.dataset.foodPrice;

      document.querySelectorAll("[data-food-price]").forEach((b) => {
        b.classList.toggle("active", b === btn);
      });

      renderFood();
    });
  });

  document.querySelectorAll("[data-food-tag]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.foodTag = btn.dataset.foodTag;

      document.querySelectorAll("[data-food-tag]").forEach((b) => {
        b.classList.toggle("active", b === btn);
      });

      renderFood();
    });
  });
}

  function setupInstall() {
    let deferredPrompt = null;
    const btn = $("installBtn");

    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      deferredPrompt = e;
      btn.style.display = "inline-flex";
    });

    btn.addEventListener("click", async () => {
      if (!deferredPrompt) {
        alert("Para instalar: menú del navegador → Añadir a pantalla de inicio.");
        return;
      }

      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      deferredPrompt = null;
    });
  }

  function registerServiceWorker() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("./service-worker.js").catch(() => {});
    }
  }

  function renderSmartWeather() {
  const title = $("smartWeatherTitle");
  const text = $("smartWeatherText");

  if (!title || !text) return;

  const messages = {
    sun: {
      title: "☀️ Día perfecto para exterior",
      text: "Prioriza costa, paseos, miradores, fotos y planes al aire libre."
    },
    cloud: {
      title: "☁️ Día cómodo para ruta mixta",
      text: "Buen momento para combinar paseo, comida larga, pueblos y visitas sin demasiado calor."
    },
    rain: {
      title: "🌧️ Activado Plan Lluvia",
      text: "Mejor planes interiores: Bilbao, Guggenheim, mercados, cafés, Aquarium o comidas más largas."
    },
    coast: {
      title: "🌊 Costa ideal",
      text: "Aprovecha Zumaia, Getaria, Zarautz, Hondarribia o Gaztelugatxe si el viento lo permite."
    }
  };

  const data = messages[state.weatherMode] || messages.sun;

  title.textContent = data.title;
  text.textContent = data.text;

  document.querySelectorAll("[data-weather]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.weather === state.weatherMode);
  });
}
function bindWeatherActions() {
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-weather]");
    if (!btn) return;

    state.weatherMode = btn.dataset.weather;

    localStorage.setItem(LS_WEATHER_MODE, state.weatherMode);
    localStorage.setItem("trip_weather_mode", state.weatherMode);

    renderSmartWeather();
    renderSmartRecommendation();
    applyDynamicHero();
  });
}

  function exportExpenses() {
  const total = state.expenses.reduce(
    (sum, item) => sum + Number(item.amount),
    0
  );

  const paidA = state.expenses
    .filter((item) => item.payer === FAMILY_A)
    .reduce((sum, item) => sum + Number(item.amount), 0);

  const paidB = state.expenses
    .filter((item) => item.payer === FAMILY_B)
    .reduce((sum, item) => sum + Number(item.amount), 0);

  const shouldPayEach = total / 2;
  const balanceA = paidA - shouldPayEach;
  const balanceB = paidB - shouldPayEach;

  let balanceText = "Todo cuadrado";

  if (balanceA > balanceB) {
    balanceText = `${FAMILY_B} debe ${money(Math.abs(balanceB))} a ${FAMILY_A}`;
  }

  if (balanceB > balanceA) {
    balanceText = `${FAMILY_A} debe ${money(Math.abs(balanceA))} a ${FAMILY_B}`;
  }

  const lines = [
    "PAÍS VASCO EN FAMILIA · RESUMEN DE GASTOS",
    "==========================================",
    "",
    `Fecha exportación: ${new Date().toLocaleString("es-ES")}`,
    "",
    `Total registrado: ${money(total)}`,
    `${FAMILY_A} ha pagado: ${money(paidA)}`,
    `${FAMILY_B} ha pagado: ${money(paidB)}`,
    "",
    `Balance: ${balanceText}`,
    "",
    "GASTOS",
    "------",
    ...state.expenses.map((item, index) => {
      return `${index + 1}. ${item.title} · ${money(item.amount)} · Pagó: ${item.payer}`;
    })
  ];

  const blob = new Blob([lines.join("\n")], {
    type: "text/plain;charset=utf-8"
  });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "gastos-pais-vasco.txt";
  a.click();

  URL.revokeObjectURL(url);
}

function activateRainPlan() {
  state.weatherMode = "rain";

  localStorage.setItem(LS_WEATHER_MODE, state.weatherMode);
  localStorage.setItem("trip_weather_mode", state.weatherMode);

  renderSmartWeather();
  renderSmartRecommendation();
  applyDynamicHero();

  setView("home");
}

  function syncNow() {
  const payload = {
    expenses: state.expenses.length,
    bookings: state.bookings.length,
    documents: state.documents.length,
    photos: state.photos.length,
    checklist: state.checklist.length,
    chat: state.chat.length,
    updatedAt: new Date().toISOString()
  };

  localStorage.setItem("pv_trip_last_sync_v1", JSON.stringify(payload));

  alert(
    "✅ Viaje guardado localmente\n\n" +
    `Gastos: ${payload.expenses}\n` +
    `Reservas: ${payload.bookings}\n` +
    `Documentos: ${payload.documents}\n` +
    `Fotos: ${payload.photos}\n` +
    `Checklist: ${payload.checklist}\n` +
    `Chat: ${payload.chat}\n\n` +
    "Más adelante esto sincronizará con el servidor familiar."
  );
}

function renderTopFavorites() {
  const box = $("topList");
  if (!box) return;

  if (!state.favorites.length) {
    box.innerHTML = `
      <article class="info-card top-empty-card" data-label="TOP">
        <h3>⭐ Sin favoritos todavía</h3>
        <p>Marca con ⭐ los sitios imprescindibles dentro de cada día y aparecerán aquí.</p>
      </article>
    `;
    return;
  }

  box.innerHTML = state.favorites.map((fav) => `
    <article class="info-card top-card-pro" data-label="${fav.day}">
      <div class="top-card-head">
        <span class="top-icon">⭐</span>

        <div>
          <p>${fav.day || "Viaje"}</p>
          <h3>${fav.title}</h3>
        </div>
      </div>

      <p>Guardado como sitio TOP del viaje familiar.</p>

      <div class="booking-actions">
        <a
          class="map-link"
          target="_blank"
          rel="noopener"
          href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fav.title)}"
        >
          Ver en Maps
        </a>

        <button data-delete-fav="${fav.id}">
          🗑️ Eliminar
        </button>
      </div>
    </article>
  `).join("");
}

function handleTopFavorites(e) {
  const btn = e.target.closest("[data-delete-fav]");
  if (!btn) return;

  state.favorites = state.favorites.filter((x) => x.id !== btn.dataset.deleteFav);
  saveFavorites();
  renderTopFavorites();
}

function renderPending() {
  const box = $("pendingList");
  if (!box) return;

  if (!state.pending.length) {
    box.innerHTML = `
      <article class="info-card pending-empty-card" data-label="Pendientes">
        <h3>📌 Sin pendientes</h3>
        <p>Añade aquí ideas flexibles: restaurantes, miradores, compras, planes alternativos o cosas por decidir.</p>
      </article>
    `;
    return;
  }

  const open = state.pending.filter((item) => !item.done);
  const done = state.pending.filter((item) => item.done);

  const renderGroup = (title, icon, items) => {
    if (!items.length) return "";

    return `
      <section class="pending-group">
        <div class="pending-group-title">
          <span>${icon}</span>
          <div>
            <h3>${title}</h3>
            <p>${items.length} elementos</p>
          </div>
        </div>

        <div class="pending-group-list">
          ${items.map((item) => `
            <article class="info-card pending-card-pro ${item.done ? "done" : ""}" data-label="${item.day}">
              <div class="pending-card-head">
                <span>${item.done ? "✅" : "📌"}</span>
                <div>
                  <p>${item.day} · ${item.type}</p>
                  <h3>${item.title}</h3>
                </div>
              </div>

              <p>${item.note || "Pendiente añadido para decidir durante el viaje."}</p>

              <div class="booking-actions">
                <button data-pending-done="${item.id}">
                  ${item.done ? "↩️ Reabrir" : "✅ Hecho"}
                </button>

                <button data-pending-fav="${item.id}">
                  ⭐ Pasar a TOP
                </button>

                <button data-pending-delete="${item.id}">
                  🗑️ Eliminar
                </button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `;
  };

  box.innerHTML = `
    ${renderGroup("Por decidir", "📌", open)}
    ${renderGroup("Hecho", "✅", done)}
  `;
}

async function addPending(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const data = new FormData(form);

  const title = data.get("title").trim();
  if (!title) return;

  state.pending.unshift({
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    title,
    day: data.get("day"),
    type: data.get("type"),
    note: data.get("note").trim(),
    done: false,
    createdAt: new Date().toISOString()
  });

  savePending();
  form.reset();
  renderPending();

  try {
    await syncFullState();
  } catch (err) {
    console.warn("Pendiente solo local:", err.message);
  }
}

async function handlePendingActions(e) {
  const doneBtn = e.target.closest("[data-pending-done]");
  const favBtn = e.target.closest("[data-pending-fav]");
  const deleteBtn = e.target.closest("[data-pending-delete]");

  if (doneBtn) {
    const item = state.pending.find(
      (x) => x.id === doneBtn.dataset.pendingDone
    );

    if (!item) return;

    item.done = !item.done;

    savePending();
    renderPending();

    try {
      await syncFullState();
    } catch (err) {
      console.warn("Pendientes solo local:", err.message);
    }

    return;
  }

  if (favBtn) {
    const item = state.pending.find(
      (x) => x.id === favBtn.dataset.pendingFav
    );

    if (!item) return;

    const exists = state.favorites.find(
      (x) => x.title === item.title
    );

    if (!exists) {
      state.favorites.unshift({
        id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
        title: item.title,
        day: item.day
      });

      saveFavorites();
      renderTopFavorites();
    }

    item.done = true;

    savePending();
    renderPending();

    try {
      await syncFullState();
    } catch (err) {
      console.warn("Pendientes solo local:", err.message);
    }

    return;
  }

  if (deleteBtn) {
    const ok = confirm("¿Eliminar este pendiente?");
    if (!ok) return;

    state.pending = state.pending.filter(
      (x) => x.id !== deleteBtn.dataset.pendingDelete
    );

    savePending();
    renderPending();

    try {
      await syncFullState();
    } catch (err) {
      console.warn("Pendientes solo local:", err.message);
    }
  }
}

  function unlockExpenses(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const pin = new FormData(form).get("pin");

  if (pin !== EXPENSE_PIN) {
    alert("PIN incorrecto");
    return;
  }

  expensesUnlocked = true;

  $("expenseLock").classList.add("hidden");
  $("expensePrivate").classList.remove("hidden");

  renderExpenses();
}

  function init() {
    renderCountdown();
    renderHome();
    renderDaysTabs();
    renderDayDetail();
    renderRoutes();
    renderHotels();
    renderFood();
    renderExpenses();
    renderBookings();
    renderDocuments();
    renderPhotos();
    renderChecklist();
    renderChat();
    renderSmartWeather();
    renderTopFavorites();
    renderPending();

    bindNavigation();
bindFoodFilter();
bindWeatherActions();

$("dayDetail").addEventListener(
  "click",
  handleFavorites
);

$("dayDetail").addEventListener(
  "click",
  handleFlexiblePlanActions
);

setupInstall();

    const expensePinForm = $("expensePinForm");
if (expensePinForm) {
  expensePinForm.addEventListener("submit", unlockExpenses);
}

const expenseForm = $("expenseForm");
if (expenseForm) {
  expenseForm.addEventListener("submit", addExpense);
}

const expenseList = $("expenseList");

if (expenseList) {
  expenseList.addEventListener(
    "click",
    handleExpenseActions
  );
}

    $("chatForm").addEventListener("submit", addChatMessage);
    
    const photoForm = $("photoForm");

if (photoForm) {
  photoForm.addEventListener("submit", addPhotos);
}

const photoGrid = $("photoGrid");

if (photoGrid) {
  photoGrid.addEventListener("click", handlePhotoDelete);
}
    
    const bookingList = $("bookingList");
if (bookingList) {
  bookingList.addEventListener("click", handleBookingAction);
}

  const bookingForm = $("bookingForm");
if (bookingForm) {
  bookingForm.addEventListener("submit", addBooking);
}

  const documentForm = $("documentForm");
if (documentForm) {
  documentForm.addEventListener("submit", addDocument);
}

  const documentList = $("documentList");
if (documentList) {
  documentList.addEventListener("click", handleDocumentDelete);
}

  const checklistForm = $("checklistForm");
if (checklistForm) {
  checklistForm.addEventListener("submit", addChecklistItem);
}

  const checklistGroups = $("checklistGroups");
if (checklistGroups) {
  checklistGroups.addEventListener("change", handleChecklistActions);
  checklistGroups.addEventListener("click", handleChecklistActions);
}

  const exportBtn = document.querySelector("[data-export-expenses]");
if (exportBtn) {
  exportBtn.addEventListener("click", exportExpenses);
}

  const rainBtn = document.querySelector("[data-rain-plan]");
if (rainBtn) {
  rainBtn.addEventListener("click", activateRainPlan);
}

  const syncBtn = document.querySelector("[data-sync-now]");
if (syncBtn) {
  syncBtn.addEventListener("click", syncNow);
}

  const topList = $("topList");
if (topList) {
  topList.addEventListener("click", handleTopFavorites);
}

  const pendingForm = $("pendingForm");
if (pendingForm) {
  pendingForm.addEventListener("submit", addPending);
}

const pendingList = $("pendingList");
if (pendingList) {
  pendingList.addEventListener("click", handlePendingActions);
}

registerServiceWorker();

startRealtimeSocket();

startLiveSync();

setInterval(renderCountdown, 60000);
  }

  document.addEventListener("DOMContentLoaded", init);
})();