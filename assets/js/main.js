const translations = {
    'pt': {
        pageTitle: 'Gusthawo Junkes',
        navAbout: 'Sobre',
        navSkills: 'Habilidades',
        navExperience: 'Experiência',
        navProjects: 'Projetos',
        navContact: 'Contato',
        heroGreeting: 'Olá, eu sou ',
        heroButton: 'Conheça os meus projetos 👇',
        aboutTitle: 'Sobre',
        aboutP1: 'Engenheiro de Software especializado em desenvolver, implementar e integrar soluções backend utilizando Java, Kotlin e Spring Boot, acumulando mais de 5 anos de experiência.',
        aboutP2: 'Minha atuação é sempre orientada por boas práticas de engenharia, sendo TDD (Test-Driven Development) uma metodologia que aplico constantemente para garantir testes automatizados e cobertura de código desde o primeiro commit. Também fui responsável por estruturar pipelines automatizados com GitHub Actions, integrando testes unitários, análise estática de código e validações automatizadas, aumentando significativamente a eficiência das entregas e reduzindo o retrabalho.',
        aboutP3: 'Uma das minhas experiências mais relevantes foi no Banco PAN, onde contribuí com soluções backend para prevenção de fraudes monetárias e não monetárias. Trabalhei em um ecossistema de microsserviços, com Spring Boot e Quarkus, utilizando Java 8, 17 e 21. Esse ecossistema processa cerca de 400 transações por segundo (TPS), o que exigiu uma forte preocupação com desempenho, resiliência e observabilidade. Dentro desse contexto, desenvolvi e implementei componentes críticos para atender às demandas regulatórias do Banco Central do Brasil (BACEN), garantindo conformidade e segurança. Além disso, participei ativamente de discussões técnicas para otimizar a comunicação entre microsserviços. Um dos meus principais resultados foi a redução do tempo de resposta de uma aplicação de 1400ms para 200ms - uma melhoria de aproximadamente 85% por meio de otimização de código, ajustes de infraestrutura e melhorias em fluxos de comunicação.',
        aboutP4: 'Além da experiência no setor bancário, tive a oportunidade de liderar tecnicamente um projeto de integração entre um CRM e uma solução de telefonia de um parceiro internacional, enfrentando desafios de integração em tempo real e garantindo a consistência das informações entre sistemas distintos.',
        aboutP5: 'Gosto de trabalhar em equipe, compartilhar conhecimento e contribuir para a evolução contínua dos processos e das soluções onde atuo. Acredito que tecnologia de qualidade é construída com boas práticas, colaboração e inovação constante. Estou sempre aberto a novos desafios e oportunidades onde eu possa agregar valor e continuar evoluindo como engenheiro.',
        skillsTitle: 'Minhas Habilidades',
        skillJavaTitle: 'Java',
        skillJavaDesc: 'Spring Boot, Spring Cloud, Quarkus',
        skillKotlinTitle: 'Kotlin',
        skillKotlinDesc: 'Ktor, Spring Boot, Exposed',
        skillMicroservicesTitle: 'Microsserviços',
        skillMicroservicesDesc: 'RESTful APIs, Kafka, RabbitMQ',
        skillDatabasesTitle: 'Bancos de Dados',
        skillDatabasesDesc: 'PostgreSQL, MySQL, MongoDB, Redis',
        skillCloudTitle: 'Cloud & Containers',
        skillCloudDesc: 'AWS, Docker, Kubernetes',
        skillDevOpsTitle: 'DevOps & CI/CD',
        skillDevOpsDesc: 'Git, Jenkins, GitHub Actions, SonarQube',
        skillTestingTitle: 'Testes',
        skillTestingDesc: 'Testes Unitários, Integração, Cucumber, Mockito',
        skillMethodologiesTitle: 'Metodologias & Outros',
        skillMethodologiesDesc: 'Scrum, Kanban, Jira',
        experienceTitle: 'Experiência Profissional',
        jobNTConsultTitle: 'Engenheiro de Software Sênior',
        jobNTConsultCompany: 'NTConsult',
        jobNTConsultDuration: 'abril de 2025 - Presente (2 meses)',
        jobNTConsultLocation: 'Porto Alegre, Rio Grande do Sul, Brasil',
        jobNTConsultDesc1: 'Atuação em projetos de engenharia de software de alto nível.',
        jobCITTitle: 'Engenheiro de Software Sênior @ Banco Pan',
        jobCITCompany: 'CI&T',
        jobCITDuration: 'novembro de 2024 - abril de 2025 (6 meses)',
        jobCITLocation: 'Campinas, São Paulo, Brasil',
        jobCITDesc1: 'Desenvolvimento de soluções backend para prevenção de fraudes monetárias e não monetárias no Banco PAN.',
        jobCITDesc2: 'Atuação em ecossistema de microsserviços com Spring Boot e Quarkus, utilizando Java 8, 17 e 21 (400 TPS).',
        jobCITDesc3: 'Implementação de componentes essenciais para demandas do Banco Central do Brasil (BACEN).',
        jobCITDesc4: 'Otimização do tempo de resposta de aplicações (redução de 1400ms para 200ms - 85%).',
        jobCITDesc5: 'Foco em segurança e detecção de fraudes em transações bancárias.',
        jobGEOVendasSeniorTitle: 'Programador Sênior',
        jobGEOVendasSeniorCompany: 'GEOvendas',
        jobGEOVendasSeniorDuration: 'maio de 2023 - novembro de 2024 (1 ano 7 meses)',
        jobGEOVendasSeniorLocation: 'Jaraguá do Sul, Santa Catarina, Brasil',
        jobGEOVendasSeniorDesc1: 'Atuação na equipe de manutenção das soluções GEOvendas Analytics, Força de Vendas e CRM360.',
        jobGEOVendasSeniorDesc2: 'Liderança técnica, apoio e orientação a outros desenvolvedores.',
        jobGEOVendasSeniorDesc3: 'Integrações entre ERPs e sistemas de parceiros, com diversos bancos de dados.',
        jobGEOVendasSeniorDesc4: 'Desenvolvimento da integração de solução de telefonia ao CRM da GEOvendas com empresa internacional.',
        jobGEOVendasSeniorDesc5: 'Levantamento de requisitos técnicos para novas demandas.',
        jobGEOVendasPlenoTitle: 'Programador Pleno',
        jobGEOVendasPlenoCompany: 'GEOvendas',
        jobGEOVendasPlenoDuration: 'julho de 2022 - abril de 2023 (10 meses)',
        jobGEOVendasPlenoLocation: 'Jaraguá do Sul, Santa Catarina, Brasil',
        jobGEOVendasPlenoDesc1: 'Atuação em projetos-chave: GEOvendas Analytics, Força de Vendas e CRM360.',
        jobGEOVendasPlenoDesc2: 'Desenvolvimento de soluções de backoffice e ETL com Java, Vaadin, Spring Boot e PostgreSQL.',
        jobGEOVendasPlenoDesc3: 'Experiência com AngularJS, CoffeeScript, VueJS, JavaScript e .NET Framework para APIs REST.',
        jobGEOVendasPlenoDesc4: 'Transição para squad de manutenção, ampliando experiência com infraestrutura de servidores, Docker e Jenkins.',
        jobGEOVendasPlenoDesc5: 'Condução de projeto de projeto de automação de testes unitários (JUnit, Mockito) e pipeline com GitHub Workflow.',
        jobGEOVendasJuniorTitle: 'Programador Júnior',
        jobGEOVendasJuniorCompany: 'GEOvendas',
        jobGEOVendasJuniorDuration: 'outubro de 2020 - junho de 2022 (1 ano 9 meses)',
        jobGEOVendasJuniorLocation: 'Jaraguá do Sul, Santa Catarina, Brasil',
        jobGEOVendasJuniorDesc1: 'Trabalho em squads de desenvolvimento com metodologias ágeis (Scrum, Kanban).',
        jobGEOVendasJuniorDesc2: 'Trabalho diário com Java/Vaadin/Spring Boot/PostgreSQL.',
        jobGEOVendasJuniorDesc3: 'Desenvolvimento de REST API para o projeto Força de Vendas.',
        jobGEOVendasJuniorDesc4: 'Experiência com JavaScript (CoffeeScript), AngularJS e CouchDB (NoSQL).',
        jobGEOVendasJuniorDesc5: 'Contribuição para ferramenta de digitação de pedidos offline com sincronização.',
        jobGEOVendasInternTitle: 'Estagiário em Desenvolvimento',
        jobGEOVendasInternCompany: 'GEOvendas',
        jobGEOVendasInternDuration: 'junho de 2020 - outubro de 2020 (5 meses)',
        jobGEOVendasInternLocation: 'Jaraguá do Sul, Santa Catarina, Brasil',
        jobGEOVendasInternDesc1: 'Trabalho no GEOvendas Analytics (backoffice e sistema analítico de dados de vendas).',
        jobGEOVendasInternDesc2: 'Análise de dados de vendas utilizando mapas (Google Maps API) e diversos bancos de dados.',
        projectsTitle: 'Meus Projetos',
        project1Title: 'Order System',
        project1Desc: 'Um ecossistema para a emissão e processamento de pedidos',
        project2Title: 'Financial File Parser',
        project2Desc: 'API para consumir e processar arquivos financeiros de bancos brasileiros 🇧🇷',
        project3Title: 'Wisegress API',
        project3Desc: 'API RESTful construída para servir o aplicativo Wisegress',
        projectsMore: 'Para ver mais dos meus projetos, visite meu perfil no GitHub:',
        contactTitle: 'Entre em Contato',
        contactSubtitle: 'Estou aberto a novas oportunidades e colaborações. Sinta-se à vontade para me enviar uma mensagem!',
        contactNameLabel: 'Seu Nome',
        contactEmailLabel: 'Seu Email',
        contactMessageLabel: 'Mensagem',
        contactSubmitButton: 'Enviar Mensagem',
        messageBoxTitle: 'Mensagem Enviada!',
        messageBoxText: 'Obrigado por sua mensagem. Entrarei em contato em breve.',
        messageBoxClose: 'Fechar',
        footerCopyright: '&copy; 2025 Gusthawo Junkes. Todos os direitos reservados.',
        footerLinkedIn: 'LinkedIn',
        footerGitHub: 'GitHub',
        footerEmail: 'Email'
    },
    'en': {
        pageTitle: 'Gusthawo Junkes',
        navAbout: 'About',
        navSkills: 'Skills',
        navExperience: 'Experience',
        navProjects: 'Projects',
        navContact: 'Contact',
        heroGreeting: 'Hello, I\'m ', // Part of the greeting
        heroButton: 'Check out my projects 👇',
        aboutTitle: 'About',
        aboutP1: 'Software Engineer specialized in developing, implementing, and integrating backend solutions using Java, Kotlin, and Spring Boot, with over 5 years of experience.',
        aboutP2: 'My work is always guided by good engineering practices, with TDD (Test-Driven Development) being a methodology I constantly apply to ensure automated tests and code coverage from the first commit. I was also responsible for structuring automated pipelines with GitHub Actions, integrating unit tests, static code analysis, and automated validations, significantly increasing delivery efficiency and reducing rework.',
        aboutP3: 'One of my most relevant experiences was at Banco PAN, where I contributed with backend solutions for preventing monetary and non-monetary fraud. I worked in a microservices ecosystem with Spring Boot and Quarkus, using Java 8, 17, and 21. This ecosystem processes around 400 transactions per second (TPS), which required a strong focus on performance, resilience, and observability. Within this context, I developed and implemented critical components to meet the regulatory demands of the Central Bank of Brazil (BACEN), ensuring compliance and security. Additionally, I actively participated in technical discussions to optimize communication between microservices. One of my main results was reducing an application\'s response time from 1400ms to 200ms - an improvement of approximately 85% through code optimization, infrastructure adjustments, and communication flow enhancements.',
        aboutP4: 'In addition to my experience in the banking sector, I had the opportunity to technically lead an integration project between a CRM and a telephony solution from an international partner, facing real-time integration challenges and ensuring data consistency between distinct systems.',
        aboutP5: 'I enjoy working in a team, sharing knowledge, and contributing to the continuous evolution of processes and solutions where I operate. I believe that quality technology is built with good practices, collaboration, and constant innovation. I am always open to new challenges and opportunities where I can add value and continue to grow as an engineer.',
        skillsTitle: 'My Skills',
        skillJavaTitle: 'Java',
        skillJavaDesc: 'Spring Boot, Spring Cloud, Quarkus',
        skillKotlinTitle: 'Kotlin',
        skillKotlinDesc: 'Ktor, Spring Boot, Exposed',
        skillMicroservicesTitle: 'Microservices',
        skillMicroservicesDesc: 'RESTful APIs, Kafka, RabbitMQ',
        skillDatabasesTitle: 'Databases',
        skillDatabasesDesc: 'PostgreSQL, MySQL, MongoDB, Redis',
        skillCloudTitle: 'Cloud & Containers',
        skillCloudDesc: 'AWS, Docker, Kubernetes',
        skillDevOpsTitle: 'DevOps & CI/CD',
        skillDevOpsDesc: 'Git, Jenkins, GitHub Actions, SonarQube',
        skillTestingTitle: 'Testing',
        skillTestingDesc: 'Unit, Integration, Cucumber, Mockito',
        skillMethodologiesTitle: 'Methodologies & Others',
        skillMethodologiesDesc: 'Scrum, Kanban, Jira',
        experienceTitle: 'Professional Experience',
        jobNTConsultTitle: 'Senior Software Engineer',
        jobNTConsultCompany: 'NTConsult',
        jobNTConsultDuration: 'April 2025 - Present (2 months)',
        jobNTConsultLocation: 'Porto Alegre, Rio Grande do Sul, Brazil',
        jobNTConsultDesc1: 'Working on high-level software engineering projects.',
        jobCITTitle: 'Senior Software Engineer @ Banco Pan',
        jobCITCompany: 'CI&T',
        jobCITDuration: 'November 2024 - April 2025 (6 months)',
        jobCITLocation: 'Campinas, São Paulo, Brazil',
        jobCITDesc1: 'Developed backend solutions for preventing monetary and non-monetary fraud at Banco PAN.',
        jobCITDesc2: 'Worked in a microservices ecosystem with Spring Boot and Quarkus, using Java 8, 17, and 21 (400 TPS).',
        jobCITDesc3: 'Implemented essential components to meet the demands of the Central Bank of Brazil (BACEN).',
        jobCITDesc4: 'Optimized application response time (reduced from 1400ms to 200ms - 85%).',
        jobCITDesc5: 'Focused on security and fraud detection in banking transactions.',
        jobGEOVendasSeniorTitle: 'Senior Programmer',
        jobGEOVendasSeniorCompany: 'GEOvendas',
        jobGEOVendasSeniorDuration: 'May 2023 - November 2024 (1 year 7 months)',
        jobGEOVendasSeniorLocation: 'Jaraguá do Sul, Santa Catarina, Brazil',
        jobGEOVendasSeniorDesc1: 'Worked mainly on the maintenance team for GEOvendas solutions, focusing on GEOvendas Analytics, Sales Force, and CRM360 platforms.',
        jobGEOVendasSeniorDesc2: 'Assumed a leadership role, supporting and and guiding other developers in delivering corrective solutions.',
        jobGEOVendasSeniorDesc3: 'Worked with integrations between ERPs and partner systems, dealing with various databases.',
        jobGEOVendasSeniorDesc4: 'Developed the integration of a telephony solution to GEOvendas CRM in collaboration with an international company.',
        jobGEOVendasSeniorDesc5: 'Actively participated in gathering technical requirements for new demands.',
        jobGEOVendasPlenoTitle: 'Full Programmer',
        jobGEOVendasPlenoCompany: 'GEOvendas',
        jobGEOVendasPlenoDuration: 'July 2022 - April 2023 (10 months)',
        jobGEOVendasPlenoLocation: 'Jaraguá do Sul, Santa Catarina, Brazil',
        jobGEOVendasPlenoDesc1: 'Worked on key projects: GEOvendas Analytics, Sales Force, and CRM360 (CRM Solution).',
        jobGEOVendasPlenoDesc2: 'Main experience was in developing backoffice and ETL solutions using Java, Vaadin, Spring Boot, and PostgreSQL.',
        jobGEOVendasPlenoDesc3: 'Had the opportunity to work on stacks with AngularJS and CoffeeScript, VueJS with JavaScript, and .NET Framework for creating REST APIs.',
        jobGEOVendasPlenoDesc4: 'Transitioned from the product squad (Scrum and Kanban) to the maintenance squad, expanding experience with server infrastructure, Docker orchestration, and Java application deployment in CI/CD pipelines using Jenkins.',
        jobGEOVendasPlenoDesc5: 'Led a project from scratch to automate unit tests in GEOvendas Java solutions, using JUnit and Mockito, including a GitHub Workflow verification pipeline.',
        jobGEOVendasJuniorTitle: 'Junior Programmer',
        jobGEOVendasJuniorCompany: 'GEOvendas',
        jobGEOVendasJuniorDuration: 'October 2020 - June 2022 (1 year 9 months)',
        jobGEOVendasJuniorLocation: 'Jaraguá do Sul, Santa Catarina, Brazil',
        jobGEOVendasJuniorDesc1: 'Worked on the GEOvendas Analytics and Sales Force projects with a development squad using agile methodologies (Scrum, Kanban).',
        jobGEOVendasJuniorDesc2: 'Continued working daily with Java/Vaadin/Spring Boot/PostgreSQL.',
        jobGEOVendasJuniorDesc3: 'Also responsible for developing a REST API for consumption by the Sales Force project.',
        jobGEOVendasJuniorDesc4: 'Gained experience working with JavaScript (using the CoffeeScript library).',
        jobGEOVendasJuniorDesc5: 'In this project, worked with the AngularJS framework for solution building and CouchDB (NoSQL) for data persistence. The project itself is a tool for sales representatives to be able to enter orders completely offline, with the possibility of later synchronization.',
        jobGEOVendasInternTitle: 'Development Intern',
        jobGEOVendasInternCompany: 'GEOvendas',
        jobGEOVendasInternDuration: 'June 2020 - October 2020 (5 months)',
        jobGEOVendasInternLocation: 'Jaraguá do Sul, Santa Catarina, Brazil',
        jobGEOVendasInternDesc1: 'Worked on GEOvendas Analytics, a product aimed at use as a backoffice and analytical system for sales data from a partner ERP.',
        jobGEOVendasInternDesc2: 'In this project, I was able to work with sales data analysis using maps (Google Maps API) and various databases.',
        projectsTitle: 'My Projects',
        project1Title: 'Order System',
        project1Desc: 'An Microsservice Ecosystem for Order Placement and Processing.',
        project2Title: 'Financial File Parser',
        project2Desc: 'API for consuming and processing bank statements from Brazilian banks 🇧🇷',
        project3Title: 'Wisegress API',
        project3Desc: 'RestFul API built to provide services for the Wisegress application',
        projectsMore: 'To see more of my projects, visit my GitHub profile:',
        contactTitle: 'Get in Touch',
        contactSubtitle: 'I am open to new opportunities and collaborations. Feel free to send me a message!',
        contactNameLabel: 'Your Name',
        contactEmailLabel: 'Your Email',
        contactMessageLabel: 'Message',
        contactSubmitButton: 'Send Message',
        messageBoxTitle: 'Message Sent!',
        messageBoxText: 'Thank you for your message. I will get back to you shortly.',
        messageBoxClose: 'Close',
        footerCopyright: '&copy; 2025 Gusthawo Junkes. All rights reserved.',
        footerLinkedIn: 'LinkedIn',
        footerGitHub: 'GitHub',
        footerEmail: 'Email'
    }
};

