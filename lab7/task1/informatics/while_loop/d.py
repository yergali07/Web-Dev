total = 0
count = 0
while True:
    x = int(input())
    if x == 0:
        break
    total += x
    count += 1
print(total / count)
