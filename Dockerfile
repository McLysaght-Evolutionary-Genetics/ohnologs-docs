FROM docker.io/node:22-alpine AS builder
WORKDIR /app
RUN corepack enable
COPY package.json .
COPY pnpm-lock.yaml .
RUN pnpm i --no-frozen-lockfile
COPY . .
RUN pnpm build

FROM docker.io/nginx:1.29-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 3001
