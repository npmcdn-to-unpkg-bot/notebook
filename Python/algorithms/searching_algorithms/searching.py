from math import floor

def linear_search(list, value, idx=0):
    if (len(list) == 0 or idx < 0 or idx > len(list)-1):
        return -1
    elif (list[idx] == value):
        return idx
    idx += 1
    return linear_search(list, value, idx)

def binary_search(list, search, offset=0):
    if (len(list) == 1):
        if (list[0] == search):
            return offset
        else:
            return -1
    midpoint = int(floor(len(list)/2))
    if (search > list[midpoint]):
        offset += midpoint
        return binary_search(list[midpoint:], search, offset)
    elif (search < list[midpoint]):
        return binary_search(list[:midpoint], search, offset)
    else:
        return midpoint + offset
