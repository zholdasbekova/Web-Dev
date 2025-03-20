def max_digit(s, max_d=0):
    if not s:
        return max_d
    return max_digit(s[1:], max(max_d, int(s[0])))

s = input()
print(max_digit(s))