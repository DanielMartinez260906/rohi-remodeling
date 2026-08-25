/* ==========================================================================
   ROHI REMODELING - Interactive Features & Multi-Language i18n JavaScript
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initI18n();
  initHeader();
  initBeforeAfterSlider();
  initCalculator();
  initPortfolioFilter();
  initContactForm();
});

/* --------------------------------------------------------------------------
   0. Multi-Language i18n System (EN, ES, FR)
   -------------------------------------------------------------------------- */
const translations = {
  en: {
    // Nav
    nav_home: "Home",
    nav_services: "Services",
    nav_transform: "Before & After",
    nav_estimator: "Estimator",
    nav_projects: "Projects",
    nav_process: "Process",
    nav_contact: "Contact",
    nav_cta: "Get a Quote",

    // Hero
    hero_badge: "Premium Residential Remodeling",
    hero_title: "Redefining elegance and comfort for your <span class=\"gradient-emerald\">home</span>.",
    hero_desc: "We transform living spaces into architectural masterpieces. Custom design, top-tier materials, and flawless certified execution.",
    hero_btn_calc: "Calculate Budget",
    hero_btn_view: "View Transformations",
    stat_projects: "Projects Delivered",
    stat_warranty: "Certified Warranty",
    stat_rating: "Client Rating",
    badge_luxury_title: "Luxury Finishes",
    badge_luxury_sub: "Marble, Quartz & LED Lighting",
    badge_warranty_title: "5-Year Rohi Warranty",
    badge_warranty_sub: "Structure & Installations",

    // Before & After
    ba_badge: "Before & After Showcase",
    ba_title: "Slide to Discover the <span class=\"gradient-emerald\">Transformation</span>",
    ba_desc: "Drag the center controller to view the striking difference between an outdated space and our luxury renovation.",
    ba_tag_before: "Original Space",
    ba_tag_after: "Rohi Renovation",

    // Calculator
    calc_badge: "Total Transparency",
    calc_title: "Interactive Budget <span class=\"gradient-emerald\">Estimator</span>",
    calc_desc: "Select your project specifications and receive an instant estimate with zero commitment.",
    calc_step1: "1. Select Space to Remodel",
    calc_space_kitchen: "Full Kitchen",
    calc_space_kitchen_sub: "Islands, cabinets & countertops",
    calc_space_bath: "Luxury Bathroom",
    calc_space_bath_sub: "Showers, fixtures & tiles",
    calc_space_home: "Whole Home",
    calc_space_home_sub: "Open concept & complete layout",
    calc_space_exterior: "Outdoor Patio",
    calc_space_exterior_sub: "Decks, pergolas & lighting",
    calc_step2: "2. Finishes & Material Quality",
    calc_finish_std: "Modern Standard",
    calc_finish_std_sub: "Durable & clean finishes",
    calc_finish_prem: "Rohi Premium",
    calc_finish_prem_sub: "Quartz, soft-close hardware",
    calc_finish_lux: "Custom Luxury",
    calc_finish_lux_sub: "Imported marble, smart automation",
    calc_step3: "3. Estimated Area",
    calc_est_header: "Estimated Budget",
    calc_est_sub: "Includes labor, clean demolition, materials, and project management.",
    calc_row_space: "Space:",
    calc_row_finish: "Finish Tier:",
    calc_row_time: "Estimated Time:",
    calc_btn_send: "Schedule Technical Visit",

    // Services
    serv_badge: "Our Specialization",
    serv_title: "High-End Renovation <span class=\"gradient-emerald\">Services</span>",
    serv_desc: "We design and execute every detail to ensure functional, cutting-edge, and lasting spaces.",
    serv1_title: "Open-Concept Kitchens",
    serv1_desc: "Full kitchen transformations featuring quartz or marble waterfall islands, custom cabinetry, and architectural lighting.",
    serv1_item1: "High-durability granite and quartz countertops",
    serv1_item2: "Cabinets with Blum® soft-close hardware",
    serv1_item3: "Built-in premium appliance installation",
    serv2_title: "Spa Bathrooms & Restyle",
    serv2_desc: "Master and guest bathroom renovations. Curbless rain showers, large-format porcelain tiles, and custom vanities.",
    serv2_item1: "Continuous anti-slip shower trays",
    serv2_item2: "LED backlit anti-fog vanity mirrors",
    serv2_item3: "Matte black & brushed gold fixtures",
    serv3_title: "Interior Remodeling & Layout",
    serv3_desc: "Strategic wall removal, cove LED ceilings, walnut wood or technical porcelain flooring.",
    serv3_item1: "Layout redesign & drywall partition",
    serv3_item2: "Decorative moldings & wood slatted walls",
    serv3_item3: "Acoustic and thermal insulation",

    // Portfolio
    port_badge: "Excellence Portfolio",
    port_title: "Explore Our Recent <span class=\"gradient-emerald\">Projects</span>",
    port_desc: "Every residence is a testament to our commitment to craftsmanship and detail.",
    filter_all: "All",
    filter_kitchens: "Kitchens",
    filter_baths: "Bathrooms",
    filter_interiors: "Interiors",
    port1_tag: "Luxury Kitchen",
    port1_title: "Emerald Oak Residence",
    port2_tag: "Master Spa Bath",
    port2_title: "Herringbone Bath Suite",
    port3_tag: "Minimalist Kitchen",
    port3_title: "Calacatta Modern Kitchen",

    // Process
    proc_badge: "Guaranteed Methodology",
    proc_title: "The <span class=\"gradient-emerald\">Rohi Remodeling</span> Process",
    proc_desc: "We guarantee clean execution, zero unexpected costs, and strict timeline adherence.",
    proc1_title: "Site Visit & 3D Concept",
    proc1_desc: "We perform precise site measurements, understand your vision, and draft the architectural concept.",
    proc2_title: "Fixed Cost Proposal",
    proc2_desc: "We present a transparent line-item budget. No hidden fees or surprise costs during construction.",
    proc3_title: "Clean Execution",
    proc3_desc: "Our skilled craftsmen work under strict technical supervision, keeping work areas protected and clean.",
    proc4_title: "Handover & Warranty",
    proc4_desc: "Final walkthrough inspection together and formal delivery with our 5-Year Warranty certificate.",

    // Testimonials
    test_badge: "Real Client Feedback",
    test_title: "What Our Clients <span class=\"gradient-emerald\">Say</span>",
    test1_quote: "\"Rohi Remodeling completely transformed our 1990s kitchen. The green cabinetry craftsmanship and marble island exceeded all our expectations. They delivered right on schedule.\"",
    test1_name: "Carlos & Maria M.",
    test1_sub: "Full Kitchen Remodel",
    test2_quote: "\"The level of cleanliness during construction was outstanding. The team protected the rest of our home and our new master bathroom spa shower is incredible. Highly recommended!\"",
    test2_name: "Valeria R.",
    test2_sub: "Master Bath Renovation",

    // Contact
    contact_badge: "Direct Consultation",
    contact_title: "Let's Talk About Your Next <span class=\"gradient-emerald\">Project</span>",
    contact_desc: "Schedule a technical visit with our remodeling specialists. We reply in under 24 hours.",
    contact_phone_title: "Phone / WhatsApp",
    contact_email_title: "Email Address",
    contact_hours_title: "Working Hours",
    contact_hours_val: "Mon - Sat: 8:00 AM - 7:00 PM",
    form_name_label: "Full Name",
    form_name_ph: "e.g. Robert Gomez",
    form_phone_label: "Phone Number",
    form_phone_ph: "+1 (555) 000-0000",
    form_space_label: "Project Type",
    form_msg_label: "Project Details / Message",
    form_msg_ph: "Describe what you would like to remodel...",
    form_btn_submit: "Send Message",

    // Footer
    footer_desc: "Specialists in interior architecture, high-value home remodeling, and custom design.",
    footer_nav: "Navigation",
    footer_serv: "Services",
    footer_contact: "Contact",
    footer_rights: "&copy; 2026 Rohi Remodeling. All rights reserved.",
    footer_sub: "Designed for Residential Excellence",
    toast_title: "Message Sent Successfully!",
    toast_sub: "A Rohi remodeling consultant will contact you shortly."
  },

  es: {
    // Nav
    nav_home: "Inicio",
    nav_services: "Servicios",
    nav_transform: "Antes y Después",
    nav_estimator: "Presupuestador",
    nav_projects: "Proyectos",
    nav_process: "Proceso",
    nav_contact: "Contacto",
    nav_cta: "Cotizar Proyecto",

    // Hero
    hero_badge: "Remodelación Residencial Prémium",
    hero_title: "Redefinimos la elegancia y confort de tu <span class=\"gradient-emerald\">hogar</span>.",
    hero_desc: "Convertimos espacios habitables en obras de arte arquitectónicas. Diseño personalizado, materiales de primera selección y garantía certificada.",
    hero_btn_calc: "Calcular Presupuesto",
    hero_btn_view: "Ver Transformaciones",
    stat_projects: "Proyectos Entregados",
    stat_warranty: "Garantía Certificada",
    stat_rating: "Valoración Clientes",
    badge_luxury_title: "Acabados de Lujo",
    badge_luxury_sub: "Mármol, Cuarzo & Iluminación LED",
    badge_warranty_title: "Garantía Rohi 5 Años",
    badge_warranty_sub: "Estructura e Instalaciones",

    // Before & After
    ba_badge: "Efecto Antes y Después",
    ba_title: "Desliza para descubrir la <span class=\"gradient-emerald\">Transformación</span>",
    ba_desc: "Arrastra el controlador central para visualizar la diferencia entre un espacio anticuado y nuestra renovación de lujo.",
    ba_tag_before: "Espacio Original",
    ba_tag_after: "Remodelación Rohi",

    // Calculator
    calc_badge: "Transparencia Total",
    calc_title: "Estimador de Presupuesto <span class=\"gradient-emerald\">Interactivo</span>",
    calc_desc: "Selecciona las características de tu proyecto y obtén una estimación precisa en segundos.",
    calc_step1: "1. Selecciona el Espacio a Remodelar",
    calc_space_kitchen: "Cocina Integral",
    calc_space_kitchen_sub: "Islas, muebles & encimeras",
    calc_space_bath: "Baño de Lujo",
    calc_space_bath_sub: "Duchas, grifería & azulejos",
    calc_space_home: "Remodelación Total",
    calc_space_home_sub: "Hogar completo & concepto abierto",
    calc_space_exterior: "Terraza / Exterior",
    calc_space_exterior_sub: "Decks, pergolados & iluminación",
    calc_step2: "2. Nivel de Acabados & Materiales",
    calc_finish_std: "Estándar Moderno",
    calc_finish_std_sub: "Acabados duraderos y limpios",
    calc_finish_prem: "Estándar Prémium",
    calc_finish_prem_sub: "Cuarzo, herrajes de cierre suave",
    calc_finish_lux: "Luxury Custom",
    calc_finish_lux_sub: "Mármol importado, domótica",
    calc_step3: "3. Área Estimada",
    calc_est_header: "Estimación Aproximada",
    calc_est_sub: "Incluye mano de obra, demolición limpia, materiales y gestión de obra.",
    calc_row_space: "Espacio:",
    calc_row_finish: "Nivel:",
    calc_row_time: "Tiempo Estimado:",
    calc_btn_send: "Solicitar Visita Técnica",

    // Services
    serv_badge: "Nuestra Especialidad",
    serv_title: "Servicios de Renovación de <span class=\"gradient-emerald\">Alto Nivel</span>",
    serv_desc: "Diseñamos y ejecutamos cada detalle para garantizar espacios funcionales y vanguardistas.",
    serv1_title: "Cocinas de Concepto Abierto",
    serv1_desc: "Transformación integral de cocinas con islas de cuarzo o mármol, gabinetes a medida e iluminación LED.",
    serv1_item1: "Encimeras de granito y cuarzo de alta resistencia",
    serv1_item2: "Gabinetes con herrajes Blum® de cierre suave",
    serv1_item3: "Instalación de electrodomésticos empotrables",
    serv2_title: "Baños Spa & Restyle",
    serv2_desc: "Renovación de baños principales e invitados. Duchas efecto lluvia a nivel de suelo y mamparas.",
    serv2_item1: "Platos de ducha continuos antideslizantes",
    serv2_item2: "Espejos con retroiluminación LED antiempañante",
    serv2_item3: "Griferías monomando en negro mate o latón",
    serv3_title: "Remodelación de Interiores",
    serv3_desc: "Derribo estratégico de muros, creación de falsos techos con luz indirecta y pisos de madera.",
    serv3_item1: "Rediseño de distribución y tabiquería seca",
    serv3_item2: "Molduras decorativas y paneles alistonados",
    serv3_item3: "Aislamiento acústico y térmico",

    // Portfolio
    port_badge: "Portafolio de Excelencia",
    port_title: "Explora Nuestros Últimos <span class=\"gradient-emerald\">Proyectos</span>",
    port_desc: "Cada residencia es testimonio de nuestro compromiso con el detalle y la calidad.",
    filter_all: "Todos",
    filter_kitchens: "Cocinas",
    filter_baths: "Baños",
    filter_interiors: "Interiores",
    port1_tag: "Cocina de Lujo",
    port1_title: "Residencia Emerald Oak",
    port2_tag: "Baño Master Spa",
    port2_title: "Suite Baño Herringbone",
    port3_tag: "Cocina Minimalista",
    port3_title: "Cocina Calacatta Modern",

    // Process
    proc_badge: "Metodología Garantizada",
    proc_title: "El Proceso <span class=\"gradient-emerald\">Rohi Remodeling</span>",
    proc_desc: "Garantizamos una ejecución limpia, sin imprevistos financieros y respetando fechas.",
    proc1_title: "Visita & Concepto 3D",
    proc1_desc: "Realizamos el levantamiento métrico en tu domicilio y creamos el concepto arquitectónico.",
    proc2_title: "Presupuesto Cerrado",
    proc2_desc: "Presentamos un desglose transparente de materiales y tiempos sin costos ocultos.",
    proc3_title: "Ejecución & Limpieza",
    proc3_desc: "Nuestro equipo trabaja bajo supervisión técnica continua manteniendo áreas protegidas.",
    proc4_title: "Entrega & Garantía",
    proc4_desc: "Inspección final de acabados y entrega formal con nuestro certificado de garantía de 5 años.",

    // Testimonials
    test_badge: "Opiniones Reales",
    test_title: "Lo que Dicen Nuestros <span class=\"gradient-emerald\">Clientes</span>",
    test1_quote: "\"Rohi Remodeling transformó por completo nuestra cocina. El trabajo de acabados en los gabinetes verdes y la isla de mármol superó todas nuestras expectativas.\"",
    test1_name: "Carlos & Maria M.",
    test1_sub: "Remodelación de Cocina Integral",
    test2_quote: "\"El nivel de pulcritud en la obra fue excelente. Protegieron todas las áreas de la casa y la nueva ducha spa es increíble.\"",
    test2_name: "Valeria R.",
    test2_sub: "Renovación de Baño Master",

    // Contact
    contact_badge: "Asesoría Directa",
    contact_title: "Hablemos de tu Próximo <span class=\"gradient-emerald\">Proyecto</span>",
    contact_desc: "Agenda una visita técnica con nuestros especialistas. Respondemos en menos de 24 horas.",
    contact_phone_title: "Teléfono / WhatsApp",
    contact_email_title: "Correo Electrónico",
    contact_hours_title: "Horario de Atención",
    contact_hours_val: "Lun - Sáb: 8:00 AM - 7:00 PM",
    form_name_label: "Nombre Completo",
    form_name_ph: "Ej: Roberto Gómez",
    form_phone_label: "Teléfono",
    form_phone_ph: "+1 (555) 000-0000",
    form_space_label: "Tipo de Proyecto",
    form_msg_label: "Detalles o Mensaje",
    form_msg_ph: "Describe lo que deseas remodelar...",
    form_btn_submit: "Enviar Mensaje",

    // Footer
    footer_desc: "Especialistas en arquitectura de interiores, remodelación de alto valor y diseño personalizado.",
    footer_nav: "Navegación",
    footer_serv: "Servicios",
    footer_contact: "Contacto",
    footer_rights: "&copy; 2026 Rohi Remodeling. Todos los derechos reservados.",
    footer_sub: "Diseñado para Excelencia Residencial",
    toast_title: "¡Mensaje Enviado con Éxito!",
    toast_sub: "Un asesor especializado de Rohi se comunicará contigo pronto."
  },

  fr: {
    // Nav
    nav_home: "Accueil",
    nav_services: "Services",
    nav_transform: "Avant & Après",
    nav_estimator: "Estimateur",
    nav_projects: "Projets",
    nav_process: "Processus",
    nav_contact: "Contact",
    nav_cta: "Obtenir un Devis",

    // Hero
    hero_badge: "Rénovation Résidentielle Haut de Gamme",
    hero_title: "Redéfinir l'élégance et le confort de votre <span class=\"gradient-emerald\">maison</span>.",
    hero_desc: "Nous transformons les espaces de vie en chefs-d'œuvre architecturaux. Conception sur mesure, matériaux d'exception et exécution certifiée.",
    hero_btn_calc: "Calculer le Budget",
    hero_btn_view: "Voir les Transformations",
    stat_projects: "Projets Livrés",
    stat_warranty: "Garantie Certifiée",
    stat_rating: "Évaluation Clients",
    badge_luxury_title: "Finitions de Luxe",
    badge_luxury_sub: "Marbre, Quartz & Éclairage LED",
    badge_warranty_title: "Garantie Rohi 5 Ans",
    badge_warranty_sub: "Structure & Installations",

    // Before & After
    ba_badge: "Effet Avant & Après",
    ba_title: "Glissez pour Découvrir la <span class=\"gradient-emerald\">Transformation</span>",
    ba_desc: "Faites glisser le curseur central pour visualiser la différence entre un espace daté et notre rénovation de luxe.",
    ba_tag_before: "Espace D'origine",
    ba_tag_after: "Rénovation Rohi",

    // Calculator
    calc_badge: "Transparence Totale",
    calc_title: "Estimateur de Budget <span class=\"gradient-emerald\">Interactif</span>",
    calc_desc: "Sélectionnez les caractéristiques de votre projet et obtenez une estimation instantanée sans engagement.",
    calc_step1: "1. Sélectionner l'Espace à Rénover",
    calc_space_kitchen: "Cuisine Équipée",
    calc_space_kitchen_sub: "Îlots, meuble & plan de travail",
    calc_space_bath: "Salle de Bain de Luxe",
    calc_space_bath_sub: "Douches, robinetterie & carrelage",
    calc_space_home: "Rénovation Complète",
    calc_space_home_sub: "Concept ouvert & aménagement",
    calc_space_exterior: "Terrasse / Extérieur",
    calc_space_exterior_sub: "Decks, pergolas & éclairage",
    calc_step2: "2. Gamme de Finitions & Matériaux",
    calc_finish_std: "Standard Moderne",
    calc_finish_std_sub: "Finitions durables et soignées",
    calc_finish_prem: "Rohi Premium",
    calc_finish_prem_sub: "Quartz, charnières à fermeture douce",
    calc_finish_lux: "Luxe Sur Mesure",
    calc_finish_lux_sub: "Marbre importé, domotique",
    calc_step3: "3. Surface Estimée",
    calc_est_header: "Budget Estimé",
    calc_est_sub: "Comprend la main-d'œuvre, la démolition propre, les matériaux et la gestion de projet.",
    calc_row_space: "Espace:",
    calc_row_finish: "Finition:",
    calc_row_time: "Délai Estimé:",
    calc_btn_send: "Planifier une Visite Technique",

    // Services
    serv_badge: "Notre Spécialité",
    serv_title: "Services de Rénovation de <span class=\"gradient-emerald\">Haut Niveau</span>",
    serv_desc: "Nous concevons et exécutons chaque détail pour garantir des espaces fonctionnels et d'avant-garde.",
    serv1_title: "Cuisines à Concept Ouvert",
    serv1_desc: "Transformation complète de cuisines avec îlots en cascade en quartz ou marbre et éclairage architectural.",
    serv1_item1: "Plans de travail en granit et quartz haute résistance",
    serv1_item2: "Meubles avec charnières Blum® à fermeture douce",
    serv1_item3: "Installation d'électroménagers encastrés",
    serv2_title: "Salles de Bain Spa & Design",
    serv2_desc: "Rénovation de salles de bain principales et invités. Douches à l'italienne, grands carreaux de porcelaine.",
    serv2_item1: "Receveurs de douche continus antidérapants",
    serv2_item2: "Miroirs rétroéclairés LED anti-buée",
    serv2_item3: "Robinetterie noir mat & laiton brossé",
    serv3_title: "Rénovation d'Intérieur & Agencement",
    serv3_desc: "Démolition stratégique de cloisons, faux plafonds avec éclairage LED indirect, parquet en noyer.",
    serv3_item1: "Redesign d'agencement & cloisons séches",
    serv3_item2: "Moulures décoratives & panneaux en tasseaux de bois",
    serv3_item3: "Isolation acoustique et thermique",

    // Portfolio
    port_badge: "Portfolio d'Excellence",
    port_title: "Explorez Nos Derniers <span class=\"gradient-emerald\">Projets</span>",
    port_desc: "Chaque résidence témoigne de notre engagement envers le détail et la qualité.",
    filter_all: "Tous",
    filter_kitchens: "Cuisines",
    filter_baths: "Salles de Bain",
    filter_interiors: "Intérieurs",
    port1_tag: "Cuisine de Luxe",
    port1_title: "Résidence Emerald Oak",
    port2_tag: "Suite Spa Master",
    port2_title: "Suite Bain Herringbone",
    port3_tag: "Cuisine Minimaliste",
    port3_title: "Cuisine Calacatta Modern",

    // Process
    proc_badge: "Méthodologie Garantie",
    proc_title: "Le Processus <span class=\"gradient-emerald\">Rohi Remodeling</span>",
    proc_desc: "Nous garantissons une exécution propre, sans frais cachés et un respect strict des délais.",
    proc1_title: "Visite & Concept 3D",
    proc1_desc: "Nous réalisons le relevé métrique à votre domicile et créons le concept architectural.",
    proc2_title: "Devis Forfaitaire",
    proc2_desc: "Nous présentons un budget transparent détaillé sans frais cachés pendant le chantier.",
    proc3_title: "Exécution & Propreté",
    proc3_desc: "Notre équipe travaille sous supervision technique continue en protégeant les zones de vie.",
    proc4_title: "Livraison & Garantie",
    proc4_desc: "Inspection finale des finitions avec vous et remise du certificat de garantie de 5 ans.",

    // Testimonials
    test_badge: "Avis Clients Réels",
    test_title: "Ce Que Disent Nos <span class=\"gradient-emerald\">Clients</span>",
    test1_quote: "\"Rohi Remodeling a totalement métamorphosé notre cuisine. La qualité des meubles verts et de l'îlot en marbre a dépassé toutes nos attentes.\"",
    test1_name: "Carlos & Maria M.",
    test1_sub: "Rénovation de Cuisine Complète",
    test2_quote: "\"Le niveau de propreté sur le chantier était remarquable. L'équipe a protégé toute notre maison et notre nouvelle douche spa est incroyable.\"",
    test2_name: "Valeria R.",
    test2_sub: "Rénovation Salle de Bain Master",

    // Contact
    contact_badge: "Consultation Directe",
    contact_title: "Parlons de Votre Prochain <span class=\"gradient-emerald\">Projet</span>",
    contact_desc: "Planifiez une visite technique avec nos spécialistes. Réponse en moins de 24 heures.",
    contact_phone_title: "Téléphone / WhatsApp",
    contact_email_title: "Adresse Email",
    contact_hours_title: "Heures d'Ouverture",
    contact_hours_val: "Lun - Sam: 8h00 - 19h00",
    form_name_label: "Nom Complet",
    form_name_ph: "ex: Robert Gomez",
    form_phone_label: "Téléphone",
    form_phone_ph: "+1 (555) 000-0000",
    form_space_label: "Type de Projet",
    form_msg_label: "Détails du Projet",
    form_msg_ph: "Décrivez ce que vous souhaitez rénover...",
    form_btn_submit: "Envoyer le Message",

    // Footer
    footer_desc: "Spécialistes de l'architecture d'intérieur, de la rénovation haut de gamme et du design sur mesure.",
    footer_nav: "Navigation",
    footer_serv: "Services",
    footer_contact: "Contact",
    footer_rights: "&copy; 2026 Rohi Remodeling. Tous droits réservés.",
    footer_sub: "Conçu pour l'Excellence Résidentielle",
    toast_title: "Message Envoyé avec Succès!",
    toast_sub: "Un conseiller Rohi vous contactera sous peu."
  }
};

