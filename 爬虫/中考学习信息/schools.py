import json
import requests
from bs4 import BeautifulSoup
import bs4
import time
import json

def get_url(url):
    data=[]
    r= requests.get(url)
    r.encoding = r.apparent_encoding
    soup = BeautifulSoup(r.text, 'html.parser')
    childs = soup.find_all('tr')
    all = childs[2:]
    for tag in all:
        x={}
        x['学校'] =tag('td')[2].string
        x['链接']= tag('td')[-1]('a')[0]['href']
        x['性质'] =tag('td')[4].string
        data.append(x)
    return data




def get_specific(url):
    dict1 ={}
    r = requests.get(url)
    r.encoding = r.apparent_encoding
    soup = BeautifulSoup(r.text, 'html.parser')
    try:
        a = soup.find_all('tr')
        dict1['占地面积'] = a[2]('td')[1].string
        dict1['教学仪器'] = a[4]('td')[1].string
        dict1['专任教师'] = a[7]('td')[1].string
        dict1['衡阳招生'] = a[-1]('td')[5].string
        b = soup.find_all('strong')
        dict1['官网'] = b[-2].next_sibling
    # print(b[-2]('strong')[])
    except:
        print('出错啦')
    print(dict1)
    return dict1

# get_specific('http://zsxxtp.hnedu.cn/front/showSchoolInfo.do?XXDM=3643000761')

def specific():
    data = get_url('http://zsxxtp.hnedu.cn/front/showSchoolPageByZML.do?cityid=430100')
    for each in data:
        url = each['链接']
        dict1 = get_specific(url)
        each.update(dict1)
    return data

data = specific()

with open('schools5.txt','w') as f:
    a = json.dumps(data, ensure_ascii=False)
    f.write(a)

