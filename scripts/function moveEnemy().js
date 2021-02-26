function moveEnemy() {

  const enemyTimer = setInterval(() => {

    enemies.forEach(enemy => {
   
      const randomIndex = 1 //Math.floor(Math.random() * 4)
      cellArray[enemy.currentPosition].classList.remove(enemy.class, enemy.name)

      if ((randomIndex === 0)) {
        moveRight(enemy)
      } else if (randomIndex === 1) {
        moveLeft(enemy)
      } else if (randomIndex === 2) {
        moveUp(enemy)
      } else if (randomIndex === 3) {
        moveDown(enemy)
      }
      cellArray[enemy.currentPosition].classList.add(enemy.class, enemy.name)
      enemy.moveHistory.push(enemy.currentPosition)
      
      console.log(enemy.moveHistory)
      
      atIntersection(enemy)
    })
    
  }, 500)
}
