FROM node:18.16-alpine

WORKDIR /app
ENV NODE_ENV=production

COPY dist ./dist
COPY package.json ./
COPY prisma ./
COPY .npmrc .npmrc
RUN npm install -g npm
RUN npm install --omit-dev
RUN rm .npmrc

CMD ["npm", "run", "start:prod"]