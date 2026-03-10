records = []
for _ in range(int(input())):
    name = input()
    score = float(input())
    records.append([name, score])

second_lowest = sorted(set(s for _, s in records))[1]
names = sorted(name for name, score in records if score == second_lowest)
for name in names:
    print(name)
