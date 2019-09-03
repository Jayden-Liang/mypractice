class Node(object):
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList(object):
    def __init__(self):
        self.firstNode = None
        self.size = 0

    # 末尾插入，最后一个node的next是none,

    def insert_end(self, data):
        ins = Node(data)
        self.size += 1
        if self.firstNode is None:
            self.firstNode = ins
        else:
            the_node = self.firstNode
            while True:
                if the_node.next is not None:
                    the_node = the_node.next
                else:
                    the_node.next = ins
                    break

    # 首部插入，简单，得到现有的首部，然后ins的next指向这个

    def insert_start(self, data):
        ins = Node(data)
        if self.firstNode is None:
            self.firstNode = ins
        else:
            current_first = self.firstNode
            ins.next = current_first
            self.firstNode = ins

    # 移除

    def remove(self, data):
        start = self.firstNode
        print(start.data)
        if start.data == data:
            print('yes')
            self.firstNode = start.next
        else:
            while True:
                if start.next.data != data:
                    start = start.next
                else:
                    pre = start
                    target = start.next
                    the_next = target.next
                    pre.next = the_next
                    break

    def show(self):
        nodelist = []
        if self.firstNode is None:
            print('没有数据')
        else:
            the_node = self.firstNode
            while True:
                if the_node is not None:
                    nodelist.append(the_node.data)
                    the_node = the_node.next
                else:
                    break
        return nodelist


a = LinkedList()
a.insert_end(1)
a.insert_end(2)
a.insert_start(4)
a.insert_start(7)
a.remove(1)
print(a.size)
print(a.show())


