from flask import Flask
from flask_debugtoolbar import DebugToolbarExtension
from myapp.blueprints.route_index import page


def create_app(settings_override=None):
    """
    Create a Flask application using the app factory pattern.

    :return: Flask app
    """
    app = Flask(__name__, instance_relative_config=True)

    app.config.from_object('config.settings')
    app.config.from_pyfile('settings.py', silent=True)
    app.debug = True
    toolbar = DebugToolbarExtension(app)
    if settings_override is not None:
        app.config.update(settings_override)
    app.register_blueprint(page)

    return app
