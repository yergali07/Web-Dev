a = float(input())
n = int(input())
result = 1
for _ in range(n):
    result *= a
if result == int(result):
    print(int(result))
else:
    print(result)
