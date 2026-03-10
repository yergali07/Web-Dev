def centered_average(nums):
    sorted_nums = sorted(nums)
    return sum(sorted_nums[1:-1]) // (len(nums) - 2)
