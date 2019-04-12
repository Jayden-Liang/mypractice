#User an existing docker image as a base
FROM node:alpine


#Download and install a dependency

COPY ./ ./
RUN npm install 


#Tell the image what to do when it starts as a container

CMD ["npm", "start"]
