from flask_debugtoolbar import DebugToolbarExtension
from flask_wtf.csrf import CSRFProtect
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager



toolbar = DebugToolbarExtension()
csrf = CSRFProtect()
db = SQLAlchemy()
login_manager = LoginManager()
