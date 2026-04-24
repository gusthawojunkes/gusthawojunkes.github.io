const translations = {
  pt: {
    nav_about:      'Sobre',
    nav_skills:     'Habilidades',
    nav_experience: 'Experiência',
    nav_education:  'Formação',
    nav_projects:   'Projetos',
    nav_contact:    'Contato',

    hero_greeting:     'Olá, eu sou',
    hero_role:         'Senior Backend Engineer',
    hero_tagline:      'Construindo sistemas distribuídos que escalam com Java, Kotlin e microsserviços.',
    hero_cta_projects: 'Ver projetos',
    hero_cta_contact:  'Entrar em contato',

    about_title:      'Quem sou eu',
    about_stat_years: 'anos de experiência',
    about_stat_perf:  'melhoria de performance',
    about_stat_tps:   'TPS em produção',
    about_p1: 'Backend Tech Lead e Engenheiro de Software Sênior com mais de 5 anos construindo sistemas de alta vazão e tolerantes a falhas em ambientes financeiros regulados.',
    about_p2: 'Progressão de Trainee a Tech Lead em 5 anos. Reduzi o tempo de resposta de um serviço crítico de 1.400ms para 200ms (melhoria de 85%) em um sistema antifraude processando 400 TPS. Liderei integrações de ponta a ponta com fornecedores internacionais e construí pipelines de CI/CD e testes automatizados do zero.',
    about_p3: 'Atuei na prevenção a fraudes no Banco PAN (banco digital brasileiro comparável ao Revolut/N26) e atualmente lidero a engenharia backend na Sicredi, maior cooperativa de crédito do Brasil, regulada pelo Banco Central do Brasil.',
    about_p4: 'Atualmente cursando pós-graduação em Arquitetura de Software na FIAP (principal universidade de tecnologia do Brasil), aprofundando conhecimentos em padrões arquiteturais, design cloud-native e sistemas distribuídos.',
    about_p5: 'Além da carreira, sou co-fundador da Turbozone, uma plataforma social mobile para entusiastas automotivos que conecta apaixonados por carros no Brasil por meio de eventos, crews e showcases de veículos, com mais de 500 downloads nas lojas.',

    skills_title:           'Stack técnica',
    skill_java_desc:         'Spring Boot, Spring Cloud, Quarkus',
    skill_kotlin_desc:       'Ktor, Coroutines, Exposed',
    skill_microservices:     'Microsserviços',
    skill_microservices_desc:'RESTful APIs, Kafka, RabbitMQ',
    skill_databases:         'Bancos de Dados',
    skill_databases_desc:    'PostgreSQL, MySQL, MongoDB, Redis',
    skill_cloud:             'Cloud & Containers',
    skill_cloud_desc:        'AWS, Docker, Kubernetes',
    skill_devops_desc:       'GitHub Actions, Jenkins, SonarQube',
    skill_testing:           'Testes',
    skill_testing_desc:      'Unitários, Integração, Cucumber, Mockito',
    skill_methodologies:     'Metodologias',
    skill_methodologies_desc:'Scrum, Kanban, DDD, TDD',

    experience_title: 'Trajetória profissional',
    experience_caption: 'Marcos de carreira e projetos pessoais. Mais recente primeiro.',
    ctl_legend_work:    'Carreira',
    ctl_legend_project: 'Projeto',
    ctl_legend_hint:    'Deslize para navegar →',
    ctl_badge_work:     'Carreira',
    ctl_badge_project:  'Projeto',
    ctl_badge_now:      'Atual',
    store_play_tag:     'DISPONÍVEL NO',
    store_apple_tag:    'BAIXAR NA',

    proj_turbozone_role:    'Co-Founder · Turbozone',
    proj_turbozone_company: 'App Mobile · Projeto',
    proj_turbozone_period:  'Novembro 2025 — Presente',
    proj_turbozone_desc:    'Turbozone é uma plataforma social mobile para entusiastas automotivos. Conecta apaixonados por carros no Brasil por meio de eventos, crews (clubes de carros), showcases de veículos e um feed social. Os usuários descobrem encontros próximos, gerenciam sua garagem, registram manutenções e constroem comunidade em torno da paixão por carros. Mais de 500 downloads nas lojas.',

    exp_ntconsult_role:         'Tech Lead | Senior Backend Engineer',
    exp_ntconsult_period_label: 'Abril 2025 — Presente',
    exp_ntconsult_desc:         'Atualmente como Tech Lead na Sicredi (via NTConsult), maior cooperativa de crédito do Brasil com mais de 7 milhões de associados e atuação em 26 estados, regulada pelo Banco Central do Brasil.',

    exp_ciandt_role:   'Engenheiro de Software Sênior · Banco PAN',
    exp_ciandt_period: 'Novembro 2024 — Abril 2025 · 6 meses',
    exp_ciandt_desc:   '<p>Desenvolvi soluções backend para prevenção a fraudes monetárias e não-monetárias no Banco PAN (via CI&amp;T), um banco digital brasileiro comparável ao Revolut ou N26 em posicionamento de mercado.</p><p>Trabalhei em um ecossistema de microsserviços de alta vazão processando aproximadamente 400 TPS, construído com Spring Boot, Quarkus e Java 8/17/21.</p><p>Reduzi o tempo de resposta de um serviço crítico de detecção de fraudes de 1.400ms para 200ms (melhoria de 85%), por meio de otimização de código, ajuste de infraestrutura e redesign da comunicação entre microsserviços.</p><p>Implementei componentes backend para atender requisitos regulatórios do Banco Central do Brasil, garantindo conformidade total e segurança nas transações.</p><p>Contribuí em discussões técnicas sobre padrões de comunicação entre serviços, melhorando a resiliência e observabilidade geral do sistema.</p>',

    exp_geo_senior_role:   'Programador Sênior',
    exp_geo_senior_period: 'Maio 2023 — Novembro 2024 · 1a 7m',
    exp_geo_senior_desc:   '<p>GEOVendas é uma empresa brasileira de SaaS B2B que oferece plataformas de CRM, automação de força de vendas e analytics para médias e grandes empresas em diversos setores.</p><p>Assumi liderança técnica no squad de manutenção, orientando desenvolvedores na entrega de soluções corretivas e evolutivas nas plataformas Analytics, Sales Force e CRM.</p><p>Liderei a integração de ponta a ponta de uma solução de telefonia ao CRM, construída do zero em parceria com um fornecedor internacional, superando desafios de integração em tempo real e garantindo consistência de dados entre os sistemas.</p><p>Atuei como principal ponto de contato entre o time de engenharia e os clientes, levantando requisitos técnicos e propondo soluções alinhadas às regras de negócio.</p><p>Gerenciei integrações entre múltiplos sistemas de ERP e plataformas parceiras, lidando com grande variedade de bancos de dados e formatos de dados.</p>',

    exp_geo_full_role:   'Programador Pleno',
    exp_geo_full_period: 'Julho 2022 — Abril 2023 · 10 meses',
    exp_geo_full_desc:   '<p>Desenvolvi soluções de backoffice e ETL para as plataformas GEOVendas Analytics e Sales Force, utilizando Java, Spring Boot, Vaadin e PostgreSQL.</p><p>Migrei do squad de produto (Scrum/Kanban) para o squad de manutenção, expandindo responsabilidades para infraestrutura, orquestração de containers com Docker e deploys de aplicações Java via pipelines Jenkins CI/CD.</p><p>Liderei um projeto para introduzir testes unitários automatizados no codebase Java da GEOVendas com JUnit e Mockito, criando um pipeline GitHub Actions que obrigava a execução de testes antes de cada build, resultando em melhoria mensurável na qualidade de entrega e redução de bugs de regressão.</p><p>Também trabalhei com AngularJS, VueJS, CoffeeScript e APIs REST em .NET Framework, contribuindo em toda a stack quando necessário.</p>',

    exp_geo_junior_role:   'Programador Júnior',
    exp_geo_junior_period: 'Outubro 2020 — Junho 2022 · 1a 9m',
    exp_geo_junior_desc:   '<p>Desenvolvi funcionalidades para o GEOVendas Analytics (sistema de relatórios de dados de vendas e backoffice) e para a plataforma Sales Force — uma ferramenta offline-first de entrada de pedidos para representantes de vendas externas com capacidade de sincronização de dados.</p><p>Trabalhei diariamente com Java, Spring Boot, Vaadin e PostgreSQL para desenvolvimento backend e de backoffice.</p><p>Contribuí no projeto Sales Force utilizando AngularJS e CoffeeScript no frontend, com CouchDB (NoSQL) para persistência de dados offline-first.</p><p>Integrei a Google Maps API para visualização geoespacial de dados de vendas na plataforma de analytics.</p>',

    exp_geo_intern_role:   'Estagiário de Desenvolvimento',
    exp_geo_intern_period: 'Junho 2020 — Outubro 2020 · 5 meses',
    exp_geo_intern_desc:   '<p>Contribuí para o GEOVendas Analytics, sistema de backoffice e análise de dados de vendas integrado com ERPs parceiros.</p><p>Trabalhei com processamento de dados de vendas e análise geoespacial utilizando Google Maps API e múltiplas tecnologias de banco de dados.</p><p>Primeira experiência profissional: integrado à stack Java/Spring Boot/PostgreSQL em produção em poucas semanas.</p>',

    education_title:  'Educação',
    edu_fiap_level:   'Pós-Graduação',
    edu_fiap_course:  'Arquitetura de Software',
    edu_fiap_period:  '2025 — 2026',
    edu_ec_level:     'Intercâmbio',
    edu_ec_course:    'Língua Inglesa',
    edu_ec_period:    '2025',
    edu_ucsc_level:   'Bacharelado',
    edu_ucsc_course:  'Engenharia de Software',
    edu_ucsc_period:  '2020 — 2023',
    edu_senai_level:  'Técnico',
    edu_senai_course: 'Informática para Internet',
    edu_senai_period: '2018 — 2019',

    projects_title:   'Projetos pessoais',
    proj_order_name:  'Order System',
    proj_order_desc:  'Ecossistema de microsserviços para processamento de pedidos com comunicação assíncrona via Kafka e persistência em RavenDB.',
    proj_parser_name: 'Financial File Parser',
    proj_parser_desc: 'Biblioteca para parse e processamento de arquivos financeiros nos padrões OFX e CNAB, com suporte a múltiplos formatos bancários brasileiros.',
    proj_wisegress_name: 'Wisegress API',
    proj_wisegress_desc: 'API REST para gerenciamento de metas e hábitos com autenticação JWT, persistência em PostgreSQL e arquitetura limpa usando Quarkus.',

    contact_eyebrow:   'Vamos conversar',
    contact_title:     'Pronto para colaborar?',
    contact_desc:      'Estou aberto a novas oportunidades e desafios. Se você tem um projeto interessante ou uma vaga que faça sentido, me chame.',
    contact_email_btn: 'Enviar e-mail',

    // Footer
    footer_copy: '© 2025 Gusthawo Junkes. Todos os direitos reservados.',
    footer_made: 'Feito com precisão e café ☕',
  },

  en: {
    nav_about:      'About',
    nav_skills:     'Skills',
    nav_experience: 'Experience',
    nav_education:  'Education',
    nav_projects:   'Projects',
    nav_contact:    'Contact',

    hero_greeting:     "Hi, I'm",
    hero_role:         'Senior Backend Engineer',
    hero_tagline:      'Building distributed systems that scale with Java, Kotlin, and microservices.',
    hero_cta_projects: 'View projects',
    hero_cta_contact:  'Get in touch',

    about_title:      'About me',
    about_stat_years: 'years of experience',
    about_stat_perf:  'performance improvement',
    about_stat_tps:   'TPS in production',
    about_p1: 'Backend Tech Lead and Senior Software Engineer with 5+ years building high-throughput, fault-tolerant systems in regulated financial environments.',
    about_p2: 'Progressed from Trainee to Tech Lead within 5 years. Reduced a critical service response time from 1,400ms to 200ms (85% improvement) in a fraud prevention system processing 400 TPS. Led end-to-end integrations with international vendors and built CI/CD and automated testing pipelines from scratch.',
    about_p3: "Worked on fraud prevention at Banco PAN (a Brazilian digital bank comparable to Revolut/N26) and currently leading backend engineering at Sicredi, Brazil's largest credit union, regulated by Brazil's Central Bank (equivalent to the ECB).",
    about_p4: "Currently pursuing a postgraduate degree in Software Architecture at FIAP (Brazil's leading tech university), deepening knowledge in architectural patterns, cloud-native design, and distributed systems.",
    about_p5: 'Outside of work, I co-founded Turbozone, a mobile social platform for automotive enthusiasts that connects car fans in Brazil through events, crews, and vehicle showcases, with 500+ downloads on the stores.',

    skills_title:           'Tech stack',
    skill_java_desc:         'Spring Boot, Spring Cloud, Quarkus',
    skill_kotlin_desc:       'Ktor, Coroutines, Exposed',
    skill_microservices:     'Microservices',
    skill_microservices_desc:'RESTful APIs, Kafka, RabbitMQ',
    skill_databases:         'Databases',
    skill_databases_desc:    'PostgreSQL, MySQL, MongoDB, Redis',
    skill_cloud:             'Cloud & Containers',
    skill_cloud_desc:        'AWS, Docker, Kubernetes',
    skill_devops_desc:       'GitHub Actions, Jenkins, SonarQube',
    skill_testing:           'Testing',
    skill_testing_desc:      'Unit, Integration, Cucumber, Mockito',
    skill_methodologies:     'Methodologies',
    skill_methodologies_desc:'Scrum, Kanban, DDD, TDD',

    experience_title: 'Career timeline',
    experience_caption: 'Career milestones and personal projects. Most recent first.',
    ctl_legend_work:    'Career',
    ctl_legend_project: 'Project',
    ctl_legend_hint:    'Swipe to navigate →',
    ctl_badge_work:     'Career',
    ctl_badge_project:  'Project',
    ctl_badge_now:      'Current',
    store_play_tag:     'GET IT ON',
    store_apple_tag:    'Download on the',

    proj_turbozone_role:    'Co-Founder · Turbozone',
    proj_turbozone_company: 'Mobile App · Project',
    proj_turbozone_period:  'November 2025 — Present',
    proj_turbozone_desc:    'Turbozone is a mobile social platform for automotive enthusiasts. It connects car fans in Brazil through events, crews (car clubs), vehicle showcases, and a shared social feed. Users discover nearby car meets, manage their garage, log vehicle maintenance, and build community around a shared passion for cars. 500+ downloads on the stores.',

    exp_ntconsult_role:         'Tech Lead | Senior Backend Engineer',
    exp_ntconsult_period_label: 'April 2025 — Present',
    exp_ntconsult_desc:         'Currently serving as Tech Lead at Sicredi (via NTConsult), Brazil\'s largest credit union with 7M+ members and operations across 26 states, regulated by Brazil\'s Central Bank (equivalent to the ECB).',

    exp_ciandt_role:   'Senior Software Engineer · Banco PAN',
    exp_ciandt_period: 'November 2024 — April 2025 · 6 months',
    exp_ciandt_desc:   '<p>Developed backend solutions for monetary and non-monetary fraud prevention at Banco PAN (via CI&amp;T), a fully digital Brazilian bank comparable to Revolut or N26 in market positioning.</p><p>Worked in a high-throughput microservices ecosystem processing approximately 400 transactions per second (TPS), built with Spring Boot, Quarkus, and Java 8/17/21.</p><p>Reduced the response time of a critical fraud detection service from 1,400ms to 200ms (an 85% improvement) through code optimization, infrastructure tuning, and microservice communication redesign.</p><p>Implemented key backend components to meet regulatory requirements from Brazil\'s Central Bank (equivalent to the ECB/Fed), ensuring full compliance and transaction security.</p><p>Contributed to technical discussions on inter-service communication patterns, improving overall system resilience and observability.</p>',

    exp_geo_senior_role:   'Senior Developer',
    exp_geo_senior_period: 'May 2023 — November 2024 · 1y 7m',
    exp_geo_senior_desc:   '<p>GEOVendas is a Brazilian B2B SaaS company providing CRM, sales force automation, and analytics platforms to mid-to-large enterprises across multiple industries.</p><p>Took on a technical leadership role within the maintenance squad, guiding developers in delivering corrective and evolutionary solutions across GEOVendas Analytics, Sales Force, and CRM platforms.</p><p>Led the end-to-end integration of a telephony solution into the GEOVendas CRM, built from scratch in partnership with an international vendor, overcoming real-time integration challenges and ensuring data consistency between systems.</p><p>Acted as the primary point of contact between the engineering team and clients, gathering technical requirements and proposing solutions aligned with business rules.</p><p>Managed integrations between multiple ERP systems and partner platforms, handling a wide variety of databases and data formats.</p>',

    exp_geo_full_role:   'Mid-level Developer',
    exp_geo_full_period: 'July 2022 — April 2023 · 10 months',
    exp_geo_full_desc:   '<p>Developed backoffice and ETL solutions for GEOVendas Analytics and Sales Force platforms using Java, Spring Boot, Vaadin, and PostgreSQL.</p><p>Transitioned from the product squad (Scrum/Kanban) to the maintenance squad, expanding responsibilities to cover infrastructure, container orchestration with Docker, and Java application deployments via Jenkins CI/CD pipelines.</p><p>Led a project to introduce automated unit testing across GEOVendas\' Java codebase using JUnit and Mockito, including the creation of a GitHub Actions pipeline that enforced test execution before every build, resulting in a measurable improvement in delivery quality and reduction of regression bugs.</p><p>Also worked with AngularJS, VueJS, CoffeeScript, and .NET Framework REST APIs, contributing across the full stack when needed.</p>',

    exp_geo_junior_role:   'Junior Developer',
    exp_geo_junior_period: 'October 2020 — June 2022 · 1y 9m',
    exp_geo_junior_desc:   '<p>Built features for GEOVendas Analytics (backoffice and sales data reporting system) and the Sales Force platform, an offline-first order entry tool for field sales representatives with data synchronization capabilities.</p><p>Worked daily with Java, Spring Boot, Vaadin, and PostgreSQL for backend and backoffice development.</p><p>Contributed to the Sales Force project using AngularJS and CoffeeScript on the frontend, with CouchDB (NoSQL) for offline-first data persistence.</p><p>Integrated Google Maps API for geospatial sales data visualization within the analytics platform.</p>',

    exp_geo_intern_role:   'Development Intern',
    exp_geo_intern_period: 'June 2020 — October 2020 · 5 months',
    exp_geo_intern_desc:   '<p>Contributed to GEOVendas Analytics, a backoffice and sales data analytical system integrated with partner ERPs.</p><p>Worked with sales data processing and geospatial analysis using Google Maps API and multiple database technologies.</p><p>First professional experience: onboarded into a production Java/Spring Boot/PostgreSQL stack within weeks.</p>',

    education_title:  'Education',
    edu_fiap_level:   'Postgraduate',
    edu_fiap_course:  'Software Architecture',
    edu_fiap_period:  '2025 — 2026',
    edu_ec_level:     'Language Exchange',
    edu_ec_course:    'English Language',
    edu_ec_period:    '2025',
    edu_ucsc_level:   "Bachelor's Degree",
    edu_ucsc_course:  'Software Engineering',
    edu_ucsc_period:  '2020 — 2023',
    edu_senai_level:  'Technical Course',
    edu_senai_course: 'Internet Computing',
    edu_senai_period: '2018 — 2019',

    projects_title:   'Personal projects',
    proj_order_name:  'Order System',
    proj_order_desc:  'A microservices ecosystem for order placement and processing, with async communication via Kafka and persistence in RavenDB.',
    proj_parser_name: 'Financial File Parser',
    proj_parser_desc: 'A library for parsing and processing financial files in OFX and CNAB formats, with support for multiple Brazilian banking standards.',
    proj_wisegress_name: 'Wisegress API',
    proj_wisegress_desc: 'A REST API for goals and habits management with JWT authentication, PostgreSQL persistence, and clean architecture built on Quarkus.',

    contact_eyebrow:   "Let's talk",
    contact_title:     'Ready to collaborate?',
    contact_desc:      "I'm open to new opportunities and challenges. If you have an interesting project or a role that fits, reach out.",
    contact_email_btn: 'Send an email',

    // Footer
    footer_copy: '© 2025 Gusthawo Junkes. All rights reserved.',
    footer_made: 'Built with precision and coffee ☕',
  }
};

