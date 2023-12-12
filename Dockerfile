FROM node:18-alpine
RUN apk add --no-cache openssh-client
RUN apk add -U git curl
