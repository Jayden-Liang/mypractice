
import json, urllib
from urllib.parse import urlencode
import urllib.request

appkey = "84fbb48d87e4ed31c339d091c102e77c"


def get_all(apikey, m="GET"):
    url = "http://apis.juhe.cn/cook/query.php"
    params = {
        "menu": "手撕包菜",  # 需要查询的菜谱名
        "key": appkey,  # 应用APPKEY(应用详细页查询)
        "dtype": "",  # 返回数据的格式,xml或json，默认json
        "pn": "",  # 数据返回起始下标
        "rn": "",  # 数据返回条数，最大30
        "albums": "",  # albums字段类型，1字符串，默认数组

    }
    params = urlencode(params)
    if m == "GET":
        f = urllib.request.urlopen("%s?%s" % (url, params))
    else:
        f = urllib.request.urlopen(url, params)
    content = f.read()
    print(type(content))
    res = json.loads(content)
    if res:
        error_code = res["error_code"]
        if error_code == 0:
            # 成功请求
            print(res["result"])
        else:
            print("%s:%s" % (res["error_code"], res["reason"]))
    else:
        print("request api error")

if __name__ == '__main__':
    get_all(appkey, 'GET')