
# 因为Stack是存和取最后位置的数据
# 非常简单，就是利用list的append， remove, 和索引查询，

class Stack(object):
    def __init__(self):
        self.data = []
        self.size = 0

    def add(self, data):
        self.data.append(data)
        self.size +=1

    def pop(self):
        self.data.remove(self.data[-1])
        self.size -=1

    def peek(self):
        print(self.data[-1])

    def show(self):
        print(self.size)
        print(self.data)


a= Stack()
a.add(1)
a.add(2)
a.show()

a.peek()
a.pop()
a.show()







