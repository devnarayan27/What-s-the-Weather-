/**
 * SkyCast Weather Application
 * Reference-Matched Simplified UI (Work Sans, Custom Message, Priority Highlight, Location Picker)
 */

// ==========================================================================
// Comprehensive Preset & Fallback Weather Data
// ==========================================================================

const CITY_DATABASE = {
  "New York": {
    name: "New York",
    country: "United States",
    condition: "Overcast",
    weatherCode: 3,
    tempF: 61,
    feelsLikeF: 57,
    windDirection: "ENE",
    windSpeedMph: 13,
    windSpeedKmh: 21,
    humidity: 82,
    rainProb: 75,
    visibilityMi: 7,
    visibilityMeters: 11265,
    pressureHpa: 1022,
    uvIndex: 2,
    airQualityText: "Air quality : 20 - Good",
    aqiStatus: "good",
    // 5-day forecast matching reference screenshot
    forecast: [
      { day: "Sun", highF: 63, lowF: 57, icon: "🌧️", condition: "Rain" },
      { day: "Mon", highF: 66, lowF: 55, icon: "⛅", condition: "Cloudy" },
      { day: "Tue", highF: 66, lowF: 54, icon: "☁️", condition: "Overcast" },
      { day: "Wed", highF: 66, lowF: 54, icon: "⛅", condition: "Partly Cloudy" },
      { day: "Thur", highF: 68, lowF: 54, icon: "☀️", condition: "Sunny" }
    ]
  },
  "Kolkata": {
    name: "Kolkata",
    country: "India",
    condition: "Rain",
    weatherCode: 61,
    tempF: 82,
    feelsLikeF: 88,
    windDirection: "ENE",
    windSpeedMph: 11,
    windSpeedKmh: 18,
    humidity: 84,
    rainProb: 75,
    visibilityMi: 6,
    visibilityMeters: 9000,
    pressureHpa: 1012,
    uvIndex: 3,
    airQualityText: "Air quality : 197 - Unhealthy",
    aqiStatus: "poor",
    forecast: [
      { day: "Sun", highF: 84, lowF: 75, icon: "🌧️", condition: "Rain" },
      { day: "Mon", highF: 86, lowF: 74, icon: "⛅", condition: "Cloudy" },
      { day: "Tue", highF: 85, lowF: 73, icon: "⛈️", condition: "Thunderstorm" },
      { day: "Wed", highF: 87, lowF: 75, icon: "⛅", condition: "Partly Cloudy" },
      { day: "Thur", highF: 89, lowF: 76, icon: "☀️", condition: "Sunny" }
    ]
  },
  "Delhi": {
    name: "Delhi",
    country: "India",
    condition: "Sunny",
    weatherCode: 0,
    tempF: 84,
    feelsLikeF: 82,
    windDirection: "NW",
    windSpeedMph: 8,
    windSpeedKmh: 13,
    humidity: 42,
    rainProb: 5,
    visibilityMi: 4,
    visibilityMeters: 6000,
    pressureHpa: 1015,
    uvIndex: 7,
    airQualityText: "Air quality : 180 - Unhealthy",
    aqiStatus: "poor",
    forecast: [
      { day: "Sun", highF: 86, lowF: 66, icon: "☀️", condition: "Sunny" },
      { day: "Mon", highF: 88, lowF: 68, icon: "☀️", condition: "Clear" },
      { day: "Tue", highF: 89, lowF: 69, icon: "🌤️", condition: "Hazy Sun" },
      { day: "Wed", highF: 87, lowF: 67, icon: "⛅", condition: "Partly Cloudy" },
      { day: "Thur", highF: 85, lowF: 65, icon: "🌤️", condition: "Mild" }
    ]
  },
  "Mumbai": {
    name: "Mumbai",
    country: "India",
    condition: "Tropical Coastal",
    weatherCode: 1,
    tempF: 88,
    feelsLikeF: 94,
    windDirection: "WSW",
    windSpeedMph: 14,
    windSpeedKmh: 23,
    humidity: 78,
    rainProb: 15,
    visibilityMi: 7,
    visibilityMeters: 11000,
    pressureHpa: 1011,
    uvIndex: 8,
    airQualityText: "Air quality : 95 - Moderate",
    aqiStatus: "moderate",
    forecast: [
      { day: "Sun", highF: 90, lowF: 79, icon: "☀️", condition: "Warm & Humid" },
      { day: "Mon", highF: 91, lowF: 80, icon: "🌤️", condition: "Sunny" },
      { day: "Tue", highF: 89, lowF: 78, icon: "⛅", condition: "Sea Breeze" },
      { day: "Wed", highF: 88, lowF: 77, icon: "⛅", condition: "Partly Cloudy" },
      { day: "Thur", highF: 90, lowF: 79, icon: "☀️", condition: "Sunny" }
    ]
  },
  "Bangaluru": {
    name: "Bangaluru",
    country: "India",
    condition: "Overcast",
    weatherCode: 3,
    tempF: 82,
    feelsLikeF: 82,
    windDirection: "ESE",
    windSpeedMph: 7,
    windSpeedKmh: 11,
    humidity: 45,
    rainProb: 43,
    visibilityMi: 8,
    visibilityMeters: 13000,
    pressureHpa: 913,
    uvIndex: 4,
    airQualityText: "Air quality : 59 - Moderate",
    aqiStatus: "moderate",
    forecast: [
      { day: "Sun", highF: 84, lowF: 70, icon: "🌧️", condition: "Rain" },
      { day: "Mon", highF: 86, lowF: 70, icon: "⛈️", condition: "Thunderstorm" },
      { day: "Tue", highF: 82, lowF: 68, icon: "⛈️", condition: "Thunderstorm" },
      { day: "Wed", highF: 82, lowF: 68, icon: "⛈️", condition: "Thunderstorm" },
      { day: "Thur", highF: 82, lowF: 66, icon: "🌧️", condition: "Rain" }
    ]
  },
  "Hyderabad": {
    name: "Hyderabad",
    country: "India",
    condition: "Sunny & Warm",
    weatherCode: 0,
    tempF: 85,
    feelsLikeF: 86,
    windDirection: "SE",
    windSpeedMph: 7,
    windSpeedKmh: 11,
    humidity: 50,
    rainProb: 10,
    visibilityMi: 8,
    visibilityMeters: 12000,
    pressureHpa: 1014,
    uvIndex: 7,
    airQualityText: "Air quality : 82 - Moderate",
    aqiStatus: "moderate",
    forecast: [
      { day: "Sun", highF: 87, lowF: 68, icon: "☀️", condition: "Sunny" },
      { day: "Mon", highF: 88, lowF: 69, icon: "☀️", condition: "Clear" },
      { day: "Tue", highF: 86, lowF: 68, icon: "⛅", condition: "Partly Cloudy" },
      { day: "Wed", highF: 85, lowF: 67, icon: "🌤️", condition: "Warm Sun" },
      { day: "Thur", highF: 87, lowF: 68, icon: "☀️", condition: "Sunny" }
    ]
  },
  "Pune": {
    name: "Pune",
    country: "India",
    condition: "Mild & Clear",
    weatherCode: 0,
    tempF: 79,
    feelsLikeF: 78,
    feelsLikeC: 26,
    windDirection: "W",
    windSpeedMph: 9,
    windSpeedKmh: 15,
    humidity: 48,
    rainProb: 10,
    visibilityMi: 9,
    visibilityMeters: 14000,
    pressureHpa: 1014,
    uvIndex: 6,
    airQualityText: "Air quality : 74 - Moderate",
    aqiStatus: "moderate",
    forecast: [
      { day: "Sun", highF: 82, lowF: 62, icon: "☀️", condition: "Clear" },
      { day: "Mon", highF: 84, lowF: 63, icon: "☀️", condition: "Sunny" },
      { day: "Tue", highF: 83, lowF: 62, icon: "🌤️", condition: "Mild Breeze" },
      { day: "Wed", highF: 81, lowF: 61, icon: "⛅", condition: "Partly Cloudy" },
      { day: "Thur", highF: 83, lowF: 62, icon: "☀️", condition: "Clear" }
    ]
  },
  "London": {
    name: "London",
    country: "United Kingdom",
    condition: "Overcast & Cold",
    weatherCode: 3,
    tempF: 50,
    feelsLikeF: 46,
    feelsLikeC: 8,
    windDirection: "WSW",
    windSpeedMph: 9,
    windSpeedKmh: 14,
    humidity: 78,
    rainProb: 15,
    visibilityMi: 6,
    visibilityMeters: 10000,
    pressureHpa: 1018,
    uvIndex: 2,
    airQualityText: "Air quality : 28 - Good",
    aqiStatus: "good",
    forecast: [
      { day: "Sun", highF: 52, lowF: 43, icon: "☁️", condition: "Overcast" },
      { day: "Mon", highF: 50, lowF: 41, icon: "🌧️", condition: "Drizzle" },
      { day: "Tue", highF: 48, lowF: 39, icon: "⛅", condition: "Cloudy" },
      { day: "Wed", highF: 49, lowF: 40, icon: "☁️", condition: "Overcast" },
      { day: "Thur", highF: 51, lowF: 42, icon: "⛅", condition: "Partly Cloudy" }
    ]
  },
  "Srinagar": {
    name: "Srinagar",
    country: "India",
    condition: "Clear & Chilly",
    weatherCode: 0,
    tempF: 52,
    feelsLikeF: 50,
    feelsLikeC: 10,
    windDirection: "N",
    windSpeedMph: 4,
    windSpeedKmh: 6,
    humidity: 52,
    rainProb: 5,
    visibilityMi: 8,
    visibilityMeters: 12000,
    pressureHpa: 1020,
    uvIndex: 4,
    airQualityText: "Air quality : 42 - Good",
    aqiStatus: "good",
    forecast: [
      { day: "Sun", highF: 54, lowF: 36, icon: "☀️", condition: "Clear" },
      { day: "Mon", highF: 52, lowF: 34, icon: "☀️", condition: "Sunny" },
      { day: "Tue", highF: 50, lowF: 32, icon: "🌤️", condition: "Chilly" },
      { day: "Wed", highF: 48, lowF: 30, icon: "⛅", condition: "Partly Cloudy" },
      { day: "Thur", highF: 50, lowF: 33, icon: "☀️", condition: "Clear" }
    ]
  }
};

