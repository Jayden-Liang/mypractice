class Node(object):
    def __init__(self, data):
        self.data = data
        self.height = 0
        self.right = None
        self.left = None


class AVL(object):
    def __init__(self):
        self.root = None

    # def insert_test(self, data):         普通的插入
    #     if not self.root:
    #         self.root =Node(data)
    #     else:
    #         self.insertxode(data, self.root)
    #
    # def insertxode(self, data, node):
    #     if data < node.data:
    #         if node.left:
    #             self.insertxode(data, node.left)
    #         else:
    #             node.left = Node(data)
    #     if data > node.data:
    #         if node.right:
    #             self.insertxode(data, node.right)
    #         else:
    #             node.right = Node(data)


    def insert(self, data):
        self.root = self.insertNode(data, self.root)

    def insertNode(self, data, node):
        if not node:                                       # 这里也是作为递归结束的条件
            return Node(data)
        if data < node.data:
            node.left = self.insertNode(data, node.left)
        else:
            node.right = self.insertNode(data, node.right)
        node.height = max(self.get_height(node.left), self.get_height(node.right))+1
        return self.balance_after_insert(data, node)

    def balance_after_insert(self, data, node):
        balance = self.check_balance(node)
        if balance >1 and data < node.left.data:
            print('右旋转')
            return self.rotate_right(node)
        if balance < -1 and data > node.right.data:
            print('左旋转')
            return self.rotate_left(node)
        if balance > 1 and data > node.left.data:
            print('先左旋转，后右旋转')
            node.left = self.rotate_left(node.left)
            return self.rotate_right(node)
        if balance < -1 and data < node.right.data:
            print('先右旋转，后左旋转')
            node.right = self.rotate_right(node.right)
            return self.rotate_left(node)

        return node

    def remove(self, data):
        if self.root:
            self.root = self.remove_node(data, self.root)
    def remove_node(self, data, node):
        if not node:
            return node
        if data < node.data:
            node.left = self.remove_node(data, node.left)
        if data > node.data:
            node.right = self.remove_node(data, node.right)
        else:
            if not node.left and not node.right:  # 没有左右节点，leaf node
                del node
                return None
            if not node.left:
                temp = node.right  # 创建临时，删除掉返回，root node指向这个
                del node
                return temp
            if not node.right:
                temp = node.left
                del node
                return temp
            temp = self.getPredecessor(node.left)  # 找到要删除的左边最大的那一个，和其掉包，按照leaf node删除
            node.data = temp.data                # 只是掉包数据，左右子树依然是不变的
            node.left = self.remove_node(temp.data, node.left)
        #依然要检查balance和rotate
        balance = self.check_balance(node)
        if balance> 1 and self.check_balance(node.left)>=0:
            return self.rotate_right(node)
        if balance<-1 and self.check_balance(node.right) <=0:
            return self.rotate_left(node)
        if balance >1 and self.check_balance(node.left)<0:
            node.left = self.rotate_left(self.left)
            return self.rotate_right(node)
        if balance <-1 and self.check_balance(node.right) >0:
            node.right = self.rotate_right(self.right)
            return self.rotate_left(node)

        return node

    def getPredecessor(self, node):
        if node.right:
            return self.getPredecessor(node.right)
        return node

    def in_order_traversal(self):
        if self.root:
            self.traversal_in_order(self.root)

    def traversal_in_order(self, node):
        if node.left:
            self.traversal_in_order(node.left)
        print('data：', node.data)
        if node.right:
            self.traversal_in_order(node.right)

    def get_height(self, node):
        if not node:
            return -1  # 如果node为none的话，高度就为-1
        else:
            return node.height

    def check_balance(self, node):
        if not node:
            return 0
        else:
            return self.get_height(node.left)-self.get_height(node.right)

    def rotate_right(self, node):
        print('节点{}右旋转'.format(node.data))
        temp = node.left
        t = temp.right
        temp.right = node
        node.left = t  # 左子树高度-右子树高度的，如果返回差大于1，则需要往右旋转

        node.height = max(self.get_height(node.left), self.get_height(node.right))+1
        temp.height = max(self.get_height(temp.left), self.get_height(temp.right))+1
        return temp

    def rotate_left(self, node):
        print('节点{}左旋转'.format(node.data))
        temp = node.right
        t= temp.left
        temp.left = node
        node.right = t
        node.height = max(self.get_height(node.left), self.get_height(node.right)) + 1
        temp.height = max(self.get_height(temp.left), self.get_height(temp.right)) + 1
        return temp


avl = AVL()
# avl.insert_test(10)
# avl.insert_test(30)
# avl.insert_test(20)
# avl.insert_test(70)
# avl.insert_test(40)


# avl.insert(20)
# avl.insert(18)
# avl.insert(2)
# avl.insert(7)
# avl.insert(34)
# avl.insert(60)
avl.insert(1)
avl.insert(2)
avl.insert(3)
avl.insert(4)
avl.insert(5)
avl.insert(6)
avl.remove(4)
avl.in_order_traversal()
