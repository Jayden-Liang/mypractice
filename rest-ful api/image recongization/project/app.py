# https://github.com/tensorflow/models/blob/master/tutorials/image/imagenet/classify_image.py 把文件拷贝下来
#
from project.Resources.resource import Register, Recongization
from flask_restful import Api


from flask import Flask
from project.models import db, User
def create_app():
    app = Flask(__name__)
    app.config.from_object('config.settings')
    db.app =app
    db.init_app(app)
    api= Api(app)
    api.add_resource(Register, '/register')
    api.add_resource(Recongization, '/recon')
    db.create_all()
    return app
