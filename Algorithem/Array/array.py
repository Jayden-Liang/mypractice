mylist = [12,34,5,45,6,778]

#查找
print(mylist[2])
print(mylist[:-2])

#添加
mylist.append('45')

#插入
mylist.insert(2, 93)


# 删除
mylist.pop()
# mylist.remove('45')
mylist.remove(mylist[2])

#找到最大
max_one = mylist[0]
for i in range(len(mylist)):
    if mylist[i] >= max_one:
        max_one = mylist[i]
print(max_one)