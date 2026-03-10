n = int(input())
student_marks = {}
for _ in range(n):
    line = input().split()
    name = line[0]
    marks = list(map(float, line[1:]))
    student_marks[name] = marks

query = input()
avg = sum(student_marks[query]) / len(student_marks[query])
print(f"{avg:.2f}")
