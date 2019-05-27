from flask import Flask
from blueprint.route_index import main
from blueprint.models import db
from extensions import csrf
# import mysql.connector
# mydb = mysql.connector.connect(
#     host = 'localhost',
#     user = 'root',
#     passwd = 'password123',
# )
# my_cursor = mydb.cursor()
# my_cursor.execute('CREATE DATABASE recipe')

def create_app():
    app = Flask(__name__, instance_relative_config=True)
    app.config['SECRET_KEY'] = 'DAFHKJHG32464'
    app.config['SQLALCHEMY_DATABASE_URI'] = "mysql+mysqldb://root:password123@localhost:3306/recipe"
    app.register_blueprint(main)
    extension(app)
    return app


def extension(app):
    print('hi there')
    csrf.init_app(app)
    db.init_app(app)
    return None

if __name__ == '__main__':
    app= create_app()
    app.run(port=7373)

