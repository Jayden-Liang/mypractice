from flask import Flask, Blueprint
from celery import Celery

from myapp.blueprints.page.route_index import page
from myapp.blueprints.contact.route_contact import contact as contactpage
from myapp.extensions import mail, toolbar, csrf

CELERY_TASK_LIST =[
    'myapp.blueprints.contact.celery_task'
]


def create_celery_app(app=None):
    """
    Create a new Celery object and tie together the Celery config to the app's
    config. Wrap all tasks in the context of the application.

    :param app: Flask app
    :return: Celery app
    """
    app = app or create_app()

    celery = Celery(app.import_name, broker=app.config['CELERY_BROKER_URL'],
                    include=CELERY_TASK_LIST)
    celery.conf.update(app.config)
    TaskBase = celery.Task

    class ContextTask(TaskBase):                     #以下是为每个task设置context，如果要access数据库，就要设置context
        abstract = True

        def __call__(self, *args, **kwargs):
            with app.app_context():
                return TaskBase.__call__(self, *args, **kwargs)

    celery.Task = ContextTask
    return celery


def create_app(settings_override=None):
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_object('config.settings')
    app.config.from_pyfile('settings.py', silent=True)
    if settings_override is not None:
        app.config.update(settings_override)
    app.register_blueprint(page)
    app.register_blueprint(contactpage)
    extension(app)
    print('i am ready')

    return app




def register_blueprint(app):
    return None


def extension(app):
    mail.init_app(app)
    toolbar.init_app(app)
    csrf.init_app(app)
    return None
