FROM node:15-alpine

ENV NEXT_TELEMETRY_DISABLED=1
WORKDIR /app
COPY ./package.json /app
COPY ./package-lock.json /app
COPY . /app

RUN npm ci
RUN npm run build

CMD ["npm", "run", "start"]

EXPOSE 3000