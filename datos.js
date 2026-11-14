/* ════════════════════════════════════════════════════════════════════════
   YAMILA BURGOS SKIN · TRATAMIENTOS, PRECIOS, BONOS Y PROMOCIONES
   ────────────────────────────────────────────────────────────────────────
   Este archivo se puede editar sin tocar el diseño.

   · precio:   escribe el precio tal como quieres que se vea, ej. "65 €".
               Si lo dejas vacío (""), no se muestra nada.
   · duracion: ej. "60 min". Si lo dejas vacío, no se muestra.
   · img:      foto que aparece al abrir el tratamiento. Guarda la foto en
               assets/tratamientos/ y escribe su ruta, ej. "assets/tratamientos/kobido.webp".
               Si lo dejas vacío, el tratamiento se abre sin foto.
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

  /* ── TRATAMIENTOS FACIALES ──────────────────────────────────────────────
     necesidades: hidratacion · luminosidad · textura · firmeza · imperfecciones · prevencion */
  faciales: [
    { necesidades: ["textura", "imperfecciones"], duracion: "", precio: "", img: "assets/tratamientos/limpieza.webp",
      es: { n: "Limpieza facial profunda", d: "Doble limpieza, exfoliación, extracción y mascarilla elegida para tu piel. Poros más limpios y una piel que vuelve a respirar." },
      en: { n: "Deep facial cleanse", d: "Double cleanse, exfoliation, extractions and a mask chosen for your skin. Clearer pores and skin that breathes again." } },
    { necesidades: ["hidratacion", "luminosidad"], duracion: "", precio: "",
      es: { n: "Higiene facial personalizada", d: "Mantenimiento entre tratamientos, adaptado a cómo está tu piel ese día." },
      en: { n: "Personalised facial hygiene", d: "Maintenance between treatments, adapted to how your skin is on the day." } },
    { necesidades: ["hidratacion", "luminosidad"], duracion: "", precio: "",
      es: { n: "Tratamiento hidratante y revitalizante", d: "Activos humectantes y masaje para pieles apagadas, tirantes o deshidratadas. Devuelve elasticidad y brillo." },
      en: { n: "Hydrating & revitalising facial", d: "Moisture-binding actives and massage for dull, tight or dehydrated skin. Restores bounce and glow." } },
    { necesidades: ["hidratacion"], duracion: "", precio: "",
      es: { n: "Tratamiento para pieles sensibles", d: "Protocolo calmante con cosmética de baja reactividad. Reduce rojeces y tirantez y refuerza la barrera cutánea." },
      en: { n: "Sensitive skin facial", d: "A calming protocol with low-reactivity products. Eases redness and tightness and supports the skin barrier." } },
    { necesidades: ["imperfecciones", "textura"], duracion: "", precio: "",
      es: { n: "Tratamiento para piel con tendencia acneica", d: "Limpieza, control del sebo y activos seborreguladores sin agredir la piel. Menos brotes y marcas más suaves." },
      en: { n: "Acne-prone skin facial", d: "Cleansing, oil control and sebum-balancing actives without stripping the skin. Fewer breakouts, softer marks." } },
    { necesidades: ["firmeza", "prevencion"], duracion: "", precio: "",
      es: { n: "Tratamiento antiedad y reafirmante", d: "Activos y aparatología para mejorar la firmeza, suavizar líneas de expresión y redefinir el óvalo." },
      en: { n: "Anti-ageing & firming facial", d: "Actives and devices to improve firmness, soften expression lines and redefine the jawline." } },
    { necesidades: ["textura", "firmeza", "prevencion"], duracion: "", precio: "", img: "assets/tratamientos/dermapen.webp",
      es: { n: "Dermapen y microneedling", d: "Microperforaciones controladas que estimulan la renovación de la piel. Mejora poros, textura y marcas de acné." },
      en: { n: "Dermapen & microneedling", d: "Controlled micro-channels that trigger skin renewal. Refines pores, texture and acne scarring." } },
    { necesidades: ["luminosidad", "imperfecciones"], duracion: "", precio: "",
      es: { n: "Método Cosmelan®", d: "Tratamiento despigmentante de Mesoestetic para manchas y melasma, con fase en cabina y seguimiento en casa." },
      en: { n: "Cosmelan® method", d: "Mesoestetic depigmenting treatment for dark spots and melasma, with an in-studio phase and home follow-up." } },
    { necesidades: ["firmeza"], duracion: "", precio: "",
      es: { n: "Diatermia facial", d: "Calor profundo que activa la circulación y la oxigenación. Piel más tonificada y luminosa." },
      en: { n: "Facial diathermy", d: "Deep heat that boosts circulation and oxygenation. Toned, brighter skin." } },
    { necesidades: ["firmeza", "prevencion"], duracion: "", precio: "",
      es: { n: "Radiofrecuencia facial", d: "Estimula el colágeno y tensa los tejidos. Contorno más definido y menos flacidez." },
      en: { n: "Facial radiofrequency", d: "Stimulates collagen and tightens tissue. A sharper contour and less laxity." } },
    { necesidades: ["luminosidad", "textura"], duracion: "", precio: "",
      es: { n: "Hollywood Peel", d: "Peeling de carbón activado con láser. Afina el poro y deja la piel lisa y luminosa desde la primera sesión." },
      en: { n: "Hollywood Peel", d: "Laser carbon peel. Refines pores and leaves skin smooth and luminous from the first session." } },
    { necesidades: ["textura", "luminosidad", "imperfecciones"], duracion: "", precio: "",
      es: { n: "Peelings cosméticos profesionales", d: "Ácidos en concentraciones profesionales para renovar la textura y unificar el tono." },
      en: { n: "Professional cosmetic peels", d: "Professional-strength acids to renew texture and even out skin tone." } },
    { necesidades: ["hidratacion", "luminosidad", "prevencion"], duracion: "", precio: "",
      es: { n: "Tratamientos con cosmética Mesoestetic", d: "Protocolos de cabina con la línea profesional de Mesoestetic, elegidos tras el diagnóstico." },
      en: { n: "Mesoestetic treatments", d: "In-studio protocols with Mesoestetic's professional range, chosen after your skin assessment." } },
    { necesidades: ["firmeza", "prevencion"], duracion: "", precio: "",
      es: { n: "Masaje facial japonés Kobido", d: "Técnica manual japonesa de ritmo rápido y preciso. Tonifica, drena, relaja la musculatura y devuelve la luz al rostro." },
      en: { n: "Kobido Japanese facial massage", d: "A fast, precise Japanese hands-on technique. Tones, drains, releases facial tension and brings back radiance." } },
    { necesidades: ["hidratacion", "luminosidad", "textura", "firmeza", "imperfecciones", "prevencion"], duracion: "", precio: "",
      es: { n: "Protocolo facial personalizado", d: "Una combinación de técnicas pensada para tu piel después de un diagnóstico completo." },
      en: { n: "Bespoke facial protocol", d: "A combination of techniques designed for your skin after a full assessment." } },
  ],

  /* ── TRATAMIENTOS CORPORALES ───────────────────────────────────────── */
  corporales: [
    { duracion: "", precio: "",
      es: { n: "Drenaje linfático manual", d: "Maniobras suaves y rítmicas que ayudan a eliminar líquidos retenidos. Menos hinchazón y piernas más ligeras. También en pre y postoperatorio." },
      en: { n: "Manual lymphatic drainage", d: "Gentle rhythmic movements that help clear retained fluid. Less swelling, lighter legs. Also pre- and post-surgery." } },
    { duracion: "", precio: "",
      es: { n: "Maderoterapia corporal", d: "Instrumentos de madera que moldean la silueta, activan la circulación y mejoran el aspecto de la celulitis." },
      en: { n: "Wood therapy", d: "Wooden tools that sculpt the silhouette, boost circulation and improve the look of cellulite." } },
    { duracion: "", precio: "",
      es: { n: "Tratamientos reductores", d: "Aparatología y masaje para trabajar el volumen localizado en las zonas que elijas." },
      en: { n: "Body reduction treatments", d: "Devices and massage targeting localised volume in the areas you choose." } },
    { duracion: "", precio: "",
      es: { n: "Tratamientos remodelantes", d: "Para redefinir el contorno de abdomen, cintura, glúteos o piernas." },
      en: { n: "Body contouring", d: "To redefine the contour of abdomen, waist, glutes or legs." } },
    { duracion: "", precio: "",
      es: { n: "Tratamientos anticelulíticos", d: "Mejoran el aspecto de la piel de naranja y la textura de la piel." },
      en: { n: "Anti-cellulite treatments", d: "Improve the orange-peel look and overall skin texture." } },
    { duracion: "", precio: "",
      es: { n: "Diatermia corporal", d: "Calor profundo que activa el metabolismo local y mejora la firmeza." },
      en: { n: "Body diathermy", d: "Deep heat that activates local metabolism and improves firmness." } },
    { duracion: "", precio: "",
      es: { n: "Radiofrecuencia corporal", d: "Estimula el colágeno y trabaja la flacidez de brazos, abdomen y piernas." },
      en: { n: "Body radiofrequency", d: "Stimulates collagen and treats laxity on arms, abdomen and legs." } },
    { duracion: "", precio: "",
      es: { n: "Tratamientos reafirmantes", d: "Para pieles que han perdido tono tras un embarazo, una pérdida de peso o con el paso del tiempo." },
      en: { n: "Firming treatments", d: "For skin that has lost tone after pregnancy, weight loss or with time." } },
    { duracion: "", precio: "",
      es: { n: "G5 remodelante", d: "Vibromasaje mecánico que trabaja el tejido adiposo y la celulitis y activa la circulación." },
      en: { n: "G5 body contouring", d: "Mechanical vibration massage that works on fatty tissue and cellulite and boosts circulation." } },
    { duracion: "", precio: "",
      es: { n: "Tratamiento para piernas cansadas", d: "Alivia la pesadez y mejora la circulación de retorno." },
      en: { n: "Tired legs treatment", d: "Relieves heaviness and improves venous return." } },
    { duracion: "", precio: "",
      es: { n: "Masaje relajante", d: "Una pausa de verdad: presión suave, aceites y tiempo para ti." },
      en: { n: "Relaxing massage", d: "A real pause: gentle pressure, oils and time for yourself." } },
    { duracion: "", precio: "",
      es: { n: "Masaje descontracturante", d: "Trabajo más profundo sobre cuello, espalda y hombros cargados, dentro del ámbito del bienestar." },
      en: { n: "Deep tissue massage", d: "Deeper work on tight neck, back and shoulders, within the wellness field." } },
    { duracion: "", precio: "",
      es: { n: "Protocolos combinados", d: "Aparatología y masaje en la misma sesión, según tu objetivo." },
      en: { n: "Combined protocols", d: "Devices and massage in the same session, built around your goal." } },
  ],

  /* ── DEPILACIÓN LÁSER DE DIODO ─────────────────────────────────────── */
  laser: {
    facial: [
      { es: "Labio superior", en: "Upper lip", precio: "" },
      { es: "Mentón", en: "Chin", precio: "" },
      { es: "Patillas", en: "Sideburns", precio: "" },
      { es: "Entrecejo", en: "Between the brows", precio: "" },
      { es: "Rostro completo", en: "Full face", precio: "" },
      { es: "Barba · perfilado", en: "Beard line", precio: "" },
    ],
    corporal: [
      { es: "Axilas", en: "Underarms", precio: "" },
      { es: "Brazos", en: "Arms", precio: "" },
      { es: "Medias piernas", en: "Half legs", precio: "" },
      { es: "Piernas completas", en: "Full legs", precio: "" },
      { es: "Ingles", en: "Bikini line", precio: "" },
      { es: "Ingle completa", en: "Full bikini", precio: "" },
      { es: "Abdomen", en: "Abdomen", precio: "" },
      { es: "Glúteos", en: "Glutes", precio: "" },
      { es: "Espalda", en: "Back", precio: "" },
      { es: "Pecho", en: "Chest", precio: "" },
      { es: "Hombros", en: "Shoulders", precio: "" },
    ],
  },

  /* ── MEN'S SKIN & WELLNESS ─────────────────────────────────────────── */
  hombres: [
    { es: "Limpieza facial profunda", en: "Deep facial cleanse" },
    { es: "Tratamientos faciales personalizados", en: "Bespoke facials" },
    { es: "Tratamientos antiedad", en: "Anti-ageing treatments" },
    { es: "Diatermia y radiofrecuencia facial", en: "Facial diathermy & radiofrequency" },
    { es: "Depilación láser masculina", en: "Men's laser hair removal" },
    { es: "Drenaje linfático", en: "Lymphatic drainage" },
    { es: "Masajes relajantes", en: "Relaxing massages" },
    { es: "Tratamientos corporales", en: "Body treatments" },
    { es: "Programas de cuidado facial", en: "Facial care programmes" },
  ],

  /* ── YB SKIN PROGRAMS · BONOS ──────────────────────────────────────────
     sesiones: qué opciones ofrece cada bono, ej. [4, 6, 8]. */
  bonos: {
    faciales: [
      { es: "Limpieza facial", en: "Facial cleanse", sesiones: [4, 6, 8] },
      { es: "Dermapen", en: "Dermapen", sesiones: [4, 6] },
      { es: "Diatermia facial", en: "Facial diathermy", sesiones: [4, 6, 8] },
      { es: "Radiofrecuencia facial", en: "Facial radiofrequency", sesiones: [4, 6, 8] },
      { es: "Antiedad", en: "Anti-ageing", sesiones: [4, 6, 8] },
      { es: "Hidratación y revitalización", en: "Hydration & revitalising", sesiones: [4, 6, 8] },
      { es: "Programa facial personalizado", en: "Bespoke facial programme", sesiones: [4, 6, 8] },
    ],
    corporales: [
      { es: "Drenaje linfático", en: "Lymphatic drainage", sesiones: [4, 6, 8] },
      { es: "Maderoterapia", en: "Wood therapy", sesiones: [4, 6, 8] },
      { es: "Reductor", en: "Body reduction", sesiones: [4, 6, 8] },
      { es: "Remodelante", en: "Body contouring", sesiones: [4, 6, 8] },
      { es: "Radiofrecuencia corporal", en: "Body radiofrequency", sesiones: [4, 6, 8] },
      { es: "Diatermia corporal", en: "Body diathermy", sesiones: [4, 6, 8] },
      { es: "Anticelulítico", en: "Anti-cellulite", sesiones: [4, 6, 8] },
      { es: "Aparatología + masaje", en: "Devices + massage", sesiones: [4, 6, 8] },
    ],
    laser: [
      { es: "Láser diodo · bono por zona", en: "Diode laser · per-area pack", sesiones: [4, 6, 8] },
    ],
  },

  /* ── TIENDA (futuro) ───────────────────────────────────────────────────
     Cuando quieras vender productos, se añaden aquí y se activa la tienda. */
  tienda: { activa: false, productos: [] },
};
