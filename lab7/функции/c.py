def count_digits(s, count=0):
    if not s:
        return count
    return count_digits(s[1:], count + s[0].isdigit())

s = input()
print(count_digits(s))