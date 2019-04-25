from flask_login import UserMixin
from project.extensions import db
from sqlalchemy import or_
import bcrypt



class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(64), index= True,unique=True)
    email = db.Column(db.String(64), unique = True, index=True)
    password = db.Column(db.String(128), nullable=False, server_default='')

    role_id = db.Column(db.Integer, db.ForeignKey('role.id'))
    role = db.relationship('Role', back_populates= 'users')
    # active = db.Column('is_active', db.Boolean(), nullable=False,
    #                    server_default='1')

    sign_in_count = db.Column(db.Integer, nullable=False, default=0)
    last_login_time = db.Column(db.DateTime())
    last_login_ip = db.Column(db.String(128))

    current_login_time = db.Column(db.DateTime())
    current_login_ip = db.Column(db.String(128))

    @classmethod
    def encryptpassword(cls, password, salt='$!@>HUI&DWQa`'):
        import hashlib
        def sha256(ascii_str):
            return hashlib.sha256(ascii_str.encode('ascii')).hexdigest()
        hash1 = sha256(password)
        hash2 = sha256(hash1 + salt)
        return hash2


    def passwordmatch(self, password=''):
        return self.password == User.encryptpassword(password)

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
