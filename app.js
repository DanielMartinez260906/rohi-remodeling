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
    hero_badge: "Licensed & Insured • State of Georgia",
    hero_title: "Custom Decks, Screen Porches & Outdoor <span class=\"gradient-emerald\">Construction</span>.",
    hero_desc: "Hands-on remodeling and outdoor construction for homeowners across the State of Georgia. We build custom multi-level decks, screen porches, and concrete extensions.",
    hero_btn_calc: "Request Estimate",
    hero_btn_view: "Explore Transformations",
    stat_projects: "Local Homes Transformed",
    stat_location: "Serving the State of Georgia",
    stat_rating: "5-Star Customer Rating",
    badge_luxury_title: "Custom Decks & Porches",
    badge_luxury_sub: "Serving the State of Georgia",

    // Services
    serv_badge: "Our Specialties",
    serv_title: "Built Right in <span class=\"gradient-emerald\">Georgia</span>",
    serv_desc: "Specialized deck building, screened porches, patios, and concrete extensions crafted for Georgia homes.",
    
    serv_porch_title: "Custom Decks & Screen Porches",
    serv_porch_desc: "Expand your outdoor living with custom timber decks, screened porches, elevated stairs, and covered patios.",
    serv_porch_i1: "Multi-level timber and composite decks",
    serv_porch_i2: "Screened-in porches with premium finishes",
    serv_porch_i3: "Elevated framing and custom exterior stairs",

    serv_concrete_title: "Concrete Extensions & Patios",
    serv_concrete_desc: "Durable concrete driveway expansions, decorative stamped patios, walkways, and sturdy foundations.",
    serv_concrete_i1: "Reinforced patio pads & driveway extensions",
    serv_concrete_i2: "Stamped and decorative concrete finishes",
    serv_concrete_i3: "Retaining walls and concrete steps",

    serv_interior_title: "Interior Remodeling & Additions",
    serv_interior_desc: "Home additions, basement finishing, custom carpentry, and complete interior living space renovations.",
    serv_interior_i1: "Open-concept layouts and structural framing",
    serv_interior_i2: "Finished basements and entertainment spaces",
    serv_interior_i3: "Custom trim, doors, and interior upgrades",

    // Before & After
    ba_badge: "Before & After",
    ba_title: "Slide to Discover the <span class=\"gradient-emerald\">Transformation</span>",
    ba_desc: "Drag the center controller to view the striking craftsmanship delivered across Georgia.",
    ba_tag_before: "Before",
    ba_tag_after: "After",

    // Portfolio
    port_badge: "Featured Work",
    port_title: "Recent Outdoor <span class=\"gradient-emerald\">Projects</span>",
    port_desc: "Take a look at our recent deck builds, screen porches, and exterior framing across the State of Georgia.",
    filter_all: "All Projects",
    filter_porches: "Decks & Porches",
    filter_interiors: "Additions & Concrete",
    port1_tag: "Covered Deck",
    port1_title: "Multi-Level Deck & Screened Porch",
    port2_tag: "Custom Deck",
    port2_title: "Elevated Covered Deck & Staircase",
    port3_tag: "Deck Extension",
    port3_title: "Backyard Deck & Multi-Tier Steps",
    port4_tag: "Exterior Framing",
    port4_title: "Multi-Story Exterior Stairs & Deck",

    // Testimonials
    test_badge: "Client Reviews",
    test_title: "Trusted Across the <span class=\"gradient-emerald\">State of Georgia</span>",
    test1_quote: "\"Rohi Remodeling built our multi-level covered deck. It completely elevated our backyard living space! Professional crew and finished right on time.\"",
    test1_name: "James & Sarah K.",
    test1_sub: "Covered Deck & Porch in Georgia",
    test2_quote: "\"Top-notch carpentry and clean worksite from start to finish. Our elevated deck and stairs are rock solid and look incredible.\"",
    test2_name: "Michael D.",
    test2_sub: "Elevated Deck Build in Georgia",

    // Contact
    contact_badge: "Contact the Crew",
    contact_title: "Schedule Your Free On-Site <span class=\"gradient-emerald\">Estimate</span>",
    contact_desc: "Serving homeowners across the entire State of Georgia. Fill out the form or call us directly.",
    contact_phone_title: "Call / Text Us",
    contact_email_title: "Email Inquiry",
    contact_hours_title: "Service Area",
    contact_hours_val: "State of Georgia",
    form_name_label: "Full Name",
    form_name_ph: "e.g. John Miller",
    form_phone_label: "Phone Number",
    form_phone_ph: "(678) 629-9589",
    form_space_label: "Primary Project Type",
    form_msg_label: "Project Details / Location",
    form_msg_ph: "Tell us about your deck, porch, concrete, or remodel project in Georgia...",
    form_btn_submit: "Submit Request for Free Estimate",

    // Footer
    footer_desc: "Licensed & insured contractor specializing in custom decks, screen porches, concrete extensions, and home additions in Georgia.",
    footer_nav: "Navigation",
    footer_serv: "Specialties",
    footer_contact: "Contact Info",
    footer_rights: "&copy; 2026 Rohi Remodeling. Licensed & Insured.",
    footer_sub: "Quality Craftsmanship in Georgia",
    toast_title: "Estimate Request Received!",
    toast_sub: "Our team will call you within 24 hours to schedule your on-site visit."
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
    hero_badge: "Licenciados y Asegurados • Estado de Georgia",
    hero_title: "Decks a Medida, Porches y Construcción <span class=\"gradient-emerald\">Exterior</span>.",
    hero_desc: "Construcción artesanal y remodelación exterior para hogares en todo el estado de Georgia. Construimos decks de varios niveles, porches con mosquiteros y extensiones de concreto.",
    hero_btn_calc: "Solicitar Cotización",
    hero_btn_view: "Explorar Trabajos",
    stat_projects: "Casas Transformadas",
    stat_location: "Servicio en el Estado de Georgia",
    stat_rating: "Valoración 5 Estrellas",
    badge_luxury_title: "Decks y Porches a Medida",
    badge_luxury_sub: "Servicio en el Estado de Georgia",

    // Services
    serv_badge: "Nuestras Especialidades",
    serv_title: "Construido con Calidad en <span class=\"gradient-emerald\">Georgia</span>",
    serv_desc: "Especialistas en construcción de decks, porches cerrados, patios y concreto para casas en Georgia.",
    
    serv_porch_title: "Decks a Medida y Porches Cerrados",
    serv_porch_desc: "Amplía tu espacio exterior con decks de madera a medida, porches con mosquiteros, escaleras exteriores y terrazas cubiertas.",
    serv_porch_i1: "Decks de varios niveles en madera y composite",
    serv_porch_i2: "Porches cerrados con mosquiteros y finos acabados",
    serv_porch_i3: "Estructuras elevadas y escaleras exteriores a medida",

    serv_concrete_title: "Extensiones de Concreto y Patios",
    serv_concrete_desc: "Ampliación de entradas de vehículos (driveways), patios de concreto estampado, losas reforzadas y caminos.",
    serv_concrete_i1: "Losas reforzadas para patios y driveways",
    serv_concrete_i2: "Acabados de concreto estampado decorativo",
    serv_concrete_i3: "Muros de contención y escaleras de concreto",

    serv_interior_title: "Remodelación Interior y Adiciones",
    serv_interior_desc: "Ampliaciones de casas, acabado de sótanos (basements), carpintería fina y renovación de espacios interiores.",
    serv_interior_i1: "Distribución de espacios y estructura de madera",
    serv_interior_i2: "Sótanos terminados y salas de entretenimiento",
    serv_interior_i3: "Molduras, puertas y mejoras interiores",

    // Before & After
    ba_badge: "Antes y Después",
    ba_title: "Desliza para ver la <span class=\"gradient-emerald\">Transformación</span>",
    ba_desc: "Mueve el controlador para comparar una propiedad original frente a nuestra construcción en Georgia.",
    ba_tag_before: "Antes",
    ba_tag_after: "Después",

    // Portfolio
    port_badge: "Trabajos Destacados",
    port_title: "Proyectos Exteriores <span class=\"gradient-emerald\">Recientes</span>",
    port_desc: "Explora nuestros decks, porches y estructuras construidas en todo el estado de Georgia.",
    filter_all: "Todos",
    filter_porches: "Decks y Porches",
    filter_interiors: "Adiciones y Concreto",
    port1_tag: "Deck Cubierto",
    port1_title: "Deck de Varios Niveles y Porche Cerrado",
    port2_tag: "Deck a Medida",
    port2_title: "Deck Elevado Cubierto con Escalera",
    port3_tag: "Ampliación de Deck",
    port3_title: "Deck Posterior con Gradas Escalonadas",
    port4_tag: "Estructura Exterior",
    port4_title: "Escalera y Deck Elevado de Varios Pisos",

    // Testimonials
    test_badge: "Opiniones Verificadas",
    test_title: "Confianza en Todo el Estado de <span class=\"gradient-emerald\">Georgia</span>",
    test1_quote: "\"Rohi Remodeling construyó nuestro deck cubierto de dos niveles. ¡Transformó por completo nuestro patio trasero! Equipo muy profesional y cumplido con los tiempos.\"",
    test1_name: "James & Sarah K.",
    test1_sub: "Deck y Porche Cubierto en Georgia",
    test2_quote: "\"Excelente carpintería estructural y un sitio de trabajo impecable de principio a fin. Nuestro deck elevado quedó firme y espectacular.\"",
    test2_name: "Michael D.",
    test2_sub: "Deck Elevado en Georgia",

    // Contact
    contact_badge: "Habla con el Equipo",
    contact_title: "Agenda tu Cotización <span class=\"gradient-emerald\">Gratis en Sitio</span>",
    contact_desc: "Damos servicio a propietarios en todo el estado de Georgia. Escríbenos o llámanos directamente.",
    contact_phone_title: "Llámanos o Escríbenos",
    contact_email_title: "Correo Electrónico",
    contact_hours_title: "Área de Servicio",
    contact_hours_val: "Estado de Georgia",
    form_name_label: "Nombre Completo",
    form_name_ph: "Ej: Juan Pérez",
    form_phone_label: "Teléfono",
    form_phone_ph: "(678) 629-9589",
    form_space_label: "Tipo de Proyecto Principal",
    form_msg_label: "Detalles del Proyecto / Dirección",
    form_msg_ph: "Cuéntanos sobre tu deck, porche, concreto o remodelación en Georgia...",
    form_btn_submit: "Solicitar Cotización Gratuita",

    // Footer
    footer_desc: "Contratistas generales licenciados y asegurados especializados en decks, porches cerrados, concreto y ampliaciones en Georgia.",
    footer_nav: "Navegación",
    footer_serv: "Especialidades",
    footer_contact: "Contacto",
    footer_rights: "&copy; 2026 Rohi Remodeling. Licenciados y Asegurados.",
    footer_sub: "Calidad de Construcción en Georgia",
    toast_title: "¡Solicitud Recibida!",
    toast_sub: "Nuestro equipo se comunicará contigo en menos de 24 horas para coordinar la visita."
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
    hero_badge: "Licencié & Assuré • État de Géorgie",
    hero_title: "Terrasses Sur Mesure, Vérandas & <span class=\"gradient-emerald\">Construction</span>.",
    hero_desc: "Construction extérieure et rénovation artisanale pour les propriétaires dans tout l'État de Géorgie. Terrasses en bois multi-niveaux, vérandas et béton.",
    hero_btn_calc: "Demander un Devis",
    hero_btn_view: "Explorer les Réalisations",
    stat_projects: "Maisons Transformées",
    stat_location: "Au Service de l'État de Géorgie",
    stat_rating: "Avis Clients 5 Étoiles",
    badge_luxury_title: "Terrasses & Vérandas",
    badge_luxury_sub: "Au Service de l'État de Géorgie",

    // Services
    serv_badge: "Nos Spécialités",
    serv_title: "Construit avec Rigueur en <span class=\"gradient-emerald\">Géorgie</span>",
    serv_desc: "Spécialistes en terrasses en bois, porches fermés, patios et extensions de béton pour maisons en Géorgie.",
    
    serv_porch_title: "Terrasses en Bois & Vérandas",
    serv_porch_desc: "Agrandissez votre espace de vie avec des terrasses sur mesure, porches fermés avec moustiquaires et escaliers extérieurs.",
    serv_porch_i1: "Terrasses multi-niveaux en bois et composite",
    serv_porch_i2: "Porches avec moustiquaires et finitions soignées",
    serv_porch_i3: "Structures surélevées et escaliers extérieurs",

    serv_concrete_title: "Extensions en Béton & Patios",
    serv_concrete_desc: "Élargissement d'allées de garage, patios en béton imprimé décoratif, allées et dalles renforcées.",
    serv_concrete_i1: "Dalles renforcées pour patios et allées",
    serv_concrete_i2: "Finitions béton imprimé décoratif",
    serv_concrete_i3: "Murs de soutènement et marches en béton",

    serv_interior_title: "Rénovation Intérieure & Extensions",
    serv_interior_desc: "Agrandissements de maison, aménagement de sous-sols et rénovation complète d'espaces intérieurs.",
    serv_interior_i1: "Aménagement d'espaces et charpente intérieure",
    serv_interior_i2: "Sous-sols finis et salles de divertissement",
    serv_interior_i3: "Menuiserie et finitions intérieures de qualité",

    // Before & After
    ba_badge: "Avant & Après",
    ba_title: "Glissez pour Découvrir la <span class=\"gradient-emerald\">Transformation</span>",
    ba_desc: "Faites glisser le curseur pour comparer les réalisations conçues pour nos clients en Géorgie.",
    ba_tag_before: "Avant",
    ba_tag_after: "Après",

    // Portfolio
    port_badge: "Nos Réalisations",
    port_title: "Projets Extérieurs <span class=\"gradient-emerald\">Récents</span>",
    port_desc: "Découvrez nos terrasses, porches fermés et charpentes dans tout l'État de Géorgie.",
    filter_all: "Tous les Projets",
    filter_porches: "Terrasses & Porches",
    filter_interiors: "Extensions & Béton",
    port1_tag: "Terrasse Couverte",
    port1_title: "Terrasse Multi-Niveaux & Véranda",
    port2_tag: "Terrasse Sur Mesure",
    port2_title: "Terrasse Élevée Couverte avec Escalier",
    port3_tag: "Extension Terrasse",
    port3_title: "Terrasse Arrière avec Marches Graduées",
    port4_tag: "Structure Extérieure",
    port4_title: "Escalier Extérieur Multi-Étages & Terrasse",

    // Testimonials
    test_badge: "Avis Vérifiés",
    test_title: "Recommandé Dans Tout l'État de <span class=\"gradient-emerald\">Géorgie</span>",
    test1_quote: "\"Rohi Remodeling a construit notre terrasse couverte sur deux niveaux. Cela a transformé notre extérieur! Équipe très professionnelle.\"",
    test1_name: "James & Sarah K.",
    test1_sub: "Terrasse Couverte en Géorgie",
    test2_quote: "\"Menuiserie de premier ordre et chantier impeccable. Notre terrasse surélevée est solide et magnifique.\"",
    test2_name: "Michael D.",
    test2_sub: "Terrasse Élevée en Géorgie",

    // Contact
    contact_badge: "Contacter l'Équipe",
    contact_title: "Demandez Votre Devis <span class=\"gradient-emerald\">Gratuit Sur Place</span>",
    contact_desc: "Au service des propriétaires dans tout l'État de Géorgie. Remplissez le formulaire ou appelez-nous.",
    contact_phone_title: "Téléphone / SMS",
    contact_email_title: "Demande par Email",
    contact_hours_title: "Zone d'Intervention",
    contact_hours_val: "État de Géorgie",
    form_name_label: "Nom Complet",
    form_name_ph: "ex: Jean Dupont",
    form_phone_label: "Téléphone",
    form_phone_ph: "(678) 629-9589",
    form_space_label: "Type de Projet Principal",
    form_msg_label: "Détails du Projet / Adresse",
    form_msg_ph: "Parlez-nous de votre projet de terrasse, porche, béton ou rénovation en Géorgie...",
    form_btn_submit: "Envoyer la Demande de Devis Gratuit",

    // Footer
    footer_desc: "Entrepreneur général licencié & assuré spécialisé dans les terrasses, porches avec moustiquaires, béton et extensions en Géorgie.",
    footer_nav: "Navigation",
    footer_serv: "Spécialités",
    footer_contact: "Contact",
    footer_rights: "&copy; 2026 Rohi Remodeling. Licencié & Assuré.",
    footer_sub: "Excellence Artisanale en Géorgie",
    toast_title: "Demande de Devis Reçue!",
    toast_sub: "Notre équipe vous contactera sous 24h pour organiser votre visite sur place."
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

    const name = document.getElementById('contactName')?.value.trim() || '';
    const phone = document.getElementById('contactPhone')?.value.trim() || '';
    const spaceSelect = document.getElementById('contactSpace');
    const spaceText = spaceSelect?.options[spaceSelect.selectedIndex]?.text || '';
    const message = document.getElementById('contactMessage')?.value.trim() || '';

    // WhatsApp Phone number
    const waPhone = '16786299589';

    // Build friendly formatted message without emojis to avoid encoding issues
    let waMsg = '';
    if (currentLang === 'es') {
      waMsg = `*Hola Rohi Remodeling! Deseo solicitar un presupuesto gratuito:*\n\n` +
              `- *Nombre:* ${name}\n` +
              `- *Telefono:* ${phone}\n` +
              `- *Tipo de Proyecto:* ${spaceText}\n` +
              (message ? `- *Detalles / Ubicacion:* ${message}\n\n` : '\n') +
              `_Enviado desde el sitio web de Rohi Remodeling_`;
    } else if (currentLang === 'fr') {
      waMsg = `*Bonjour Rohi Remodeling! Je souhaite demander un devis gratuit :*\n\n` +
              `- *Nom:* ${name}\n` +
              `- *Telephone:* ${phone}\n` +
              `- *Type de Projet:* ${spaceText}\n` +
              (message ? `- *Details / Emplacement:* ${message}\n\n` : '\n') +
              `_Envoye depuis le site web de Rohi Remodeling_`;
    } else {
      waMsg = `*Hello Rohi Remodeling! I would like to request a free estimate:*\n\n` +
              `- *Name:* ${name}\n` +
              `- *Phone:* ${phone}\n` +
              `- *Project Type:* ${spaceText}\n` +
              (message ? `- *Details / Location:* ${message}\n\n` : '\n') +
              `_Sent from Rohi Remodeling Website_`;
    }

    const waUrl = `https://wa.me/${waPhone}?text=${encodeURIComponent(waMsg)}`;

    if (toast) {
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 4000);
    }

    // Open WhatsApp in new tab/window
    window.open(waUrl, '_blank');

    form.reset();
  });
}
