import os, sys
from flask_sqlalchemy import SQLAlchemy

root_path = os.path.abspath(os.path.dirname(os.path.dirname(__file__)))

sys.path.append(root_path)

from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

from app import create_app

class Recipe(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    recipe= db.Column(db.String(1000))

    def save(self):
        db.session.add(self)
        db.session.commit()

# app=create_app()
# with app.app_context():
#     db.drop_all()
#     db.create_all()
#     print('创建成功')