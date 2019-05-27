from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True, unique=True)
    password = db.Column(db.String(128))
    tokens = db.Column(db.Integer)

    def __repr__(self):
        return '<User {}>'.format(self.username)

    @classmethod
    def salted_password(cls, password, salt='$!@>HUI&DWQa`'):
        import hashlib
        def sha256(ascii_str):
            return hashlib.sha256(ascii_str.encode('ascii')).hexdigest()
        hash1 = sha256(password)
        hash2 = sha256(hash1 + salt)
        return hash2

    @classmethod
    def find_user(cls, username):
        return User.query.filter_by(username= username).first()

    def save(self):
        db.session.add(self)
        db.session.commit()

    def check_credential(self, password):
        return self.password == User.salted_password(password)
