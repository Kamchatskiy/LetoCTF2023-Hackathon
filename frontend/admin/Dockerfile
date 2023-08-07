FROM node:lts-alpine
WORKDIR /frontend/

RUN apk update && apk add --no-cache npm

COPY ../package*.json ./
RUN npm ci --omit=dev

COPY .. .
RUN npm run build

EXPOSE 6969
CMD [ "npx", "serve", "-s", "build", "-l", "6969" ]