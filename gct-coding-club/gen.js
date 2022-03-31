let size = 10
for (let i=0; i<size; i++) {
  let row = ''
  for (let j=0; j<2*(size-i); j++) row += ' '
  for (let j=0; j<=i; j++) {
    let n = Math.floor(Math.random()*100)
    n = (n < 10) ? '0' + n : '' + n
    row = row + n
    if (j < i) row += '  '
  }
  console.log(row)
}