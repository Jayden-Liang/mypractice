FROM python:3.6-slim

ENV INSTALL_PATH /
RUN mkdir -p $INSTALL_PATH

WORKDIR $INSTALL_PATH

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt


COPY . .

CMD gunicorn -b 0.0.0.0:5000 --access-logfile - "project.client.api.app:app"  #defalt when you start it
