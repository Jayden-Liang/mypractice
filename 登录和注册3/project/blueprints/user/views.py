from flask import redirect, render_template, Blueprint, request, flash, url_for
from project.blueprints.user.forms import sayhi, LoginForm, signupForm, getuserForm, update_emailForm, update_pwdForm
from project.blueprints.user.models import User

user = Blueprint('user', __name__, template_folder='templates' )

@user.route('/login', methods=['POST', 'GET'])
def login():
    form = LoginForm(next=request.args.get('next'))
    if form.validate_on_submit():
        print('login')
        return 'logined in'

    return render_template('login.html', form=form)

@user.route('/signup', methods=['POST', 'GET'])
def signup():
    form = signupForm()
    if form.validate_on_submit():
        print('received')
        u = User(
                email= form.email.data,
                password = User.encryptpassword(form.password.data))
        u.save()
        print('saved user')
        return redirect(url_for('user.welcome'))
    return render_template('signup.html', form = form)


@user.route('/welcome', methods=['POST', 'GET'])
def welcome():
    form = getuserForm()
    if form.validate_on_submit():
        pass
    return render_template('welcome.html', form =form)

@user.route('/settings', methods=['POST', 'GET'])
def settings():
    return render_template('settings.html')

@user.route('/settings/update_email', methods=['POST', 'GET'])
def update_email():
    form = update_emailForm()
    return render_template('update_email.html', form=form)

@user.route('/settings/update_pwd', methods=['POST', 'GET'])
def update_pwd():
    form = update_pwdForm()
    return render_template('update_pwd.html', form=form)
