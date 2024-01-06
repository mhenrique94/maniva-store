FROM node:16.17-slim AS development

WORKDIR /store_frontend

COPY package*.json /store_frontend/

RUN npm install -g @vue/cli \
  && npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "--http=0.0.0.0:8080"]