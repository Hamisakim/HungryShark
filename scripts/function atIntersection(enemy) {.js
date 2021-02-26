function atIntersection(enemy) {
  const distanceSquareAbove = findC(enemy.currentPosition - width, enemy.targetCell)
  const distanceSquareBelow = findC(enemy.currentPosition + width, enemy.targetCell)
  const distanceSquareRight = findC(enemy.currentPosition + 1, enemy.targetCell)
  const distanceSquareLeft = findC(enemy.currentPosition - width, enemy.targetCell)

  const wallToRight = positionArray[enemy.currentPosition + 1].classList.contains('wall')
  const wallToLeft = positionArray[enemy.currentPosition - 1].classList.contains('wall')
  const wallBelow = positionArray[enemy.currentPosition + width].classList.contains('wall')
  const wallAbove = positionArray[enemy.currentPosition - width].classList.contains('wall')

  if (distanceSquareAbove < distanceSquareBelow) {
    if (!wallAbove) {
      console.log('CHOOSING UP')
      moveUp(enemy)
    } else if (!wallToLeft) {
      console.log('UP UNAVAILABLE ')
      moveLeft(enemy)
    } else if (!wallBelow) {
      moveDown(enemy)
    }
  } else if (distanceSquareBelow < distanceSquareAbove) {
    if (!wallBelow) {
      moveDown(enemy)
      console.log('MOVE DWN')
    } else if (!wallToLeft) {
      moveLeft(enemy)
    } else if (!wallToRight)
      moveRight(enemy)

  } else if (distanceSquareAbove === distanceSquareBelow) {
    console.log('DISTANCE')
    if (distanceSquareRight < distanceSquareLeft && !wallToRight) {
      moveRight(enemy)
    } else if (distanceSquareLeft < distanceSquareRight && !wallToLeft) {
      moveLeft(enemy)
    }
  }
}