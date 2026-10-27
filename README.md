# cv-graphql

Цифровая визитка на NestJS + GraphQL + Prisma + PostgreSQL.

## Запуск

```
docker compose up --build
```

Потом открыть http://localhost:3000/graphql, там Apollo Sandbox. Миграции и сид прогоняются сами при старте контейнера.

Локально без докера: `npm ci`, поднять postgres, `DATABASE_URL` как в `.env.example`, дальше `npx prisma migrate deploy && npm run db:seed && npm run start:dev`. Тесты: `npm test`.

## Пример запроса

```graphql
query {
  profile {
    name
    description
    links { label url }
    skills(category: BACKEND) { name category }
    experience { company position period achievements }
    projects { name url }
  }
}
```

`skills` без аргумента отдаёт все навыки. Есть ещё `profiles`, если профилей станет больше одного.

## Почему так

- Code-first: схема GraphQL собирается из TS-классов, нет второго источника правды рядом с типами.
- Слои resolver / service / repository. Resolver только про GraphQL, service группирует и форматирует (например, период работы), repository единственное место, где есть Prisma.
- Вложенные поля (links, skills, experience, projects) идут через DataLoader, который создаётся на каждый запрос в GraphQL context. На любой список профилей получается один SQL на связь (`WHERE profileId IN (...)`), без N+1. На внешних ключах индексы.
- Достижения лежат в `text[]` в Experience: они всегда читаются вместе с местом работы и отдельно не нужны, лишняя таблица и join тут не дают ничего.
- При старте контейнера `prisma migrate deploy`, потом сид. Сид идемпотентный: upsert профиля по slug и пересоздание дочерних записей в одной транзакции, так что перезапуск ничего не дублирует.
- Dockerfile multi-stage: сборка с dev-зависимостями отдельно, в финальном образе только dist, prod-зависимости и prisma, запуск не от root.
