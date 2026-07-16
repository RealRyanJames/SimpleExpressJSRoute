FROM node:26
WORKDIR /

COPY Server.js .
COPY . .

COPY package.json .
RUN npm install

EXPOSE 3000

CMD ["node", "Server.ts"]