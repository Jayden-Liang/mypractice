from flask import Flask, jsonify, request
from project.models import User
from flask_restful import Resource
import spacy

class Register(Resource):    #注册
    def post(self):
        data = request.get_json()
        username = data['username']
        password = data['password']
        if User.find_user(username):
            msg = {
                    'MSG': 'username already exist',
                    'status code': 408
                }
            return jsonify(msg)
        u = User(username=username, password=User.salted_password(password), tokens= 5)
        u.save()
        msg = {
                'MSG': 'Register successfully',
                'status code': 200
            }
        return jsonify(msg)
    def get(self):
        return jsonify({'name':'jayden'})



class Similarity(Resource):     #检查相似性
    def post(self):
        data = request.get_json()
        username = data['username']
        password = data['password']
        phrase1 = data.get('phrase1')
        phrase2 = data.get('phrase2')
        u = User.find_user(username)
        if not u:                          #检查用户存在
            msg = {
                    'MSG': 'username not exist',
                    'status code': 401
                }
            return jsonify(msg)
        if not u.check_credential(password):      #检查密码匹配
            msg = {
                    'MSG': 'password not match',
                    'status code': 401
                }
            return jsonify(msg)
        if u.tokens <=0:
            msg = {
                    'MSG': 'you dont have enough token, your token is {}'.format(u.tokens),
                    'status code': 400
                }
            return jsonify(msg)

        if not phrase1 or not phrase2:          #检查parameter
            msg = {
                    'MSG': 'please provide two phrases',
                    'status code': 400
                }
            return jsonify(msg)
        nlp = spacy.load("en_core_web_sm")
        text1 = nlp(phrase1)
        text2 = nlp(phrase2)
        ratio = text1.similarity(text2)
        u.tokens -=1
        u.save()
        msg = {
                'MSG': 'calculated successfully, your current tokens are {}'.format(u.tokens),
                "similarity": ratio,
                'status code': 200
            }
        return jsonify(msg)




    def get(self):
        all = User.query.all()
        x =[]
        for a in all:
            x.append(a.username)
        return jsonify({'username': x})
