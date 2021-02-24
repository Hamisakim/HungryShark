/* eslint-disable no-undef */
const width = 20

let x = 1
let y = -width

let c2 = Math.pow(x, 2) + Math.pow(y, 2)
let c = Math.sqrt(c2)
c


function atIntersection(enemy) {
  const position = cellArray[enemy.currentPosition]
  if (
    (cellArray[enemy.currentPosition + 1].classList.contains('intersection') )||
    (cellArray[enemy.currentPosition - 1].classList.contains('intersection')) ||
    (cellArray[enemy.currentPosition - width].classList.contains('intersection')) ||
    (cellArray[enemy.currentPosition + width].classList.contains('intersection'))
  ) {
    decideDirection()
  }
}

function decideDirection(){

  const positionDiff =enemy.currentPosition -  bruce.currentPosition
  Math.floor(pos)

}