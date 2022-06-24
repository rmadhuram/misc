let fs = require('fs')
let data = []

let N = 4


let nodes = ''
for (let i=0; i < 10 ** N; i++) {
  let num = (i + '').padStart(N, '0')
  nodes += `<node id="${num}" label="${num}" />\n`
}

let edges = ""
for (let i=0; i < 10 ** N; i++) {
  let num = (i + '').padStart(N, '0')
  let sorted = num.split('').sort()
  let rev = num.split('').sort().reverse()
  let diff = Math.abs((+sorted.join('')) - (+rev.join('')))
  diff = (diff + '').padStart(N, '0')
  edges += `<edge source="${num}" target="${diff}"/>\n`
  console.log(num, ' -> ', diff)
}

let graph = `<?xml version="1.0" encoding="UTF-8"?>
<gexf xmlns="http://gexf.net/1.3" version="1.3">
    <graph mode="static" defaultedgetype="directed">
        <nodes>
            ${nodes}
        </nodes>
        <edges>
            ${edges}
        </edges>
    </graph>
</gexf>
`

fs.writeFileSync('data.gexf', graph)