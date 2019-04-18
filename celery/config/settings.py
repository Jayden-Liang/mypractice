import os
from dotenv import load_dotenv

env_path = os.path.join(os.path.abspath(os.path.dirname(os.path.dirname(__file__))), '.env')
load_dotenv(dotenv_path=env_path)


DEBUG = True
SERVER_NAME = 'localhost:5000'
SECRET_KEY =  'A VERY SECRET KEY'


#Flask-Mail
MAIL_SERVER = 'smtp.qq.com'
MAIL_PORT = 587
MAIL_USE_TLS = True
MAIL_USERNAME = os.getenv('MAIL_USERNAME')
MAIL_PASSWORD = os.getenv('MAIL_PASSWORD')
MAIL_DEFAULT_SENDER = ('Jayden-Liang', os.getenv('MAIL_USERNAME'))
print(MAIL_USERNAME)
print(MAIL_PASSWORD )

# Celery.
CELERY_BROKER_URL = 'redis://:devpassword@redis:6379/0'
CELERY_RESULT_BACKEND = 'redis://:devpassword@redis:6379/0'
CELERY_ACCEPT_CONTENT = ['json']
CELERY_TASK_SERIALIZER = 'json'
CELERY_RESULT_SERIALIZER = 'json'
CELERY_REDIS_MAX_CONNECTIONS = 5
