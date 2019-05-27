from flask import Flask, jsonify, request, Blueprint, current_app
from project.extensions import oauth
from project.blueprints.auth.views import auth
import os

def create_app():
    app = Flask(__name__)
    app.config.from_object('config.settings')
    extent(app)
    app.register_blueprint(auth)
    @app.route('/')
    def index():
        return 'hello world'
    return app

def extent(app):
    oauth.init_app(app)
    return None

def register_blueprint(app):
    pass
