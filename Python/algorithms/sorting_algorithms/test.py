from sorting import bubble_sort, selection_sort, insertion_sort, merge_sort, quick_sort
import unittest

class TestSearchAlgorithms(unittest.TestCase):
    def test_bubble_sort(self):
        unsorted_list = [5, 3, 0, 10, 2, 6, 5]
        sorted_list = [0, 2, 3, 5, 5, 6, 10]
        self.assertEqual(bubble_sort(unsorted_list), sorted_list)

    def test_selection_sort(self):
        unsorted_list = [70, 4, 101, 2, 0, 98, 10, 13]
        sorted_list = [0, 2, 4, 10, 13, 70, 98, 101]
        self.assertEqual(selection_sort(unsorted_list), sorted_list)

    def test_insertion_sort(self):
        unsorted_list = [8, 39, 1, 4, 90, 11, 23, 8, 16, 4]
        sorted_list = [1, 4, 4, 8, 8, 11, 16, 23, 39, 90]
        self.assertEqual(insertion_sort(unsorted_list), sorted_list)

    def test_merge_sort(self):
        unsorted_list = [90, 101, 2, 45, 8, 9, 5, 0, -14, 29, 14]
        sorted_list = [-14, 0, 2, 5, 8, 9, 14, 29, 45, 90, 101]
        self.assertEqual(merge_sort(unsorted_list), sorted_list)

    def test_quick_sort(self):
        unsorted_list = [8, 19, 2, -90, -10, 0, 29, 100, 500, 201, 301]
        sorted_list = [-90, -10, 0, 2, 8, 19, 29, 100, 201, 301, 500]
        self.assertEqual(quick_sort(unsorted_list), sorted_list)

if __name__ == '__main__':
    unittest.main()
