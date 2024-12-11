FROM node:22-alpine

WORKDIR /appProfile

COPY package* /

RUN npm i

COPY . .

RUN npm run build

RUN npm audit

RUN npm audit fix

EXPOSE 8001

CMD [ "npm","run", "preview" ]
