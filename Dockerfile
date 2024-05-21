FROM node:16-alpine
WORKDIR /quiz
COPY . .
RUN npm install -g http-server
EXPOSE 8080
CMD [ "http-server","-p","8080" ]