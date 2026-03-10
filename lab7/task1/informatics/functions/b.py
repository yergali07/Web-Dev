def power(a, n):
    result = 1.0
    for _ in range(n):
        result *= a
    return result

a, n = input().split()
a = float(a)
n = int(n)
result = power(a, n)
if result == int(result):
    print(int(result))
else:
    print(result)
