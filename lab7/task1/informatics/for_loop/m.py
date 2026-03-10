x = int(input())
while x % 10 == 0:
    x //= 10
result = 0
while x > 0:
    result = result * 10 + x % 10
    x //= 10
print(result)
