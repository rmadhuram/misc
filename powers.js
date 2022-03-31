for (let k = 0; k < 100; k++) {
  let map = {}
  let seq = []
  let n = k
  while (!map[n]) {
    map[n] = true
    seq.push(n)
    n = (n * k) % 100
  }
  console.log(seq, 'len : ' + seq.length)
}