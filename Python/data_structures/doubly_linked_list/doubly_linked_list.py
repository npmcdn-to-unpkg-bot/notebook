from math import floor

class Node():

    def __init__(self, val=None, previous=None, next=None):
        self.val = val
        self.previous = previous
        self.next = next

class DLL():

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
            self.tail.previous = old_tail
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

        new_tail = self.tail.previous
        self.tail = new_tail
        self.tail.next = None
        self.length -= 1
        popped_node.previous = None
        return popped_node.val

    def unshift(self, val):
        node = Node(val)
        if (self.length == 0):
            self.tail = node
        old_head = self.head
        self.head = node
        self.head.next = old_head
        old_head.previous = self.head
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
        self.head.previous = None
        self.length -= 1
        return shifted_node.val

    def get(self, idx):
        if (self.length == 0 or idx > self.length-1):
            return None
        if (idx < self.length/2):
            current_node = self.head
            current_idx = 0
            while (current_idx < idx):
                current_node = current_node.next
                current_idx += 1
        else:
            current_node = self.tail
            current_idx = self.length-1
            while (current_idx > idx):
                current_node = current_node.previous
                current_idx -= 1
        return current_node.val

    def set(self, idx, val):
            if (self.length == 0 or idx > self.length-1):
                return None
            if (idx < self.length/2):
                current_node = self.head
                current_idx = 0
                while (current_idx < idx):
                    current_node = current_node.next
                    current_idx += 1
            else:
                current_node = self.tail
                current_idx = self.length-1
                while (current_idx > idx):
                    current_node = current_node.previous
                    current_idx -= 1
            current_node.val = val

    def remove(self, idx):
        if (self.length == 0 or idx > self.length-1):
            return None
        if (idx == 0):
            return self.shift()
        if (idx == self.length-1):
            return self.pop()
        if (idx < self.length/2):
            current_node = self.head
            current_idx = 0
            while (current_idx < idx-1):
                current_node = current_node.next
                current_idx += 1
            previous_node = current_node
            next_node = current_node.next.next
            removed_node = current_node.next
            previous_node.next = next_node
            next_node.previous = previous_node
            removed_node.next = None
            removed_node.previous = None
        else:
            current_node = self.tail
            current_idx = self.length
            while (current_idx > idx+2):
                current_node = current_node.previous
                current_idx -= 1
            next_node = current_node
            previous_node = current_node.previous.previous
            removed_node = current_node.previous
            previous_node.next = next_node
            next_node.previous = previous_node
            removed_node.next = None
            removed_node.previous = None
        self.length -= 1
        return removed_node.val

    def reverse(self):
        if (self.length == 0):
            return None
        elif (self.length == 1):
            return self
        elif (self.length == 2):
            old_head = self.head
            self.head = self.tail
            self.tail = old_head
            self.head.previous = None
            self.tail.previous = self.head
            self.tail.next = None
            self.head.next = self.tail
            return self
        else:
            current_node = self.head
            while (current_node != self.tail):
                old_previous = current_node.previous
                current_node.previous = current_node.next
                current_node.next = old_previous
                current_node = current_node.previous
            old_head = self.head
            self.head = self.tail
            self.tail = old_head
            return self

    def insert(self, idx, val):
        if (self.length == 0 or idx > self.length-1 or idx < 0):
            return None
        elif (idx == 0):
            self.unshift(val)
        elif (idx == self.length):
            self.push(val)
        elif (idx < floor(self.length/2)):
            current_idx = 0
            current_node = self.head
            while (current_idx < idx):
                current_node = current_node.next
                current_idx += 1
            previous_node = current_node.previous
            next_node = current_node
            new_node = Node(val)
            new_node.previous = previous_node
            new_node.next = next_node
            previous_node.next = new_node
            next_node.previous = new_node
            self.length += 1
        elif (idx >= floor(self.length/2)):
            current_idx = self.length-1
            current_node = self.tail
            while (current_idx > idx):
                current_node = current_node.previous
                current_idx -= 1
            previous_node = current_node.previous
            next_node = current_node
            new_node = Node(val)
            new_node.previous = previous_node
            new_node.next = next_node
            previous_node.next = new_node
            next_node.previous = new_node
            self.length += 1
        return self.length
