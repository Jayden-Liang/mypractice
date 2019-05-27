from project.models import User

def check_credential(username, password):
    u = User.find_user(username)
    if not u:
        msg ={
             "MSG":"User not exist",
             "status code": 401
        }
        return False, msg
    if u.password != User.salted_password(password):
        msg ={
             "MSG":"Password not match",
             "status code": 401
        }
        return False, msg
    return True, {"login":"successfully"}
