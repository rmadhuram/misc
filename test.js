let pow = 3
for (let i = 1; i<10; i++) {
  for (let j = 0; j<10; j++) {
    for (let k = 0; k<10; k++) {
      if ((i+j+k)**pow == 100*i + 10*j + k) {
        console.log(i,j, k, '++')
      } 
      if ((i+j-k)**pow == 100*i + 10*j + k) {
        console.log(i,j, k, '+-')
      }          
      if ((i-j+k)**pow == 100*i + 10*j + k) {
        console.log(i,j, k, '-+')
      }  
      if ((i-j-k)**pow == 100*i + 10*j + k) {
        console.log(i,j, k, '--')
      }                   
    }
  }
}


/*
let pow = 4
for (let i = 1; i<10; i++) {
  for (let j = 0; j<10; j++) {
    for (let k = 0; k<10; k++) {
      for (let l = 0; l<10; l++) {
        if ((i+j+k+l)**pow == 1000*i + 100*j + 10*k + l) {
          console.log(i,j, k, l, '+++')
        }

        if ((i+j+k-l)**pow == 1000*i + 100*j + 10*k + l) {
          console.log(i,j, k, l, '++-')
        }    
        
        if ((i+j-k+l)**pow == 1000*i + 100*j + 10*k + l) {
          console.log(i,j, k, l, '+-+')
        } 
        
        if ((i+j-k-l)**pow == 1000*i + 100*j + 10*k + l) {
          console.log(i,j, k, l, '+--')
        }  
        
        if ((i-j+k+l)**pow == 1000*i + 100*j + 10*k + l) {
          console.log(i,j, k, l, '-++')
        }

        if ((i-j+k-l)**pow == 1000*i + 100*j + 10*k + l) {
          console.log(i,j, k, l, '-+-')
        }    
        
        if ((i-j-k+l)**pow == 1000*i + 100*j + 10*k + l) {
          console.log(i,j, k, l, '--+')
        } 
        
        if ((i-j-k-l)**pow == 1000*i + 100*j + 10*k + l) {
          console.log(i,j, k, l, '---')
        }         
      }
    }
  }
}
*/