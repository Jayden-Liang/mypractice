FROM python:3.6-slim
MAINTAINER Nick Janetakis <nick.janetakis@gmail.com>

RUN apt-get update && apt-get install -qq -y \
  build-essential libpq-dev --no-install-recommends

ENV INSTALL_PATH /project
RUN mkdir -p $INSTALL_PATH

WORKDIR $INSTALL_PATH

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY . .
RUN pip3 install --editable .

CMD gunicorn -b 0.0.0.0:8000 --access-logfile - "project.app:create_app()"  #defalt when you start it
