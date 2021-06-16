FROM node:13.2.0-stretch-slim
WORKDIR /app
COPY package*.json ./
EXPOSE 5000
COPY . .
CMD [ "npm","start" ]