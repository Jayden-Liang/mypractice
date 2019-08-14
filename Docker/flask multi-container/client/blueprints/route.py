from flask import Blueprint, render_template, request, jsonify
import requests
from extensions import cache
from pymongo import MongoClient
from datetime import datetime

main = Blueprint('main', __name__, template_folder = 'templates')


client = MongoClient("mongodb://mongo:27017")
db = client.StoreThings
history = db['History']



@main.route('/', methods=['POST', 'GET'])
def index():
    if request.method == 'POST':
        value=request.form.get('indexValue')
        bar = cache.get(value)
        if bar:
            return jsonify({'cached_result': bar})
        else:
            r = requests.post('http://api:4000', json= {'value': value})
            result=r.json()                   #得到的其实使dict
            cache.set(value, result.get('result'), timeout=50)
            history.insert({
               "requested time": datetime.now(),
               "requested index": value,
               "calculated value": result.get('result','')
            })
            return jsonify(result)
    return render_template('index.html')
