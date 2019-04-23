from flask import Flask
from flask_debugtoolbar import DebugToolbarExtension
from myapp.extensions import toolbar, csrf, db
from myapp.blueprints.page.views import page
from myapp.blueprints.user.views import user


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
    toolbar.init_app(app)
    mail.init_app(app)
    csrf.init_app(app)
    db.init_app(app)
    login_manager.init_app(app)

    return None
