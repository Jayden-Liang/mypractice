

# 实际是让一个包含data,next的instance，其中next指向下一个instance

# 节点
class Node(object):
    def __init__(self, data):
        self.data = data
        self.next = None



class Linkedlist(object):
    def __init__(self):
        self.firstNode=None
        self.size = 0

    def insert_end(self, data):
        ins = Node(data)
        self.size = self.size+1
        if self.firstNode is None:
            self.firstNode= ins
        else:
            the_node = self.firstNode
            while True:
                if the_node.next is not None:  # 循环直到next为none的最后一个
                    the_node = the_node.next
                else:
                    the_node.next = ins
                    break

    def insert_start(self, data):
        self.size +=1
        ins = Node(data)
        if self.firstNode is None:
            self.firstNode= ins
        else:
            current_first = self.firstNode     #firstNode前面插入instance，将其next的变为之前的第一个
            self.firstNode = ins
            self.firstNode.next = current_first

    def remove(self, data):
        if self.firstNode is None:
            print('链表中没有数据')
        else:
            self.size -= 1
            query = self.firstNode
            if query.data == data:
                self.firstNode = None
            while True:
                if query.next.data != data:    # 找到data的前一个
                    query = query.next
                else:
                    previous = query             #更新next指针，前一个的next，指向data的下一个
                    target = query.next
                    the_next = target.next
                    previous.next =  the_next
                    break


    def show_all(self):
        list1 =[]
        if self.firstNode is None:
            print('链表中没有数据')
        else:
            the_node = self.firstNode
            while True:
                if the_node is not None:
                    list1.append(the_node.data)
                    the_node = the_node.next
                else:
                    break

            print(self.size)
            print(list1)



x = Linkedlist()

x.insert_end('qt1')
x.insert_end('1qt')
x.insert_end('qre1')
x.insert_end('re1')
x.insert_end('134')

x.show_all()

x.remove('re1')
x.show_all()





