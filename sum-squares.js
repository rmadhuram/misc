
function ssq(n) {
  let k = n
  let sum = 0
  while (k != 0) {
    sum += (k%10)**2
    k = Math.floor(k/10)
  }
  return sum
}

function calc(n) {
  let map = {}
  let chain = []
  while (n != 1 && !map[n]) {
    //console.log('   ' + n)
    chain.push(n)
    map[n] = true
    n = ssq(n)
  }
  console.log(chain.join(' -> '))
}

for (let i = 99900; i<99999; i++) {
  console.log('check ', i)
  calc(i)
}

for (let i=0; i<200; i++) {
  console.log(i + '->' + ssq(i))
}