// Aliases for common alternative spellings
CITY_DATABASE["Bengaluru"] = CITY_DATABASE["Bangaluru"];
CITY_DATABASE["Bangalore"] = CITY_DATABASE["Bangaluru"];

// ==========================================================================
// Weather Theme Definitions
// ==========================================================================

const WEATHER_THEMES = {
  overcast: {
    bg: "assets/backgrounds/overcast.jpg",
    particles: "clouds",
    accent: "#E6954A"
  },
  rain: {
    bg: "assets/backgrounds/rain.jpg",
    particles: "rain",
    accent: "#E6954A"
  },
  sunny: {
    bg: "assets/backgrounds/sunny.jpg",
    particles: "sunShimmer",
    accent: "#E6954A"
  },
  storm: {
    bg: "assets/backgrounds/storm.jpg",
    particles: "storm",
    accent: "#E6954A"
  },
  snow: {
    bg: "assets/backgrounds/snow.jpg",
    particles: "snow",
    accent: "#E6954A"
  }
};

// ==========================================================================
// Application State
// ==========================================================================

const DEFAULT_SLOTS = ["Kolkata", "Delhi", "Mumbai", "Bangaluru", "Hyderabad"];

const state = {
  unit: localStorage.getItem("skycast_unit") || "F", // Default to F to match screenshot (61° / 57°), easily toggled
  currentCityName: "New York", // Default matches reference screenshot
  weatherData: JSON.parse(JSON.stringify(CITY_DATABASE["New York"])),
  currentThemeKey: "overcast",
  activeBgLayer: 1,
  animationFrameId: null,
  // 5 city slots: Leftmost slot is Recent Search (default Kolkata or saved city)
  citySlots: [...DEFAULT_SLOTS]
};

