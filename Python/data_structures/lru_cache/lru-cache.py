from time import time

class Node(object):
    def __init__(self, value):
        self.value = value
        self.time_stamp = time()

    def update_time_stamp():
        self.time_stamp = time()

class LRU(object):
    def __init__(self, max_size):
        self.max_size = max_size
        self.cache = {}
        self.length = 0

    def get(self, key):
        node = self.cache[key]
        node.update_time_stamp()
        return node.value

    def add(self, key, value):
        new_node = Node(value)

        if (self.length == self.max_size):
            self.remove_lru();

        self.cache[key] = new_node;
        
