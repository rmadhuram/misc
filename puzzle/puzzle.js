let problem = `
apple + apple + apple = 90
mango + mango + apple = 230
guava + mango + apple = 210
guava + mango - apple = ?
`
let varMap = {}

function reduceLine(line) {
  let [expr, val] = line.split('=')
  let unknownVar = '', sum = 0, count = 0
  expr.split('+').forEach(v => {
    if (typeof varMap[v] != 'undefined') {
      sum += varMap[v]
    } else {
      count++
      unknownVar = v
    }
  })
  varMap[unknownVar] = (+val - sum) / count
}

function solve(line) {
  line = line.replaceAll('x', '*')
  let [expr, val] = line.split('=')
  Object.keys(varMap).forEach(v => {
    expr = expr.replaceAll(v, varMap[v])
  })
  return eval(expr)
}

let lines = problem.split('\n')
for (let n = 1; n < 4; n++ ) {
  reduceLine(lines[n].replaceAll(' ', ''))
}
console.log(varMap)
console.log(solve(lines[4]))