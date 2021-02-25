function moveEnemy() { //! this one pls
  const checkerTimer = setInterval(() => {

    enemies.forEach(enemy => {
      positionArray[enemy.currentPosition].classList.remove(enemy.class, enemy.name)
    })

    function moveShamu() {
      const positionContainIntersection = positionArray[shamu.currentPosition].classList.contains('intersection')
      const wallToRight = positionArray[shamu.currentPosition + 1].classList.contains('wall')
      const wallToLeft = positionArray[shamu.currentPosition - 1].classList.contains('wall')
      const wallBelow = positionArray[shamu.currentPosition + width].classList.contains('wall')
      const wallAbove = positionArray[shamu.currentPosition - width].classList.contains('wall')

      let randomIndex = Math.floor(Math.random() * 4) //!INDEX //! AT 2 ->  4

      //? 0 Right, 1 Left, 2 up, 3 down,
      //! find direction function

      if (randomIndex === 0 && positionContainIntersection) { //? need to go RIGHT! 
        shamu.moveHistory.push(shamu.currentPosition)
        atIntersection(shamu)
      } else if (randomIndex === 0 && !positionContainIntersection && !wallToRight && shamu.currentPosition + 1 !== shamu.moveHistory[shamu.moveHistory.length - 1]) {
        shamu.moveHistory.push(shamu.currentPosition)

        moveRight(shamu)
      } else if (randomIndex === 0 && (!positionContainIntersection && wallToRight) || shamu.currentPosition + 1 === shamu.moveHistory[shamu.moveHistory.length - 1]) {
        randomIndex = Math.ceil(Math.random() * 3)  //! MAKE RANDOM INDEX ONLY 1-3 since can't do 0

      } if (randomIndex === 1 && positionContainIntersection) { //! moving left
        shamu.moveHistory.push(shamu.currentPosition)
        atIntersection(shamu)
      } else if (randomIndex === 1 && !positionContainIntersection && !wallToLeft && shamu.currentPosition - 1 !== shamu.moveHistory[shamu.moveHistory.length - 1]) {

        shamu.moveHistory.push(shamu.currentPosition)
        moveLeft(shamu)
      } else if (randomIndex === 1 && (!positionContainIntersection && wallToLeft) || shamu.currentPosition - 1 === shamu.moveHistory[shamu.moveHistory.length - 1]) {
        randomIndex = Math.floor(Math.random() * 4)

      } if (randomIndex === 2 && positionContainIntersection) {
        shamu.moveHistory.push(shamu.currentPosition)
        atIntersection(shamu)
      } else if (randomIndex === 2 && !positionContainIntersection && !wallAbove && shamu.currentPosition - width !== shamu.moveHistory[shamu.moveHistory.length - 1]) {
        shamu.moveHistory.push(shamu.currentPosition)
        moveUp(shamu)
      } else if (randomIndex === 2 && !positionContainIntersection && wallAbove) {
        randomIndex = Math.floor(Math.random() * 4)
      }
      if (randomIndex === 3 && positionContainIntersection) {
        shamu.moveHistory.push(shamu.currentPosition)
        atIntersection(shamu)
      } else if (randomIndex === 3 && !positionContainIntersection && !wallBelow && shamu.currentPosition + width !== shamu.moveHistory[shamu.moveHistory.length - 1]) {
        shamu.moveHistory.push(shamu.currentPosition)
        moveDown(shamu)
      } else if (randomIndex === 3 && !positionContainIntersection && wallBelow) {
        randomIndex = Math.floor(Math.random() * 4)
      }
      positionArray[shamu.currentPosition].classList.add(shamu.class, shamu.name)

    } //! PURPLE

    moveShamu()
    //?moveQuint()


  }, 300)
}