/* ==========================================================================
   ROHI REMODELING - Comprehensive Exterior & Interior i18n JavaScript
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initI18n();
  initHeader();
  initBeforeAfterSlider();
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
    nav_projects: "Projects",
    nav_contact: "Contact",
    nav_cta: "Free Estimate",

    // Hero
    hero_badge: "Licensed & Insured • North Georgia",
    hero_title: "Custom Decks, Screen Porches & Outdoor <span class=\"gradient-emerald\">Construction</span>.",
    hero_desc: "Hands-on remodeling and outdoor construction across North Georgia: Flowery Branch, Oakwood, Gainesville, Buford, Braselton, Suwanee, Johns Creek, and surrounding areas. We build custom multi-level decks, screen porches, and concrete extensions.",
    hero_btn_calc: "Request Estimate",
    hero_btn_view: "Explore Transformations",
    stat_projects: "Local Homes Transformed",
    stat_location: "Serving North Georgia",
    stat_rating: "5-Star Customer Rating",
    badge_luxury_title: "Custom Decks & Porches",
    badge_luxury_sub: "North Georgia Specialists",

    // Services
    serv_badge: "Our Specialties",
    serv_title: "Built Right Across <span class=\"gradient-emerald\">North Georgia</span>",
    serv_desc: "Specialized deck building, screened porches, patios, and concrete extensions crafted for homes in North Georgia.",
    
    serv_porch_title: "Custom Decks & Screen Porches",
    serv_porch_desc: "Expand your outdoor living with custom timber decks, screened porches, elevated stairs, and covered patios.",
    serv_porch_i1: "Multi-level timber and composite decks",
    serv_porch_i2: "Screened-in porches with premium finishes",
    serv_porch_i3: "Elevated framing and custom exterior stairs",

    serv_concrete_title: "Concrete Extensions & Patios",
    serv_concrete_desc: "Durable concrete driveway expansions, decorative stamped patios, and walkways.",
    serv_concrete_i1: "Reinforced patio pads & driveway extensions",
    serv_concrete_i2: "Stamped and decorative concrete finishes",
    serv_concrete_i3: "Retaining walls and concrete steps",

    serv_interior_title: "Interior Remodeling & Additions",
    serv_interior_desc: "Home additions, basement finishing, custom carpentry, and complete interior living space renovations.",
    serv_interior_i1: "Open-concept layouts and interior renovations",
    serv_interior_i2: "Finished basements and entertainment spaces",
    serv_interior_i3: "Custom trim, doors, and interior upgrades",

    // Before & After
    ba_badge: "Before & After",
    ba_title: "Slide to Discover the <span class=\"gradient-emerald\">Transformation</span>",
    ba_desc: "Drag the center controller to view the striking craftsmanship delivered across North Georgia.",
    ba_t1_title: "Project 01 • Exterior Remodel & Renovation",
    ba_t2_title: "Project 02 • Outdoor Living & Porch Addition",
    ba_t3_title: "Project 03 • Front Porch Cedar Columns & Railing Upgrade",
    ba_tag_before: "Before",
    ba_tag_after: "After",

    // Portfolio
    port_badge: "Featured Work",
    port_title: "Recent Outdoor <span class=\"gradient-emerald\">Projects</span>",
    port_desc: "Take a look at our recent deck builds, screen porches, and concrete walkways across North Georgia communities.",
    filter_all: "All Projects",
    filter_porches: "Decks & Porches",
    filter_interiors: "Additions & Concrete",
    port1_tag: "Screened Porch",
    port1_title: "Elevated Screened Porch & Cable Rail Deck",
    port2_tag: "Custom Deck",
    port2_title: "Elevated Covered Deck & Staircase",
    port3_tag: "Deck Extension",
    port3_title: "Backyard Deck & Multi-Tier Steps",
    port4_tag: "Concrete Walkway",
    port4_title: "Custom Concrete Walkway & Expansion",
    port5_tag: "Concrete Patio",
    port5_title: "Custom Concrete Slab & Expansion Joints",

    // Testimonials
    test_badge: "Verified Client Reviews",
    test_title: "Trusted Across <span class=\"gradient-emerald\">North Georgia</span>",
    test1_quote: "\"We used Rohi Remodeling to completely replace our aging and failing deck. From the initial meeting through completion they were exceptional. They showed up early and stay late, working hard until the project was complete. Carlos and Gilary were good communicators and seamlessly made any changes to the plan that we requested. The new deck is well built, we have an eye for quality and detail, they exceeded our expectations with a safe, functional, overbuilt and beautiful outdoor family space. I would highly recommend them and will use them on any projects we have in the future.\"",
    test1_name: "Stephen Adams",
    test1_sub: "Google Review • Verified Homeowner",
    test2_quote: "\"We had an excellent experience with this company building our screened porch. The quality of their work and craftsmanship truly exceeded our expectations. From the beginning, they took the time to answer all of our questions and provided thoughtful recommendations that helped us make the best decisions for our home.<br><br>They were professional, respectful, and detailed-oriented throughout the entire project. They went above and beyond to protect our plants and surrounding areas, and made sure everything was cleaned up at the end of each day, which we really appreciated.<br><br>The finished porch looks fantastic, and it's clear they take pride in their work. We highly recommend them to anyone looking for quality construction/remodeling and a team you can trust.\"",
    test2_name: "Dan & Denise B.",
    test2_sub: "Google Review • Verified Homeowner",
    test3_quote: "\"Rohi remodeled our entire home and made all my dreams come true with the outcome! They were easy to work with and very flexible when we changed our minds on things. The best part is, they are extremely reasonable with cost. Highly recommend them and made some new friends in the process.\"",
    test3_name: "Shanda Schaefer",
    test3_sub: "Google Review • Verified Homeowner",
    test4_quote: "\"Rohi remodeling was great to work with and professional. They poured our sidewalk and patio and covered the patio with a roof. We love it\"",
    test4_name: "Tabatha Edwards",
    test4_sub: "Google Review • Verified Homeowner",
    test5_quote: "\"ROHI delivered a great professional service by installing outdoor stairs to connect our decking to the yard. They were incredibly accommodating to our specific needs, fully waterproofing the space under the decking and handling the electrical work for a fan and light. They also installed a safety gate on the stairs, which was a great touch. The team was polite, efficient, and focused on quality. I highly recommend them!\"",
    test5_name: "Lucie Ryan",
    test5_sub: "Google Review • Verified Homeowner",
    test_btn_more: "Read More Reviews on Google",

    // Contact
    contact_badge: "Contact the Crew",
    contact_title: "Schedule Your Free On-Site <span class=\"gradient-emerald\">Estimate</span>",
    contact_desc: "Serving North Georgia: Flowery Branch, Oakwood, Gainesville, Buford, Braselton, Suwanee, Johns Creek, and surrounding areas. Fill out the form or call us directly.",
    contact_phone_title: "Call / Text Us",
    contact_email_title: "Email Inquiry",
    contact_hours_title: "Service Area",
    contact_hours_val: "North Georgia (Flowery Branch, Oakwood, Gainesville, Buford, Braselton, Suwanee, Johns Creek & Surrounding Areas)",
    form_name_label: "Full Name",
    form_name_ph: "e.g. John Miller",
    form_phone_label: "Phone Number",
    form_phone_ph: "(678) 629-9589",
    form_email_label: "Email Address",
    form_email_ph: "e.g. john@example.com",
    form_space_label: "Primary Project Type",
    calc_space_porch: "Covered Porch / Deck",
    calc_space_concrete: "Concrete Extension / Patio",
    calc_space_interior: "Interior Remodel / Addition",
    calc_space_other: "Other (Please specify)",
    form_other_label: "Specify Project Type",
    form_other_ph: "e.g. Pergola, Custom Framing, Painting...",
    form_msg_label: "Project Details / Location",
    form_msg_ph: "Tell us about your project in North Georgia (Flowery Branch, Oakwood, Buford, Gainesville, Suwanee, Johns Creek)...",
    form_btn_submit: "Send Estimate Request via Email",

    // Footer
    footer_desc: "Licensed & insured contractor specializing in custom decks, screen porches, concrete extensions, and home additions in North Georgia.",
    footer_nav: "Navigation",
    footer_serv: "Specialties",
    footer_contact: "Contact Info",
    footer_rights: "&copy; 2026 Rohi Remodeling. Licensed & Insured.",
    footer_sub: "Quality Craftsmanship in North Georgia",
    toast_title: "Estimate Request Ready!",
    toast_sub: "Opening your email to send to Rohiremodeling@hotmail.com..."
  },

  es: {
    // Nav
    nav_home: "Inicio",
    nav_services: "Servicios",
    nav_transform: "Antes y Después",
    nav_projects: "Proyectos",
    nav_contact: "Contacto",
    nav_cta: "Cotización Gratis",

    // Hero
    hero_badge: "Licenciados y Asegurados • Norte de Georgia",
    hero_title: "Decks a Medida, Porches y Construcción <span class=\"gradient-emerald\">Exterior</span>.",
    hero_desc: "Construcción artesanal y remodelación exterior en el Norte de Georgia: Flowery Branch, Oakwood, Gainesville, Buford, Braselton, Suwanee, Johns Creek y áreas cercanas. Construimos decks de varios niveles, porches con mosquiteros y extensiones de concreto.",
    hero_btn_calc: "Solicitar Cotización",
    hero_btn_view: "Explorar Trabajos",
    stat_projects: "Casas Transformadas",
    stat_location: "Servicio en el Norte de Georgia",
    stat_rating: "Valoración 5 Estrellas",
    badge_luxury_title: "Decks y Porches a Medida",
    badge_luxury_sub: "Especialistas en Norte de Georgia",

    // Services
    serv_badge: "Nuestras Especialidades",
    serv_title: "Construido con Calidad en <span class=\"gradient-emerald\">Norte de Georgia</span>",
    serv_desc: "Especialistas en construcción de decks, porches cerrados, patios y concreto para casas en el Norte de Georgia.",
    
    serv_porch_title: "Decks a Medida y Porches Cerrados",
    serv_porch_desc: "Amplía tu espacio exterior con decks de madera a medida, porches con mosquiteros, escaleras exteriores y terrazas cubiertas.",
    serv_porch_i1: "Decks de varios niveles en madera y composite",
    serv_porch_i2: "Porches cerrados con mosquiteros y finos acabados",
    serv_porch_i3: "Estructuras elevadas y escaleras exteriores a medida",

    serv_concrete_title: "Extensiones de Concreto y Patios",
    serv_concrete_desc: "Ampliación de entradas de vehículos (driveways), patios de concreto estampado y caminos (walkways).",
    serv_concrete_i1: "Losas reforzadas para patios y driveways",
    serv_concrete_i2: "Acabados de concreto estampado decorativo",
    serv_concrete_i3: "Muros de contención y escaleras de concreto",

    serv_interior_title: "Remodelación Interior y Adiciones",
    serv_interior_desc: "Ampliaciones de casas, acabado de sótanos (basements), carpintería fina y renovación de espacios interiores.",
    serv_interior_i1: "Distribución y diseño de espacios abiertos",
    serv_interior_i2: "Sótanos terminados y salas de entretenimiento",
    serv_interior_i3: "Molduras, puertas y mejoras interiores",

    // Before & After
    ba_badge: "Antes y Después",
    ba_title: "Desliza para ver la <span class=\"gradient-emerald\">Transformación</span>",
    ba_desc: "Mueve el controlador para comparar una propiedad original frente a nuestra construcción en el Norte de Georgia.",
    ba_t1_title: "Proyecto 01 • Remodelación Exterior de Casa",
    ba_t2_title: "Proyecto 02 • Construcción de Deck y Espacio Exterior",
    ba_t3_title: "Proyecto 03 • Columnas de Cedro y Barandales de Porche",
    ba_tag_before: "Antes",
    ba_tag_after: "Después",

    // Portfolio
    port_badge: "Trabajos Destacados",
    port_title: "Proyectos Exteriores <span class=\"gradient-emerald\">Recientes</span>",
    port_desc: "Explora nuestros decks, porches y trabajos en concreto construidos en comunidades del Norte de Georgia.",
    filter_all: "Todos",
    filter_porches: "Decks y Porches",
    filter_interiors: "Adiciones y Concreto",
    port1_tag: "Porche con Mosquiteros",
    port1_title: "Porche Elevado con Mosquiteros y Barandales de Cable",
    port2_tag: "Deck a Medida",
    port2_title: "Deck Elevado Cubierto con Escalera",
    port3_tag: "Ampliación de Deck",
    port3_title: "Deck Posterior con Gradas Escalonadas",
    port4_tag: "Camino de Concreto",
    port4_title: "Camino Lateral y Losa de Concreto",
    port5_tag: "Patio de Concreto",
    port5_title: "Losa de Concreto con Juntas Geométricas",

    // Testimonials
    test_badge: "Reseñas Verificadas de Clientes",
    test_title: "Confianza en el <span class=\"gradient-emerald\">Norte de Georgia</span>",
    test1_quote: "\"Contratamos a Rohi Remodeling para reemplazar completamente nuestro deck deteriorado. Desde la reunión inicial hasta la finalización fueron excepcionales. Llegaban temprano y se quedaban hasta tarde, trabajando duro hasta terminar el proyecto. Carlos y Gilary se comunicaron de maravilla y adaptaron sin problemas cualquier cambio que pedimos. El nuevo deck está muy bien construido; tenemos buen ojo para la calidad y el detalle, y superaron nuestras expectativas con un espacio familiar seguro, funcional, sólido y hermoso. Los recomiendo ampliamente y los contrataré para futuros proyectos.\"",
    test1_name: "Stephen Adams",
    test1_sub: "Google Review • Reemplazo de Deck",
    test2_quote: "\"Tuvimos una experiencia excelente con esta empresa construyendo nuestro porche con mosquitero (screened porch). La calidad de su trabajo y su artesanía realmente superaron nuestras expectativas. Desde el principio se tomaron el tiempo para responder todas nuestras dudas y nos dieron recomendaciones muy acertadas para tomar la mejor decisión.<br><br>Fueron profesionales, respetuosos y atentos al detalle en todo momento. Hicieron todo lo posible por proteger nuestras plantas y áreas alrededor, y se aseguraron de dejar todo limpio al final de cada día, lo cual apreciamos mucho.<br><br>El porche terminado se ve fantástico y es evidente el orgullo que sienten por su trabajo. Los recomendamos ampliamente a cualquiera que busque una construcción de calidad y un equipo de confianza.\"",
    test2_name: "Dan & Denise B.",
    test2_sub: "Google Review • Porche con Mosquiteros",
    test3_quote: "\"¡Rohi remodeló toda nuestra casa e hizo realidad todos mis sueños con el resultado! Fue muy fácil trabajar con ellos y fueron sumamente flexibles cuando cambiamos de opinión en algunos detalles. Lo mejor de todo es que tienen precios sumamente justos y razonables. Los recomiendo al 100% y hasta hicimos nuevos amigos en el proceso.\"",
    test3_name: "Shanda Schaefer",
    test3_sub: "Google Review • Remodelación Completa",
    test4_quote: "\"Rohi remodeling fue excelente y muy profesional para trabajar. Fundieron nuestra acera y patio de concreto, y cubrieron el patio con un techo. ¡Nos encanta!\"",
    test4_name: "Tabatha Edwards",
    test4_sub: "Google Review • Patio y Techo",
    test5_quote: "\"ROHI brindó un servicio sumamente profesional instalando escaleras exteriores para conectar nuestro deck con el patio. Se adaptaron increíblemente a nuestras necesidades específicas, impermeabilizando por completo el espacio bajo el deck e instalando la electricidad para un ventilador y luz. También instalaron una puerta de seguridad en las escaleras, un detalle excelente. El equipo fue educado, eficiente y enfocado en la calidad. ¡Los recomiendo ampliamente!\"",
    test5_name: "Lucie Ryan",
    test5_sub: "Google Review • Deck y Escaleras Exteriores",
    test_btn_more: "Ver Más Reseñas en Google",

    // Contact
    contact_badge: "Habla con el Equipo",
    contact_title: "Agenda tu Cotización <span class=\"gradient-emerald\">Gratis en Sitio</span>",
    contact_desc: "Damos servicio en el Norte de Georgia: Flowery Branch, Oakwood, Gainesville, Buford, Braselton, Suwanee, Johns Creek y áreas cercanas. Escríbenos o llámanos directamente.",
    contact_phone_title: "Llámanos o Escríbenos",
    contact_email_title: "Correo Electrónico",
    contact_hours_title: "Área de Servicio",
    contact_hours_val: "Norte de Georgia (Flowery Branch, Oakwood, Gainesville, Buford, Braselton, Suwanee, Johns Creek y Áreas Cercanas)",
    form_name_label: "Nombre Completo",
    form_name_ph: "Ej: Juan Pérez",
    form_phone_label: "Teléfono",
    form_phone_ph: "(678) 629-9589",
    form_email_label: "Correo Electrónico",
    form_email_ph: "ej: juan@correo.com",
    form_space_label: "Tipo de Proyecto Principal",
    calc_space_porch: "Porche Cubierto / Deck",
    calc_space_concrete: "Extensión de Concreto / Patio",
    calc_space_interior: "Remodelación Interior / Adición",
    calc_space_other: "Otro (Especificar)",
    form_other_label: "Especifica tu Proyecto",
    form_other_ph: "Ej: Pérgola, Pintura, Carpintería...",
    form_msg_label: "Detalles del Proyecto / Dirección",
    form_msg_ph: "Cuéntanos sobre tu proyecto en el Norte de Georgia (Flowery Branch, Oakwood, Buford, Gainesville, Suwanee, Johns Creek)...",
    form_btn_submit: "Enviar Solicitud por Correo",

    // Footer
    footer_desc: "Contratistas generales licenciados y asegurados especializados en decks, porches cerrados, concreto y ampliaciones en el Norte de Georgia.",
    footer_nav: "Navegación",
    footer_serv: "Especialidades",
    footer_contact: "Contacto",
    footer_rights: "&copy; 2026 Rohi Remodeling. Licenciados y Asegurados.",
    footer_sub: "Calidad de Construcción en Norte de Georgia",
    toast_title: "¡Solicitud Lista!",
    toast_sub: "Abriendo tu correo para enviar a Rohiremodeling@hotmail.com..."
  },

  fr: {
    // Nav
    nav_home: "Accueil",
    nav_services: "Services",
    nav_transform: "Avant & Après",
    nav_projects: "Projets",
    nav_contact: "Contact",
    nav_cta: "Devis Gratuit",

    // Hero
    hero_badge: "Licencié & Assuré • Nord de la Géorgie",
    hero_title: "Terrasses Sur Mesure, Vérandas & <span class=\"gradient-emerald\">Construction</span>.",
    hero_desc: "Construction extérieure et rénovation artisanale dans le Nord de la Géorgie : Flowery Branch, Oakwood, Gainesville, Buford, Braselton, Suwanee, Johns Creek et les environs. Terrasses en bois multi-niveaux, vérandas et béton.",
    hero_btn_calc: "Demander un Devis",
    hero_btn_view: "Explorer les Réalisations",
    stat_projects: "Maisons Transformées",
    stat_location: "Au Service du Nord de la Géorgie",
    stat_rating: "Avis Clients 5 Étoiles",
    badge_luxury_title: "Terrasses & Vérandas",
    badge_luxury_sub: "Spécialistes du Nord de la Géorgie",

    // Services
    serv_badge: "Nos Spécialités",
    serv_title: "Construit avec Rigueur dans le <span class=\"gradient-emerald\">Nord de la Géorgie</span>",
    serv_desc: "Spécialistes en terrasses en bois, porches fermés, patios et extensions de béton dans le Nord de la Géorgie.",
    
    serv_porch_title: "Terrasses en Bois & Vérandas",
    serv_porch_desc: "Agrandissez votre espace de vie avec des terrasses sur mesure, porches fermés avec moustiquaires et escaliers extérieurs.",
    serv_porch_i1: "Terrasses multi-niveaux en bois et composite",
    serv_porch_i2: "Porches avec moustiquaires et finitions soignées",
    serv_porch_i3: "Structures surélevées et escaliers extérieurs",

    serv_concrete_title: "Extensions en Béton & Patios",
    serv_concrete_desc: "Élargissement d'allées de garage, patios en béton imprimé décoratif et allées piétonnes.",
    serv_concrete_i1: "Dalles renforcées pour patios et allées",
    serv_concrete_i2: "Finitions béton imprimé décoratif",
    serv_concrete_i3: "Murs de soutènement et marches en béton",

    serv_interior_title: "Rénovation Intérieure & Extensions",
    serv_interior_desc: "Agrandissements de maison, aménagement de sous-sols et rénovation complète d'espaces intérieurs.",
    serv_interior_i1: "Aménagement et optimisation des espaces ouverts",
    serv_interior_i2: "Sous-sols finis et salles de divertissement",
    serv_interior_i3: "Menuiserie et finitions intérieures de qualité",

    // Before & After
    ba_badge: "Avant & Après",
    ba_title: "Glissez pour Découvrir la <span class=\"gradient-emerald\">Transformation</span>",
    ba_desc: "Faites glisser le curseur pour comparer les réalisations conçues pour nos clients dans le Nord de la Géorgie.",
    ba_t1_title: "Projet 01 • Rénovation Extérieure Complète",
    ba_t2_title: "Projet 02 • Aménagement Extérieur & Terrasse",
    ba_t3_title: "Projet 03 • Colonnes en Cèdre & Rampes de Porche",
    ba_tag_before: "Avant",
    ba_tag_after: "Après",

    // Portfolio
    port_badge: "Nos Réalisations",
    port_title: "Projets Extérieurs <span class=\"gradient-emerald\">Récents</span>",
    port_desc: "Découvrez nos terrasses, porches fermés et projets en béton dans le Nord de la Géorgie.",
    filter_all: "Tous les Projets",
    filter_porches: "Terrasses & Porches",
    filter_interiors: "Extensions & Béton",
    port1_tag: "Porche Grillagé",
    port1_title: "Porche Élevé Grillagé & Rampes en Câble",
    port2_tag: "Terrasse Sur Mesure",
    port2_title: "Terrasse Élevée Couverte avec Escalier",
    port3_tag: "Extension Terrasse",
    port3_title: "Terrasse Arrière avec Marches Graduées",
    port4_tag: "Allée en Béton",
    port4_title: "Allée Latérale & Extension en Béton",
    port5_tag: "Patio en Béton",
    port5_title: "Dalle de Béton avec Joints Géométriques",

    // Testimonials
    test_badge: "Avis Clients Vérifiés",
    test_title: "Recommandé dans le <span class=\"gradient-emerald\">Nord de la Géorgie</span>",
    test1_quote: "\"Nous avons fait appel à Rohi Remodeling pour remplacer entièrement notre terrasse vieillissante. De la première rencontre jusqu'à la fin des travaux, ils ont été exceptionnels. Arrivant tôt et restant tard, travaillant sans relâche jusqu'à l'achèvement. Carlos et Gilary ont été d'excellents communicateurs et ont intégré avec fluidité toutes nos demandes. La nouvelle terrasse est solidement construite, sécuritaire et magnifique. Nous les recommandons vivement pour tous projets futurs!\"",
    test1_name: "Stephen Adams",
    test1_sub: "Avis Google Vérifié • Propriétaire",
    test2_quote: "\"Une expérience exceptionnelle avec cette entreprise pour la construction de notre porche fermé (screened porch). La qualité de leur travail a dépassé toutes nos attentes. Dès le début, ils ont pris le temps de répondre à toutes nos questions et nous ont guidés avec de précieuses recommandations.<br><br>Professionnels, respectueux et très minutieux tout au long du projet. Ils ont pris grand soin de nos plantes et le chantier était impeccablement nettoyé chaque soir.<br><br>Le résultat est splendide et témoigne de leur fierté du travail bien fait. Nous les recommandons chaudement.\"",
    test2_name: "Dan & Denise B.",
    test2_sub: "Avis Google Vérifié • Propriétaire",
    test3_quote: "\"Rohi a rénové toute notre maison et a réalisé tous mes rêves avec le résultat! Ils ont été très faciles à côtoyer et flexibles lorsque nous changions d'avis. Le meilleur est qu'ils sont extrêmement raisonnables sur les tarifs. Je les recommande chaleureusement, nous nous sommes même fait de nouveaux amis.\"",
    test3_name: "Shanda Schaefer",
    test3_sub: "Avis Google Vérifié • Rénovation Complète",
    test4_quote: "\"Une équipe formidable et très professionnelle. Ils ont coulé notre trottoir et notre patio en béton, et l'ont recouvert d'un toit. Nous adorons le résultat!\"",
    test4_name: "Tabatha Edwards",
    test4_sub: "Avis Google Vérifié • Patio & Toiture",
    test5_quote: "\"ROHI a fourni un excellent service professionnel en installant des escaliers extérieurs pour relier notre terrasse au jardin. Ils ont été incroyablement attentifs à nos besoins, assurant l'étanchéité complète sous la terrasse et l'électricité pour le ventilateur et l'éclairage. L'équipe a été polie, efficace et soucieuse de la qualité. Je les recommande vivement!\"",
    test5_name: "Lucie Ryan",
    test5_sub: "Avis Google Vérifié • Escalier & Terrasse",
    test_btn_more: "Voir Plus d'Avis sur Google",

    // Contact
    contact_badge: "Contacter l'Équipe",
    contact_title: "Demandez Votre Devis <span class=\"gradient-emerald\">Gratuit Sur Place</span>",
    contact_desc: "Au service du Nord de la Géorgie : Flowery Branch, Oakwood, Gainesville, Buford, Braselton, Suwanee, Johns Creek et les environs. Remplissez le formulaire ou appelez-nous.",
    contact_phone_title: "Téléphone / SMS",
    contact_email_title: "Demande par Email",
    contact_hours_title: "Zone d'Intervention",
    contact_hours_val: "Nord de la Géorgie (Flowery Branch, Oakwood, Gainesville, Buford, Braselton, Suwanee, Johns Creek & Environs)",
    form_name_label: "Nom Complet",
    form_name_ph: "ex: Jean Dupont",
    form_phone_label: "Téléphone",
    form_phone_ph: "(678) 629-9589",
    form_email_label: "Adresse Email",
    form_email_ph: "ex: jean@email.com",
    form_space_label: "Type de Projet Principal",
    calc_space_porch: "Terrasse Couverte / Porche",
    calc_space_concrete: "Extension en Béton / Patio",
    calc_space_interior: "Rénovation Intérieure / Extension",
    calc_space_other: "Autre (Veuillez préciser)",
    form_other_label: "Précisez votre Projet",
    form_other_ph: "ex: Pergola, Peinture, Menuiserie...",
    form_msg_label: "Détails du Projet / Adresse",
    form_msg_ph: "Parlez-nous de votre projet dans le Nord de la Géorgie (Flowery Branch, Oakwood, Buford, Gainesville, Suwanee, Johns Creek)...",
    form_btn_submit: "Envoyer la Demande par Email",

    // Footer
    footer_desc: "Entrepreneur général licencié & assuré spécialisé dans les terrasses, porches avec moustiquaires, béton et extensions dans le Nord de la Géorgie.",
    footer_nav: "Navigation",
    footer_serv: "Spécialités",
    footer_contact: "Contact",
    footer_rights: "&copy; 2026 Rohi Remodeling. Licencié & Assuré.",
    footer_sub: "Excellence Artisanale dans le Nord de la Géorgie",
    toast_title: "Demande de Devis Prête !",
    toast_sub: "Ouverture de votre messagerie pour envoyer à Rohiremodeling@hotmail.com..."
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
  const wrappers = document.querySelectorAll('.ba-wrapper');
  if (!wrappers.length) return;

  wrappers.forEach(sliderWrapper => {
    const sliderRange = sliderWrapper.querySelector('.ba-slider-range');
    if (!sliderRange) return;

    function updateSliderPosition(val) {
      sliderWrapper.style.setProperty('--slider-pos', `${val}%`);
    }

    sliderRange.addEventListener('input', (e) => {
      updateSliderPosition(e.target.value);
    });

    updateSliderPosition(sliderRange.value || 50);
  });
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
  const spaceSelect = document.getElementById('contactSpace');
  const otherGroup = document.getElementById('otherSpaceGroup');
  const otherInput = document.getElementById('contactSpaceOther');

  if (!form) return;

  if (spaceSelect && otherGroup) {
    spaceSelect.addEventListener('change', () => {
      if (spaceSelect.value === 'other') {
        otherGroup.style.display = 'block';
        if (otherInput) {
          otherInput.setAttribute('required', 'required');
          otherInput.focus();
        }
      } else {
        otherGroup.style.display = 'none';
        if (otherInput) {
          otherInput.removeAttribute('required');
          otherInput.value = '';
        }
      }
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contactName')?.value.trim() || '';
    const phone = document.getElementById('contactPhone')?.value.trim() || '';
    const email = document.getElementById('contactEmail')?.value.trim() || '';
    
    let spaceText = spaceSelect?.options[spaceSelect.selectedIndex]?.text || '';
    const otherVal = otherInput?.value.trim() || '';
    if (spaceSelect?.value === 'other' && otherVal) {
      spaceText = `${spaceText}: ${otherVal}`;
    }

    const message = document.getElementById('contactMessage')?.value.trim() || '';

    // Company destination email
    const companyEmail = 'Rohiremodeling@hotmail.com';

    let subject = '';
    let body = '';

    if (currentLang === 'es') {
      subject = `Solicitud de Estimacion Gratis - ${name}`;
      body = `Hola equipo de Rohi Remodeling,\n\n` +
             `Deseo solicitar una estimacion gratuita con la siguiente informacion:\n\n` +
             `- Nombre: ${name}\n` +
             `- Telefono: ${phone}\n` +
             (email ? `- Correo Electronico: ${email}\n` : '') +
             `- Tipo de Proyecto: ${spaceText}\n` +
             (message ? `- Detalles / Ubicacion: ${message}\n\n` : '\n') +
             `Enviado desde el sitio web de Rohi Remodeling`;
    } else if (currentLang === 'fr') {
      subject = `Demande de Devis Gratuit - ${name}`;
      body = `Bonjour l'equipe Rohi Remodeling,\n\n` +
             `Je souhaite demander un devis gratuit avec les informations suivantes :\n\n` +
             `- Nom : ${name}\n` +
             `- Telephone : ${phone}\n` +
             (email ? `- Email : ${email}\n` : '') +
             `- Type de Projet : ${spaceText}\n` +
             (message ? `- Details / Emplacement : ${message}\n\n` : '\n') +
             `Envoye depuis le site web de Rohi Remodeling`;
    } else {
      subject = `Free Estimate Request - ${name}`;
      body = `Hello Rohi Remodeling Team,\n\n` +
             `I would like to request a free estimate with the following details:\n\n` +
             `- Full Name: ${name}\n` +
             `- Phone: ${phone}\n` +
             (email ? `- Email: ${email}\n` : '') +
             `- Project Type: ${spaceText}\n` +
             (message ? `- Project Details / Location: ${message}\n\n` : '\n') +
             `Sent from Rohi Remodeling Website`;
    }

    const mailtoUrl = `mailto:${companyEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    if (toast) {
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 5000);
    }

    // Open default mail client
    window.location.href = mailtoUrl;

    form.reset();
    if (otherGroup) {
      otherGroup.style.display = 'none';
    }
  });
}
