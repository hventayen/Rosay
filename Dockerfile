FROM node:18-alpine

WORKDIR /rosay3/

COPY package.json .

COPY package-lock.json .

RUN npm install

COPY public/ ./public

COPY src/ ./src

EXPOSE 3000

CMD ["npm", "start"]