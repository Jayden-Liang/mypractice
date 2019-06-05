from flask import Flask, jsonify, request
from flask_restful import Api
from project.api.resources.resource import Add

def create_app():
    app = Flask(__name__)
    app.config.from_object('config.settings')
    @app.route('/')
    def index():
        return 'hi api'
    api.add_resource(Add, '/register')
    return app

app = create_app()