let currentLanguage = localStorage.getItem('language') || 'pt';
const dynamicNames = ['Gusthawo Junkes', '@gusthawojunkes', 'gusthawo.junkes'];
const dynamicNamesEn = ['Gusthawo Junkes', '@gusthawojunkes', 'gusthawo.junkes'];
let currentNameIndex = 0;
let nameInterval;

function updateDynamicName() {
    const dynamicNameElement = document.getElementById('dynamic-name');
    if (dynamicNameElement) {
        const namesArray = currentLanguage === 'pt' ? dynamicNames : dynamicNamesEn;
        dynamicNameElement.textContent = namesArray[currentNameIndex];
        currentNameIndex = (currentNameIndex + 1) % namesArray.length;
    }
}

function updateFlags(lang) {
    const currentFlag = document.getElementById('current-flag');
    const currentFlagMobile = document.getElementById('current-flag-mobile');
    if (lang === 'pt') {
        currentFlag.src = './assets/icons/flag-br.svg';
        currentFlagMobile.src = './assets/icons/flag-br.svg';
    } else {
        currentFlag.src = './assets/icons/flag-us.svg';
        currentFlagMobile.src = './assets/icons/flag-us.svg';
    }
}

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', currentLanguage);
    updateFlags(currentLanguage);
    applyTranslations();
    document.getElementById('language-dropdown-content').classList.remove('show');
    document.getElementById('language-dropdown-content-mobile').classList.remove('show');
}

