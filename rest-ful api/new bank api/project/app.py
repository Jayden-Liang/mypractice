from flask import Flask, jsonify, request
from flask_restful import Api, Resource
from project.Resources import Register, Deposit, Check_balance, Take_loan,Transfer, Pay_loan


def create_app():
    app = Flask(__name__)
    app.config.from_object('config.settings')
    api = Api(app)
    api.add_resource(Register, '/register')
    api.add_resource(Deposit, '/deposit')
    api.add_resource(Check_balance, '/check')
    api.add_resource(Take_loan, '/loan')
    api.add_resource(Transfer, '/transfer')
    api.add_resource(Pay_loan, '/pay_loan')
    return app
