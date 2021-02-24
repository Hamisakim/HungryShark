/* eslint-disable no-undef */
function moveEnemy() {
  // eslint-disable-next-line no-unused-vars
  const enemyTimer = setInterval(() => {
    enemies.forEach(enemy => {
      //console.log('****',enemy)
      const randomIndex = 1 //Math.floor(Math.random() * 4)
      cellArray[enemy.currentPosition].classList.remove(enemy.class, enemy.name)
      if (randomIndex === 0) {
        moveRight(enemy)
      } else if (randomIndex === 1) {
        moveLeft(enemy)
      } else if (randomIndex === 2) {
        moveUp(enemy)
      }
      else if (randomIndex === 3) {
        moveDown(enemy)
      }

      cellArray[enemy.currentPosition].classList.add(enemy.class, enemy.name)
    })
  }, 500)
}


function moveEnemy() {
  const possibleDirections = [1,-1,-width, +width] // RIGHT LEFT UP DOWN 
  let randomIndex = Math.floor(Math.random() * 4 ) 
  let direction = possibleDirections[randomIndex]
  if (cellArray.enemies.currentPosition)


//? ***************************** 