from flask import Blueprint



page = Blueprint('page', __name__, template_folder='templates')

@page.route('/')
def index():
    return 'bluepprint home page,welcome to my site'
