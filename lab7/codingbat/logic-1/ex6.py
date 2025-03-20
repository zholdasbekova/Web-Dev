def cigar_party(cigars, is_weekend):
    if is_weekend:
        return cigars >= 40
    return 40 <= cigars <= 60

print(cigar_party(30, False))  # False
print(cigar_party(50, False))  # True
print(cigar_party(70, True))   # True
