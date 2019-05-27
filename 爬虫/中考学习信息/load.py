import json

with open('schools5.txt','r') as f:
    a = f.read()
    b = json.loads(a)
    list1=[]
    for x in b:
        print(x)
    #     if x['专任教师']:
    #         list1.append((x['学校'], float(x['专任教师'])))
    #     else:
    #         list1.append((x['学校'], 0))
    # list1 = sorted(list1, key=lambda x: x[1], reverse=True)
    # print(list1)
    # for i in list1:
    #     with open('专任老师.txt', 'a') as f:
    #         f.write(i[0] + '         ' + str(i[1]) + '\n')




    #     if x['占地面积']:
    #         list1.append((x['学校'], float(x['占地面积'])))
    #     else:
    #         list1.append((x['学校'], 0))
    # list1 = sorted(list1, key=lambda x:x[1], reverse=True)
    # for i in list1:
    #     with open('占地面积.txt', 'a') as f:
    #         f.write(i[0]+ '         '+ str(i[1]) + '\n')