function applyTranslations() {
    document.documentElement.lang = currentLanguage;
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage][key]) {
            if (key === 'heroGreeting') {
                element.innerHTML = translations[currentLanguage][key];
            } else {
                element.textContent = translations[currentLanguage][key];
            }
        }
    });
    clearInterval(nameInterval);
    currentNameIndex = 0;
    updateDynamicName();
    nameInterval = setInterval(updateDynamicName, 3000);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        if (mobileMenu.classList.contains('flex')) {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
        }
    });
});

const menuButton = document.getElementById('menu-button');
const closeMenuButton = document.getElementById('close-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuLinks = mobileMenu.querySelectorAll('[data-menu-link]');
menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
});
closeMenuButton.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('flex');
});
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
    });
});

const themeToggleBtn = document.getElementById('theme-toggle');
const themeToggleBtnMobile = document.getElementById('theme-toggle-mobile');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
const sunIconMobile = document.getElementById('sun-icon-mobile');
const moonIconMobile = document.getElementById('moon-icon-mobile');
function setTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
        sunIconMobile.classList.remove('hidden');
        moonIconMobile.classList.add('hidden');
    } else {
        document.documentElement.classList.remove('dark');
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
        sunIconMobile.classList.add('hidden');
        moonIconMobile.classList.remove('hidden');
    }
    localStorage.setItem('theme', theme);
}
const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
setTheme(savedTheme);
themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});
themeToggleBtnMobile.addEventListener('click', () => {
    const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});

