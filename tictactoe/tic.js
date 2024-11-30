let model = [['','',''],['','',''],['','','']]
let flag = false

/**
 * @param model 
 * returns {win: true, winner: 'X'}
 */
function checkRows(model) {
  let isWon = false,
    winner = ''
  for (var i=0; i<3; i++) {
    let ctrX = 0, ctrO = 0;
    for (var j=0; j < 3; j++) {
      model[i][j] === 'X' ? ctrX++ : (model[i][j] === 'O') ? ctrO++ : ctrO
    }
    if (ctrX === 3) {
      isWon = true
      winner = 'X'
      break
    }
    if (ctrO === 3) {
      isWon = true
      winner = 'O'
      break
    }
  } 
  
  return {
    win: isWon,
    winner: winner
  }
}

function checkCols(model) {
  let isWon = false,
    winner = ''
  for (var i=0; i<3; i++) {
    let ctrX = 0, ctrO = 0;
    for (var j=0; j < 3; j++) {
      model[j][i] === 'X' ? ctrX++ : (model[j][i] === 'O') ? ctrO++ : ctrO
    }
    if (ctrX === 3) {
      isWon = true
      winner = 'X'
      break
    }
    if (ctrO === 3) {
      isWon = true
      winner = 'O'
      break
    }
  } 
  
  return {
    win: isWon,
    winner: winner
  }
}

function checkDiags(model, dir) {
  let isWon = false,
  winner = '';
  let ctrX = 0, ctrO = 0, ctrx = 0, ctro = 0;
  for (var i=0 ; i<3 ; i++) {
    let j = i
    if (dir) {
      j = 2-i
    }
    model[i][j] === 'X' ? ctrX++ : (model[i][j] === 'O') ? ctrO++ : ctrO
  }
  if (ctrX === 3) {
    isWon = true
    winner = 'X'
  }
  if (ctrO === 3) {
    isWon = true
    winner = 'O'
  }

  return {
    win: isWon,
    winner: winner
  } 
}

function checkBoard(model) {
  let res = checkRows(model)
  if (res.win) {
    return res
  }
  res = checkCols(model)
  if (res.win) {
    return res
  }
  res = checkDiags(model, 0) 
  if (res.win) {
    return res
  }
  res = checkDiags(model, 1) 
  if (res.win) {
    return res
  }
  return {
    win: false
  }
}

document.addEventListener('DOMContentLoaded', (event) => {
  let turnNum = 0
  let grid = document.getElementsByClassName('grid-container')
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      grid[0].insertAdjacentHTML('beforeend', 
       `<div class="grid-item" data-row="${i}" data-col="${j}"><div class="xo"></div></div>`)     
    }
  }
if(!flag)
  document.getElementsByClassName("grid-container")[0].addEventListener("click", 
    (evt) => {
      let elem = evt.target,
          row = elem.getAttribute('data-row'),
          col = elem.getAttribute('data-col');          
      console.log(row,col)
        if (model[row][col] === '') {
          let x = turnNum % 2 ? 'O' : 'X'
          let xo = elem.getElementsByClassName('xo')[0]
          model[row][col] = x
          xo.innerHTML = x
          turnNum++
        }
        let result = checkBoard(model)
        if (result.win) {
          document.getElementById('win-output').innerHTML = '' + result.winner + " Won"
          flag = false
        }

      /*
      if (model2[0][0] === 'X' && model2[1][1] === 'X' && model2[2][2] === 'X' && flag === 0) {
        document.getElementById("Win Output").innerHTML = "X won"
        flag = 1
      }
      if (model2[0][2] === 'X' && model2[][] === 'X' && model2[6][2] === 'X' && flag === 0) {
        document.getElementById("Win Output").innerHTML = "X won"
        flag = 1
      }
      if (model2[0][0] === 'O' && model2[4][1] === 'O' && model2[8][2] === 'O' && flag === 0) {
        document.getElementById("Win Output").innerHTML = " won"
        flag = 1
      }
      if (model2[2][0] === 'O' && model2[4][1] === 'O' && model2[6][2] === 'O' && flag === 0) {
        document.getElementById("Win Output").innerHTML = "O won"
        flag = 1
      }
      for (var i =0;i <= 3;i++) {
        if(model2[1][3+i] === 'X' && model2[0][i] === 'X' && model2[2][6+i] === 'X'&& flag === 0){
          document.getElementById("Win Output").innerHTML = "X won"
          flag = 1
        }
      }
      for (var i =0;i <= 3;i++) {
        if(model2[1][3+1] === 'O' && model2[0][i] === 'O' && model2[2][6+i] === 'O' && flag === 0){
          document.getElementById("Win Output").innerHTML = "O won"
          flag = 1
        }
      }
      for (var i =0;i < 3;i= i + 1) {
        if(model2[0][i] === 'O' && model2[1][i+1] === 'O' && model2[2][i+2] === 'O' && flag === 0){
          document.getElementById("Win Output").innerHTML = "O won"
          flag = 1
        }
      }
      for (var i =0;i < 9;i= i + 3) {
        if(model2[0][i] === 'X' && model2[1][i+1] === 'X' && model2[1][i+2] === 'X' && flag === 0){
          document.getElementById("Win Output").innerHTML = "X won"
          flag = 1
        }
      }*/
      }
    );
  })