from flask import Flask
from project.blueprints.page.route_index import page
from project.blueprints.user.views import user
from project.extensions import  csrf, db, login_manager

def create_app(settings_override=None):
    """
    Create a Flask application using the app factory pattern.

    :return: Flask app
    """
    app = Flask(__name__, instance_relative_config=True)

    app.config.from_object('config.settings')
    app.config.from_pyfile('settings.py', silent=True)
    if settings_override is not None:
        app.config.update(settings_override)
    app.register_blueprint(page)
    app.register_blueprint(user)
    extension(app)


    return app


def extension(app):
    print('hi there')
    csrf.init_app(app)
    db.init_app(app)
    login_manager.init_app(app)
    return None
