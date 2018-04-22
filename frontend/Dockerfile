# base image
FROM node:9.10.0 as node

#https://medium.com/@tiangolo/angular-in-docker-with-nginx-supporting-environments-built-with-multi-stage-docker-builds-bb9f1724e984


# install chrome for protractor tests
#RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
#RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
#RUN apt-get update && apt-get install -yq google-chrome-stable

WORKDIR /app
COPY package.json /app/
RUN npm install
COPY ./ /app/

RUN npm install
#RUN npm install -g @angular/cli@1.7.4

# add app
#COPY . /usr/src/app

COPY ./ /app/
ARG env=prod
RUN npm run build -- --prod --environment $env

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.13.12
COPY --from=node /app/dist/ /usr/share/nginx/html
#ADD /app/dist/ /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/nginx.conf
