# ESTADO BASE · PWA VIAJE PAÍS VASCO EN FAMILIA
Fecha estado: mayo 2026

## Proyecto
PWA privada para viaje familiar al País Vasco del 2 al 9 de agosto de 2026.

Familias:
- Familia Pulido - Cubero
- Familia Mesa - Muñoz

Ruta principal:
Doña Mencía → Burgos → Donamaría → San Sebastián / Hondarribia / Zumaia / Getaria / Zarautz / Bilbao / Gaztelugatxe / Bermeo / Mundaka → Turégano → Doña Mencía

## Carpeta proyecto
/storage/emulated/0/Download/PAIS_VASCO_PWA

## Archivos actuales
- index.html
- manifest.json
- service-worker.js
- css/app.css
- js/data.js
- js/app.js

## Estilo visual
Estilo premium tipo:
- cuaderno ilustrado
- comic elegante
- dibujo a lápiz
- scrapbook
- post-it
- chinchetas
- tarjetas tipo postal
- fondo papel
- tipografía manuscrita Caveat + Fraunces + Plus Jakarta Sans

## PWA
Ya existe:
- manifest.json
- service-worker.js
- cache versionado
- botón instalar
- navegación inferior
- funcionamiento offline básico

Recordatorio: cada cambio importante requiere subir versión:
const CACHE_NAME = "pais-vasco-pwa-vXX";

## Módulos funcionales actuales

### Inicio
- Dashboard compacto.
- Cuenta atrás.
- Kilómetros estimados.
- Coste alojamientos.
- Coste por familia.
- Próximo gran plan.
- Estado inteligente:
  - Sol
  - Nublado
  - Lluvia
  - Costa ideal

### Día a día
Cada día tiene:
- Plan recomendado
- Imprescindibles
- Curiosidades
- Consejos PRO / smartTips
- Avisos útiles
- Ruta
- Plan lluvia
- Gastronomía y platos típicos
- Servicios útiles clicables
- Plan flexible editable

Los servicios útiles abren búsquedas directas.

### Plan flexible
Nuevo sistema no rígido, pensado para vacaciones:
- Mañana
- Comida
- Tarde
- Noche
- Ruta
- Libre
- Plan lluvia

Permite:
- marcar hecho
- eliminar
- añadir plan libre

Storage:
LS_DAY_PLANS = "pv_trip_day_plans_v1"

### Ruta
Vista convertida a roadbook/timeline visual:
- etapas por día
- iconos
- kilómetros
- ruta visual
- botón abrir Google Maps
- botón ver día

### Alojamientos
Reservas ya incluidas:
1. Edificio Aptos Turísticos Burgos
   Dirección: 7 Calle Hospital de los Ciegos, 09003 Burgos
   Noche: 2 agosto
   Coste: 328,05€

2. Casa Rural Donamariako Benta
   Dirección: Barrio Ventas, 4, 31750 Donamaría
   Estancia: 3–8 agosto
   Check-in: 17:00–22:00
   Coste: 1750€

3. Posada el Zaguán
   Dirección: Plaza de España 16, 40370 Turégano
   Noche: 8 agosto
   Coste: 374€

Total alojamientos: 2452,05€
Por familia: 1226,03€

### Comer
Filtro por:
- Todo
- € Económico
- €€ Medio
- €€€ Premium

Restaurantes/recomendaciones actuales por zonas:
- Burgos
- Aranda de Duero
- San Sebastián / Hondarribia
- Zumaia / Getaria / Zarautz
- Bilbao
- Bermeo / Mundaka
- Turégano / Segovia

### Gastos
Sistema de gastos compartidos:
- añadir gasto
- pagador por familia
- total registrado
- saldo pendiente
- cálculo 50% cada familia
- exportación básica .txt

Storage:
LS_EXPENSES = "pv_trip_expenses_v1"

Función:
exportExpenses()

### Reservas y entradas
Módulo funcional:
- añadir reserva
- confirmar
- anular
- cambiar día
- eliminar
- abrir ubicación

Reservas base:
- Gaztelugatxe
- Guggenheim Bilbao
- Monte Igueldo
- Comida Getaria
- Cena Burgos
- Comida Bilbao

