def split(arr):
    idx = int(len(arr)/2)
    return arr[0:idx], arr[idx: len(arr)]

def merge(arr1, arr2):
    try:
        idx1 = 0;
        idx2 = 0
        ret = []
        for i in range(len(arr1) + len(arr2)):
            if idx2 >= len(arr2) or (idx1 < len(arr1) and arr1[idx1] < arr2[idx2]):
                ret.append(arr1[idx1])
                idx1 = idx1 + 1
            else:
                ret.append(arr2[idx2])
                idx2 = idx2 + 1
        return ret
    except TypeError:
        print('typeerror') y


print(merge([1], [0]))

def merge_sort(arr):
    if len(arr) <2:
        return arr
    pieces = split(arr)
    return merge(merge_sort(pieces[0]), merge_sort(pieces[1]))

a= [1,4,3,2]
print(merge_sort(a))
