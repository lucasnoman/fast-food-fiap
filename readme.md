.
├── prisma
│   ├── migrations
│   └── schema.prisma
├── src
│   ├── adapter
│   │   ├── driven
│   │   │   ├── infra
│   │   │   │   ├── config
│   │   │   │   │   └── prisma.ts
│   │   │   │   ├── env
│   │   │   │   │   └── index.ts
│   │   │   │   ├── http
│   │   │   │   │   └── app.ts
│   │   │   │   └── routes
│   │   │   │       └── ProductRoute.ts
│   │   │   └── repository
│   │   │       ├── in-memory
│   │   │       └── prisma
│   │   └── driver
│   │       └── web
│   │           ├── controllers
│   │           │   └── ProductServiceController.ts
│   │           ├── middleware
│   │           └── routes
│   ├── core
│   │   ├── application
│   │   │   ├── ports
│   │   │   │   └── ProductServicePort.ts
│   │   │   └── services
│   │   │       └── ProductService.ts
│   │   └── domain
│   │       ├── confection
│   │       │   ├── entities
│   │       │   ├── events
│   │       │   ├── services
│   │       │   └── value-objects
│   │       ├── customer
│   │       │   ├── entities
│   │       │   ├── events
│   │       │   ├── services
│   │       │   └── value-objects
│   │       ├── delivery
│   │       │   ├── entities
│   │       │   ├── events
│   │       │   ├── services
│   │       │   └── value-objects
│   │       ├── order
│   │       │   ├── entities
│   │       │   ├── events
│   │       │   ├── services
│   │       │   └── value-objects
│   │       ├── payment
│   │       │   ├── entities
│   │       │   ├── events
│   │       │   ├── services
│   │       │   └── value-objects
│   │       └── products
│   │           ├── entities
│   │           │   └── Product.ts
│   │           ├── events
│   │           ├── services
│   │           └── value-objects
│   │               ├── ProductCategoryVO.ts
│   │               └── ProductImagesVO.ts
│   ├── server.ts
│   ├── shared
│   └── tests
├── readme.md
├── Dockerfile
├── docker-compose.yml
├── eslint.config.mjs
├── package.json
├── pnpm-lock.yaml
└── tsconfig.json
