from lru_cache import Node, LRU
from time import time, sleep
import unittest


class Test_Node(unittest.TestCase):

    def test_node(self):
        node_a = Node(14)
        sleep(0.1)
        later_time = time()
        self.assertEqual(node_a.value, 14, "Should set node with proper value")
        self.assertEqual(node_a.time_stamp < later_time, True, "Should set node with proper time stamp")
        previous_time = node_a.time_stamp
        self.assertEqual(previous_time == node_a.time_stamp, True, "Should update time stamp when update_time_stamp is invoked")
        node_a.update_time_stamp()
        self.assertEqual(previous_time < node_a.time_stamp, True, "Should update time stamp when update_time_stamp is invoked")

    def test_lru_cache(self):
        lru = LRU(5)
        self.assertEqual(lru.max_size, 5, "Should initialize with proper max_size")
        self.assertEqual(lru.cache, {}, "Should initialize with proper cache")
        self.assertEqual(lru.length, 0, "Should initialize with proper length")

        lru.add("Alpha", 10)
        sleep(0.1)
        lru.add("Beta", 20)
        sleep(0.1)
        lru.add("Omega", 40)
        sleep(0.1)
        self.assertEqual(lru.length, 3, "Should properly update length when adding")

        lru.add("Zeta", 80)
        sleep(0.1)
        lru.add("Gamma", 30)
        sleep(0.1)
        lru.add("Delta", 60)
        self.assertEqual(lru.length, 5, "Should not exceed the max_size of the lru")
        self.assertEqual(lru.peek("Alpha"), False, "Should remove the oldest item in the cache")
        self.assertEqual(lru.peek("Gamma"), True, "Should remove the oldest item in the cache")

        self.assertEqual(lru.get("Beta"), 20, "Should properly retrieve data from the LRU cache")
        lru.add("Cappa", 90)
        self.assertEqual(lru.length, 5, "Should properly update time_stamp when retrieving data")
        self.assertEqual(lru.peek("Beta"), True, "Should properly update time_stamp when retrieving data")
        self.assertEqual(lru.peek("Omega"), False, "Should properly update time_stamp when retrieving data")



if __name__ == '__main__':
    unittest.main()
