/* eslint-disable keyword-spacing */
function init() {
  function gameLoad() {



    const gameGrid = document.querySelector('.game-grid')
    const width = 20
    const height = 25
    const cellCount = width * height
    const positionArray = []

    const bruce = {
      class: 'bruce',
      startPosition: 110,
      currentPosition: 110
    }

    let score = 0
    let lifeCount = 3
    const bruceHistory = []
    const bruceDirectionHistory = [bruce.startPosition]

    class Enemy {
      constructor(name, startPosition, targetCell) {
        this.name = name
        this.startPosition = startPosition
        this.currentPosition = startPosition
        this.class = 'enemyOnSquare'
        this.edible = false
        this.targetCell = targetCell
        this.moveHistory = [0, 0, 0, 0, 0]

      }
    }

    const enemies = [ //name startPosition targetCell
      new Enemy('quint', 229,),
      new Enemy('shamu', 209, bruce.currentPosition),
      new Enemy('squid', 269),
      new Enemy('flipper', 270)
    ]


    const quint = enemies[0]
    const shamu = enemies[1]
    const squid = enemies[2]
    const flipper = enemies[3]
    //---------------------MAP DESIGN ARRAYS-------------------
    const cage =
      [229, 230, 267, 268, 269, 270, 271, 272, 287, 287, 288, 288, 289, 289, 290, 290, 291, 291, 292, 292]
    const walls = [247, 267, 287, 252, 272, 292, 29, 30, 42, 44, 45, 46, 47, 49, 50, 52, 53, 54, 55, 57, 62, 64, 65, 66, 67, 69, 70, 72, 73, 74, 75, 77, 82, 84, 85, 86, 87, 89, 90, 92, 93, 94, 95, 97, 102, 117, 122, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 137, 149, 150, 162, 164, 165, 166, 167, 169, 170, 172, 173, 174, 175, 177, 182, 184, 185, 186, 187, 189, 190, 192, 193, 194, 195, 197, 221, 222, 224, 226, 227, 228, 231, 232, 233, 235, 237, 238, 241, 242, 244, 246, 253, 255, 257, 258, 266, 273, 282, 284, 286, 293, 295, 297, 302, 304, 306, 307, 308, 309, 310, 311, 312, 313, 315, 317, 322, 324, 335, 337, 346, 347, 349, 350, 352, 353, 361, 363, 364, 366, 367, 369, 370, 372, 373, 375, 376, 378, 381, 383, 384, 386, 387, 389, 390, 392, 393, 395, 396, 398, 409, 410, 422, 423, 424, 425, 427, 428, 429, 430, 431, 432, 434, 435, 436, 437, 442, 443, 444, 445, 447, 448, 449, 450, 451, 452, 454, 455, 456, 457, 298, 318, 338, 281, 301, 321, 341, 358]

    const food =  [ 21, 22, 23, 24, 25, 26, 27, 28, 31, 32, 33, 34, 35, 36, 37, 38, 41, 43, 48, 51, 56, 58, 61, 63, 68, 71, 76, 78, 83, 88, 91, 96, 101, 103, 104, 105, 106, 107, 108, 111, 112, 113, 114, 115, 116, 118, 121, 123, 136, 138, 141, 142, 143, 144, 145, 146, 147, 148, 151, 152, 153, 154, 155, 156, 157, 158, 161, 163, 176, 178, 181, 183, 196, 198, 201, 202, 203, 204, 215, 216, 217, 218, 223, 236, 243, 256, 263, 264, 275, 276, 283, 296, 303, 316, 323, 336, 343, 344, 345, 348, 351, 354, 355, 356, 362, 365, 368, 371, 374, 377, 382, 385, 388, 391, 394, 397, 401, 402, 403, 404, 405, 406, 407, 408, 411, 412, 413, 414, 415, 416, 417, 418, 421, 426, 433, 438, 441, 446, 453, 458, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478]
   
    const powerUps = [ 342, 357, 81, 98]

    //! add back 203 216 218 103 in intersections
    const intersection =
      [23, 36, 103, 108, 111, 116, 141, 143, 156, 158, 203, 205, 208, 211, 214, 216, 263, 265, 265, 274, 276, 325, 328, 331, 334, 343, 356, 402, 402, 405, 405, 406, 406, 413, 414, 417, 466, 473, 556]


    //!------------------------------CREATE GRID -----------------------------------------
    function createGrid() {
      for (let i = 0; i < cellCount; i++) {
        const cell = document.createElement('div')
        //cell.classList.add('food')
        //cell.textContent = i //!number on
        gameGrid.appendChild(cell)
        positionArray.push(cell)
        if ((i % 20 === 0) || (i > 480) || (i < 20) || ((i + 1) % 20 === 0)) {

          cell.classList.add('wall')
        } else if (walls.includes(i) === true) {

          cell.classList.add('wall')
        } else if (cage.includes(i) === true) {

          cell.classList.add('cage')
        } else if (food.includes(i) === true) {
          cell.classList.add('food')
        }
        if (i === 260 || i === 279) {
          cell.classList.remove('wall')
        } if (powerUps.includes(i) === true) {
          cell.classList.add('power-up')
        } if (i === 229 || i === 230) {
          cell.classList.add('cage-wall')
        } if (intersection.includes(i) === true) {
          cell.classList.add('intersection')
        }


      }
      addBruce(bruce.startPosition)
      addEnemies()

    }

    function addEnemies() {
      enemies.forEach(enemy => {
        ////console.log('ENEMY', enemy)
        positionArray[enemy.startPosition].classList.add(enemy.class, enemy.name)
        // //console.log('TARGET CELL', enemy.targetCell)
        //cellArray[enemy.startPosition].classList.add()
      })
    }

    function addBruce(position) {
      positionArray[position].classList.add(bruce.class)
      // //console.log('cellArray position', cellArray[position])
    }

    function moveBruce(event) {
      ////console.log('MOVING')
      const key = event.keyCode
      positionArray[bruce.currentPosition].classList.remove(bruce.class)
      ////console.log('CURRENT', bruce.currentPosition)
      if (key === 39 || key === 68) {
        bruceDirectionHistory.push(+1)
        if (bruce.currentPosition === 279) {

          positionArray[260].classList.add('swim-right')
          positionArray[279].classList.remove('swim-left', 'swim-up', 'swim-down', 'swim-right')
          bruce.currentPosition = 260
        } else {
          moveRight(bruce)
        }
      } else if (key === 37 || key === 65) { //Left
        ////console.log(bruce.currentPosition)
        bruceDirectionHistory.push(-1)
        if (bruce.currentPosition === 260) {
          //console.log('Tunnel')
          positionArray[280].classList.add('swim-left')
          positionArray[260].classList.remove('swim-right', 'swim-up', 'swim-down', 'swim-right')
          bruce.currentPosition = 279
        } else {
          moveLeft(bruce)
        }
      } else if (key === 38 || key === 87) { //UP
        bruceDirectionHistory.push(-width)
        moveUp(bruce)

      } else if (key === 40 || key === 83) {
        bruceDirectionHistory.push(+width)
        moveDown(bruce)
      }
      function eatFood() {
        if (positionArray[bruce.currentPosition].classList.contains('food')) {
          score += 10

        } else if (positionArray[bruce.currentPosition].classList.contains('power-up')) {
          score += 50
          powerUp()
        }
        positionArray[bruce.currentPosition].classList.remove('food', 'power-up')
        document.getElementById('score').innerText = score
        document.getElementById('score2').innerText = score
      }
      eatFood()
      addBruce(bruce.currentPosition)
      bruceHistory.push(bruce.currentPosition)

      // //console.log(bruceDirectionHistory)
    }

    //! ----------------- ENEMY MOVEMENT FUNCTION -----------------------
    //function moveEnemy() { //! this one pls
    const movementTimer = setInterval(() => {
      enemies.forEach(enemy => { //?just removes class
        positionArray[enemy.currentPosition].classList.remove(enemy.class, enemy.name)
      })
      function smartMoveEnemy(enemyName) {
        const positionContainIntersection = positionArray[enemyName.currentPosition].classList.contains('intersection')
        const wallToRight = positionArray[enemyName.currentPosition + 1].classList.contains('wall')
        const wallToLeft = positionArray[enemyName.currentPosition - 1].classList.contains('wall')
        const wallBelow = positionArray[enemyName.currentPosition + width].classList.contains('wall')
        const wallAbove = positionArray[enemyName.currentPosition - width].classList.contains('wall')

        let randomIndex = Math.floor(Math.random() * 4) //!INDEX //! AT 2 ->  4

        //? 0 Right, 1 Left, 2 up, 3 down,
        //! find direction function
        if (randomIndex === 0 && enemyName.currentPosition === 279) {
          positionArray[260].classList.add('swim-right')
          positionArray[enemyName.currentPosition].classList.remove('swim-left', 'swim-up', 'swim-down', 'swim-right', 'enemyOnSquare')
          enemyName.currentPosition = 260
        }
        if (randomIndex === 0 && positionContainIntersection) { //? need to go RIGHT! 
          enemyName.moveHistory.push(enemyName.currentPosition)
          atIntersection(enemyName)
        } else if (randomIndex === 0 && !positionContainIntersection && !wallToRight && enemyName.currentPosition + 1 !== enemyName.moveHistory[enemyName.moveHistory.length - 1]) {
          enemyName.moveHistory.push(enemyName.currentPosition)

          moveRight(enemyName)
        } else if (randomIndex === 0 && (!positionContainIntersection && wallToRight) || enemyName.currentPosition + 1 === enemyName.moveHistory[enemyName.moveHistory.length - 1]) {
          randomIndex = Math.ceil(Math.random() * 3)  //! MAKE RANDOM INDEX ONLY 1-3 since can't do 0

        }
        if (randomIndex === 1 && enemyName.currentPosition === 260) {
          positionArray[279].classList.add('swim-left')
          positionArray[enemyName.currentPosition].classList.remove('swim-right', 'swim-up', 'swim-down', 'swim-right', 'enemyOnSquare')
          enemyName.currentPosition = 279
        }



        if (randomIndex === 1 && positionContainIntersection) { //! moving left
          enemyName.moveHistory.push(enemyName.currentPosition)
          atIntersection(enemyName)
        } else if (randomIndex === 1 && !positionContainIntersection && !wallToLeft && enemyName.currentPosition - 1 !== enemyName.moveHistory[enemyName.moveHistory.length - 1]) {

          enemyName.moveHistory.push(enemyName.currentPosition)
          moveLeft(enemyName)
        } else if (randomIndex === 1 && (!positionContainIntersection && wallToLeft) || enemyName.currentPosition - 1 === enemyName.moveHistory[enemyName.moveHistory.length - 1]) {
          randomIndex = Math.floor(Math.random() * 4)

        } if (randomIndex === 2 && positionContainIntersection) {
          enemyName.moveHistory.push(enemyName.currentPosition)
          atIntersection(enemyName)
        } else if (randomIndex === 2 && !positionContainIntersection && !wallAbove && enemyName.currentPosition - width !== enemyName.moveHistory[enemyName.moveHistory.length - 1]) {
          enemyName.moveHistory.push(enemyName.currentPosition)
          moveUp(enemyName)
        } else if (randomIndex === 2 && !positionContainIntersection && wallAbove) {
          randomIndex = Math.floor(Math.random() * 4)
        }
        if (randomIndex === 3 && positionContainIntersection) {
          enemyName.moveHistory.push(enemyName.currentPosition)
          atIntersection(enemyName)
        } else if (randomIndex === 3 && !positionContainIntersection && !wallBelow && enemyName.currentPosition + width !== enemyName.moveHistory[enemyName.moveHistory.length - 1]) {
          enemyName.moveHistory.push(enemyName.currentPosition)
          moveDown(enemyName)
        } else if (randomIndex === 3 && !positionContainIntersection && wallBelow) {
          randomIndex = Math.floor(Math.random() * 4)
        }
        positionArray[enemyName.currentPosition].classList.add(enemyName.class, enemyName.name)
      }
      smartMoveEnemy(shamu)
      smartMoveEnemy(quint)
      smartMoveEnemy(flipper)
      smartMoveEnemy(squid)


      if (positionArray[shamu.currentPosition].classList.contains('edible')) {
        shamu.targetCell = 2
      } else {
        shamu.targetCell = bruce.currentPosition
      }

      if (positionArray[flipper.currentPosition].classList.contains('edible')) {
        flipper.targetCell = 19
      } else {
        flipper.targetCell = flipperTargetFN()
      }
      if (positionArray[squid.currentPosition].classList.contains('edible')) {
        squid.targetCell = 380
      } else {
        squid.targetCell = squidTargetFN()
      }
      if (positionArray[quint.currentPosition].classList.contains('edible')) {
        quint.targetCell = 482
      } else {
        quint.targetCell = Math.floor(Math.random() * 500)
      }

      quint.targetCell = Math.floor(Math.random() * 500)


      function flipperTargetFN() {
        let flipperTargetResult = bruce.currentPosition
        bruce.startPosition
        if (bruceDirectionHistory[bruceDirectionHistory.length - 1] === 1) {
          flipperTargetResult = bruce.currentPosition + 4
        } else if (bruceDirectionHistory[bruceDirectionHistory.length - 1] === -1) {
          flipperTargetResult = bruce.currentPosition - 4
        } else if (bruceDirectionHistory[bruceDirectionHistory - 1] === -width) {
          flipperTargetResult = bruce.currentPosition - 4 * width
        } else if (bruceDirectionHistory[bruceDirectionHistory - 1] === + width) {
          flipperTargetResult = bruce.currentPosition + 4 * width
        }
        // //console.log(flipperTargetResult)
        return flipperTargetResult
      }

      function squidTargetFN() {


        let twoInfront = bruce.currentPosition
        if (bruceDirectionHistory[bruceDirectionHistory.length - 1] === 1) {
          twoInfront = bruce.currentPosition + 2
        } else if (bruceDirectionHistory[bruceDirectionHistory.length - 1] === -1) {
          twoInfront = bruce.currentPosition - 2
        } else if (bruceDirectionHistory[bruceDirectionHistory.length - 1] === -width) {
          twoInfront = bruce.currentPosition - width * 2
        } else if (bruceDirectionHistory[bruceDirectionHistory.length - 1] === +width) {
          twoInfront = bruce.currentPosition + width * 2
        }



        const vectorLength = findC(shamu.currentPosition, twoInfront)
        const doubleVectorLength = 2 * vectorLength //doubleC

        const getAngle = (shamuCurrentPosition, twoInfront) => {
          const positionDiff = shamuCurrentPosition - twoInfront
          const oppositeLength = Math.round(positionDiff / 20)
          //console.log('POSITION DIFF->>', positionDiff, 'HEIGHT', oppositeLength)
          const sinTheta = oppositeLength / vectorLength
          const theta = Math.asin(sinTheta)
          return theta
        }
        const theta = getAngle(shamu.currentPosition, twoInfront)
        const targetY = -10 * (Math.round(Math.sin(theta) * doubleVectorLength)) //! *20 to get to postions
        const targetX = Math.round((Math.cos(theta) * doubleVectorLength)) / 2
        const targetXConverted = targetX + (targetY)
        const targetCell = shamu.currentPosition + targetXConverted
        return targetCell
      }

    }, 150)
    // }
    //!-------------------------------------------------------------
    //!! ------ MOVE DIRECTION FUNCTIONS----------------------------
    function moveRight(character) {
      const wallToRight = positionArray[character.currentPosition + 1].classList.contains('wall')
      if (wallToRight === false) {
        positionArray[character.currentPosition + 1].classList.add('swim-right')
        positionArray[character.currentPosition].classList.remove('swim-left', 'swim-up', 'swim-down', 'swim-right', 'enemyOnSquare')
        character.currentPosition++
      }
    }

    function moveLeft(character) {
      if (!positionArray[character.currentPosition - 1].classList.contains('wall')) {
        positionArray[character.currentPosition - 1].classList.add('swim-left')
        positionArray[character.currentPosition].classList.remove('swim-right', 'swim-up', 'swim-down', 'swim-left', 'enemyOnSquare')
        character.currentPosition--
      }
    }

    function moveUp(character) {
      if (!positionArray[character.currentPosition - width].classList.contains('wall')) {
        positionArray[character.currentPosition - width].classList.add('swim-up')
        positionArray[character.currentPosition].classList.remove('swim-left', 'swim-up', 'swim-down', 'swim-right', 'enemyOnSquare')
        character.currentPosition -= width
      }
    }

    function moveDown(character) {
      if (!positionArray[character.currentPosition + width].classList.contains('wall') && !positionArray[character.currentPosition + width].classList.contains('cage-wall')) {
        positionArray[character.currentPosition + width].classList.add('swim-down')
        positionArray[character.currentPosition].classList.remove('swim-left', 'swim-up', 'swim-down', 'swim-right', 'enemyOnSquare')
        character.currentPosition += width
      }
    }
    //!! ----------------------------------



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
          //console.log('CHOOSING UP')
          moveUp(enemy)
        } else if (!wallToLeft) {
          //console.log('UP UNAVAILABLE ')
          moveLeft(enemy)
        } else if (!wallBelow) {
          moveDown(enemy)
        }
      } else if (distanceSquareBelow < distanceSquareAbove) {
        if (!wallBelow) {
          moveDown(enemy)
          //console.log('CHOOSING DOWN')
        } else if (!wallToLeft) {
          moveLeft(enemy)
        } else if (!wallToRight)
          moveRight(enemy)
      } else if (distanceSquareAbove === distanceSquareBelow) {
        ////console.log('DISTANCE SAME')
        if (distanceSquareRight < distanceSquareLeft && !wallToRight) {
          moveRight(enemy)
        } else if (distanceSquareLeft < distanceSquareRight && !wallToLeft) {
          moveLeft(enemy)
        }
      }
    }

    function findC(enemyPosition, targetCell) {
      const positionDiff = (enemyPosition - targetCell)
      const yDistance = Math.round(positionDiff / 20)
      const xDistance = -1 * (positionDiff - yDistance * 20)
      const c2 = Math.pow(xDistance, 2) + Math.pow(yDistance, 2)
      const c = Math.sqrt(c2)
      return c
    }



    function powerUp() {
      enemies.forEach(enemy => enemy.edible = true)
      enemies.forEach(enemy => enemy.class = 'edible')

      setTimeout(enemyNormalState, 10000)
    }


    function enemyNormalState() {
      enemies.forEach(enemy => enemy.class = 'enemyOnSquare')
      console.log('back to normal')
      enemies.forEach(enemy => enemy.edible = false)
      positionArray.forEach(cell => cell.classList.remove('edible'))
    }

    function gameChecker() {
      const checkerTimer = setInterval(() => {
        if (lifeCount === 0) {
          gameOver()
        }
        if (lifeCount > 0 && positionArray[bruce.currentPosition].classList.contains('enemyOnSquare') && (!positionArray[bruce.currentPosition].classList.contains('edible'))) {
          lifeCount -= 1
          bruceDeath()
          document.getElementById('lives-counter').innerText = lifeCount
        } else if (positionArray[bruce.currentPosition].classList.contains('edible')) {
          score += 200
          //* //console.log(cellArray[bruce.currentPosition].classList)
          positionArray[bruce.currentPosition].classList.remove('shamu', 'flipper', 'quint', 'squid', 'edible', 'enemyOnSquare')
          enemies.forEach(enemy => {
            if (enemy.currentPosition === bruce.currentPosition) {
              //console.log('same position')
              enemy.currentPosition = enemy.startPosition
            }
          })
        }
      }, 80)
    }

    function bruceDeath() {
      console.log('BRUCE DEATH', bruce.currentPosition)
      positionArray[bruce.currentPosition].classList.remove('bruce')
      bruce.currentPosition = bruce.startPosition
      positionArray[bruce.startPosition].classList.add('bruce')
    }

    function gameOver() {
      console.log('GAME OVER')
      clearTimeout(checkWinTimer)
      clearTimeout(movementTimer)
      document.getElementById('lose').innerText = 'OH NO YOU LOSE :( '
      document.querySelector('.win-overlay').style.opacity = '1'
      
    }

    gameChecker()

    const checkWinTimer = setInterval(() => {
      if (document.querySelectorAll('.food').length === 0) {
        //console.log('All eaten')
        winFunction()
        clearTimeout(checkWinTimer)
        clearTimeout(movementTimer)
      }

    }, 500)

    function winFunction() {
      console.log('WIN')
      document.querySelector('.win-overlay').style.opacity = '1'
      //document.querySelector('.game-container').style.display = '

    }

    createGrid()
    document.addEventListener('keydown', moveBruce)

    document.querySelector('.mute-btn').addEventListener('click', musicToggle)
    const muted = document.getElementById('game-audio').muted
    console.log('TEST', muted)
    const audio2 = document.getElementById('game-audio')
    audio2.play()
    function musicToggle() {
      if (muted === false) {
        document.getElementById('game-audio').muted = true
      } else if (muted === true) {
        document.getElementById('game-audio').muted = false
        audio2.play()
      }
    }


  }//! gameLoad bracket Purple



  function howTo() {
    alert('Use WASD or arroy keys to move Bruce the shark.\nEat all the fish to win.\nEat the sea turtles for extra points and to gain feeding frenzy power.\nAvoid the enemies!\n\n AND HAVE FUN :D:D ')
  }

  function enterGame() {
    gameLoad()
    //console.log('entering')
    const overlay = document.querySelector('.overlay')
    overlay.classList.add('entering')
    const audio1 = document.getElementById('enter-audio')
    audio1.play()
  }

  function resetGame() {
    location.reload()
  }

  document.querySelector('.how-to-btn').addEventListener('click', howTo)
  document.getElementById('enter-btn').addEventListener('click', enterGame)

  document.querySelector('.reset-btn').addEventListener('click', resetGame)
  document.onkeydown = KD
  function KD(event) {
    const key = event.keyCode
    if (key === 37 || key === 38 || key === 39 || key === 40) {
      event.returnValue = false
    }
  }

  //? BRACKET MUST BE YELLOW BELOW /////
}
window.addEventListener('DOMContentLoaded', init)