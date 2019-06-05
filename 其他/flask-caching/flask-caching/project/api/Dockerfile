FROM python:3.6-slim

ENV INSTALL_PATH /Api
RUN mkdir -p $INSTALL_PATH

WORKDIR $INSTALL_PATH/api

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt


COPY . .

CMD gunicorn -b 0.0.0.0:5000 --access-logfile - "project.Api.api.app:app"  #defalt when you start it
