FROM node

COPY . /app

WORKDIR /app
RUN sh -c "npm run dev &"

