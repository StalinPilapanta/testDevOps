FROM node

RUN mkdir -p /home/node/app/node_modules

RUN  chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package.json /home/node/app
COPY server.js /home/node/app

USER node


RUN npm install

COPY --chown=node:node . .

EXPOSE 3001

CMD node server.js