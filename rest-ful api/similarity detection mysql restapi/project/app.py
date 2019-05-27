from flask import Flask, jsonify, request
from flask_restful import Api, Resource
from project.models import db
from project.utils.app_utils import Register, Similarity


def create_app():
    app = Flask(__name__)
    app.config.from_object('config.settings')
    @app.route('/')
    def index():
        return 'hello'
    db.app = app
    db.init_app(app)
    # db.drop_all()
    # db.create_all()
    api = Api(app)
    api.add_resource(Register, '/register')
    api.add_resource(Similarity, '/check_sim')
    return app
