
# FIAP Tech Challenge - Fast Food (totem)

This project is a challenge from the first stage of the postgraduate course in Software Architecture at FIAP. It aims to implement Hexagonal Architecture (Ports & Adapters), with a functional web application using REST.
## Tech Stack

**Server:** Node v20.14, TypeScript, Fastify, Prisma, Zod

**Infra:** PostgreSQL, Docker


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

#### System environment
`NODE_ENV`

#### Prisma
`DATABASE_URL`="postgresql://`<USER>`:`<PASSWORD>`@`<HOST>`:`<PORT>`/`<DATABASE>`?schema=`<SCHEMA>`"

#### Docker compose
`DB_USERNAME`\
`DB_PASSWORD`\
`DB_PORT`\
`IMAGE_VERSION`=0.0.1

#### Back-end
`SERVER_PORT`

## Installation

First run the docker files so the image can be built and the services run.

```zsh
  docker compose build
  docker compose up
```

Then install my-project with pnpm

```zsh
  pnpm install
```
## API Reference

#### Get all items

```http
  GET /products
```

| Parameter | Type     | Description                     |
| :-------- | :------- | :------------------------------ |
|     -     |     -    | Returns all registered products |

#### Get item - TODO

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.


## Documentation

### Folder structure - Hexagonal + DDD
```bash
.
├── prisma
│   ├── migrations
│   └── schema.prisma
└── src
    ├── adapter
    │   ├── driven
    │   │   └── infra
    │   │       ├── config
    │   │       ├── env
    │   │       ├── http
    │   │       ├── repository
    │   │       │   ├── prisma
    │   │       │   └── memory
    │   │       └── routes
    │   └── driving
    │       └── web
    │           └── controllers
    ├── core
    │   ├── application
    │   │   ├── ports
    │   │   └── services
    │   └── domain
    │       ├── confection
    │       │   ├── entities
    │       │   ├── events
    │       │   ├── services
    │       │   └── value-objects
    │       ├── customer
    │       │   ├── entities
    │       │   ├── events
    │       │   ├── services
    │       │   └── value-objects
    │       ├── delivery
    │       │   ├── entities
    │       │   ├── events
    │       │   ├── services
    │       │   └── value-objects
    │       ├── order
    │       │   ├── entities
    │       │   ├── events
    │       │   ├── services
    │       │   └── value-objects
    │       ├── payment
    │       │   ├── entities
    │       │   ├── events
    │       │   ├── services
    │       │   └── value-objects
    │       └── products
    │           ├── entities
    │           ├── events
    │           ├── services
    │           └── value-objects
    ├── shared
    └── tests
````

---

### Explicações docker compose

`hostname` é usado para definir um nome de host para cara serviço. Normalmente o nome de host é o nome do container, mas definindo essa variável, é possível dar um outro nome e assim, fazer os serviços se conectarem.
A variável `DATABASE_URL` do `.env` usará então, esse `hostname` para criar a conexão interna. Externamente usamos o `localhost`.

O `healthcheck` abaixo é usado em conjunto com o outro serviço que depende dele. Assim, esse segundo serviço esperará o primeiro ligar por completo e fazer a checagem de saúde, depois da resposta positiva esse segundo serviço será ligado.
```yml
services:
  service_name:
    healthcheck:
          test: ["CMD-SHELL", "pg_isready -U docker -d fastfood"]
          interval: 3s
          timeout: 5s
          retries: 5

  service_name_2:
    depends_on:
      service_name:
        condition: service_healthy
```
