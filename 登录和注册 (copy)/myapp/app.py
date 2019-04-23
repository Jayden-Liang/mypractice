from flask import Flask, Blueprint
from myapp.extensions import toolbar, csrf, db, login_manager



def create_app():
    app = Flask(__name__)
    app.config.from_object('config.settings')
    extension(app)
    return app



def extension(app):
    toolbar.init_app(app)
    mail.init_app(app)
    csrf.init_app(app)
    db.init_app(app)
    login_manager.init_app(app)
    return None

















# apt-utils 
