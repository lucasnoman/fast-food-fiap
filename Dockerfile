FROM node:20.14.0-slim

RUN npm i -g pnpm@9.1.3

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml ./
COPY prisma ./prisma/

RUN apt update -y && \
  apt install -y openssl

RUN pnpm install && pnpm prisma generate

COPY . .

EXPOSE 3000

CMD ["pnpm", "run", "start:dev"]
