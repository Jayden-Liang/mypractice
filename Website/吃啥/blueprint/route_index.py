from flask import Blueprint, render_template, request
import os, sys
root_path = os.path.abspath(os.path.dirname(os.path.dirname(__file__)))
sys.path.append(root_path)

main = Blueprint('main', __name__, template_folder='templates' )
from .models import Recipe

@main.route('/')
def index():
    x = Recipe.query.all()
    return render_template('index.html', recipes = x)



@main.route('/add', methods=['post', 'get'])
def add():
    if request.method =='POST':
        title = request.form.get('food')
        body = request.form.get('recipe')
        u = Recipe(name=title, recipe = body)
        u.save()
        return '/'

    return render_template('add.html')