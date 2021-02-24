/* eslint-disable no-undef */
const width = 20

let x = 1
let y = -width // so +y means move up 20 positions 

let c2 = Math.pow(x, 2) + Math.pow(y, 2)
let c = Math.sqrt(c2)
c

function atIntersection(enemy) {
  if (
    (cellArray[enemy.currentPosition + 1].classList.contains('intersection')) ||
    (cellArray[enemy.currentPosition - 1].classList.contains('intersection')) ||
    (cellArray[enemy.currentPosition - width].classList.contains('intersection')) ||
    (cellArray[enemy.currentPosition + width].classList.contains('intersection'))
  ) {
    console.log('AT INTERSECTION')
   }
}

function findC(enemyPosition, brucePosition) {
  const positionDiff = (enemyPosition - brucePosition)
  console.log(positionDiff)

  const yDistance = Math.round(positionDiff / 20)
  console.log('Y DISTANCE',yDistance) // -6 move -6*20 position for height 

  const xDistance = -1 * (positionDiff - yDistance * 20)
  console.log('X DISTANCE',xDistance) 
  const c2 = Math.pow(xDistance, 2) + Math.pow(yDistance, 2)
  const c = Math.sqrt(c2)
  console.log(c)
}

findC(211,106)



