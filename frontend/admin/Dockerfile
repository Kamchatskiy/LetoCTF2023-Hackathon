FROM node:lts
WORKDIR /frontend/

COPY ../../frontend .

RUN apt update && apt install -y 
RUN npm i
RUN npm run build
EXPOSE 6969

CMD [ "npm serve -s build" ] 