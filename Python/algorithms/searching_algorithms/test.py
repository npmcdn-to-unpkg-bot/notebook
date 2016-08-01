from searching import linear_search, binary_search
import unittest

class TestSearchAlgorithms(unittest.TestCase):

    def test_linear_seach(self):
        list_a = [1, 5, 29, 40, 19, 22, 1005, 2, 0]
        self.assertEqual(linear_search(list_a, 1), 0)
        self.assertEqual(linear_search(list_a, 5), 1)
        self.assertEqual(linear_search(list_a, 29), 2)
        self.assertEqual(linear_search(list_a, 40), 3)
        self.assertEqual(linear_search(list_a, 19), 4)
        self.assertEqual(linear_search(list_a, 22), 5)
        self.assertEqual(linear_search(list_a, 1005), 6)
        self.assertEqual(linear_search(list_a, 2), 7)
        self.assertEqual(linear_search(list_a, 0), 8)
        self.assertEqual(linear_search(list_a, 200), -1)
        self.assertEqual(linear_search(list_a, -1500), -1)

    def test_binary_search(self):
        list_b = [1, 3, 5, 7, 80, 200, 1200, 1201, 2900]
        self.assertEqual(binary_search(list_b, 1), 0)
        self.assertEqual(binary_search(list_b, 3), 1)
        self.assertEqual(binary_search(list_b, 5), 2)
        self.assertEqual(binary_search(list_b, 7), 3)
        self.assertEqual(binary_search(list_b, 80), 4)
        self.assertEqual(binary_search(list_b, 200), 5)
        self.assertEqual(binary_search(list_b, 1200), 6)
        self.assertEqual(binary_search(list_b, 1201), 7)
        self.assertEqual(binary_search(list_b, 2900), 8)
        self.assertEqual(binary_search(list_b, 900), -1)
        self.assertEqual(binary_search(list_b, 0), -1)

if __name__ == '__main__':
    unittest.main()
