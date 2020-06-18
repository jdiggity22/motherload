FROM node
COPY motd.js .
COPY package.json .
RUN npm install
EXPOSE 8000
CMD node motd.js


