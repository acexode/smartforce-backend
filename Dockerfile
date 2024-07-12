FROM node:16.18-buster-slim

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install --legacy-peer-deps

ENV NODE_ENV development

EXPOSE 3000

CMD ["npm", "run", "dev"]
