let n = 10

prime: for (let i = 2; i <= n; i++) {
    for (let j = 2; j < Number(i ** 0.5) + 1; j++) {
        if (i % j === 0) {
            continue prime
        }
    }
    alert(i)
}