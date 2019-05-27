from flask import Flask, jsonify, request
from project.models import User
from flask_restful import Resource
import subprocess
import requests
import numpy
import tensorflow as tf
from project.Resources.utils_resource import check_credential
import json

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


class Recongization(Resource):
    def post(self):
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')
        url = data.get('url')
        passed, msg = check_credential(username, password)
        if not passed:
            return jsonify(msg)
        if not url:
            msg ={
                 "MSG":"url not provided",
                 "status code": 400
            }
            return jsonify(msg)
        r = requests.get(url)
        retJson = {}
        with open('temp.jpg', 'wb') as f:
            f.write(r.content)
            proc = subprocess.call('python classify_image.py --model_dir=. --image_file=./temp.jpg -put .', stdout=subprocess.PIPE, stderr=subprocess.STDOUT, shell=True)
        with open("text.txt") as f:
            retJson = json.load(f)

        return jsonify(retJson)
