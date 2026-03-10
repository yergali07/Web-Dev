x = int(input())
d = int(input())
count = 0
if x == 0 and d == 0:
    count = 1
else:
    tmp = abs(x)
    while tmp > 0:
        if tmp % 10 == d:
            count += 1
        tmp //= 10
print(count)
