x = int(input())
total = 0
x = abs(x)
while x > 0:
    total += x % 10
    x //= 10
print(total)
