def sum67(nums):
    total = 0
    in_block = False
    for n in nums:
        if n == 6:
            in_block = True
        elif in_block and n == 7:
            in_block = False
        elif not in_block:
            total += n
    return total
