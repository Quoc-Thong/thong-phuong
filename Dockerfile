FROM node:18-alpine as development
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm cache clear -f
RUN npm install -g npm@latest
RUN npm install yarn --force
RUN yarn install
COPY . .
RUN yarn build
CMD [ "yarn", "start" ]