// Load saved recent search into slot 0 if exists
const savedRecent = localStorage.getItem("skycast_recent_city");
if (savedRecent) {
  state.citySlots[0] = savedRecent;
}

// ==========================================================================
// Temperature & Unit Conversion Helpers
// ==========================================================================

function fahrenheitToCelsius(f) {
  return Math.round((f - 32) * (5 / 9));
}

function celsiusToFahrenheit(c) {
  return Math.round((c * (9 / 5)) + 32);
}

function formatTemp(fValue, unit) {
  if (unit === "C") {
    return `${fahrenheitToCelsius(fValue)}°`;
  }
  return `${Math.round(fValue)}°`;
}

function formatSpeed(mph, kmh) {
  // Always use km/h as requested
  if (kmh !== undefined && kmh !== null && !isNaN(kmh)) {
    return `${Math.round(kmh)} km/h`;
  }
  const calcKmh = Math.round((mph || 0) * 1.60934);
  return `${calcKmh} km/h`;
}

function formatVisibility(mi, rawMeters) {
  // Always use km as requested
  if (rawMeters !== undefined && rawMeters !== null && !isNaN(rawMeters)) {
    const km = Math.round(rawMeters / 1000);
    return `${km} km`;
  }
  const km = Math.round((mi || 7) * 1.60934);
  return `${km} km`;
}

function formatCustomMessage(text) {
  if (!text) return "";
  const trimmed = text.trim();
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
}

function getAQIMeta(val) {
  const aqi = Math.round(val !== undefined && val !== null ? val : 25);
  let status = "good";
  let category = "Good";
  if (aqi <= 50) {
    category = "Good";
    status = "good";
  } else if (aqi <= 100) {
    category = "Moderate";
    status = "moderate";
  } else if (aqi <= 150) {
    category = "Poor";
    status = "poor";
  } else if (aqi <= 200) {
    category = "Unhealthy";
    status = "poor";
  } else if (aqi <= 300) {
    category = "Very Unhealthy";
    status = "poor";
  } else {
    category = "Hazardous";
    status = "poor";
  }
  return {
    text: `Air quality : ${aqi} - ${category}`,
    status: status,
    value: aqi
  };
}

// ==========================================================================
// Priority Metric & Custom Weather Message Algorithm
// Conditions: Rain, Thunderstorm, Windstorm, Storm get higher priority.
// Highlight: #E6954A at 30% opacity
// Message: #E6954A at 100% opacity
// ==========================================================================

