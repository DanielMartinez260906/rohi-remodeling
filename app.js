/* ==========================================================================
   ROHI REMODELING - Comprehensive Exterior & Interior i18n JavaScript
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
    nav_exteriors: "Exteriors & Porches",
    nav_transform: "Before & After",
    nav_estimator: "Estimator",
    nav_projects: "Projects",
    nav_process: "Process",
    nav_contact: "Contact",
    nav_cta: "Free Estimate",

    // Hero
    hero_badge: "Licensed & Insured • US Exterior & Interior Specialists",
    hero_title: "Custom Porches, Roofing, Concrete & Interior <span class=\"gradient-emerald\">Remodeling</span>.",
    hero_desc: "Enhance your home's curb appeal and indoor comfort. We build custom timber porches, architectural roofs, stamped concrete extensions, and luxury interior spaces.",
    hero_btn_calc: "Instant Cost Estimator",
    hero_btn_view: "Explore Transformations",
    stat_projects: "US Homes Transformed",
    stat_warranty: "Structural Warranty",
    stat_rating: "5-Star Customer Rating",
    badge_luxury_title: "Custom Timber & Stone",
    badge_luxury_sub: "Porches, Decks & Patios",
    badge_warranty_title: "10-Year Structural Warranty",
    badge_warranty_sub: "Fully Bonded & Insured",

    // Services
    serv_badge: "Complete Home Services",
    serv_title: "Premier Exterior & Interior <span class=\"gradient-emerald\">Solutions</span>",
    serv_desc: "From custom timber-framed porches and roofing to stamped concrete driveways and kitchen remodels.",
    
    serv_porch_title: "Custom Covered Porches & Sunrooms",
    serv_porch_desc: "Expand your outdoor living space with timber-framed front porches, screened sunrooms, outdoor fireplaces, and cedar pergolas.",
    serv_porch_i1: "Gable & hip roof extensions with timber posts",
    serv_porch_i2: "Integrated outdoor fireplaces & recessed lighting",
    serv_porch_i3: "Screened-in porches with Eze-Breeze® windows",

    serv_roof_title: "Architectural Roofing & Shingles",
    serv_roof_desc: "Complete roof replacements engineered for storm resistance using GAF & CertainTeed 50-year architectural shingles and seamless gutters.",
    serv_roof_i1: "GAF Timberline HDZ® 50-year architectural shingles",
    serv_roof_i2: "Seamless aluminum gutters & leaf guards",
    serv_roof_i3: "Standing seam metal accent roofing",

    serv_concrete_title: "Concrete Extensions & Stamped Patios",
    serv_concrete_desc: "Durable concrete driveway expansions, decorative stamped concrete patios, walkways, retaining walls, and custom fire pit areas.",
    serv_concrete_i1: "Stamped & colored decorative patio finishes",
    serv_concrete_i2: "Reinforced driveway extensions & RV pads",
    serv_concrete_i3: "Built-in masonry fire pits & stone seating",

    serv_interior_title: "Luxury Interior Remodeling",
    serv_interior_desc: "Open-concept kitchen overhauls, master bathroom spa suites, basement finishing, and custom fireplace accent walls.",
    serv_interior_i1: "Quartz waterfall kitchen islands & custom cabinets",
    serv_interior_i2: "Walk-in curbless tile showers & vanities",
    serv_interior_i3: "Finished basements & open layout framing",

    // Before & After
    ba_badge: "Before & After Showcase",
    ba_title: "Slide to Discover the <span class=\"gradient-emerald\">Transformation</span>",
    ba_desc: "Drag the center controller to view the striking difference between an outdated home and our custom remodeling.",
    ba_tag_before: "Before",
    ba_tag_after: "After",

    // Calculator
    calc_badge: "Transparent US Pricing",
    calc_title: "Interactive Remodeling <span class=\"gradient-emerald\">Estimator</span>",
    calc_desc: "Select your project type, material tier, and square footage to get an instant estimate range.",
    calc_step1: "1. Select Project Scope",
    calc_space_porch: "Covered Porch / Deck",
    calc_space_porch_sub: "Timber frames, gables & stone",
    calc_space_roof: "Architectural Roof",
    calc_space_roof_sub: "50-yr shingles & seamless gutters",
    calc_space_concrete: "Concrete Extension",
    calc_space_concrete_sub: "Stamped patio & driveway pads",
    calc_space_interior: "Kitchen & Bath",
    calc_space_interior_sub: "Quartz islands & spa showers",
    calc_step2: "2. Finish & Material Quality",
    calc_finish_std: "Standard Craftsman",
    calc_finish_std_sub: "Durable regional materials",
    calc_finish_prem: "Rohi Premium",
    calc_finish_prem_sub: "Cedar beams, GAF HDZ, stamped concrete",
    calc_finish_lux: "Luxury Estate",
    calc_finish_lux_sub: "Natural stone, metal roofs, smart outdoor living",
    calc_step3: "3. Project Area Size",
    calc_est_header: "Estimated Budget Range",
    calc_est_sub: "Includes labor, permits, cleanup, materials, and structural warranty.",
    calc_row_space: "Scope:",
    calc_row_finish: "Tier:",
    calc_row_time: "Est. Duration:",
    calc_btn_send: "Request Free On-Site Estimate",

    // Portfolio
    port_badge: "Our Work",
    port_title: "Recent Featured <span class=\"gradient-emerald\">Projects</span>",
    port_desc: "Explore our exterior porches, roofing replacements, concrete patios, and interior remodels.",
    filter_all: "All Projects",
    filter_porches: "Porches & Decks",
    filter_roofing: "Roofing",
    filter_interiors: "Interiors",
    port1_tag: "Covered Porch",
    port1_title: "Timber Gable Porch & Stone Fireplace",
    port2_tag: "Architectural Roofing",
    port2_title: "Full Shingle Roof & Stone Facade",
    port3_tag: "Kitchen & Interior",
    port3_title: "Emerald & Quartz Open Kitchen",
    port4_tag: "Outdoor Living",
    port4_title: "Covered Patio & Outdoor Living Space",

    // Process
    proc_badge: "The Rohi Method",
    proc_title: "How We Build Your <span class=\"gradient-emerald\">Dream Home</span>",
    proc_desc: "Clear communication, HOA permitting assistance, clean worksites, and guaranteed delivery timelines.",
    proc1_title: "1. Free On-Site Consultation",
    proc1_desc: "We visit your property, measure dimensions, review HOA guidelines, and sketch 3D design concepts.",
    proc2_title: "2. Transparent Itemized Quote",
    proc2_desc: "You receive a fixed proposal listing material specs, permits, and exact labor costs with zero surprises.",
    proc3_title: "3. Professional Construction",
    proc3_desc: "Our licensed team frames, installs, and constructs your project while keeping your lawn clean.",
    proc4_title: "4. Final Inspection & Warranty",
    proc4_desc: "Walkthrough with the homeowner and delivery of our 10-Year Structural Warranty certificate.",

    // Testimonials
    test_badge: "Verified Reviews",
    test_title: "Trusted by Homeowners <span class=\"gradient-emerald\">Nationwide</span>",
    test1_quote: "\"Rohi Remodeling built our timber gable covered porch with a stone fireplace. It completely elevated our backyard and curb appeal! Professional crew and finished on time.\"",
    test1_name: "James & Sarah K.",
    test1_sub: "Covered Porch & Patio Extension",
    test2_quote: "\"Replaced our roof with GAF architectural shingles and remodeled our main kitchen. Their craftsmanship and cleanup were top-notch.\"",
    test2_name: "Michael D.",
    test2_sub: "Roofing & Kitchen Renovation",

    // Contact
    contact_badge: "Get In Touch",
    contact_title: "Schedule Your Free On-Site <span class=\"gradient-emerald\">Estimate</span>",
    contact_desc: "Fill out the form below or call us directly. Licensed, bonded, and insured.",
    contact_phone_title: "Call / Text Us",
    contact_email_title: "Email Inquiry",
    contact_hours_title: "Office Hours",
    contact_hours_val: "Mon - Sat: 7:00 AM - 6:00 PM EST",
    form_name_label: "Full Name",
    form_name_ph: "e.g. John Miller",
    form_phone_label: "Phone Number",
    form_phone_ph: "(555) 234-5678",
    form_space_label: "Primary Project Type",
    form_msg_label: "Project Details / Address",
    form_msg_ph: "Tell us about your porch, roof, concrete, or interior project...",
    form_btn_submit: "Submit Request for Free Estimate",

    // Footer
    footer_desc: "Licensed & insured general contractor specializing in custom porches, architectural roofing, concrete extensions, and luxury interiors.",
    footer_nav: "Navigation",
    footer_serv: "Specialties",
    footer_contact: "Contact Info",
    footer_rights: "&copy; 2026 Rohi Remodeling. Licensed, Bonded & Insured.",
    footer_sub: "American Quality Construction Standards",
    toast_title: "Estimate Request Received!",
    toast_sub: "Our remodeling specialist will call you within 24 hours."
  },

  es: {
    // Nav
    nav_home: "Inicio",
    nav_services: "Servicios",
    nav_exteriors: "Porches y Exteriores",
    nav_transform: "Antes y Después",
    nav_estimator: "Presupuestador",
    nav_projects: "Proyectos",
    nav_process: "Proceso",
    nav_contact: "Contacto",
    nav_cta: "Cotización Gratis",

    // Hero
    hero_badge: "Licenciados y Asegurados • Especialistas en Exteriores e Interiores",
    hero_title: "Porches a Medida, Techos, Concreto y <span class=\"gradient-emerald\">Remodelación</span>.",
    hero_desc: "Aumenta la elegancia exterior e interior de tu propiedad. Construimos porches de madera a medida, techos arquitectónicos, extensiones de concreto y espacios interiores de lujo.",
    hero_btn_calc: "Estimador de Costos",
    hero_btn_view: "Explorar Trabajos",
    stat_projects: "Casas Transformadas",
    stat_warranty: "Garantía Estructural",
    stat_rating: "Valoración 5 Estrellas",
    badge_luxury_title: "Madera & Piedra Natural",
    badge_luxury_sub: "Porches, Decks y Patios",
    badge_warranty_title: "10 Años de Garantía",
    badge_warranty_sub: "Licenciados y Asegurados",

    // Services
    serv_badge: "Servicios Integrales",
    serv_title: "Soluciones de Renombre en <span class=\"gradient-emerald\">Exteriores e Interiores</span>",
    serv_desc: "Desde porches cubiertos y techados hasta patios de concreto estampado y remodelación de cocinas.",
    
    serv_porch_title: "Porches Cubiertos y Terrazas a Medida",
    serv_porch_desc: "Amplía tu espacio exterior con porches frontales en madera de cedro, chimeneas de piedra, pérgolas y cerramientos.",
    serv_porch_i1: "Estructuras en madera con vigas vista y postes",
    serv_porch_i2: "Chimeneas integradas e iluminación empotrada",
    serv_porch_i3: "Porches cerrados con mosquiteros y ventanas",

    serv_roof_title: "Techos Arquitectónicos y Coberturas",
    serv_roof_desc: "Reemplazo de techos resistentes a tormentas con tejas arquitectónicas GAF & CertainTeed garantizadas a 50 años.",
    serv_roof_i1: "Tejas arquitectónicas GAF Timberline HDZ®",
    serv_roof_i2: "Canales de aluminio continuo y rejillas anti-hojas",
    serv_roof_i3: "Detalles en techado metálico con costura alzada",

    serv_concrete_title: "Extensiones de Concreto y Patios Estampados",
    serv_concrete_desc: "Ampliación de entradas de vehículos (driveways), patios de concreto estampado decorativo, caminos y pozos de fuego.",
    serv_concrete_i1: "Acabados estampados y coloreados decorativos",
    serv_concrete_i2: "Ampliación de losas de concreto reforzado",
    serv_concrete_i3: "Pozos de fuego de mampostería y bancos de piedra",

    serv_interior_title: "Remodelación de Interiores de Lujo",
    serv_interior_desc: "Renovación integral de cocinas con concepto abierto, baños estilo spa, sótanos acabados y chimeneas decorativas.",
    serv_interior_i1: "Islas de cuarzo en cascada y gabinetes custom",
    serv_interior_i2: "Duchas continuas sin escalón en porcelanato",
    serv_interior_i3: "Acabado de sótanos y redistribución de espacios",

    // Before & After
    ba_badge: "Efecto Antes y Después",
    ba_title: "Desliza para ver la <span class=\"gradient-emerald\">Transformación</span>",
    ba_desc: "Mueve el controlador para comparar una propiedad original frente a nuestra renovación a medida.",
    ba_tag_before: "Antes",
    ba_tag_after: "Después",

    // Calculator
    calc_badge: "Precios Transparentes",
    calc_title: "Estimador de Remodelación <span class=\"gradient-emerald\">Interactivo</span>",
    calc_desc: "Elige el tipo de trabajo, la calidad de materiales y el área para obtener un presupuesto aproximado.",
    calc_step1: "1. Tipo de Proyecto",
    calc_space_porch: "Porche Cubierto / Terraza",
    calc_space_roof_sub: "Tejas de 50 años y canales continuos",
    calc_space_roof: "Techo Arquitectónico",
    calc_space_concrete: "Extensión de Concreto",
    calc_space_concrete_sub: "Patio estampado & entrada de autos",
    calc_space_porch_sub: "Estructuras de madera & piedra",
    calc_space_interior: "Cocina y Baño",
    calc_space_interior_sub: "Islas de cuarzo y duchas spa",
    calc_step2: "2. Nivel de Acabados",
    calc_finish_std: "Estándar Craftsman",
    calc_finish_std_sub: "Materiales regionales duraderos",
    calc_finish_prem: "Prémium Rohi",
    calc_finish_prem_sub: "Vigas de cedro, GAF HDZ, concreto estampado",
    calc_finish_lux: "Luxury Estate",
    calc_finish_lux_sub: "Piedra natural, techo metálico, exterior smart",
    calc_step3: "3. Área del Proyecto",
    calc_est_header: "Rango de Presupuesto Estimado",
    calc_est_sub: "Incluye mano de obra, permisos, limpieza, materiales y garantía estructural.",
    calc_row_space: "Proyecto:",
    calc_row_finish: "Calidad:",
    calc_row_time: "Duración Est.:",
    calc_btn_send: "Solicitar Presupuesto Gratis en Sitio",

    // Portfolio
    port_badge: "Nuestros Trabajos",
    port_title: "Proyectos Recientes <span class=\"gradient-emerald\">Destacados</span>",
    port_desc: "Explora nuestros porches exteriores, reemplazo de techos, patios de concreto e interiores.",
    filter_all: "Todos",
    filter_porches: "Porches y Decks",
    filter_roofing: "Techos",
    filter_interiors: "Interiores",
    port1_tag: "Porche Cubierto",
    port1_title: "Porche en Madera con Chimenea de Piedra",
    port2_tag: "Techo Arquitectónico",
    port2_title: "Techo en Teja Shingle y Fachada en Piedra",
    port3_tag: "Cocina e Interior",
    port3_title: "Cocina Abierta en Cuarzo y Esmeralda",
    port4_tag: "Espacio Exterior",
    port4_title: "Patio Cubierto y Sala al Aire Libre",

    // Process
    proc_badge: "El Método Rohi",
    proc_title: "Cómo Construimos tu <span class=\"gradient-emerald\">Hogar Soñado</span>",
    proc_desc: "Comunicación clara, ayuda con permisos de HOA, obras limpias y entregas en fecha.",
    proc1_title: "1. Consulta Gratis en Sitio",
    proc1_desc: "Visitamos tu propiedad, tomamos medidas, revisamos regulaciones de HOA y diseñamos en 3D.",
    proc2_title: "2. Cotización Detallada",
    proc2_desc: "Recibes una propuesta transparente con costos de materiales, permisos y mano de obra.",
    proc3_title: "3. Construcción Profesional",
    proc3_desc: "Nuestro equipo certificado construye tu proyecto manteniendo tu jardín impecable.",
    proc4_title: "4. Inspección & Garantía",
    proc4_desc: "Inspección final junto a ti y entrega del Certificado de Garantía Estructural de 10 Años.",

    // Testimonials
    test_badge: "Opiniones Verificadas",
    test_title: "Confianza de Propietarios <span class=\"gradient-emerald\">en Todo el País</span>",
    test1_quote: "\"Rohi Remodeling construyó nuestro porche de madera cubierto con chimenea de piedra. ¡Transformó totalmente nuestro patio! Trabajo muy profesional.\"",
    test1_name: "James & Sarah K.",
    test1_sub: "Porche Cubierto & Patio",
    test2_quote: "\"Reemplazaron nuestro techo con tejas arquitectónicas GAF y remodelaron la cocina. Su limpieza y acabados fueron excelentes.\"",
    test2_name: "Michael D.",
    test2_sub: "Techo & Renovación de Cocina",

    // Contact
    contact_badge: "Contáctanos",
    contact_title: "Agenda tu Presupuesto <span class=\"gradient-emerald\">Gratuito en Sitio</span>",
    contact_desc: "Completa el formulario o llámanos directamente. Licenciados y asegurados.",
    contact_phone_title: "Llámanos o Escríbenos",
    contact_email_title: "Correo Electrónico",
    contact_hours_title: "Horario de Oficina",
    contact_hours_val: "Lun - Sáb: 7:00 AM - 6:00 PM EST",
    form_name_label: "Nombre Completo",
    form_name_ph: "Ej: Juan Pérez",
    form_phone_label: "Teléfono",
    form_phone_ph: "(555) 234-5678",
    form_space_label: "Tipo de Proyecto Principal",
    form_msg_label: "Detalles del Proyecto / Dirección",
    form_msg_ph: "Cuéntanos sobre tu porche, techo, concreto o proyecto de interior...",
    form_btn_submit: "Solicitar Cotización Gratuita",

    // Footer
    footer_desc: "Contratistas generales licenciados y asegurados especializados en porches, techos arquitectónicos, extensiones de concreto e interiores.",
    footer_nav: "Navegación",
    footer_serv: "Especialidades",
    footer_contact: "Contacto",
    footer_rights: "&copy; 2026 Rohi Remodeling. Licenciados y Asegurados.",
    footer_sub: "Estándares Estadounidenses de Construcción",
    toast_title: "¡Solicitud Recibida!",
    toast_sub: "Un especialista de Rohi se comunicará contigo en 24 horas."
  },

  fr: {
    // Nav
    nav_home: "Accueil",
    nav_services: "Services",
    nav_exteriors: "Porches & Extérieurs",
    nav_transform: "Avant & Après",
    nav_estimator: "Estimateur",
    nav_projects: "Projets",
    nav_process: "Processus",
    nav_contact: "Contact",
    nav_cta: "Devis Gratuit",

    // Hero
    hero_badge: "Licencié & Assuré • Spécialistes Extérieur & Intérieur US",
    hero_title: "Porches Sur Mesure, Toitures, Béton & <span class=\"gradient-emerald\">Rénovation</span>.",
    hero_desc: "Valorisez votre maison. Nous construisons des porches en bois sur mesure, des toitures architecturales, des extensions en béton imprimé et des intérieurs de luxe.",
    hero_btn_calc: "Calculateur de Budget",
    hero_btn_view: "Explorer les Réalisations",
    stat_projects: "Maisons Transformées",
    stat_warranty: "Garantie Structurelle",
    stat_rating: "Avis Clients 5 Étoiles",
    badge_luxury_title: "Bois Noble & Pierre",
    badge_luxury_sub: "Porches, Decks & Patios",
    badge_warranty_title: "Garantie Structurelle 10 Ans",
    badge_warranty_sub: "Entièrement Assuré & Certifié",

    // Services
    serv_badge: "Services Complets",
    serv_title: "Solutions d'Excellence en <span class=\"gradient-emerald\">Extérieur & Intérieur</span>",
    serv_desc: "Des porches couverts en bois et toitures aux allées en béton imprimé et rénovation de cuisines.",
    
    serv_porch_title: "Porches Couverts & Verrières Sur Mesure",
    serv_porch_desc: "Agrandissez votre espace de vie extérieur avec des porches en cèdre, cheminées en pierre et vérandas.",
    serv_porch_i1: "Structures en charpente bois avec poutres apparentes",
    serv_porch_i2: "Cheminées extérieures intégrées & spots LED",
    serv_porch_i3: "Porches fermés avec fenêtres panoramas",

    serv_roof_title: "Toitures Architecturales & Bardeaux",
    serv_roof_desc: "Remplacement complet de toiture résistante aux tempêtes avec bardeaux architecturaux GAF 50 ans et gouttières alu.",
    serv_roof_i1: "Bardeaux architecturaux GAF Timberline HDZ® 50 ans",
    serv_roof_i2: "Gouttières aluminium sans soudure & pare-feuilles",
    serv_roof_i3: "Finition de toiture métallique à joint debout",

    serv_concrete_title: "Extensions en Béton & Patios Imprimés",
    serv_concrete_desc: "Agrandissement d'allées de garage, patios en béton imprimé décoratif, allées piétonnes et foyers en pierre.",
    serv_concrete_i1: "Finitions béton imprimé & teinté décoratif",
    serv_concrete_i2: "Extensions de dalles béton armé pour garages/RV",
    serv_concrete_i3: "Foyers extérieurs en maçonnerie & bancs en pierre",

    serv_interior_title: "Rénovation d'Intérieur de Luxe",
    serv_interior_desc: "Cuisines à concept ouvert, suites parentales avec douche spa, aménagement de sous-sols.",
    serv_interior_i1: "Îlots de cuisine en cascade en quartz & meubles sur mesure",
    serv_interior_i2: "Douches à l'italienne sans marche en porcelaine",
    serv_interior_i3: "Finition de sous-sols & réaménagement d'espaces",

    // Before & After
    ba_badge: "Effet Avant & Après",
    ba_title: "Glissez pour Découvrir la <span class=\"gradient-emerald\">Transformation</span>",
    ba_desc: "Faites glisser le curseur pour comparer une maison d'origine et notre rénovation sur mesure.",
    ba_tag_before: "Avant",
    ba_tag_after: "Après",

    // Calculator
    calc_badge: "Tarification Transparente",
    calc_title: "Estimateur de Rénovation <span class=\"gradient-emerald\">Interactif</span>",
    calc_desc: "Sélectionnez le type de projet, la gamme de matériaux et la surface pour obtenir une estimation.",
    calc_step1: "1. Type de Projet",
    calc_space_porch: "Porche Couvert / Deck",
    calc_space_porch_sub: "Charpente bois & cheminée pierre",
    calc_space_roof: "Toiture Architecturale",
    calc_space_roof_sub: "Bardeaux 50 ans & gouttières alu",
    calc_space_concrete: "Extension en Béton",
    calc_space_concrete_sub: "Patio imprimé & allée de garage",
    calc_space_interior: "Cuisine & Salle de Bain",
    calc_space_interior_sub: "Îlots quartz & douches italiennes",
    calc_step2: "2. Gamme de Finitions",
    calc_finish_std: "Standard Craftsman",
    calc_finish_std_sub: "Matériaux régionaux durables",
    calc_finish_prem: "Rohi Premium",
    calc_finish_prem_sub: "Poutres en cèdre, GAF HDZ, béton imprimé",
    calc_finish_lux: "Propriété de Luxe",
    calc_finish_lux_sub: "Pierre naturelle, toit métal, extérieur connecté",
    calc_step3: "3. Surface du Projet",
    calc_est_header: "Fourchette de Budget Estimée",
    calc_est_sub: "Comprend main-d'œuvre, permis, nettoyage, matériaux et garantie structurelle.",
    calc_row_space: "Projet:",
    calc_row_finish: "Gamme:",
    calc_row_time: "Durée Estimée:",
    calc_btn_send: "Demander une Visite Gratuite Sur Place",

    // Portfolio
    port_badge: "Nos Réalisations",
    port_title: "Projets Récents <span class=\"gradient-emerald\">En Vedette</span>",
    port_desc: "Découvrez nos porches extérieurs, toitures, patios en béton et intérieurs rénovés.",
    filter_all: "Tous les Projets",
    filter_porches: "Porches & Decks",
    filter_roofing: "Toitures",
    filter_interiors: "Intérieurs",
    port1_tag: "Porche Couvert",
    port1_title: "Porche en Bois & Cheminée en Pierre",
    port2_tag: "Toiture Architecturale",
    port2_title: "Toiture Bardeaux & Façade Pierre",
    port3_tag: "Cuisine & Intérieur",
    port3_title: "Cuisine Ouverte en Quartz & Émeraude",
    port4_tag: "Espace Extérieur",
    port4_title: "Patio Couvert & Salon de Jardin",

    // Process
    proc_badge: "Le Procédé Rohi",
    proc_title: "Comment Nous Construisons Votre <span class=\"gradient-emerald\">Maison de Rêve</span>",
    proc_desc: "Communication claire, aide aux permis HOA, chantiers propres et délais garantis.",
    proc1_title: "1. Consultation Gratuite Sur Place",
    proc1_desc: "Nous visitons votre propriété, prenons les mesures et dessinons le concept en 3D.",
    proc2_title: "2. Devis Détaillé Transparent",
    proc2_desc: "Vous recevez une proposition détaillée avec matériaux, permis et main-d'œuvre sans surprise.",
    proc3_title: "3. Construction Professionnelle",
    proc3_desc: "Notre équipe certifiée réalise votre projet tout en gardant votre terrain propre.",
    proc4_title: "4. Inspection Finale & Garantie",
    proc4_desc: "Inspection avec le propriétaire et remise du Certificat de Garantie Structurelle 10 Ans.",

    // Testimonials
    test_badge: "Avis Vérifiés",
    test_title: "Recommandé par des Propriétaires <span class=\"gradient-emerald\">Partout au Pays</span>",
    test1_quote: "\"Rohi Remodeling a construit notre porche couvert en bois avec une cheminée en pierre. Cela a totalement transformé notre extérieur! Équipe très pro.\"",
    test1_name: "James & Sarah K.",
    test1_sub: "Porche Couvert & Patio",
    test2_quote: "\"Remplacement de notre toiture en bardeaux GAF et rénovation de cuisine. Travail et nettoyage impeccables.\"",
    test2_name: "Michael D.",
    test2_sub: "Toiture & Rénovation Cuisine",

    // Contact
    contact_badge: "Contactez-Nous",
    contact_title: "Demandez Votre Devis <span class=\"gradient-emerald\">Gratuit Sur Place</span>",
    contact_desc: "Remplissez le formulaire ou appelez-nous directement. Licencié et assuré.",
    contact_phone_title: "Téléphone / SMS",
    contact_email_title: "Demande par Email",
    contact_hours_title: "Heures de Bureau",
    contact_hours_val: "Lun - Sam: 7h00 - 18h00 EST",
    form_name_label: "Nom Complet",
    form_name_ph: "ex: Jean Dupont",
    form_phone_label: "Téléphone",
    form_phone_ph: "(555) 234-5678",
    form_space_label: "Type de Projet Principal",
    form_msg_label: "Détails du Projet / Adresse",
    form_msg_ph: "Parlez-nous de votre porche, toiture, béton ou projet d'intérieur...",
    form_btn_submit: "Envoyer la Demande de Devis Gratuit",

    // Footer
    footer_desc: "Entrepreneur général licencié & assuré spécialisé dans les porches sur mesure, toitures architecturales, extensions en béton et intérieurs de luxe.",
    footer_nav: "Navigation",
    footer_serv: "Spécialités",
    footer_contact: "Contact",
    footer_rights: "&copy; 2026 Rohi Remodeling. Licencié & Assuré.",
    footer_sub: "Normes de Construction Américaines",
    toast_title: "Demande de Devis Reçue!",
    toast_sub: "Un spécialiste Rohi vous recontactera sous 24 heures."
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

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });
}

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

function initBeforeAfterSlider() {
  const sliderRange = document.getElementById('baRange');
  const sliderWrapper = document.querySelector('.ba-wrapper');

  if (!sliderRange || !sliderWrapper) return;

  function updateSliderPosition(val) {
    sliderWrapper.style.setProperty('--slider-pos', `${val}%`);
  }

  sliderRange.addEventListener('input', (e) => {
    updateSliderPosition(e.target.value);
  });

  updateSliderPosition(50);
}

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
    space: 'porch',
    spaceKey: 'calc_space_porch',
    finish: 'premium',
    finishKey: 'calc_finish_prem',
    area: 500
  };

  const baseRates = {
    porch: { base: 45, timeMultiplier: 0.008 },
    roof: { base: 18, timeMultiplier: 0.004 },
    concrete: { base: 22, timeMultiplier: 0.005 },
    interior: { base: 38, timeMultiplier: 0.01 }
  };

  const finishMultipliers = {
    standard: 1.0,
    premium: 1.4,
    luxury: 1.95
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
    const spaceConfig = baseRates[state.space] || baseRates.porch;
    const finishMult = finishMultipliers[state.finish] || 1.0;

    const pricePerSqFt = spaceConfig.base * finishMult;
    const totalEstimate = pricePerSqFt * state.area;

    const minEstimate = Math.round(totalEstimate * 0.9);
    const maxEstimate = Math.round(totalEstimate * 1.15);

    const estimatedWeeks = Math.max(2, Math.round(state.area * spaceConfig.timeMultiplier));

    if (displayPrice) {
      displayPrice.textContent = `$${minEstimate.toLocaleString()} - $${maxEstimate.toLocaleString()} USD`;
    }

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
        messageField.value = `Hi Rohi Remodeling, I estimated a project for ${spaceName} (${state.area} sq ft) with budget ${displayPrice.textContent}. Please contact me for a free on-site estimate.`;
      }

      const contactSection = document.getElementById('contacto');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  calculate();
}

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
