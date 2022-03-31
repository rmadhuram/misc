function isHarshad(n) {
  let sum = 0
  let p = n
  while (p > 0) {
    sum += p % 10
    p = Math.floor(p/10)
  }
  return (n % sum == 0) 
}

let prev = false
let seq = []
for (let i=1; i<10000; i++) {
  let current = isHarshad(i)
  if (current) {
    //console.log(i)
    if (prev) {
      seq.push(i)
    } else {
      if (seq.length > 1) console.log(seq)
      seq = [i]
    }
  }
  prev = current
}