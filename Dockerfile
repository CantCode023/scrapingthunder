FROM node:19.6.0-alpine

# Stands for Docker App
WORKDIR /dapp

COPY ./package.json .

RUN npm install

COPY ./app ./app

RUN cd app; npm install

EXPOSE 3000

CMD ["npm start --prefix ./app"]