def cat_dog(s):
    return s.count("cat") == s.count("dog")

print(cat_dog('catdog'))        
print(cat_dog('catcat'))        
print(cat_dog('1cat1cadodog'))  
