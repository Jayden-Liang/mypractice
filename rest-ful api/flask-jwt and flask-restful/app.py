from flask import Flask, jsonify, request
from flask_jwt import JWT, jwt_required, current_identity
from werkzeug.security import safe_str_cmp
from flask_restful import Api, Resource


def create_app():
    app = Flask(__name__)
    api = Api(app)
    api.add_resource(Students, '/students/<string:name>')
    api.add_resource(StudentList, '/all')
    return app


students =[]


class Students(Resource):
    def post(self, name):
        student ={'name': name, 'grade': 12}
        students.append(student)
        return student

    def get(self, name):
        for s in students:
            if s['name'] == name:
                return s
            else:
                return {'error': 'not found'}, 404

    def put(self):
        pass


    def delete(self):
        pass


class StudentList(Resource):
    def post(self):
        pass

    def get(self):
        return {'students': students}


if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)
