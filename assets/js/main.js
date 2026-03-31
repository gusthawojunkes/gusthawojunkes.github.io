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
    about_p1: 'Sou um Engenheiro de Software com mais de 5 anos de experiência construindo sistemas backend de alta performance e alta disponibilidade. Minha especialização está em Java e Kotlin com o ecossistema Spring Boot, projetando arquiteturas de microsserviços para aplicações que operam em escala.',
    about_p2: 'Tenho experiência em ambientes de alta criticidade, incluindo o setor bancário. No Banco PAN, contribuí com o ecossistema antifraude — um sistema que processa mais de 400 transações por segundo sob regulamentação do Banco Central do Brasil. Nesse contexto, reduzi o tempo de resposta de serviços críticos de 1.400ms para 200ms, uma melhoria de 85%.',
    about_p3: 'Sou defensor de código limpo, testes automatizados e integração contínua. Acredito que software de qualidade vai além da funcionalidade — é sobre manutenibilidade, observabilidade e resiliência que mantêm sistemas confiáveis ao longo do tempo.',
    about_p4: 'Atualmente cursando pós-graduação em Arquitetura de Software na FIAP, continuo aprofundando meu conhecimento em padrões arquiteturais, design cloud-native e sistemas distribuídos.',

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

    exp_ntconsult_role:         'Tech Lead | Senior Backend Engineer',
    exp_ntconsult_period_label: 'Abril 2025 — Presente',
    exp_ntconsult_desc:         'Atuação no desenvolvimento de soluções de software orientadas a microsserviços, com foco em qualidade, escalabilidade e boas práticas de engenharia.',

    exp_ciandt_role:   'Engenheiro de Software Sênior · Banco PAN',
    exp_ciandt_period: 'Novembro 2024 — Abril 2025 · 6 meses',
    exp_ciandt_desc:   'Atuei no ecossistema antifraude do Banco PAN, desenvolvendo microsserviços que processam mais de 400 TPS sob regulamentação do Banco Central do Brasil. Reduzi o tempo de resposta de serviços críticos de 1.400ms para 200ms — melhoria de 85%.',

    exp_geo_senior_role:   'Programador Sênior',
    exp_geo_senior_period: 'Maio 2023 — Novembro 2024 · 1a 7m',
    exp_geo_senior_desc:   'Liderança técnica em projetos de modernização para arquitetura de microsserviços com Kotlin e Spring Boot. Responsável por design de APIs, revisão de código e integração com sistemas de parceiros internacionais.',

    exp_geo_full_role:   'Programador Pleno',
    exp_geo_full_period: 'Julho 2022 — Abril 2023 · 10 meses',
    exp_geo_full_desc:   'Desenvolvimento e manutenção de APIs RESTful, testes automatizados com JUnit e Mockito, e pipelines de CI/CD com Jenkins e GitHub Actions.',

    exp_geo_junior_role:   'Programador Júnior',
    exp_geo_junior_period: 'Outubro 2020 — Junho 2022 · 1a 9m',
    exp_geo_junior_desc:   'Desenvolvimento de funcionalidades e APIs REST no ecossistema de vendas com Java, Spring Boot e PostgreSQL. Participação em squads ágeis com Scrum e Kanban.',

    exp_geo_intern_role:   'Estagiário de Desenvolvimento',
    exp_geo_intern_period: 'Junho 2020 — Outubro 2020 · 5 meses',
    exp_geo_intern_desc:   'Início da trajetória profissional com apoio no desenvolvimento do GEOvendas Analytics e aprendizado das bases da engenharia de software em ambiente produtivo.',

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
    about_p1: "I'm a Software Engineer with 5+ years of experience building high-performance, high-availability backend systems. My expertise centers on Java and Kotlin within the Spring Boot ecosystem, designing microservice architectures for applications that operate at scale.",
    about_p2: "I've worked in high-stakes environments, including the banking sector. At Banco PAN, I contributed to the anti-fraud ecosystem — a system processing over 400 transactions per second under Brazil's Central Bank regulations. In that role, I reduced critical service response times from 1,400ms to 200ms, an 85% improvement.",
    about_p3: 'I advocate for clean code, automated testing, and continuous integration. I believe quality software goes beyond functionality — it\'s about the maintainability, observability, and resilience that keeps systems reliable over time.',
    about_p4: 'Currently pursuing a postgraduate degree in Software Architecture at FIAP, I continue deepening my knowledge of architectural patterns, cloud-native design, and distributed systems.',

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

    exp_ntconsult_role:         'Tech Lead | Senior Backend Engineer',
    exp_ntconsult_period_label: 'April 2025 — Present',
    exp_ntconsult_desc:         'Working on microservices-oriented software solutions with a focus on quality, scalability, and engineering best practices.',

    exp_ciandt_role:   'Senior Software Engineer · Banco PAN',
    exp_ciandt_period: 'November 2024 — April 2025 · 6 months',
    exp_ciandt_desc:   "Worked on Banco PAN's anti-fraud ecosystem, developing microservices that handle 400+ TPS under Brazil's Central Bank regulations. Reduced critical service response times from 1,400ms to 200ms — an 85% improvement.",

    exp_geo_senior_role:   'Senior Developer',
    exp_geo_senior_period: 'May 2023 — November 2024 · 1y 7m',
    exp_geo_senior_desc:   'Technical leadership on modernization projects migrating to microservices architecture using Kotlin and Spring Boot. Responsible for API design decisions, code review, and integration with international partner systems.',

    exp_geo_full_role:   'Mid-level Developer',
    exp_geo_full_period: 'July 2022 — April 2023 · 10 months',
    exp_geo_full_desc:   'Development and maintenance of RESTful APIs, automated testing with JUnit and Mockito, and CI/CD pipeline setup with Jenkins and GitHub Actions.',

    exp_geo_junior_role:   'Junior Developer',
    exp_geo_junior_period: 'October 2020 — June 2022 · 1y 9m',
    exp_geo_junior_desc:   'Feature development and REST API work in the sales ecosystem using Java, Spring Boot, and PostgreSQL. Active participation in agile squads with Scrum and Kanban.',

    exp_geo_intern_role:   'Development Intern',
    exp_geo_intern_period: 'June 2020 — October 2020 · 5 months',
    exp_geo_intern_desc:   'Began professional career supporting the development of GEOvendas Analytics and learning software engineering foundations in a production environment.',

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

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 66;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
});