let currentLanguage = localStorage.getItem('language') || 'pt';

function calculateExperience(startDate) {
  const start = new Date(startDate);
  const now   = new Date();
  let years  = now.getFullYear() - start.getFullYear();
  let months = now.getMonth()    - start.getMonth();

  if (months < 0) { years--; months += 12; }
  if (now.getDate() < start.getDate()) {
    months--;
    if (months < 0) { months = 11; years--; }
  }

  if (currentLanguage === 'pt') {
    const y = years  > 0 ? `${years} ano${years  > 1 ? 's' : ''}` : '';
    const m = months > 0 ? `${months} ${months > 1 ? 'meses' : 'mês'}` : '';
    return [y, m].filter(Boolean).join(' e ');
  } else {
    const y = years  > 0 ? `${years} year${years  > 1 ? 's' : ''}` : '';
    const m = months > 0 ? `${months} month${months > 1 ? 's' : ''}` : '';
    return [y, m].filter(Boolean).join(' and ');
  }
}

function updateNTConsultDuration() {
  const el = document.getElementById('ntconsult-duration');
  if (el) el.textContent = calculateExperience('2025-04-01');
}

function applyTranslations() {
  document.documentElement.lang = currentLanguage;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = translations[currentLanguage][key];
    if (val !== undefined) el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    const val = translations[currentLanguage][key];
    if (val !== undefined) el.innerHTML = val;
  });
  updateNTConsultDuration();
}

