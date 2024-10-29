function getPermutations(arr) {
    if (arr.length <= 1) return [arr];
    
    const result = [];
    
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        const remaining = [...arr.slice(0, i), ...arr.slice(i + 1)];
        const perms = getPermutations(remaining);
        
        for (let perm of perms) {
            result.push([current, ...perm]);
        }
    }
    
    return result;
}

function countSums() {
  let count = 0;
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let permutations = getPermutations(numbers);
  for (let perm of permutations) {
    let n1 = perm[0] + '' + perm[1] + '' + perm[2];
    let n2 = perm[3] + '' + perm[4] + '' + perm[5];
    let n3 = perm[6] + '' + perm[7] + '' + perm[8];
    if (+n1 + +n2 + +n3 === 999) {
      console.log(n1, n2, n3);
      count++;
    }
  }
  return count;
}

console.log(`Number of solutions: ${countSums()}`);
