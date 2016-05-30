FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY src/package.json /usr/src/app/
WORKDIR src/
RUN npm install

# Bundle app source
WORKDIR ..
COPY . /usr/src/app

EXPOSE 8080
CMD [ "npm", "start" ]
