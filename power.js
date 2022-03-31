for (let a = 1; a<=45; a++) {
    for (let c=1; c<=45; c++) {
      for (let d=1; d<=45; d++) {
        if (a*a + 1 + c*c + d*d == 2022) {
          console.log(a,c,d, a+c+d)
        }
      }
    }
}