let currentLang = localStorage.getItem('rohi_lang') || 'en';

function initI18n() {
  const langSelect = document.getElementById('langSelect');
  if (langSelect) {
    langSelect.value = currentLang;
    langSelect.addEventListener('change', (e) => {
      setLanguage(e.target.value);
    });
  }
  setLanguage(currentLang);
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('rohi_lang', lang);
  document.documentElement.lang = lang;

  const dict = translations[lang];

  // Update elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Update elements with placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });
}

/* --------------------------------------------------------------------------
   1. Header Scroll & Mobile Navigation
   -------------------------------------------------------------------------- */
function initHeader() {
  const header = document.querySelector('.header');
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.className = navMenu.classList.contains('open') ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
      }
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        if (mobileToggle.querySelector('i')) {
          mobileToggle.querySelector('i').className = 'fa-solid fa-bars';
        }
      });
    });
  }
}

/* --------------------------------------------------------------------------
   2. Interactive Before / After Transformation Slider
   -------------------------------------------------------------------------- */
function initBeforeAfterSlider() {
  const sliderRange = document.getElementById('baRange');
  const beforeWrapper = document.getElementById('baBeforeWrapper');
  const handle = document.getElementById('baHandle');

  if (!sliderRange || !beforeWrapper || !handle) return;

  function updateSliderPosition(val) {
    beforeWrapper.style.width = `${val}%`;
    handle.style.left = `${val}%`;
  }

  sliderRange.addEventListener('input', (e) => {
    updateSliderPosition(e.target.value);
  });

  updateSliderPosition(50);
}

