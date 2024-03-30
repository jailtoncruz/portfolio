FROM node:18.16-alpine as build

WORKDIR /app
COPY . .
ENV NODE_ENV=production
ENV PYTHONUNBUFFERED=1
RUN apk add --update alpine-sdk \
  && apk add --update --no-cache python3 \
  && ln -sf python3 /usr/bin/python \
  && python3 -m ensurepip \
  && pip3 install --no-cache --upgrade pip setuptools \
  && npm install \
  && npm run build \
  && npm run next:build

FROM node:20.7-alpine
USER node

WORKDIR /app
ENV NODE_ENV=production

COPY --chown=node:node --from=build /app/next.config.js next.config.js
COPY --chown=node:node --from=build /app/dist dist
COPY --chown=node:node --from=build /app/prisma prisma
COPY --chown=node:node --from=build /app/package.json .
COPY --chown=node:node --from=build /app/.next .next
COPY --chown=node:node --from=build /app/.npmrc .npmrc

RUN npm install --omit-dev \
  && npm cache clean --force \
  && rm .npmrc

CMD ["npm","run", "start:prod"]
