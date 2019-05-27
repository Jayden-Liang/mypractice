
from flask_mail import Mail
from flask_debugtoolbar import DebugToolbarExtension
from flask_wtf.csrf import CSRFProtect



mail = Mail()
toolbar = DebugToolbarExtension()
csrf = CSRFProtect()

print('hi there')

