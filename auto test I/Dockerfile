FROM python:3.6-slim
MAINTAINER Nick Janetakis <nick.janetakis@gmail.com>

ENV INSTALL_PATH /autotest
RUN mkdir -p $INSTALL_PATH

WORKDIR $INSTALL_PATH

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

COPY . .

CMD gunicorn -b 0.0.0.0:8000 --access-logfile - "autotest.app:create_app()"  #defalt when you start it
