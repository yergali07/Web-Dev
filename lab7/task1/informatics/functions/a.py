def min4(a, b, c, d):
    return min(a, min(b, min(c, d)))

a, b, c, d = map(int, input().split())
print(min4(a, b, c, d))
