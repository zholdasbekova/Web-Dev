def lucky_sum(a, b, c):
    nums = [a, b, c]
    total = 0
    for num in nums:
        if num == 13:
            break
        total += num
    return total

print(lucky_sum(1, 2, 3))  # 6
print(lucky_sum(1, 2, 13))  # 3
print(lucky_sum(1, 13, 3))  # 1
