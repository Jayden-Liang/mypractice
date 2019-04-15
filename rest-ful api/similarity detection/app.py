from flask import Flask, jsonify, request
from flask_restful import Api, Resource

from pymongo import MongoClient
from utils import CheckData
import bcrypt

app = Flask(__name__)
api = Api(app)


client = MongoClient('mongodb://db:27017')
db = client.StoreThings
user = db['User']


def ifExist(username):
    find_user = user.find({'username':username}).count()
    if find_user == 0:
        return False
    else:
        return True

def Checkpwd(username, password):
    hashed = user.find({'username':username})[0]['password']
    if bcrypt.hashpw(password.encode('ascii'), hashed) != hashed:
        return False
    else:
        return True

def enoughToken(username):
    token = user.find({'username':username})[0]['token']
    if token <= 0:
        return False
    else:
        return True


class Register(Resource):
    def post(self):
        data = request.get_json()
        if not CheckData(data):
            msg ={
                'MSG':'data is missing',
                'status code': 406
            }
            return jsonify(msg)

        username = data.get('username')
        password = data.get('password')
        ifexist = ifExist(username)
        if ifexist:
            msg={
                'MSG': 'User exists',
                'status code': 407
            }
            return jsonify(msg)

        hashed_pwd= bcrypt.hashpw(password.encode('ascii'), bcrypt.gensalt(5))
        user.insert({'username': username,
                     'password': hashed_pwd,
                     'token': 6,
                     'sentence': ['you database is established']
                     })
        msg = {
            'MSG': "You've successfully registered",
            'status code': 200
        }
        return jsonify(msg)

class Sentence(Resource):
    def post(self):
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')
        sentence = data.get('sentence')
        checkpwd = Checkpwd(username, password)
        if not checkpwd:
            msg={
                'MSG': 'Password and username does not match',
                'status code': 408
            }
            return jsonify(msg)
        if not enoughToken(username):
            msg={
                'MSG': 'Not enough token, please recharge',
                'status code': 409
            }
            return jsonify(msg)
        the_user = user.find({'username': username})[0]
        new_token = the_user['token']-1
        user.update({'username': username}, {'$addToSet':{'sentence': sentence }})
        user.update({'username': username}, {'$set':{'token': new_token }})

        msg ={
            'MSG': 'Stored successfully',
            'status code': 200
        }
        return jsonify(msg)


class Get(Resource):
    def post(self):
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')
        if not Checkpwd(username, password):
            msg = {
                'MSG': 'Password and username does not match',
                'status code': 408
            }
            return jsonify(msg)
        sentences = user.find({'username': username})[0]['sentence']
        msg ={
            'MSG': 'Successfully retried your data',
            'you data': sentences,
            'status code': 200
        }
        return jsonify(msg)

class Refill(Resource):
    def post(self):
        admin_pwd = '123456'
        data = request.get_json()
        username = data.get('username')
        pwd = data.get('admin_pwd')
        amount = data.get('amount')
        if pwd != admin_pwd:
            msg ={
                'MSG': 'YOU are not admin',
                'status code': 409
            }
            return jsonify(msg)
        token = user.find({'username': username})[0]['token']
        new_token = token + amount
        user.update({'username': username}, {'$set':{'token': new_token}})
        msg = {
            'MSG': 'refill successfully',
            'status code': 200
        }
        return jsonify(msg)







@app.route('/')
def index():
    return 'hello'


api.add_resource(Register, '/register')
api.add_resource(Sentence, '/store')
api.add_resource(Get, '/get')
api.add_resource(Refill, '/refill')

if __name__== '__main__':
    app.run(host='0.0.0.0', debug=True)









# from flask import Flask, jsonify, request
# from flask_restful import Api, Resource
#
# from pymongo import MongoClient
#
#
#
# app = Flask(__name__)
# api = Api(app)
#
# client = MongoClient('mongodb://db:27017')
# db = client.anewDB  # Database名字
# UserNum = db["UserNum"]  # collection
# UserNum.insert({
#     'num_of_users': 0
# })
#
# @app.route('/')
# def index():
#     return jsonify({'a':1, 'b':2})
#
# def check_code(data):
#     if 'x' not in data or 'y' not in data:
#         return 301
#     else:
#         return 200
#
# class Add(Resource):
#     def post(self):
#         Data = request.get_json()
#         print(Data)
#         status_code = check_code(Data)
#         if status_code == 301:
#             return jsonify({
#                 'Message': '少了参数或其他问题',
#                 'Status_Code': status_code
#             })
#         result = int(Data['x'])+(Data['y'])
#         return jsonify({
#             'Message': result,
#             'Status_Code': status_code
#
#         })
#
# class Visit(Resource):
#     def get(self):
#         visit_times = UserNum.find({})[0]['num_of_users']
#         new_num = visit_times+1
#         UserNum.update({}, {"$set":{'num_of_users': new_num}})
#         return 'hello user, visits: '+ str(new_num)
#
#
#
#
# api.add_resource(Add, '/add')
# api.add_resource(Visit, '/visit')
#
# if __name__== '__main__':
#     app.run(host='0.0.0.0', debug=True)

