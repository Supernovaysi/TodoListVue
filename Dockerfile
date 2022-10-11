FROM node:lts AS builder 

WORKDIR /app

COPY package.json ./

RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

RUN pnpm config set auto-install-peers true
RUN pnpm config set strict-peer-dependencies false
RUN pnpm i

COPY . .

RUN pnpm build

FROM nginx:stable-alpine AS production-stage

COPY .docker/nginx/prod.conf /temp/prod.conf
RUN envsubst /app < /temp/prod.conf > /etc/nginx/conf.d/default.conf

COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
