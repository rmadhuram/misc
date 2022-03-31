for (let i=1; i<10000; i++) {
  let n = (2022 * i) % 10000
  if (n == 5001) {
    console.log(i)
  }
}

  for (let i=1; i< 2022; i++) {
    for (let j=i; j<2022; j++) {
      if (i*i + j*j == 2022 * 2022) {
        console.log( ' ---> ', i,j)
      }
    }
  }


let n = 2022 * 2022
for (let x=1; x<2022; x++) {
  let y = Math.sqrt(n - x*x)
  if (Math.floor(y) == y) {
    console.log(x, y)
  }
}