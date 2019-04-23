from flask import redirect, render_template, Blueprint, request, flash

user = Blueprint('user', __name__, template_folder='templates' )

@main.route('/login', methods=['POST', 'GET'])
def login():
    return 'login page'


main.route('/login', methods=['POST', 'GET'])
def login():
   form = LoginForm(next=request.args.get('next'))
   if form.validate_on_submit():
       pass
   return render_template('login.html')
