DEBUG = True
SERVER_NAME = 'localhost:5000'
SECRET_KEY =  'A VERY SECRET KEY'


#SQLAlchemy.
db_uri = 'postgresql://myapp:devpassword@postgres:5432/myapp'  # 第一个myapp指数据库用户，第二个为数据库名称
SQLALCHEMY_DATABASE_URI = db_uri
SQLALCHEMY_TRACK_MODIFICATIONS = False    #关掉烦人的提示
#User
SEED_ADMIN_EMAIL = '807570635@qq.com'        #创建一个初始的user
SEED_ADMIN_PASSWORD = 'devpassword'
REMEMBER_COOKIE_DURATION = timedelta(days=90)
