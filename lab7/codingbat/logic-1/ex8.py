def squirrel_play(temp, is_summer):
    upper_limit = 100 if is_summer else 90
    return 60 <= temp <= upper_limit

print(squirrel_play(70, False))  # True
print(squirrel_play(95, False))  # False
print(squirrel_play(95, True))   # True
