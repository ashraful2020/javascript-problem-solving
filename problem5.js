function primeNumber(num) {
    let primeNum = [];
    let totalPrime = 0;
    for (let i = 2; i <= num; i++) {
        for (let j = 2; j <= num; j++) {
            if (i === j) totalPrime += i;
            if (i % j == 0) break
        }
    }
    return totalPrime;
}
console.log(primeNumber(10))