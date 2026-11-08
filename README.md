# SkyCast — Live Dynamic Weather Application

A weather application replicating the UI design and requirements with dynamic weather states, 3D animated cartoon avatars, priority metric intelligence, interactive multi-line forecast charts, and temperature unit switching.

---

## 🌟 Key Features Implemented

1. **Location Selection & Search**:
   - Live autocomplete city search (powered by Open-Meteo Geocoding API).
   - Quick-select city pills (`New York`, `London`, `Tokyo`, `Paris`, `Reykjavik`, `Miami`).
   - "Use Current Location" GPS crosshair button.
   - Built-in instant offline fallback dataset matching the reference design.

2. **Weather-Adaptive Dynamic Backgrounds**:
   - Changes automatically with current weather conditions:
     - **Overcast**: Moody, rolling dark storm clouds (matching reference UI).
     - **Rain**: Atmospheric overcast sky + falling rain particle canvas.
     - **Sunny / Clear**: Radiant blue sky with golden sunlight and floating sun shimmer motes.
     - **Thunderstorm**: Deep electric indigo storm with subtle ambient lightning flashes.
     - **Snow**: Serene winter snowscape with drifting snowflakes.
   - Smooth cross-fade image layer transitions.

3. **Dynamic 3D Cartoon Weather Character**:
   - Switches automatically based on weather:
     - **Rain / Drizzle**: 3D cartoon boy in bright yellow hooded raincoat with open yellow umbrella & boots.
     - **Sunny**: Cheerful 3D boy with sunglasses in summer sunlight.
     - **Storm / Gale**: Brave 3D boy in hooded storm windbreaker holding a glowing flashlight.
     - **Snow**: 3D boy with rosy cheeks, knit pom-pom beanie, puffy winter coat, scarf & snowball.
     - **Overcast**: Thoughtful 3D boy in cozy layered hoodie gazing upward.
   - Animated floating physics (`@keyframes floatCharacter`) with ambient color-matched glow.

4. **Weather Priority Engine (Top-Left Highlight Metric)**:
   - Evaluates the 6 weather parameters to highlight the one having the most direct impact:
     - **Level 1 — Storm / Thunderstorm**: Direct safety impact -> `STORM ALERT` | `Active`.
     - **Level 2 — Rain / Precipitation**: Daily impact -> `RAIN` | `75%`.
     - **Level 3 — Snow / Freezing Ice**: Freezing cold -> `SNOW / ICE` | `28°`.
     - **Level 4 — High Wind / Gale**: Wind speed -> `HIGH WIND` | `24 mi/h`.
     - **Level 5 — Extreme Heat / High UV**: Radiation -> `HIGH UV` | `Index 7+`.
     - **Level 6 — Fog / Low Visibility**: Driving hazard -> `VISIBILITY` | `3 mi`.
   - The corresponding parameter tile in the 6-parameter grid is highlighted with an accent border and soft glow (`.priority-highlight`).

5. **Dynamic Advice Message**:
   - Context-aware advice message beside the cartoon character:
     - Rain: *"Carry your Umbrella it might rain"*
     - Thunderstorm: *"Stay indoors! Lightning & storms active"*
     - Sunny: *"Wear sunglasses & stay hydrated!"*
     - Snow: *"Bundle up warm! Snow & ice outside"*
     - High Wind: *"Hold onto your hat! Strong wind gusts"*
     - Fog: *"Drive with care, dense fog present"*

6. **Celsius (°C) and Fahrenheit (°F) Switching**:
   - Glass pill toggle switch with smooth animated slider.
   - Converts:
     - Current temperature (`61°F` <-> `16°C`).
     - "Feels like" temperature (`57°F` <-> `14°C`).
     - Wind speed (`13 mi/h` <-> `21 km/h`).
     - Visibility (`7 mi` <-> `11 km`).
     - 5-Day high & low forecast temperatures.
   - Persists user choice in `localStorage`.

7. **5-Day Weather Forecast Dual-Line Interactive Chart**:
   - Interactive SVG chart matching the UI:
     - Upper curve: Amber high temperatures (`#F59E0B`).
     - Lower curve: Vibrant blue low temperatures (`#3B82F6`).
     - Glowing nodes and temperature values.
     - Clickable day columns (`Sun`, `Mon`, `Tue`, `Wed`, `Thur`).

---

## 🚀 How to Run the Application

You can open the application directly in any browser:

### Option A: Open directly in browser
Double-click or open the following file in Chrome, Edge, Firefox, or Safari:
```
C:\Users\devan\.gemini\antigravity\scratch\weather-app\index.html
```

### Option B: Run local HTTP server
Run the included Node.js server:
```powershell
cd C:\Users\devan\.gemini\antigravity\scratch\weather-app
node server.js
```
Then visit:
```
http://localhost:3000
```
