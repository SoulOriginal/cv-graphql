import { SkillCategory } from '@prisma/client';

export const profile = {
  slug: 'mikhail-borisov',
  name: 'Михаил Борисов',
  title: 'Tech Lead / Software Architect',
  location: 'Узбекистан, готов к переезду, удалённо или гибрид',
  description:
    '9 лет в коммерческой веб-разработке, начинал с Vue и Node.js, вырос до тимлида и архитектора. ' +
    'Последние три года проектирую системы с нуля и руковожу командами из frontend, backend, блокчейн-разработчиков и QA. ' +
    'Сильная сторона: highload на Node.js и Go, события в реальном времени, очереди, gRPC, аналитика на ClickHouse. ' +
    'Блокчейн на практике: Solana и EVM (BNB Chain).',
};

export const links = [
  { label: 'GitHub', url: 'https://github.com/SoulOriginal' },
];

const { BACKEND, FRONTEND, INFRA, BLOCKCHAIN } = SkillCategory;

export const skills: { name: string; category: SkillCategory }[] = [
  { name: 'TypeScript', category: BACKEND },
  { name: 'Node.js', category: BACKEND },
  { name: 'NestJS', category: BACKEND },
  { name: 'Fastify', category: BACKEND },
  { name: 'Go', category: BACKEND },
  { name: 'GraphQL', category: BACKEND },
  { name: 'gRPC', category: BACKEND },
  { name: 'Kafka', category: BACKEND },
  { name: 'BullMQ', category: BACKEND },
  { name: 'PostgreSQL', category: BACKEND },
  { name: 'MongoDB', category: BACKEND },
  { name: 'ClickHouse', category: BACKEND },
  { name: 'Redis', category: BACKEND },
  { name: 'Vue 3', category: FRONTEND },
  { name: 'Nuxt 3', category: FRONTEND },
  { name: 'Angular', category: FRONTEND },
  { name: 'RxJS', category: FRONTEND },
  { name: 'Feature-Sliced Design', category: FRONTEND },
  { name: 'Docker', category: INFRA },
  { name: 'Kubernetes', category: INFRA },
  { name: 'ArgoCD', category: INFRA },
  { name: 'GitHub Actions', category: INFRA },
  { name: 'GitLab CI', category: INFRA },
  { name: 'Solidity', category: BLOCKCHAIN },
  { name: 'Foundry', category: BLOCKCHAIN },
  { name: 'OpenZeppelin', category: BLOCKCHAIN },
  { name: 'Solana', category: BLOCKCHAIN },
  { name: 'BNB Chain', category: BLOCKCHAIN },
];

