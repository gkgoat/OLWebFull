FROM node

COPY .. /app

COPY ../../re-boot /re-boot

WORKDIR /app
EXPOSE 3000

RUN sh -c "npm run dev &"
