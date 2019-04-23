from flask import Blueprint, render_template



page = Blueprint('page', __name__, template_folder='templates')

@page.route('/')
def index():
    return 'bluepprint home page,welcome to my site'

@page.route('/info')
def info():
    return render_template('info.html')
