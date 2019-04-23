from flask import Blueprint, render_template

user = Blueprint('user', __name__, template_folder='templates')

@user.route('/login')
def index():
    return 'this is for login page'
