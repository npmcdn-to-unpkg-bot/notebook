from time import time

class Node(object):
    def __init__(self, value):
        self.value = value
        self.time_stamp = time()

    def update_time_stamp(self):
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

    def peek(self, key):
        return key in self.cache

    def add(self, key, value):
        new_node = Node(value)

        if (self.length == self.max_size):
            self.remove_oldest();

        self.cache[key] = new_node;
        self.length += 1

    def remove_oldest(self):
        oldest = None
        for key in self.cache:
            life_time = self.cache[key].time_stamp
            if (oldest == None):
                oldest = key
            elif (life_time < self.cache[oldest].time_stamp):
                oldest = key
        del self.cache[oldest]
        self.length -= 1
