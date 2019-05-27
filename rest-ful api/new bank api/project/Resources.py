from flask import Flask, jsonify, request
from flask_restful import Resource
from project.utils import user, Generate_response, User_exist, encrypt_pwd, check_para, Password_match



class Register(Resource):
    def post(self):
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')
        user.drop()
        if User_exist(username):
            return jsonify(Generate_response(401, "username already exists"))
        user.insert({
             "username": username,
             "password": encrypt_pwd(password),
             "money": 0,
             "debt":0

        })

        return jsonify(Generate_response(200, 'registered successfully'))


class Deposit(Resource):
    def post(self):
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')
        amount = data.get('amount')
        if not check_para(username, password, amount):
            return jsonify(Generate_response(400, "missing parameters "))
        if not User_exist(username):
            return jsonify(Generate_response(401, "user not exists "))
        if not Password_match(username,password):
            return jsonify(Generate_response(401, 'password not match'))
        money = user.find({'username': username})[0]['money']
        user.update(
                {'username': username},
                {"$set":{"money": money+amount}}
        )
        return jsonify(Generate_response(200, "deposit successfully"))

class Check_balance(Resource):
    def post(self):
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')
        if not check_para(username, password, '1'):
            return jsonify(Generate_response(400, "missing parameters "))
        if not User_exist(username):
            return jsonify(Generate_response(401, "user not exists "))
        if not Password_match(username,password):
            return jsonify(Generate_response(401, 'password not match'))
        detail = user.find({'username': username}, {'_id': 0, 'password': 0,})[0]
        return jsonify(Generate_response(200, detail))

class Take_loan(Resource):
    def post(self):
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')
        amount = data.get('amount')
        if amount < 0:
            return jsonify(Generate_response(401, 'not allowed'))
        if not check_para(username, password, amount):
            return jsonify(Generate_response(400, "missing parameters "))
        if not User_exist(username):
            return jsonify(Generate_response(401, "user not exists "))
        if not Password_match(username,password):
            return jsonify(Generate_response(401, 'password not match'))
        target = user.find({'username': username})[0]
        money = target['money']
        loan = target['debt']
        user.update(
                {'username': username},
                {"$set":{"money": money+amount, "debt": loan+amount}}
        )
        return jsonify(Generate_response(200, 'take loan successfully'))

class Transfer(Resource):
    def post(self):
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')
        amount = data.get('amount')
        to = data.get('to')
        if username is None or password is None or amount is None or to is None:
            return jsonify(Generate_response(400, 'missing parameters'))
        if amount < 0:
            return jsonify(Generate_response(401, 'not allowed'))
        if not User_exist(username):
            return jsonify(Generate_response(401, "user not exists "))
        if not Password_match(username,password):
            return jsonify(Generate_response(401, 'password not match'))
        money =user.find({'username': username})[0]['money']
        user.update(
                {'username': username},
                {"$set":{"money": money-amount}}
        )
        user.update(                          #这里还可以检查目标账户是否存在，账户余额是否足够
              {'username': to},
              {"$set":{"money": money+amount}}
        )
        return jsonify(Generate_response(200, 'transfer successfully'))

class Pay_loan(Resource):
    def post(self):
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')
        amount = data.get('amount')
        if amount < 0:
            return jsonify(Generate_response(401, 'not allowed'))
        if not check_para(username, password, amount):
            return jsonify(Generate_response(400, "missing parameters "))
        if not User_exist(username):
            return jsonify(Generate_response(401, "user not exists "))
        if not Password_match(username,password):
            return jsonify(Generate_response(401, 'password not match'))
        #检查余额是否足够pay
        #更新debt和余额
        return jsonify(Generate_response(200, 'pay loan successfully'))