const languageDropdownButton = document.getElementById('language-dropdown-button');
const languageDropdownContent = document.getElementById('language-dropdown-content');
const languageDropdownButtonMobile = document.getElementById('language-dropdown-button-mobile');
const languageDropdownContentMobile = document.getElementById('language-dropdown-content-mobile');
languageDropdownButton.addEventListener('click', (event) => {
    event.stopPropagation();
    languageDropdownContent.classList.toggle('show');
});
languageDropdownButtonMobile.addEventListener('click', (event) => {
    event.stopPropagation();
    languageDropdownContentMobile.classList.toggle('show');
});
window.addEventListener('click', (event) => {
    if (!event.target.closest('.language-dropdown')) {
        if (languageDropdownContent.classList.contains('show')) {
            languageDropdownContent.classList.remove('show');
        }
        if (languageDropdownContentMobile.classList.contains('show')) {
            languageDropdownContentMobile.classList.remove('show');
        }
    }
});
document.querySelectorAll('.language-dropdown-content button').forEach(button => {
    button.addEventListener('click', (event) => {
        const lang = event.currentTarget.getAttribute('data-lang');
        const flagPath = lang === 'pt' ? './assets/icons/flag-br.svg' : './assets/icons/flag-us.svg';
        document.getElementById('current-flag').src = flagPath;
        document.getElementById('current-flag-mobile').src = flagPath;
        setLanguage(lang);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language') || 'pt';
    const flagPath = savedLanguage === 'pt' ? './assets/icons/flag-br.svg' : './assets/icons/flag-us.svg';
    document.getElementById('current-flag').src = flagPath;
    document.getElementById('current-flag-mobile').src = flagPath;
    setLanguage(savedLanguage);
});