function calculatePriorityMetricAndMessage(data) {
  const rain = data.rainProb || 0;
  const windMph = data.windSpeedMph || 0;
  const condLower = (data.condition || "").toLowerCase();
  
  // Calculate feels-like temperature in Celsius
  const feelsLikeF = data.feelsLikeF !== undefined ? data.feelsLikeF : data.tempF;
  const feelsLikeC = data.feelsLikeC !== undefined 
    ? data.feelsLikeC 
    : (feelsLikeF !== undefined ? fahrenheitToCelsius(feelsLikeF) : 20);

  // Cold Weather Condition: feels like temperature is 12°C or below
  const isReallyCold = feelsLikeC <= 12;

  // 1. Severe Storm / Thunderstorm
  const isStorm = condLower.includes("thunder") || 
                  condLower.includes("storm") || 
                  data.weatherCode === 95 || data.weatherCode === 96 || data.weatherCode === 99;

  // 2. Active Rain
  const isActualRain = condLower.includes("rain") || 
                       condLower.includes("heavy rain") || 
                       condLower.includes("shower") ||
                       (data.weatherCode >= 61 && data.weatherCode <= 67) ||
                       (data.weatherCode >= 80 && data.weatherCode <= 82);

  // 3. Drizzle
  const isDrizzle = condLower.includes("drizzle") || 
                    (data.weatherCode >= 51 && data.weatherCode <= 55);

  // 4. High Rain Probability (e.g., Overcast with Rain 75% in screenshot)
  const isHighRainRisk = rain >= 50;

  // 5. Windstorm / High Wind
  const isWindstorm = condLower.includes("wind") || windMph >= 20;

  // 6. Freezing Snow / Ice
  const isSnow = condLower.includes("snow") || 
                 (data.tempF <= 32 && rain > 40) ||
                 (data.weatherCode >= 71 && data.weatherCode <= 77);

  // 7. Sunny / Clear Sky
  const isSunny = condLower.includes("sun") || 
                  condLower.includes("clear") || 
                  data.weatherCode === 0 || 
                  data.weatherCode === 1;

  // 8. Cloudy / Overcast
  const isCloudy = condLower.includes("overcast") || 
                   condLower.includes("cloud") || 
                   data.weatherCode === 2 || 
                   data.weatherCode === 3;

  // Priority Evaluation:
  // Priority 1: Storm / Thunderstorm (Safety critical)
  if (isStorm) {
    return {
      themeKey: "storm",
      highlightTileId: "tile-rain",
      customMessage: "Alert , stay inside"
    };
  }

  // Priority 2: Active Heavy Rain (when not freezing)
  if (isActualRain && !isReallyCold) {
    return {
      themeKey: "rain",
      highlightTileId: "tile-rain",
      customMessage: "It is Rainning now , Cover yourself"
    };
  }

  // Priority 3: Cold Weather (Feels like 12 or below)
  // Message: "Wear Warmer Clothes , it is getting really Cold"
  // Feature Highlight: "tile-feels-like" (Feels like tile)
  if (isReallyCold) {
    return {
      themeKey: isSnow ? "snow" : (condLower.includes("sun") ? "sunny" : "overcast"),
      highlightTileId: "tile-feels-like",
      customMessage: "Wear Warmer Clothes , it is getting really Cold"
    };
  }

  // Priority 4: Active Rain (fallback)
  if (isActualRain) {
    return {
      themeKey: "rain",
      highlightTileId: "tile-rain",
      customMessage: "It is Rainning now , Cover yourself"
    };
  }

  // Priority 5: High Rain Chance (Overcast / Cloudy with high rain probability like screenshot)
  if (isHighRainRisk) {
    return {
      themeKey: "overcast",
      highlightTileId: "tile-rain",
      customMessage: "High Chances of Rain , Carry your Umbrella"
    };
  }

  // Priority 6: Drizzle
  if (isDrizzle) {
    return {
      themeKey: "rain",
      highlightTileId: "tile-rain",
      customMessage: "It is dizzling outside , enjoy with a Hot brevarage"
    };
  }

  // Priority 7: Windstorm
  if (isWindstorm) {
    return {
      themeKey: "overcast",
      highlightTileId: "tile-wind",
      customMessage: "Strong windstorm , stay safe"
    };
  }

  // Priority 8: Snow
  if (isSnow) {
    return {
      themeKey: "snow",
      highlightTileId: "tile-feels-like",
      customMessage: "Wear Warmer Clothes , it is getting really Cold"
    };
  }

  // Priority 9: Sunny (Heat / UV)
  if (isSunny) {
    return {
      themeKey: "sunny",
      highlightTileId: "tile-feels-like",
      customMessage: "Use your Sunscreen"
    };
  }

  // Priority 10: Cloudy
  if (isCloudy) {
    return {
      themeKey: "overcast",
      highlightTileId: "tile-feels-like",
      customMessage: "Plesant wether , enjoy your day"
    };
  }

  // Default Fallback
  return {
    themeKey: "overcast",
    highlightTileId: "tile-feels-like",
    customMessage: "Plesant wether , enjoy your day"
  };
}

// ==========================================================================
// Dynamic Fullscreen Background Switching with Smooth Cross-Fade
// ==========================================================================

function updateDynamicBackground(themeKey) {
  const theme = WEATHER_THEMES[themeKey] || WEATHER_THEMES.overcast;
  const currentLayerId = state.activeBgLayer === 1 ? "bg-layer-1" : "bg-layer-2";
  const nextLayerId = state.activeBgLayer === 1 ? "bg-layer-2" : "bg-layer-1";
  
  const currentLayer = document.getElementById(currentLayerId);
  const nextLayer = document.getElementById(nextLayerId);

  // If already showing this background on the current layer, return
  if (currentLayer.style.backgroundImage && currentLayer.style.backgroundImage.includes(theme.bg)) {
    return;
  }

  // Preload and switch layers smoothly
  const img = new Image();
  img.src = theme.bg;
  img.onload = () => {
    nextLayer.style.backgroundImage = `url("${theme.bg}")`;
    nextLayer.classList.add("active");
    currentLayer.classList.remove("active");
    state.activeBgLayer = state.activeBgLayer === 1 ? 2 : 1;
  };
  
  // Set theme class on body
  document.body.className = `theme-${themeKey}`;
  
  // Trigger particle effect for current weather
  initWeatherParticles(theme.particles);
}

// ==========================================================================
// Interactive Canvas Weather Particle Engine (Rain, Snow, Sun Shimmer, etc.)
// ==========================================================================

