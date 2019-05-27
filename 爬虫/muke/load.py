import json
import operator
import collections

#
# y={}
# with open('bestcollege.txt','r') as f:
#     a=f.read()
#     print(type(a))
#     b=json.loads(a)
#     for x in b:
#         if x.get('所属：') in y:
#             y[x.get('所属：')] +=1
#         else:
#             y[x.get('所属：')] =1
#
# sorted_y = sorted(y.items(), key=lambda kv: kv[1])
# print(sorted_y)
# sorted_dict = collections.OrderedDict(sorted_y)

with open('movie250.txt','r', encoding='utf-8') as f:
    a =f.read()
    print(type(a))
    b= json.loads(a)
    for i in b:
        for x in i:
            print(x['id'],'  ', x['name'],'               ', x['slogan'])

# b=[]
# a = [{'id': 1, 'name': '肖申克的救赎', 'rating': '9.6', 'slogan': '希望让人自由。'}]
#
# print(type(a))