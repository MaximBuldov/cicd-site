FROM node:alpine as build
WORKDIR /app
RUN npm install -g yarn
COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn build
CMD ["yarn", "start"]

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3001
CMD ["nginx", "-g", "daemon off;"]

