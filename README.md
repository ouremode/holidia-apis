# Elysia with Bun runtime

## Getting Started

To get started with this template, simply run:

```bash
bun install
```

## Envs

Add your env variables to the `.env` file.

## Database

Generate Prisma client:

```bash
bun run db:generate
```

Run migrations in development:

```bash
bun run db:migrate
```

Deploy migrations in production:

```bash
bun run db:deploy
```

Open Prisma Studio:

```bash
bun run db:studio
```

## Development

To start the development server run:

```bash
bun run dev
```
