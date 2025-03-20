def make_bricks(small, big, goal):
    max_big = min(big, goal // 5)  
    remaining = goal - (max_big * 5)  
    return remaining <= small  

print(make_bricks(3, 1, 8))  # True
print(make_bricks(3, 1, 9))  # False
print(make_bricks(3, 2, 10)) # True
