let maxSum = 0
let max = []
for (let i=1; i<100; i++) {
  for (let j=1; j<100; j++) {
    for (let k=1; k<100; k++) {
      let total = (i ** 3 + j ** 3 + k ** 3)
      
        
      let d = Math.cbrt(total)
      if (d == Math.floor(d) && total < 1000000) {
        if (i+j+k > maxSum) {
          maxSum = i+j+k
          max = [i,j,k, d]
        }
        console.log(i, j, k, d)
      } 
    }
  }
}

console.log(max)
console.log(maxSum)