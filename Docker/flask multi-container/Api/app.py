#!/usr/local/bin/python3

from flask import Flask
from flask_restful import Api
from Resource.resource import Add


def create_app():
    app = Flask(__name__)
    api = Api(app)
    api.add_resource(Add, '/')
    return app

app=create_app()
