

# 队列的特点是，一头进一头出
# 所以可以使用linked list 和array来实现,

class Queue(object):
    def __init__(self):
        self.data = []
        self.size = 0

    def enqueue(self, data):
        self.data.append(data)
        self.size +=1
    def dequeue(self):
        self.size-=1
        data = self.data[0]
        del self.data[0]
        return data

    def peek(self):
        return self.data[0]

    def show(self):
        print(self.size, self.data)


a = Queue()
a.enqueue(4)
a.enqueue(3)
a.enqueue(24)
a.enqueue(6)
a.enqueue(342)
a.show()
a.dequeue()
a.dequeue()
a.show()







