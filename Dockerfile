FROM node

COPY . /app

COPY ../re-boot /re-boot

WORKDIR /app
RUN sh -c "npm run dev &"

