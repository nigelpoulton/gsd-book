FROM node:alpine
WORKDIR /usr/src/app
COPY . .
RUN npm ci --omit=dev
USER node
EXPOSE 8080
CMD node app.js
