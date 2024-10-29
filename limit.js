let x = 1
for (let n = 1; n < 100000; n++) {
  x = x + (1/x)
  console.log(x, x/Math.sqrt(n))
}
console.log(Math.sqrt(2))