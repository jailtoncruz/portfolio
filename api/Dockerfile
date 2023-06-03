FROM node:18.16-alpine

WORKDIR /app
ENV NODE_ENV=production

ENV PYTHONUNBUFFERED=1
RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python
RUN python3 -m ensurepip
RUN pip3 install --no-cache --upgrade pip setuptools

COPY dist ./dist
COPY package.json ./
COPY prisma ./
COPY .npmrc .npmrc

RUN npm install -g npm
RUN npm install --omit-dev
RUN rm .npmrc

CMD ["npm", "run", "start:prod"]