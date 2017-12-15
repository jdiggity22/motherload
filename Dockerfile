FROM node
COPY motd.js .
EXPOSE 8000
CMD node motd.js


