/* eslint-disable no-unused-vars */
function moveEnemyRight() {
  if (!cellArray[enemy.currentPosition + 1].classList.contains('wall')) {
    cellArray[enemy.currentPosition + 1].classList.add('swim-right')
    cellArray[enemy.currentPosition].classList.remove('swim-left', 'swim-up', 'swim-down', 'swim-right')
    enemy.currentPosition++
  }

}

function moveEnemyLeft() {
  if (!cellArray[enemy.currentPosition - 1].classList.contains('wall')) {
    cellArray[enemy.currentPosition - 1].classList.add('swim-left')
    cellArray[enemy.currentPosition].classList.remove('swim-right', 'swim-up', 'swim-down', 'swim-left')
    enemy.currentPosition--
  }


  function moveEnemyUp(enemy) {
    if (!cellArray[enemy.currentPosition - width].classList.contains('wall')) {
      cellArray[enemy.currentPosition - width].classList.add('swim-up')
      cellArray[enemy.currentPosition].classList.remove('swim-left', 'swim-up', 'swim-down', 'swim-right')
      enemy.currentPosition -= width
    }
  }


  function moveEnemy(enemy){
if (!cellArray[enemy.currentPosition + width].classList.contains('wall')) {
    cellArray[enemy.currentPosition + width].classList.add('swim-down')
    cellArray[enemy.currentPosition].classList.remove('swim-left', 'swim-up', 'swim-down', 'swim-right')
    enemy.currentPosition += width
}