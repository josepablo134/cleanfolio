# syntax=docker/dockerfile:1
FROM nginx:stable-alpine

WORKDIR /app

#For development and Debugging on production xd
RUN apk add bash vim bash-completion

RUN mkdir -p /etc/nginx/conf.d

COPY DockerFiles/nginx.conf /etc/nginx/nginx.conf
COPY DockerFiles/default.conf /etc/nginx/conf.d/default.conf
COPY build/ /usr/share/nginx/html

EXPOSE 443
EXPOSE 80