Storage:
LS_BOOKINGS = "pv_trip_bookings_v1"

### Documentos importantes
Módulo funcional:
- añadir documento
- eliminar documento
- abrir enlace

Tipos:
- Reserva Burgos
- Reserva Donamaría
- Reserva Turégano
- Entrada / actividad
- DNI / documentación
- Enlace útil
- Ticket / justificante
- Nota importante
- Otro

Storage:
LS_DOCUMENTS = "pv_trip_documents_v1"

### Fotos
Álbum real local:
- subir fotos reales
- día asociado
- descripción
- efecto polaroid
- eliminar foto

Storage:
LS_PHOTOS = "pv_trip_photos_v1"

Pendiente futuro:
- compresión de fotos
- subida servidor
- sincronización familiar

### Chat
Chat local:
- Familia Pulido - Cubero
- Familia Mesa - Muñoz
- Mensaje del viaje
- estilo burbuja comic

Storage:
LS_CHAT = "pv_trip_chat_v1"

Pendiente futuro:
- chat en tiempo real con servidor privado

### Checklist
Checklist por:
- General
- Familia Pulido - Cubero
- Familia Mesa - Muñoz

Permite:
- añadir
- marcar hecho
- eliminar

Storage:
LS_CHECKLIST = "pv_trip_checklist_v1"

### TOP del viaje
Favoritos funcionales:
- marcar imprescindibles con ⭐
- sección TOP del viaje
- eliminar favoritos

Storage:
LS_FAVORITES = "pv_trip_favorites_v1"

Pendiente:
- favoritos de restaurantes
- favoritos de fotos
- favoritos manuales

### Más opciones
Vista rediseñada como tarjetas premium:
- Reservas
- Documentos
- Checklist
- TOP viaje
- Plan lluvia
- Sincronizar
- Exportar

### Plan lluvia
Funcional:
- activa weatherMode = "rain"
- vuelve a Inicio
- muestra recomendación inteligente de lluvia

Storage:
LS_WEATHER_MODE = "pv_trip_weather_mode_v1"

### Sincronizar ahora
Funcional provisional:
- guarda resumen local
- muestra alert de estado
- todavía no sincroniza con backend

Storage:
pv_trip_last_sync_v1

## Robustez añadida
En app.js se añadió función segura:

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

Esto evita que localStorage corrupto rompa toda la app.

## Importante
No romper:
- navegación bottom-nav
- data-go
- views por id="view-..."
- renderDayDetail()
- renderRoutes()
- localStorage existente
- post-it globales finales del CSS

## Próximos módulos previstos

### 1. Pendientes del viaje
Sistema separado de favoritos:
- guardar pendientes
- marcar realizado
- mover a favoritos
- eliminar

Storage sugerido:
LS_PENDING = "pv_trip_pending_v1"

Vista:
view-pending

### 2. Backend / sincronización real
Servidor privado con:
- Node.js + Express
- SQLite
- API REST
- WebSocket o Socket.io
- sincronización entre móviles
- fotos compartidas
- chat real
- gastos compartidos
- reservas/documentos/checklist/favoritos/pendientes

### 3. Exportación PRO
Mejorar exportación:
- informe HTML/PDF
- resumen de gastos
- Bizum pendiente
- favoritos
- fotos top
- diario final del viaje

### 4. Clima real
Conectar API tiempo:
- Donamaría
- San Sebastián
- Bilbao
- Zarautz
- Bermeo
- Burgos
- Turégano

### 5. Mapa vivo
Mapa con:
- alojamientos
- rutas
- favoritos
- pendientes
- restaurantes
- servicios útiles

### 6. Modo viaje real
Cuando llegue agosto:
- detectar día actual
- destacar HOY
- sugerencias según día
- mostrar no olvidar
- recuerdos del día

## Instrucción de continuidad
Seguir siempre paso a paso.
Preferencia del usuario:
- archivos completos si hay riesgo de error
- evitar fragmentos confusos
- no romper lo existente
- mantener estética premium comic/cuaderno
- todo real y funcional
- nada de agenda encorsetada
- vacaciones flexibles