function updateLangUI(lang) {
  const flag = document.getElementById('current-flag');
  const code = document.getElementById('current-lang-code');
  if (flag) flag.src = lang === 'pt' ? 'assets/icons/flag-br.svg' : 'assets/icons/flag-us.svg';
  if (code) code.textContent = lang.toUpperCase();
}

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('language', lang);
  updateLangUI(lang);
  applyTranslations();
  closeLangDropdown();
}

function closeLangDropdown() {
  document.getElementById('lang-sw').classList.remove('open');
}

function setTheme(theme) {
  const sunIcon  = document.getElementById('sun-icon');
  const moonIcon = document.getElementById('moon-icon');
  if (theme === 'dark') {
    document.documentElement.classList.remove('light');
    sunIcon.classList.remove('hidden');
    moonIcon.classList.add('hidden');
  } else {
    document.documentElement.classList.add('light');
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
  }
  localStorage.setItem('theme', theme);
}

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  setTheme(savedTheme);

  const savedLang = localStorage.getItem('language') || 'pt';
  currentLanguage = savedLang;
  updateLangUI(savedLang);
  applyTranslations();

  document.getElementById('theme-toggle').addEventListener('click', () => {
    const isDark = !document.documentElement.classList.contains('light');
    setTheme(isDark ? 'light' : 'dark');
  });

  const langSw      = document.getElementById('lang-sw');
  const langBtn     = document.getElementById('lang-btn');
  const langDropdown = document.getElementById('lang-dropdown');

  langBtn.addEventListener('click', e => {
    e.stopPropagation();
    langSw.classList.toggle('open');
  });
  window.addEventListener('click', e => {
    if (!e.target.closest('#lang-sw')) closeLangDropdown();
  });

  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileNav    = document.getElementById('mobile-nav');
  const menuIcon     = document.getElementById('menu-icon');
  const closeIcon    = document.getElementById('close-icon');

  mobileToggle.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    menuIcon.classList.toggle('hidden', isOpen);
    closeIcon.classList.toggle('hidden', !isOpen);
  });

  document.querySelectorAll('[data-menu-link]').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    });
  });

  // ── Vertical timeline scroll-reveal ──────────────────────────────────────
  const vtlItems = document.querySelectorAll('.vtl__item');
  if (vtlItems.length) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger sibling items that appear together (batched scroll reveal)
          const siblings = Array.from(entry.target.parentElement.querySelectorAll('.vtl__item:not(.vtl__item--visible)'));
          const idx = siblings.indexOf(entry.target);
          const delay = Math.max(0, idx * 60);
          setTimeout(() => {
            entry.target.classList.add('vtl__item--visible');
          }, delay);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    vtlItems.forEach(item => obs.observe(item));
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const href = anchor.getAttribute('href');
      if (!href || href.length < 2) return;
      let target;
      try { target = document.querySelector(href); } catch { return; }
      if (!target) return;
      e.preventDefault();
      const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 66;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
});
