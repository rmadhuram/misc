for (let i = 1; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    let k = `${i}${j}${j}${i}`
    console.log(k, Math.sqrt(k))
  }
}