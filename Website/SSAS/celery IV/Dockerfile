FROM python:3.6-slim
MAINTAINER Nick Janetakis <nick.janetakis@gmail.com>

ENV INSTALL_PATH /myapp
RUN mkdir -p $INSTALL_PATH

WORKDIR $INSTALL_PATH

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY . .
RUN pip3 install --editable .

CMD gunicorn -b 0.0.0.0:5000 --access-logfile - "myapp.app:create_app()"  #defalt when you start it
