n = int(input())
scores = list(map(int, input().split()))
print(sorted(set(scores), reverse=True)[1])
