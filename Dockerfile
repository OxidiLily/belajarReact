FROM node:22-alpine

WORKDIR /appProfile

COPY package* /

RUN npm i

COPY . .

RUN npm audit fix --force

RUN npm run build

EXPOSE 8001

CMD [ "npm","run", "preview" ]
