from flask_restful import Resource
from flask import request

def fibs(value):
    if value==1:
        return 1
    if value ==2:
        return 1
    else:
        return fibs(value-1)+fibs(value-2)

class Add(Resource):
    def post(self):
        r = request.get_json()
        value = int(r.get('value'))
        result = fibs(value)
        return {"result": result}
    def get(self):
        return 'yes, get'
