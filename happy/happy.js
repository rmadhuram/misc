function ssq(n) {
  let k = n
  let sum = 0
  while (k != 0) {
    sum += (k%10)**2
    k = Math.floor(k/10)
  }
  return sum
}

let nodes = []
for (let i=0; i<=200; i++) {
  nodes.push({group: Math.floor(i/20)});
}

let edges = []
for (let i=0; i<=200; i++) {
  let j = ssq(i)
  edges.push({from: i, to: j})
}

let model = {
  nodes: nodes,
  edges: edges,
  steps: 12000
};

graph = new ElGrapho({
  container: document.getElementById('container'),
  model: ElGrapho.layouts.ForceDirected(model),
  width: 1200,
  height: 900
});