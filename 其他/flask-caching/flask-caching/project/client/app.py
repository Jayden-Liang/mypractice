from flask import Flask, jsonify, request
from project.client.blueprints.route import main
from flask_restful import Api


def create_app():
    app = Flask(__name__)
    app.config.from_object('config.settings')
    app.register_blueprint(main)
    api= Api(app)
    api.add_resource(Register, '/register')
    return app

app = create_app()
