#!/usr/local/bin/python3

from flask import Flask
from blueprints.route import main
from extensions import cache



def create_app():
    app = Flask(__name__)
    app.register_blueprint(main)
    cache.init_app(app)
    return app

app=create_app()
