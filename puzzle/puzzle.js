let problem = `
apple + apple + apple = 90
mango + mango + apple = 230
guava + mango + apple = 210
guava + mango - apple = ?
`
let varMap = {}

function reduceLine(line) {
  line = line.replaceAll(' ', '')
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
  line = line.replaceAll(' ', '')
  line = line.replaceAll('x', '*')
  let [expr, val] = line.split('=')
  Object.keys(varMap).forEach(v => {
    expr = expr.replaceAll(v, varMap[v])
  })
  return eval(expr)
}

let lines = problem.split('\n')
for (let line = 1; line < 4; line++ ) {
  reduceLine(lines[line])
}
console.log(varMap)
console.log(solve(lines[4]))