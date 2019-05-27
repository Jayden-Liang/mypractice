from flask_restful import  Resource
from flask import Flask, jsonify, request


class Register(Resource):
    def post(self):
        return jsonify({'good':'day'})