/* --------------------------------------------------------------------------
   3. Remodeling Cost Estimator (Interactive Calculator)
   -------------------------------------------------------------------------- */
function initCalculator() {
  const spaceButtons = document.querySelectorAll('#spaceOptions .calc-btn-option');
  const finishButtons = document.querySelectorAll('#finishOptions .calc-btn-option');
  const areaRange = document.getElementById('areaRange');
  const areaValDisplay = document.getElementById('areaValDisplay');
  
  const displayPrice = document.getElementById('calcDisplayPrice');
  const displaySpaceName = document.getElementById('calcSpaceName');
  const displayFinishName = document.getElementById('calcFinishName');
  const displayTime = document.getElementById('calcTime');
  const sendEstimateBtn = document.getElementById('sendEstimateBtn');

  let state = {
    space: 'cocina',
    spaceKey: 'calc_space_kitchen',
    finish: 'premium',
    finishKey: 'calc_finish_prem',
    area: 400 // sq ft
  };

  const baseRates = {
    cocina: { base: 35, timeMultiplier: 0.01 },
    bano: { base: 42, timeMultiplier: 0.012 },
    total: { base: 30, timeMultiplier: 0.008 },
    exterior: { base: 22, timeMultiplier: 0.005 }
  };

  const finishMultipliers = {
    standard: 1.0,
    premium: 1.35,
    luxury: 1.8
  };

  function setupOptionGroup(buttons, callback) {
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        callback(btn.dataset.val, btn.dataset.i18nKey);
        calculate();
      });
    });
  }

  setupOptionGroup(spaceButtons, (val, i18nKey) => {
    state.space = val;
    state.spaceKey = i18nKey;
  });

  setupOptionGroup(finishButtons, (val, i18nKey) => {
    state.finish = val;
    state.finishKey = i18nKey;
  });

  if (areaRange) {
    areaRange.addEventListener('input', (e) => {
      state.area = parseInt(e.target.value);
      if (areaValDisplay) areaValDisplay.textContent = `${state.area} sq ft`;
      calculate();
    });
  }

  function calculate() {
    const spaceConfig = baseRates[state.space] || baseRates.cocina;
    const finishMult = finishMultipliers[state.finish] || 1.0;

    const pricePerSqFt = spaceConfig.base * finishMult;
    const totalEstimate = pricePerSqFt * state.area;

    const minEstimate = Math.round(totalEstimate * 0.9);
    const maxEstimate = Math.round(totalEstimate * 1.15);

    const estimatedWeeks = Math.max(2, Math.round(state.area * spaceConfig.timeMultiplier));

    if (displayPrice) {
      displayPrice.textContent = `$${minEstimate.toLocaleString()} - $${maxEstimate.toLocaleString()} USD`;
    }

    // Dynamic translate for output rows
    const dict = translations[currentLang] || translations.en;
    if (displaySpaceName) displaySpaceName.textContent = dict[state.spaceKey] || state.spaceKey;
    if (displayFinishName) displayFinishName.textContent = dict[state.finishKey] || state.finishKey;
    if (displayTime) displayTime.textContent = `${estimatedWeeks} - ${estimatedWeeks + 2} ${currentLang === 'es' ? 'Semanas' : currentLang === 'fr' ? 'Semaines' : 'Weeks'}`;
  }

  if (sendEstimateBtn) {
    sendEstimateBtn.addEventListener('click', () => {
      const messageField = document.getElementById('contactMessage');
      const spaceSelect = document.getElementById('contactSpace');

      if (spaceSelect) spaceSelect.value = state.space;
      if (messageField) {
        const dict = translations[currentLang] || translations.en;
        const spaceName = dict[state.spaceKey] || state.space;
        messageField.value = `I estimated a project for ${spaceName} (${state.area} sq ft) with budget ${displayPrice.textContent}. I would like to schedule a technical visit.`;
      }

      const contactSection = document.getElementById('contacto');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  calculate();
}

/* --------------------------------------------------------------------------
   4. Portfolio Gallery Filtering
   -------------------------------------------------------------------------- */
function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.dataset.filter;

      portfolioCards.forEach(card => {
        if (filterVal === 'all' || card.dataset.category === filterVal) {
          card.style.display = 'block';
          setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'scale(1)'; }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => { card.style.display = 'none'; }, 300);
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   5. Contact Form Toast Notification
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const toast = document.getElementById('toastMsg');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (toast) {
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 4000);
    }

    form.reset();
  });
}
