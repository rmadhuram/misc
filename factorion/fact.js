let fact = [1]
for (let i=1; i<10; i++) {
  fact[i] = fact[i-1]*i
}

for (let i=1; i<50000; i++) {
  let n = i
  let sum = 0
  while (n>0) {
    let d = n % 10
    sum += fact[d]
    n = Math.floor(n/10)
  }
  if (sum == i) {
    console.log(i)
  }
}