function initWeatherParticles(type) {
  const canvas = document.getElementById("weather-particles");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  // Resize canvas
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  if (state.animationFrameId) {
    cancelAnimationFrame(state.animationFrameId);
    state.animationFrameId = null;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (type === "clouds") {
    const count = 20;
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.15,
      opacity: Math.random() * 0.2 + 0.08
    }));

    function drawClouds() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });
      state.animationFrameId = requestAnimationFrame(drawClouds);
    }
    drawClouds();
    return;
  }

  if (type === "rain" || type === "storm") {
    const count = type === "storm" ? 85 : 45;
    const drops = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      length: Math.random() * 20 + 12,
      speedY: Math.random() * 12 + 14,
      speedX: -2,
      opacity: Math.random() * 0.35 + 0.15
    }));

    let lightningTimer = 0;

    function drawRain() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (type === "storm") {
        lightningTimer++;
        if (lightningTimer > 260 && Math.random() < 0.04) {
          ctx.fillStyle = "rgba(190, 215, 255, 0.14)";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          if (Math.random() < 0.5) lightningTimer = 0;
        }
      }

      ctx.lineWidth = 1.3;
      drops.forEach(d => {
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x + d.speedX, d.y + d.length);
        ctx.strokeStyle = `rgba(200, 230, 255, ${d.opacity})`;
        ctx.stroke();

        d.x += d.speedX;
        d.y += d.speedY;

        if (d.y > canvas.height) {
          d.y = -d.length;
          d.x = Math.random() * (canvas.width + 100);
        }
      });
      state.animationFrameId = requestAnimationFrame(drawRain);
    }
    drawRain();
    return;
  }

  if (type === "snow") {
    const count = 55;
    const flakes = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2.2 + 1.2,
      speedY: Math.random() * 1.4 + 0.7,
      speedX: Math.random() * 1 - 0.5,
      opacity: Math.random() * 0.5 + 0.2,
      wobble: Math.random() * Math.PI * 2
    }));

    function drawSnow() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      flakes.forEach(f => {
        f.wobble += 0.02;
        ctx.beginPath();
        ctx.arc(f.x + Math.sin(f.wobble) * 2, f.y, f.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${f.opacity})`;
        ctx.fill();

        f.y += f.speedY;
        f.x += f.speedX;

        if (f.y > canvas.height) {
          f.y = -5;
          f.x = Math.random() * canvas.width;
        }
      });
      state.animationFrameId = requestAnimationFrame(drawSnow);
    }
    drawSnow();
    return;
  }

  if (type === "sunShimmer") {
    const count = 25;
    const motes = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2.5 + 1,
      speedY: -Math.random() * 0.35 - 0.1,
      speedX: (Math.random() - 0.5) * 0.25,
      opacity: Math.random() * 0.25 + 0.1,
      pulse: Math.random() * Math.PI * 2
    }));

    function drawSun() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      motes.forEach(m => {
        m.pulse += 0.03;
        const currentOpacity = m.opacity + Math.sin(m.pulse) * 0.1;
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(230, 149, 74, ${Math.max(0, currentOpacity)})`;
        ctx.shadowColor = "#E6954A";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;

        m.y += m.speedY;
        m.x += m.speedX;

        if (m.y < -10) {
          m.y = canvas.height + 10;
          m.x = Math.random() * canvas.width;
        }
      });
      state.animationFrameId = requestAnimationFrame(drawSun);
    }
    drawSun();
    return;
  }
}

// ==========================================================================
// 5-Day Forecast Dual-Line SVG Chart Renderer
// (Amber High Curve + Blue Low Curve with Points & Labels matching UI)
// ==========================================================================

function renderForecastChart(forecast) {
  const chartSvg = document.getElementById("forecast-chart-svg");
  const pathHigh = document.getElementById("path-high");
  const pathLow = document.getElementById("path-low");
  const highNodesGroup = document.getElementById("chart-high-nodes");
  const lowNodesGroup = document.getElementById("chart-low-nodes");
  const daysRow = document.getElementById("forecast-days-row");

  if (!chartSvg || !pathHigh || !pathLow || !forecast || forecast.length === 0) return;

  // Clear existing nodes
  highNodesGroup.innerHTML = "";
  lowNodesGroup.innerHTML = "";
  daysRow.innerHTML = "";

  const width = 500;
  const height = 130;
  const numDays = forecast.length;
  
  const paddingX = 45;
  const paddingTop = 26;
  const paddingBottom = 26;

  const highs = forecast.map(d => state.unit === "C" ? fahrenheitToCelsius(d.highF) : d.highF);
  const lows = forecast.map(d => state.unit === "C" ? fahrenheitToCelsius(d.lowF) : d.lowF);

  const allTemps = [...highs, ...lows];
  const minTemp = Math.min(...allTemps) - 2;
  const maxTemp = Math.max(...allTemps) + 4;
  const tempRange = Math.max(maxTemp - minTemp, 8);

  function getY(temp) {
    const fraction = (temp - minTemp) / tempRange;
    return height - paddingBottom - (fraction * (height - paddingTop - paddingBottom));
  }

  function getX(index) {
    return paddingX + (index * ((width - (paddingX * 2)) / (numDays - 1)));
  }

  const highPoints = highs.map((t, i) => ({ x: getX(i), y: getY(t), val: t }));
  const lowPoints = lows.map((t, i) => ({ x: getX(i), y: getY(t), val: t }));

  let dHigh = `M ${highPoints[0].x} ${highPoints[0].y}`;
  highPoints.slice(1).forEach(pt => {
    dHigh += ` L ${pt.x} ${pt.y}`;
  });

  let dLow = `M ${lowPoints[0].x} ${lowPoints[0].y}`;
  lowPoints.slice(1).forEach(pt => {
    dLow += ` L ${pt.x} ${pt.y}`;
  });

  pathHigh.setAttribute("d", dHigh);
  pathLow.setAttribute("d", dLow);

  forecast.forEach((dayData, i) => {
    const col = document.createElement("div");
    col.className = `forecast-day-col ${i === 0 ? 'selected-day' : ''}`;
    col.dataset.index = i;
    col.title = `${dayData.day}: ${dayData.condition}`;
    col.innerHTML = `
      <span class="day-name">${dayData.day}</span>
      <span class="day-icon" title="${dayData.condition}">${dayData.icon}</span>
    `;
    col.addEventListener("click", () => {
      document.querySelectorAll(".forecast-day-col").forEach(c => c.classList.remove("selected-day"));
      col.classList.add("selected-day");
      document.getElementById("current-temp").textContent = formatTemp(dayData.highF, state.unit);
      document.getElementById("condition-text").textContent = dayData.condition;
    });
    daysRow.appendChild(col);
  });

  highPoints.forEach(pt => {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", pt.x);
    circle.setAttribute("cy", pt.y);
    circle.setAttribute("r", "4.8");
    circle.setAttribute("class", "chart-node high-node");
    circle.setAttribute("filter", "url(#glow)");
    highNodesGroup.appendChild(circle);

    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", pt.x);
    text.setAttribute("y", pt.y - 10);
    text.setAttribute("class", "chart-label");
    text.textContent = `${pt.val}°`;
    highNodesGroup.appendChild(text);
  });

  lowPoints.forEach(pt => {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", pt.x);
    circle.setAttribute("cy", pt.y);
    circle.setAttribute("r", "4.8");
    circle.setAttribute("class", "chart-node low-node");
    circle.setAttribute("filter", "url(#glow)");
    lowNodesGroup.appendChild(circle);

    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", pt.x);
    text.setAttribute("y", pt.y + 19);
    text.setAttribute("class", "chart-label");
    text.textContent = `${pt.val}°`;
    lowNodesGroup.appendChild(text);
  });
}

