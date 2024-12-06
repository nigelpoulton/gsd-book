FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install express
COPY . .
EXPOSE 5005
ENTRYPOINT ["node", "app.js"]
