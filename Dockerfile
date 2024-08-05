FROM node:alpine as build
RUN npm uninstall -g yarn || true
RUN rm -rf /app/node_modules
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3001
CMD ["npm", "run", "start"]

