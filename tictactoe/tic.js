let model = ['','','','','','','','','']
document.addEventListener('DOMContentLoaded', (event) => {
  let turnNum = 0
  let grid = document.getElementsByClassName('grid-container')
  for (var i = 0; i < 9; i++){
    grid[0].insertAdjacentHTML('beforeend', 
      '<div class="grid-item" data-grid="' + i + '"><div class="xo xo-' +i +'" ></div></div>')
  }
  document.getElementsByClassName("grid-container")[0].addEventListener("click", 
    (evt) => {
      let elem = evt.target,
          index = elem.getAttribute('data-grid'),
          flag = 0
      if (model[index] === '') {
        let x = turnNum % 2 ? 'O' : 'X'
        let xo = elem.getElementsByClassName('xo')[0]
        model[index] = x
        xo.innerHTML = x
        turnNum++
      }
      if (model[0] === 'X' && model[4] === 'X' && model[8] === 'X' && flag === 0) {
        document.getElementById("Win Output").innerHTML = "X won"
        flag = 1
      }
      if (model[2] === 'X' && model[4] === 'X' && model[6] === 'X' && flag === 0) {
        document.getElementById("Win Output").innerHTML = "X won"
        flag = 1
      }
      if (model[0] === 'O' && model[4] === 'O' && model[8] === 'O' && flag === 0) {
        document.getElementById("Win Output").innerHTML = "O won"
        flag = 1
      }
      if (model[2] === 'O' && model[4] === 'O' && model[6] === 'O' && flag === 0) {
        document.getElementById("Win Output").innerHTML = "O won"
        flag = 1
      }
      for (var i =0;i <= 3;i++) {
        if(model[3+i] === 'X' && model[0+i] === 'X' && model[6+i] === 'X'&& flag === 0){
          document.getElementById("Win Output").innerHTML = "X won"
          flag = 1
        }
      }
      for (var i =0;i <= 3;i++) {
        if(model[3+i] === 'O' && model[0+i] === 'O' && model[6+i] === 'O' && flag === 0){
          document.getElementById("Win Output").innerHTML = "O won"
          flag = 1
        }
      }
      for (var i =0;i < 9;i= i + 3) {
        if(model[i] === 'O' && model[i+1] === 'O' && model[i+2] === 'O' && flag === 0){
          document.getElementById("Win Output").innerHTML = "O won"
          flag = 1
        }
      }
      for (var i =0;i < 9;i= i + 3) {
        if(model[i] === 'X' && model[i+1] === 'X' && model[i+2] === 'X' && flag === 0){
          document.getElementById("Win Output").innerHTML = "X won"
          flag = 1
        }
      }
    }
  );
})