from math import floor

def swap(list, idx_a, idx_b):
    temp = list[idx_a]
    list[idx_a] = list[idx_b]
    list[idx_b] = temp

def bubble_sort(list, swap_count=0, idx=0):
    if (idx == len(list)-1 and swap_count == 0):
        return list
    elif (idx == len(list)-1):
        idx = 0
        swap_count = 0
    if (list[idx] > list[idx+1]):
        swap(list, idx, idx+1)
        swap_count += 1
    idx += 1
    return bubble_sort(list, swap_count, idx)

def selection_sort(list, swap_pntr=0, smallest_idx=0, idx=0):
    if (swap_pntr == len(list)-1):
        return list
    elif (idx == len(list)):
        swap(list, swap_pntr, smallest_idx)
        swap_pntr += 1
        idx = swap_pntr
    elif (list[idx] < list[smallest_idx]):
        smallest_idx = idx
    idx += 1
    return selection_sort(list, swap_pntr, smallest_idx, idx)

def insertion_sort(list, idx=1):
    if (idx == len(list)):
        return list
    if (list[idx] < list[idx-1]):
        b_idx = idx
        while(b_idx > 0 and list[b_idx] < list[b_idx-1]):
            swap(list, b_idx, b_idx-1)
            b_idx -= 1
    idx += 1
    return insertion_sort(list, idx)

def merge(list_a, list_b):
    merged_list = []
    while (len(list_a) > 0 and len(list_b) > 0):
        if (list_a[0] < list_b[0]):
            merged_list.append(list_a.pop(0))
        else:
            merged_list.append(list_b.pop(0))
    if (len(list_a) > 0):
        merged_list = merged_list + list_a
    elif (len(list_b) > 0):
        merged_list = merged_list + list_b
    return merged_list


def merge_sort(list):
    if (len(list) == 1):
        return list
    half_a = list[:floor(len(list)/2)]
    half_b = list[floor(len(list)/2):]
    return merge(merge_sort(half_a), merge_sort(half_b))

def partition(list, left, right):
    swap(list, left, right)
    pivot = list[right]
    wall = left

    current_idx = left
    while (current_idx < right):
        if (list[current_idx] < pivot):
            swap(list, current_idx, wall)
            wall += 1
        current_idx += 1
    swap(list, right, wall)
    return wall


def quick_sort(list, left=0, right=None):
    if (len(list) == 0):
        return list
    if (right == None):
        right = len(list)-1
    if (left < right):
        quick_sort(list, partition(list, left, right)+1, right)
        quick_sort(list, left, partition(list, left, right)-1)
    return list
