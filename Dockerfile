FROM node

COPY . /app

COPY ../re-boot /re-boot

WORKDIR /app
EXPOSE 3000

RUN apt-get update
RUN apt-get install -qqy x11-apps || (echo 'no x11, passing' && export NO_X11="true")
RUN sh -c "npm run serve &"

