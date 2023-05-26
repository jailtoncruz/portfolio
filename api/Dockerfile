FROM node:18.16-alpine

WORKDIR /app
ENV NODE_ENV=production

COPY dist ./dist
COPY package*.json ./
COPY prisma ./

RUN npm install --omit-dev

CMD ["npm", "run", "start:prod"]