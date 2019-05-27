import requests
from bs4 import BeautifulSoup
import bs4
import json

r = requests.get('http://www.zuihaodaxue.com/zuihaodaxuepaiming2019.html')
r.encoding = 'utf-8'
soup = BeautifulSoup(r.text, 'html.parser')
a=[]
target = soup.find('tbody').children
for tr in target:
    if isinstance(tr, bs4.element.Tag):
        tds = tr('td')
        a.append({"排名：": tds[0].string, "学校：": tds[1].string, "所属：": tds[2].string})

b = json.dumps(a, ensure_ascii=False)
print(type(b))
print(b)
with open('bestcollege.txt', 'w') as f:
    f.writelines(b)