// ==========================================================================
// Middle 5 City Buttons Rendering (Leftmost slot is recent search / chosen)
// ==========================================================================

function renderCityChips() {
  const container = document.getElementById("city-chips-row");
  if (!container) return;

  container.innerHTML = "";
  state.citySlots.forEach((city, index) => {
    const btn = document.createElement("button");
    btn.className = "city-chip";
    btn.id = `slot-${index}`;
    btn.dataset.city = city;
    btn.textContent = city;

    // Check if currently active city
    if (state.weatherData && state.weatherData.name.toLowerCase() === city.toLowerCase()) {
      btn.classList.add("active");
    }

    btn.addEventListener("click", () => {
      fetchLiveWeather(city);
    });

    container.appendChild(btn);
  });
}

// ==========================================================================
// UI Update Engine: Sync All Elements with Current State & Units
// ==========================================================================

function updateUI() {
  const d = state.weatherData;
  if (!d) return;

  // 1. City Name & Conditions
  document.getElementById("location-name").textContent = d.name;
  document.getElementById("current-temp").textContent = formatTemp(d.tempF, state.unit);
  document.getElementById("condition-text").textContent = d.condition;
  
  // Air Quality
  const aqiText = d.airQualityText || "Air quality : 20 - Good";
  document.getElementById("aqi-text").textContent = aqiText;
  const aqiDot = document.getElementById("aqi-dot");
  aqiDot.className = `aqi-indicator ${d.aqiStatus || 'good'}`;

  // 2. Weather Details (6 Parameters Grid)
  document.getElementById("val-feels-like").textContent = formatTemp(d.feelsLikeF, state.unit);
  document.getElementById("label-wind").textContent = `${d.windDirection} wind`;
  document.getElementById("val-wind").textContent = formatSpeed(d.windSpeedMph, d.windSpeedKmh);
  document.getElementById("val-humidity").textContent = `${d.humidity}%`;
  document.getElementById("val-rain").textContent = `${d.rainProb}%`;
  document.getElementById("val-visibility").textContent = formatVisibility(d.visibilityMi, d.visibilityMeters);
  document.getElementById("val-pressure").textContent = `${d.pressureHpa} hPa`;

  // 3. Priority Evaluation: Custom Message & Highlighted Tile
  const priorityInfo = calculatePriorityMetricAndMessage(d);

  // Update Top Right Customized Message (Hex #E6954A at 100% opacity, first letter uppercase)
  const messageEl = document.getElementById("custom-message-text");
  if (messageEl) {
    messageEl.textContent = formatCustomMessage(priorityInfo.customMessage);
  }

  // Highlight the most important weather detail feature (Hex #E6954A at 30% opacity)
  document.querySelectorAll(".detail-tile").forEach(t => t.classList.remove("priority-highlight"));
  const targetTile = document.getElementById(priorityInfo.highlightTileId);
  if (targetTile) {
    targetTile.classList.add("priority-highlight");
  }

  // 4. Update Dynamic Background & Particles
  updateDynamicBackground(priorityInfo.themeKey);

  // 5. Render 5-Day Forecast Dual-Line SVG Chart
  renderForecastChart(d.forecast);

  // 6. Update Active State of Middle 5 City Chips
  renderCityChips();

  // 7. Update Unit Toggle Switch Visual
  const toggleWrapper = document.getElementById("unit-toggle");
  toggleWrapper.setAttribute("data-selected", state.unit);
  document.querySelectorAll(".unit-btn").forEach(btn => {
    if (btn.dataset.unit === state.unit) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Timestamp
  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  document.getElementById("update-timestamp").textContent = `Live data updated at ${timeStr}`;
}

// ==========================================================================
// Live Open-Meteo Weather API Integration with Automatic Fallback
// ==========================================================================

async function fetchLiveWeather(cityName, lat, lon) {
  try {
    let latitude = lat;
    let longitude = lon;
    let resolvedName = cityName;
    let country = "";

    // Geocode if coordinates not provided
    if (latitude === undefined || longitude === undefined) {
      const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1&language=en&format=json`;
      const geoRes = await fetch(geoUrl, { signal: AbortSignal.timeout(4000) });
      const geoData = await geoRes.json();
      
      if (!geoData.results || geoData.results.length === 0) {
        throw new Error("City not found");
      }
      latitude = geoData.results[0].latitude;
      longitude = geoData.results[0].longitude;
      resolvedName = geoData.results[0].name;
      country = geoData.results[0].country || "";
    }

    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,rain,weather_code,surface_pressure,wind_speed_10m,wind_direction_10m,visibility&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&wind_speed_unit=kmh&temperature_unit=fahrenheit&precipitation_unit=inch&timezone=auto`;
    const aqiUrl = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${latitude}&longitude=${longitude}&current=us_aqi`;

    const [weatherRes, aqiRes] = await Promise.all([
      fetch(weatherUrl, { signal: AbortSignal.timeout(5000) }),
      fetch(aqiUrl, { signal: AbortSignal.timeout(5000) }).catch(() => null)
    ]);

    const weatherData = await weatherRes.json();

    if (!weatherData.current || !weatherData.daily) {
      throw new Error("Invalid weather data received");
    }

    // Determine real AQI from Air Quality API
    let aqiInfo = { text: "Air quality : 25 - Good", status: "good" };
    if (aqiRes && aqiRes.ok) {
      try {
        const aqiData = await aqiRes.json();
        if (aqiData?.current?.us_aqi !== undefined && aqiData?.current?.us_aqi !== null) {
          aqiInfo = getAQIMeta(aqiData.current.us_aqi);
        }
      } catch (e) {
        console.warn("Failed to parse AQI data:", e);
      }
    }

    const conditionMeta = parseWeatherCode(weatherData.current.weather_code);
    const windDir = degreesToCardinal(weatherData.current.wind_direction_10m);

    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    const forecastDays = [];
    for (let i = 0; i < 5; i++) {
      const date = new Date(weatherData.daily.time[i]);
      const dayName = dayNames[date.getDay()];
      const dayMeta = parseWeatherCode(weatherData.daily.weather_code[i]);
      forecastDays.push({
        day: dayName,
        highF: Math.round(weatherData.daily.temperature_2m_max[i]),
        lowF: Math.round(weatherData.daily.temperature_2m_min[i]),
        icon: dayMeta.icon,
        condition: dayMeta.text
      });
    }

    state.weatherData = {
      name: resolvedName,
      country: country,
      condition: conditionMeta.text,
      weatherCode: weatherData.current.weather_code,
      tempF: Math.round(weatherData.current.temperature_2m),
      feelsLikeF: Math.round(weatherData.current.apparent_temperature),
      feelsLikeC: fahrenheitToCelsius(Math.round(weatherData.current.apparent_temperature)),
      windDirection: windDir,
      windSpeedKmh: Math.round(weatherData.current.wind_speed_10m),
      windSpeedMph: Math.round(weatherData.current.wind_speed_10m / 1.60934),
      humidity: Math.round(weatherData.current.relative_humidity_2m),
      rainProb: weatherData.daily.precipitation_probability_max[0] || Math.round(weatherData.current.precipitation * 30),
      visibilityMi: Math.round((weatherData.current.visibility || 10000) / 1609.34),
      visibilityMeters: weatherData.current.visibility || 10000,
      pressureHpa: Math.round(weatherData.current.surface_pressure),
      uvIndex: 4,
      airQualityText: aqiInfo.text,
      aqiStatus: aqiInfo.status,
      forecast: forecastDays
    };

    updateUI();
  } catch (err) {
    console.warn("Live API fetch fallback triggered:", err.message);
    loadCity(cityName);
  }
}

function parseWeatherCode(code) {
  if (code === 0) return { text: "Sunny", icon: "☀️" };
  if (code === 1) return { text: "Mainly Clear", icon: "🌤️" };
  if (code === 2) return { text: "Partly Cloudy", icon: "⛅" };
  if (code === 3) return { text: "Overcast", icon: "☁️" };
  if (code >= 45 && code <= 48) return { text: "Foggy", icon: "🌫️" };
  if (code >= 51 && code <= 55) return { text: "Drizzle", icon: "🌦️" };
  if (code >= 61 && code <= 65) return { text: "Rain", icon: "🌧️" };
  if (code >= 71 && code <= 77) return { text: "Snow", icon: "❄️" };
  if (code >= 80 && code <= 82) return { text: "Rain Showers", icon: "🌧️" };
  if (code >= 85 && code <= 86) return { text: "Snow Showers", icon: "🌨️" };
  if (code >= 95) return { text: "Thunderstorm", icon: "⛈️" };
  return { text: "Overcast", icon: "☁️" };
}

function degreesToCardinal(deg) {
  const cardinals = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
  const val = Math.round((deg / 22.5));
  return cardinals[(val % 16)];
}

function loadCity(cityName) {
  const matchedKey = Object.keys(CITY_DATABASE).find(k => k.toLowerCase() === cityName.toLowerCase());
  
  if (matchedKey) {
    state.weatherData = JSON.parse(JSON.stringify(CITY_DATABASE[matchedKey]));
  } else {
    state.weatherData = {
      name: cityName.charAt(0).toUpperCase() + cityName.slice(1),
      country: "",
      condition: "Partly Cloudy",
      weatherCode: 2,
      tempF: 78,
      feelsLikeF: 77,
      windDirection: "WNW",
      windSpeedMph: 10,
      windSpeedKmh: 16,
      humidity: 55,
      rainProb: 25,
      visibilityMi: 9,
      visibilityMeters: 14000,
      pressureHpa: 1014,
      uvIndex: 5,
      airQualityText: "Air quality : 25 - Good",
      aqiStatus: "good",
      forecast: [
        { day: "Sun", highF: 80, lowF: 66, icon: "⛅", condition: "Partly Cloudy" },
        { day: "Mon", highF: 82, lowF: 68, icon: "☀️", condition: "Sunny" },
        { day: "Tue", highF: 79, lowF: 65, icon: "🌧️", condition: "Rain" },
        { day: "Wed", highF: 77, lowF: 64, icon: "☁️", condition: "Overcast" },
        { day: "Thur", highF: 81, lowF: 67, icon: "🌤️", condition: "Sunny" }
      ]
    };
  }
  updateUI();
}

// ==========================================================================
// Set Chosen Location as Recent Search in Slot 0 (Requirement 7)
// ==========================================================================

function setChosenLocationAsRecent(chosenCity) {
  if (!chosenCity) return;
  // Capitalize properly
  const formatted = chosenCity.charAt(0).toUpperCase() + chosenCity.slice(1);
  
  // Update slot 0 with chosen location
  state.citySlots[0] = formatted;
  localStorage.setItem("skycast_recent_city", formatted);

  // Render updated chips
  renderCityChips();

  // Load weather for this city
  fetchLiveWeather(formatted);
}

// ==========================================================================
// Event Listeners & Interaction Handlers
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  // Initialize UI with initial state
  updateUI();

  // Unit Toggle (Celsius / Fahrenheit)
  const unitToggle = document.getElementById("unit-toggle");
  unitToggle.addEventListener("click", () => {
    state.unit = state.unit === "F" ? "C" : "F";
    localStorage.setItem("skycast_unit", state.unit);
    updateUI();
  });

  // Modal Controls ("Where are You Now ?")
  const btnWhereNow = document.getElementById("btn-where-now");
  const modal = document.getElementById("location-modal");
  const btnCloseModal = document.getElementById("btn-close-modal");
  const btnDetectGps = document.getElementById("btn-detect-gps");
  const modalSearchInput = document.getElementById("modal-search-input");
  const modalSuggestions = document.getElementById("modal-suggestions");

  btnWhereNow.addEventListener("click", () => {
    modal.style.display = "flex";
    modalSearchInput.value = "";
    modalSuggestions.innerHTML = "";
    setTimeout(() => modalSearchInput.focus(), 100);
  });

  btnCloseModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // GPS Detection Handler
  btnDetectGps.addEventListener("click", () => {
    if ("geolocation" in navigator) {
      btnDetectGps.style.opacity = "0.5";
      btnDetectGps.textContent = "Detecting location...";
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          btnDetectGps.style.opacity = "1";
          btnDetectGps.textContent = "Choose your GPS Location";
          try {
            // Reverse geocode
            const revUrl = `https://geocoding-api.open-meteo.com/v1/search?name=&latitude=${pos.coords.latitude}&longitude=${pos.coords.longitude}&count=1&language=en&format=json`;
            // Fallback or friendly name
            const detectedName = "Your Location";
            setChosenLocationAsRecent(detectedName);
            modal.style.display = "none";
            fetchLiveWeather(detectedName, pos.coords.latitude, pos.coords.longitude);
          } catch {
            setChosenLocationAsRecent("Local Area");
            modal.style.display = "none";
            fetchLiveWeather("Local Area", pos.coords.latitude, pos.coords.longitude);
          }
        },
        (err) => {
          btnDetectGps.style.opacity = "1";
          btnDetectGps.textContent = "Choose your GPS Location";
          alert("Could not access GPS location. Please search for your city directly.");
        },
        { timeout: 7000 }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  });

  // Modal Autocomplete Search
  let debounceTimer = null;
  modalSearchInput.addEventListener("input", (e) => {
    const query = e.target.value.trim();
    if (query.length < 2) {
      modalSuggestions.innerHTML = "";
      return;
    }

    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(async () => {
      // Local matches
      const localMatches = Object.keys(CITY_DATABASE).filter(c => c.toLowerCase().includes(query.toLowerCase()));
      let itemsHtml = "";

      localMatches.forEach(city => {
        itemsHtml += `
          <div class="modal-sugg-item" data-city="${city}">
            <span class="city-title">${city}</span>
            <span class="country-name">${CITY_DATABASE[city].country}</span>
          </div>
        `;
      });

      // Remote geocoding matches
      try {
        const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=4&language=en&format=json`;
        const res = await fetch(geoUrl, { signal: AbortSignal.timeout(2000) });
        const data = await res.json();
        if (data.results) {
          data.results.forEach(resItem => {
            if (!localMatches.some(m => m.toLowerCase() === resItem.name.toLowerCase())) {
              itemsHtml += `
                <div class="modal-sugg-item" data-city="${resItem.name}" data-lat="${resItem.latitude}" data-lon="${resItem.longitude}">
                  <span class="city-title">${resItem.name}</span>
                  <span class="country-name">${resItem.country || ""}</span>
                </div>
              `;
            }
          });
        }
      } catch (err) {}

      modalSuggestions.innerHTML = itemsHtml;
    }, 250);
  });

  modalSearchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const q = modalSearchInput.value.trim();
      if (q) {
        modal.style.display = "none";
        setChosenLocationAsRecent(q);
      }
    }
  });

  // Suggestion item click inside modal
  modalSuggestions.addEventListener("click", (e) => {
    const item = e.target.closest(".modal-sugg-item");
    if (!item) return;
    const city = item.dataset.city;
    const lat = item.dataset.lat;
    const lon = item.dataset.lon;
    modal.style.display = "none";
    setChosenLocationAsRecent(city);
    if (lat && lon) {
      fetchLiveWeather(city, lat, lon);
    }
  });

  // Quick suggestion chips inside modal
  document.querySelectorAll(".quick-sugg-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      const city = chip.dataset.city;
      modal.style.display = "none";
      setChosenLocationAsRecent(city);
    });
  });

  // Auxiliary Cycle Button (Bottom Right Footer)
  const btnCycle = document.getElementById("btn-theme-cycle");
  const cycleCities = ["New York", "Kolkata", "Delhi", "Mumbai", "Bangaluru", "Hyderabad", "Pune", "London", "Srinagar"];
  let cycleIndex = 0;
  btnCycle.addEventListener("click", () => {
    cycleIndex = (cycleIndex + 1) % cycleCities.length;
    fetchLiveWeather(cycleCities[cycleIndex]);
  });
});