export const experience = [
  {
    company: 'Blockchain Cuties',
    position: 'Team Lead / архитектор',
    location: 'Германия, удалённо',
    startDate: '2025-09-01',
    endDate: '2026-08-01',
    summary:
      'Web3-игра Pearl Diver Island на BNB Chain: токены, NFT-земля и здания, крафт, сезоны, мини-игры и своя DEX.',
    achievements: [
      'Руководил командой из 13+ человек (frontend, backend, Solidity, QA) и outstaff-подрядчиками, вместе с PM вёл продукт от эпиков до релизов',
      'Спроектировал игровую и on-chain логику: токеномика с локом, вестингом, стейкингом и buyback, крафт из 60 ресурсных токенов, NFT-земля (ERC-721), сезоны с лидербордами. Итого 36 upgradeable-контрактов и 488 тестов на Foundry',
      'Выбрал прокси OpenZeppelin (Transparent и Beacon) для обновлений в mainnet без миграции данных, перевёл обмен с PancakeSwap на собственную AMM-DEX',
      'Перестроил процессы: планирование эпиков, декомпозиция в YouTrack (1300+ задач), обязательное ревью MR, релизные ветки, lint и тесты как условие сборки в CI',
      'Запустил миграцию frontend на Nuxt 3 (около 60 тыс. строк, 240+ компонентов) на Feature-Sliced Design без остановки разработки, внедрил Tailwind 4',
    ],
  },
  {
    company: 'WL.BOT (Whitelist DeFi)',
    position: 'Lead Software Architect',
    location: 'проектная работа',
    startDate: '2024-12-01',
    endDate: '2025-08-01',
    summary:
      'Торговая платформа для DEX на Solana: copy trading, лимитные ордера, снайпинг токенов. Веб, Telegram-бот и расширение для Chrome.',
    achievements: [
      'Спроектировал событийную архитектуру из 40+ микросервисов и воркеров: ядро на Node.js и TypeScript, разбор транзакций на Go, gRPC, BullMQ, Redis Streams',
      'Построил отказоустойчивый приём транзакций Solana через Yellowstone gRPC с ротацией нод и дедупликацией событий, масштабирование до 10 реплик по 350 параллельных задач',
      'Спроектировал аналитику на ClickHouse (28 таблиц, 14 materialized views) и потоковую агрегацию цен на Apache Flink',
      'Написал на Go декодеры транзакций Raydium, Pump.fun, PumpSwap, Jupiter, Meteora, Orca и движок исполнения сделок с отправкой через Jito и bloXroute',
      'Руководил командой из 5-7 разработчиков, около 600 выкаток в прод через GitOps (ArgoCD и Renovate)',
    ],
  },
  {
    company: '1xchange',
    position: 'Tech Lead',
    location: 'проектная работа',
    startDate: '2024-01-01',
    endDate: '2024-11-01',
    summary: 'Финтех-платформа в сфере управления активами.',
    achievements: [
      'Спроектировал архитектуру с нуля: backend на NestJS, обмен событиями через Kafka, клиент на Nuxt 3',
      'Определил стек и инструменты, внедрил code review и единые стандарты кода',
      'Настроил и поддерживал серверную инфраструктуру',
      'Руководил командой разработчиков и координировал разработку',
    ],
  },
  {
    company: 'Baranka',
    position: 'Team Lead Frontend',
    location: 'Москва',
    startDate: '2022-10-01',
    endDate: '2024-08-01',
    summary: 'Высоконагруженное веб-приложение на Angular.',
    achievements: [
      'Перевёл приложение на микрофронтенды на Webpack Module Federation, модули стали разрабатываться и выкладываться независимо',
      'Внедрил Feature-Sliced Design и монорепозиторий на NX, сборка ускорилась за счёт кэша NX',
      'Собрал общую библиотеку UI-компонентов в Storybook',
      'Распределял задачи, проводил code review, менторил разработчиков и собеседовал кандидатов',
      'Разрабатывал сложные модули на Angular 16 с NgRx и unit-тестами',
    ],
  },
  {
    company: 'PropUp (США)',
    position: 'Senior Frontend Developer',
    location: 'удалённо, параллельно',
    startDate: '2022-03-01',
    endDate: '2022-09-01',
    summary: 'SaaS для управления обслуживанием жилой недвижимости.',
    achievements: [
      'Разрабатывал frontend крупной CRM-платформы на Angular и TypeScript от спецификации до релиза',
      'Переводил большую кодовую базу на новые версии Angular',
      'Проводил аудиты безопасности и производительности frontend, писал performance-тесты ключевых сценариев',
      'Участвовал в перекрёстном code review, работал с QA и внешними подрядчиками',
    ],
  },
  {
    company: 'Baltic Web Studio',
    position: 'Frontend-разработчик, затем ведущий разработчик',
    location: 'Калининград',
    startDate: '2019-02-01',
    endDate: '2022-10-01',
    summary:
      'CRM/ERP-система для управления финансами автопарка, интеграция с Яндекс Fleet.',
    achievements: [
      'Разработал клиентскую часть CRM на Vue 2, TypeScript, Vuex и Element UI',
      'Спроектировал ролевую модель доступа (RBAC), которая ограничивает данные и функции на frontend и backend',
      'Сделал админ-панель на Nuxt 3, Pinia и Vuestic UI, через неё систему настраивают без разработчиков',
      'Отвечал за стабильность проекта, общие библиотеки и инфраструктуру',
    ],
  },
  {
    company: 'Фриланс, частная практика',
    position: 'Fullstack-разработчик',
    location: null,
    startDate: '2017-06-01',
    endDate: '2019-02-01',
    summary: 'Веб-приложения под заказ, в том числе для стартапов.',
    achievements: [
      'Делал frontend на Vue и Nuxt, backend на Node.js',
      'Писал ботов для Telegram и Discord',
      'Getman: сайт и мобильное приложение на Ionic с картами (Leaflet, GeoJSON) и заказами',
      'Перевёл backend Getman на NestJS, часть сервисов написал на Go',
    ],
  },
];

export const projects = [
  {
    name: 'Pearl Diver Island',
    url: 'https://landing.pearldivergame.com/',
    role: 'Team Lead / архитектор',
    year: 2025,
    description:
      'Web3-игра на BNB Chain: токены PEARL и BlackPearl, NFT-земля и здания, крафт, сезоны с лидербордами, мини-игры и собственная DEX.',
  },
  {
    name: 'Хаб умного дома с LLM-ассистентом',
    url: null,
    role: 'Архитектор, сооснователь',
    year: 2026,
    description:
      'Ядро на Go, Home Assistant как слой драйверов, облако на Go, PostgreSQL и NATS, обновления по воздуху через A/B-слоты. Прототип работает на Raspberry Pi.',
  },
  {
    name: 'Стриминговый сервис',
    url: null,
    role: 'Архитектор, основатель',
    year: 2023,
    description:
      'Онлайн-кинотеатр: API-шлюз на Node.js с GraphQL, сервисы на Go и Node.js по gRPC, транскодирование в HLS через FFmpeg, рекомендации на Neo4j.',
  },
];
