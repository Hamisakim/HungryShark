if (randomIndex === 0 && positionContainIntersection) { //? need to go RIGHT! 
  atIntersection(shamu) //decides which way to go - up or down... 
} else if (randomIndex === 0 && !positionContainIntersection && !wallToRight && shamu.currentPosition + 1 !== shamu.moveHistory[shamu.moveHistory.length - 1]) {
  moveRight(shamu)
} else if (randomIndex === 0 && !positionContainIntersection && wallToRight) {
  randomIndex //Math.floor(Math.random() * 4)  //* CHanging randomIndex if wall to right is true
} if (randomIndex === 1 && positionContainIntersection) {
  atIntersection(shamu)
} else if (randomIndex === 1 && !positionContainIntersection && !wallToLeft && shamu.currentPosition - 1 !== shamu.moveHistory[shamu.moveHistory.length - 1]) {
  moveLeft(shamu)
} else if (randomIndex === 1 && !positionContainIntersection && wallToRight) {
  randomIndex //Math.floor(Math.random() * 4)  
} if (randomIndex === 2 && positionContainIntersection) {
  atIntersection(shamu)
} else if (randomIndex === 2 && !positionContainIntersection && !wallAbove && shamu.currentPosition - width !== shamu.moveHistory[shamu.moveHistory.length - 1]) {
  moveUp(shamu)
} else if (randomIndex === 2 && !positionContainIntersection && wallAbove) {
  randomIndex
} if (randomIndex === 3 && positionContainIntersection) {
  atIntersection(shamu)
} else if (randomIndex === 3 && !positionContainIntersection && !wallBelow && shamu.currentPosition + width !== shamu.moveHistory[shamu.moveHistory.length - 1]) {
  moveDown(shamu)
} else if (randomIndex === 3 && !positionContainIntersection && wallBelow) {
  randomIndex
}