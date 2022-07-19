FROM node:18.1.0 AS base

WORKDIR /app

# Build step
FROM base as builder

COPY package.json package-lock.json ./
RUN npm install

# Run step
COPY . .
RUN npm run build

ENTRYPOINT [ "node", "App/server.js" ]