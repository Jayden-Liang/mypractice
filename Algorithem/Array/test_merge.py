
def get_split(l1):
    s = int(len(l1)/2)
    return l1[0:s], l1[s:]

def merge_two(list1, list2):
    i1 = 0
    i2 = 0
    ret = []
    for y in range(len(list1)+len(list2)):
        if i2 >=len(list2) or (i1< len(list1) and list1[i1] < list2[i2]):
            ret.append(list1[i1])
            i1= i1+1
        else:
            ret.append(list2[i2])
            i2 = i2+1
    return ret


def merge(l):
    if len(l) < 2:
        return l
    else:
        x = get_split(l)
        return merge_two(merge(x[0]),merge(x[1]))


a=[1,25,3,5]
merge(a)

print(merge(a))