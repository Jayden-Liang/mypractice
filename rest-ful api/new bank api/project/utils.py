from pymongo import MongoClient

client = MongoClient('mongodb://db:27017')             #db 和docker-compose中的名字一样
db = client.bank                            # Database名字
user = db["User"]                # collection


def User_exist(username):
    num = user.find({"username": username}).count()
    print(num)
    if num == 0:
        return False
    else:
        return True


def Generate_response(code, msg):
    result= {
         "status code": code,
         "Message": msg
    }
    return result

def encrypt_pwd(password, salt='fdj$&&&fsg'):
    import hashlib
    def sha256(ascii_str):
        return hashlib.sha256(ascii_str.encode('ascii')).hexdigest()
    hash1 = sha256(password)
    hash2 = sha256(hash1 + salt)
    return hash2

def check_para(x, y, z):
    if x is None or y is None or z is None:
        return False
    else:
        return True

def Password_match(username, password):
    user_pwd = user.find({'username': username})[0]['password']
    if encrypt_pwd(password) != user_pwd:
        return False
    else:
        return True
