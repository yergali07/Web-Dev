a = float(input())
n = int(input())
total = 1
term = 1
for _ in range(n):
    term *= a
    total += term
if total == int(total):
    print(int(total))
else:
    print(total)
