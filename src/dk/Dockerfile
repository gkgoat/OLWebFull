FROM docker

RUN sudo apt update && sudo apt install -y python3

COPY ./app /app

COPY ./Dockerfile.proto /Dockerfile.proto

EXPOSE 2500

EXPOSE 2501

RUN python3 /app/main.py