from flask import redirect, render_template, Blueprint, request, flash, url_for
from project.blueprints.user.forms import sayhi, LoginForm, signupForm, getuserForm, update_emailForm, update_pwdForm, find_pwdForm, set_newpwdForm
from project.blueprints.user.models import User, Role
from flask_login import login_required, login_user, current_user, logout_user
from project.blueprints.admin.utils.utils_views import test_decor


admin = Blueprint('admin', __name__, template_folder='templates', url_prefix = '/admin' )

@admin.before_request
@test_decor()
@login_required
def before_request():
    print('this is before_request')

@admin.route('', methods=['GET', 'POST'])
def index():
    roles = Role.query.all()
    page = int(request.args.get('page',1))
    starter = int(request.args.get('starter', 1))
    users = User.query.filter().order_by(User.id.desc()).paginate(page, 10, False)
    pages = users.pages
    print('how many pages?',pages)
    if request.method== 'POST':
        print(request.form)
    return render_template('admin_index.html',
                            users = users,
                            roles=roles,
                            pages = pages,
                            current_page = page,
                            starter = starter)

@admin.route('/user')
def user():
    return 'user page'
