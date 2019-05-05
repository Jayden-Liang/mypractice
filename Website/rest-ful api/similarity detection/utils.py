def CheckData(data):
    if 'username' not in data or 'password' not in data:
        return False
    else:
        return True
