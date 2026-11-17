/* ════════════════════════════════════════════════════════════════════════
   YAMILA BURGOS SKIN · TRATAMIENTOS, PRECIOS, BONOS Y PROMOCIONES
   ────────────────────────────────────────────────────────────────────────
   Este archivo se puede editar sin tocar el diseño.

   · precio:   escribe el precio tal como quieres que se vea, ej. "65 €".
               Si lo dejas vacío (""), no se muestra nada.
   · duracion: ej. "60 min". Si lo dejas vacío, no se muestra.
   · Para cambiar un tratamiento, edita su nombre (n) y descripción (d).
   · Para añadir un tratamiento, copia un bloque { ... }, pégalo debajo
     y cambia los textos. Respeta las comas entre bloques.
   · Promoción: cambia activa a true y escribe el texto en es / en.
   ════════════════════════════════════════════════════════════════════════ */

window.YB = {

  /* ── PROMOCIÓN DESTACADA (aparece arriba de los bonos) ──────────────── */
  promo: {
    activa: false,
    es: "Noviembre: 10 % en tu primer bono facial de 6 sesiones.",
    en: "November: 10% off your first 6-session facial programme.",
  },

  /* ── CARTA FACIAL · 6 tratamientos ──────────────────────────────────────
     precio y duracion: si quedan vacíos (""), no se muestran. */
  faciales: [
    { duracion: "", precio: "",
      es: { n: "Pure Skin", d: "Higiene facial profunda y personalizada." },
      en: { n: "Pure Skin", d: "A deep, personalised facial cleanse." } },
    { duracion: "", precio: "",
      es: { n: "Deep Hydration & Glow", d: "Hidratación intensiva y luminosidad." },
      en: { n: "Deep Hydration & Glow", d: "Intensive hydration and radiance." } },
    { duracion: "", precio: "",
      es: { n: "Skin Rejuvenation", d: "Rejuvenecimiento y firmeza mediante aparatología avanzada." },
      en: { n: "Skin Rejuvenation", d: "Rejuvenation and firmness with advanced devices." } },
    { duracion: "", precio: "",
      es: { n: "Microneedling Pro", d: "Tratamiento para mejorar la textura y apariencia de la piel." },
      en: { n: "Microneedling Pro", d: "A treatment to refine skin texture and appearance." } },
    { duracion: "", precio: "",
      es: { n: "Hollywood Peel", d: "Tratamiento facial con tecnología láser." },
      en: { n: "Hollywood Peel", d: "A facial treatment using laser technology." } },
    { duracion: "", precio: "",
      es: { n: "Kobido Japanese Facial", d: "Masaje facial japonés." },
      en: { n: "Kobido Japanese Facial", d: "Japanese facial massage." } },
  ],

  /* ── TRATAMIENTOS CORPORALES · 4 categorías ─────────────────────────── */
  corporales: [
    { duracion: "", precio: "",
      es: { n: "Reafirmación corporal", d: "Tratamientos para mejorar la firmeza y apariencia de la piel." },
      en: { n: "Body firming", d: "Treatments to improve skin firmness and appearance." } },
    { duracion: "", precio: "",
      es: { n: "Tonificación corporal", d: "Combinación de aparatología y técnicas manuales especializadas." },
      en: { n: "Body toning", d: "A combination of devices and specialised hands-on techniques." } },
    { duracion: "", precio: "",
      es: { n: "Remodelación corporal", d: "Programas personalizados que combinan diferentes técnicas." },
      en: { n: "Body contouring", d: "Bespoke programmes combining different techniques." } },
    { duracion: "", precio: "",
      es: { n: "Drenaje linfático manual", d: "Técnica manual orientada a favorecer el drenaje y proporcionar bienestar y ligereza." },
      en: { n: "Manual lymphatic drainage", d: "A hands-on technique that supports drainage and brings wellbeing and lightness." } },
  ],

  /* ── MEN'S SKIN & WELLNESS ─────────────────────────────────────────── */
  hombres: [
    { es: "Limpieza facial profunda", en: "Deep facial cleanse" },
    { es: "Tratamientos faciales personalizados", en: "Bespoke facials" },
    { es: "Tratamientos antiedad", en: "Anti-ageing treatments" },
    { es: "Aparatología facial", en: "Facial device treatments" },
    { es: "Tratamientos corporales", en: "Body treatments" },
    { es: "Drenaje linfático", en: "Lymphatic drainage" },
    { es: "Masajes relajantes", en: "Relaxing massages" },
    { es: "Programas de cuidado facial", en: "Facial care programmes" },
  ],

  /* ── YB SKIN PROGRAMS · BONOS ──────────────────────────────────────────
     sesiones: opciones de cada programa, ej. [4, 6]. */
  programas: [
    { sesiones: [4, 6],
      es: { n: "Skin Renewal", d: "Cuidado facial, luminosidad y rejuvenecimiento." },
      en: { n: "Skin Renewal", d: "Facial care, radiance and rejuvenation." } },
    { sesiones: [4, 6],
      es: { n: "Body Contour", d: "Reafirmación y remodelación corporal." },
      en: { n: "Body Contour", d: "Body firming and contouring." } },
    { sesiones: [4, 6],
      es: { n: "Skin Experience", d: "Programa facial personalizado según las necesidades de cada piel." },
      en: { n: "Skin Experience", d: "A bespoke facial programme tailored to each skin's needs." } },
  ],
};
