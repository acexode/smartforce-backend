FROM node:16.18-buster-slim

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install --legacy-peer-deps

ENV NODE_ENV production

EXPOSE 3000

CMD ["npm", "run", "start"]
