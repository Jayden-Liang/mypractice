FROM python:3.6-slim




WORKDIR    /usr/app

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY . .
`RUN chmod 644 app.py`
CMD ["python3", "app.py"]
