class Node(object):
    def __init__(self, val=None, next=None):
        self.val = val
        self.next = next

class SLL(object):
    def __init__(self, head=None, tail=None):
        self.head = head
        self.tail = tail
        self.length = 0

    def push(self, val):
        node = Node(val)
        if (self.length == 0):
            self.head = node
            self.tail = node
        else:
            old_tail = self.tail
            self.tail = node
            old_tail.next = self.tail
        self.length += 1
        return self

    def pop(self):
        if (self.length == 0):
            return None

        popped_node = self.tail
        if (self.length == 1):
            self.head = None
            self.tail = None
            self.length -= 1
            return popped_node.val
        if (self.length == 2):
            self.tail = self.head
            self.length -= 1
            return popped_node.val

        current_node = self.head
        while (current_node.next != popped_node):
            current_node = current_node.next
        self.tail = current_node

        self.length -= 1
        return popped_node.val

    def unshift(self, val):
        node = Node(val)
        if (self.length == 0):
            self.tail = node
        old_head = self.head
        self.head = node
        self.head.next = old_head
        self.length += 1
        return self

    def shift(self):
        if (self.length == 0):
            return None
        shifted_node = self.head
        if (self.length == 1):
            self.tail = None
            self.head = None
            self.length -= 1
            return shifted_node.val
        self.head = self.head.next
        shifted_node.next = None
        self.length -= 1
        return shifted_node.val

    def get(self, idx):
        if (self.length == 0 or idx > self.length-1):
            return None
        current_node = self.head
        current_idx = 0
        while (current_idx < idx):
            current_node = current_node.next
            current_idx += 1
        return current_node.val

    def set(self, idx, val):
        if (self.length == 0 or idx > self.length-1):
            return None
        current_node = self.head
        current_idx = 0
        while (current_idx < idx):
            current_node = current_node.next
            current_idx += 1
        current_node.val = val

    def remove(self, idx):
        if (self.length == 0 or idx > self.length-1):
            return None
        if (idx == 0):
            return self.shift()
        if (idx == self.length-1):
            return self.pop()
        current_node = self.head
        current_idx = 0
        while (current_idx < idx-1):
            current_node = current_node.next
            current_idx += 1
        previous_node = current_node
        next_node = current_node.next.next
        removed_node = current_node.next
        previous_node.next = next_node
        removed_node.next = None
        self.length -= 1
        return removed_node.val

    def reverse(self):
        if (self.length == 0):
            return None
        if (self.length == 1):
            return self
        if (self.length == 2):
            old_head = self.head
            self.head = self.tail
            self.tail = old_head
            return self
        first_node = self.head
        second_node = self.head.next
        third_node = self.head.next.next
        self.head = self.tail
        self.tail = first_node

        while (second_node != None):
            second_node.next = first_node
            first_node = second_node
            second_node = third_node
            if (third_node != None):
                third_node = third_node.next
        return self
