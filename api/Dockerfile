FROM node:18.16-alpine

WORKDIR /app
ENV NODE_ENV=production

COPY dist/ .
COPY package*.json .
COPY yarn.lock .
COPY prisma/ prisma/

RUN yarn install --production

CMD node main.js