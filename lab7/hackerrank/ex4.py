def capitalize_name(name):
    return ' '.join(word.capitalize() for word in name.split())

full_name = input()

print(capitalize_name(full_name))
