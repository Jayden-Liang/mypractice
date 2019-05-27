import requests
from bs4 import BeautifulSoup
import bs4
import time
import json

def get(url, count):
    r = requests.get(url)
    r.encoding=r.apparent_encoding
    soup = BeautifulSoup(r.text, 'html.parser')
    childs = soup.find('ol').children
    target = []
    for tag in childs:
        if isinstance(tag, bs4.element.Tag):
            target.append(tag('span'))
    total = []
    for each in target:
        if each[5].string is not None:
            total.append({"id": count, "name": each[0].string, "rating": each[5].string, "slogan": each[-1].string})
            count += 1
        else:
            total.append({"id": count, "name": each[0].string, "rating": each[4].string, "slogan": each[-1].string})
            count += 1
    return total

# print(get('https://movie.douban.com/top250?start=0&filter=')


def get_all():
    starter = 0
    url_dict={}
    while True:
        if starter > 225:
            break
        url = 'https://movie.douban.com/top250?start={}&filter='.format(starter)
        url_dict[starter]=url
        starter += 25
    big_all =[]
    for x in url_dict:
        print(x)
        big_all.append(get(url_dict[x],x+1))
        time.sleep(2)
    return big_all


all = get_all()
data = json.dumps(all, ensure_ascii=False)
with open('movie250.txt','w', encoding='utf-8') as f:
    f.writelines(data)


