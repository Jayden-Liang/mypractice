from flask import Blueprint, current_app, url_for, jsonify
from project.blueprints.auth.thirdparty import providers



auth = Blueprint('auth',__name__)


@auth.route('/callback/<provider>')
def oauth_callback(provider):
    target = providers[provider]
    response = target.authorized_response()
    if response is not None:
        access_token = response.get('access_token')
        print('access_token', access_token)
    else:
        access_token = None
    if access_token is None:
        print('access denied')
        return redirect('/')
    r = target.get('user', token=access_token)
    print(r.data)
    return jsonify(r.data)






@auth.route('/login/<provider>')
def auth_login(provider):
    target = providers[provider]
    return target.authorize(url_for('.oauth_callback',provider=provider, _external=True))
