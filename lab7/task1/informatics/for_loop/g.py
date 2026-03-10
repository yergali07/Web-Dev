n = int(input())
total = 0.0
for i in range(n + 1):
    total += ((-1) ** i) / (2 * i + 1)
print(f"{4 * total:.5f}")
