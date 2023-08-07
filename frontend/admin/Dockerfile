FROM node:lts
WORKDIR /frontend/

COPY ../../frontend .

RUN apt update && apt install -y 
RUN npm i
RUN npm run build

CMD [ "npm serve -s build" ] 