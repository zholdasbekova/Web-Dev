def lone_sum(a, b, c):
    nums = [a, b, c]
    return sum(n for n in nums if nums.count(n) == 1)

print(lone_sum(1, 2, 3))  # 6
print(lone_sum(3, 2, 3))  # 2
print(lone_sum(3, 3, 3))  # 0
