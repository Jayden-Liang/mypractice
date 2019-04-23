FROM python:3.6-slim


COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

COPY . .

CMD gunicorn -b 0.0.0.0:5000 --access-logfile - "myapp.app:create_app()"  #defalt when you start it
