from flask_login import UserMixin
from project.extensions import db
from sqlalchemy import or_
import bcrypt



class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(64), index= True,unique=True)
    email = db.Column(db.String(64), unique = True)
    password = db.Column(db.String(128))
    role_id = db.Column(db.Integer, db.ForeignKey('role.id'))
    role = db.relationship('Role', back_populates= 'users')

    @classmethod
    def encryptpassword(cls, plain_text):
        hashed = bcrypt.hashpw('1234'.encode('ascii'), bcrypt.gensalt(5))
        return hashed

    @classmethod
    def passwordmatch(cls):
        pass

    @classmethod
    def find_by_identity(cls, identity):
        return User.query.filter(or_(User.username == identity, User.email == identity)).first()


    def save(self):
        db.session.add(self)
        db.session.commit()
        return None

class Role(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(64), index= True)
    users = db.relationship('User', back_populates= 'role')
