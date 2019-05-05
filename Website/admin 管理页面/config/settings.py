import os
from dotenv import load_dotenv
b = os.path.abspath(os.path.dirname(os.path.dirname(__file__)))
env_path = os.path.join(b, '.env')
load_dotenv(dotenv_path=env_path)

DEBUG = True
SERVER_NAME = 'localhost:5000'
SECRET_KEY = os.getenv('SECRET_KEY')


# SQLAlchemy.
db_uri = 'postgresql://postgres:devpassword@postgres:5432/postgres'
SQLALCHEMY_DATABASE_URI = db_uri
SQLALCHEMY_TRACK_MODIFICATIONS = False

SEED_ADMIN_EMAIL = 'devemail@qq.com'
SEED_ADMIN_PASSWORD = '12345678'


# MAIL_SERVER='smtp.sendgrid.net'
# MAIL_PORT=587
# MAIL_USE_TLS=True
# MAIL_USERNAME='apikey'
SENDGRID_API_KEY= os.getenv('SENDGRID_API_KEY')


#Celery
CELERY_BROKER_URL = 'redis://:devpassword@redis:6379/0'          #0代表默认的redis数据库名称
CELERY_RESULT_BACKEND = 'redis://:devpassword@redis:6379/0'
CELERY_ACCEPT_CONTENT = ['json']                    #这几行表示只接受json格式和序列化成json
CELERY_TASK_SERIALIZER = 'json'
CELERY_RESULT_SERIALIZER = 'json'
CELERY_REDIS_MAX_CONNECTIONS = 5    # 防止redis因连接过多挂掉， 这里是开发环境限制5个
