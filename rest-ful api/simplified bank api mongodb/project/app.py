from flask import Flask, jsonify, request
from pymongo import MongoClient
from project.extensions import api


def create_app():
    app = Flask(__name__)
    app.config.from_object('config.settings')
    extension(app)
    combin_resource(api)
    return app




def extension(app):
    api.init_app(app)


def combin_resource(api):
    api.add_resource(Register, '/register')

if __name__ == '__main__':
    app= create_app()
    app.run()
