
def _check_add(ins, t_root):
    if ins.data < t_root.data:
        if t_root.left_node is not None:
            _check_add(ins, t_root.left_node)
        else:
            t_root.left_node = ins
    else:
        if t_root.right_node is not None:
            _check_add(ins, t_root.right_node)
        else:
            t_root.right_node = ins


def _find_data(data, t_root):
    if data == t_root.data:
        print('find_you')
        return t_root
    elif data < t_root.data and t_root.left_node is not None:
        return _find_data(data, t_root.left_node)
    elif data > t_root.data and t_root.right_node is not None:
        return _find_data(data, t_root.right_node)
    # return t_root



class Node(object):
    def __init__(self, data):
        self.data = data
        self.left_node = None
        self.right_node = None

class Binary(object):
    def __init__(self):
        self.root_node = None
        self.size = 0

    def add(self, data):
        ins = Node(data)
        if self.root_node is None:
            self.root_node = ins
        else:
            _check_add(ins, self.root_node)

    def find(self, data):
        if self.root_node is not None:
            return _find_data(data, self.root_node)
        else:
            print('空')



    def get_min(self):
        if self.root_node is not None:
            min_num = self.find_min(self.root_node)
            return min_num

    def find_min(self, t_root):
        if t_root.left_node is not None:
            return self.find_min(t_root.left_node)

        return t_root.data

    def in_order_traversal(self):
        if self.root_node:
            return self.in_order_get(self.root_node)

    def in_order_get(self, t_root):
        if t_root.left_node is not None:
            self.in_order_get(t_root.left_node)
        print(t_root.data)
        if t_root.right_node is not None:
            self.in_order_get(t_root.right_node)

    def pre_order_traversal(self):
        if self.root_node:
            print(self.root_node.data)
            self.pre_order_get(self.root_node)

    def pre_order_get(self, node):
        if node.left_node:
            print(node.left_node.data)
            self.pre_order_get(node.left_node)
        if node.right_node:
            print(node.right_node.data)
            self.pre_order_get(node.right_node)

    def post_order_traversal(self):
        if self.root_node:
            self.post_order_get(self.root_node)

    def post_order_get(self, node):
        if node.left_node:
            self.post_order_get(node.left_node)
        if node.right_node:
            self.post_order_get(node.right_node)
        print(node.data)

    def remove(self, data):
        pre_node, node, position= self.find_pre(data, self.root_node)
        if node.right_node and node.left_node:                        #当有两个子节点的情况下
            pre_processor, processor = self.processor(node.left_node)
            node.data = processor.data
            if pre_processor is None:
                node.left_node = processor.left_node
            else:
                pre_processor.right_node = processor.left_node        #因为是最边上的了，所以只能会有left_node了
        else:                                    #当只有一个子节点或没有节点的情况下
            if position == 'left':               #更新前一个节点指向为下一个左节点或右节点
                if node.right_node:
                    pre_node.left_node = node.right_node
                else:
                    pre_node.left_node = node.left_node
            if position =='right':
                if node.right_node:
                    pre_node.right_node = node.right_node
                else:
                    pre_node.right_node = node.left_node

    def processor(self, node):       #目的是找到左半边树最大的那个值，用来和根节点替换值
        if not node.right_node:       #如果第一次循环root_node.left_node没有右边分支，那根节点的左子树就是最大的
            return None, node
        else:
            if node.right_node.right_node is None:    # 得到最大值的node，以及前一个node
                return node, node.right_node
            return self.processor(node.right_node)


    def find_pre(self, data, node,):
        if data == node.data:          # 实际不会走到这来，因为在data == node.left_node.data:，就已经返回了，所以这里只有一种情况就是节点是根节点
            return node, node, 'root'
        if data < node.data:
            if data == node.left_node.data:
                return node, node.left_node, 'left'              #返回要删的节点和前一个节点，以及他是在前一个节点的左边还是右边
            return self.find_pre(data, node.left_node)

        if data > node.data:
            if data == node.right_node.data:
                return node, node.right_node, 'right'
            return self.find_pre(data, node.right_node)
















t = Binary()
t.add(20)
t.add(15)
t.add(16)
t.add(6)
t.add(19)
t.add(18)
t.add(14)
t.add(13)


# t.show()

t.in_order_traversal()
t.remove(19)
print('--------------------------------------------------')
t.in_order_traversal()
# t.post_order_traversal()

