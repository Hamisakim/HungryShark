/* eslint-disable keyword-spacing */

/* eslint-disable indent */

function init() {

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
    new Enemy('quint', 143),
    new Enemy('shamu', 208, bruce.currentPosition),
    new Enemy('squid', 31),
    new Enemy('flipper', 116)
  ]

  const quint = enemies[0]
  const shamu = enemies[1]
  const squid = enemies[2]
  const flipper = enemies[3]






  const cage =
    [229, 230, 267, 268, 269, 270, 271, 272, 287, 287, 288, 288, 289, 289, 290, 290, 291, 291, 292, 292]


  const walls = [29, 30, 42, 44, 45, 46, 47, 49, 50, 52, 53, 54, 55, 57, 62, 64, 65, 66, 67, 69, 70, 72, 73, 74, 75, 77, 82, 84, 85, 86, 87, 89, 90, 92, 93, 94, 95, 97, 102, 117, 122, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 137, 149, 150, 162, 164, 165, 166, 167, 169, 170, 172, 173, 174, 175, 177, 182, 184, 185, 186, 187, 189, 190, 192, 193, 194, 195, 197, 221, 222, 224, 226, 227, 228, 231, 232, 233, 235, 237, 238, 241, 242, 244, 246, 253, 255, 257, 258, 266, 273, 282, 284, 286, 293, 295, 297, 302, 304, 306, 307, 308, 309, 310, 311, 312, 313, 315, 317, 322, 324, 335, 337, 346, 347, 349, 350, 352, 353, 361, 363, 364, 366, 367, 369, 370, 372, 373, 375, 376, 378, 381, 383, 384, 386, 387, 389, 390, 392, 393, 395, 396, 398, 409, 410, 422, 423, 424, 425, 427, 428, 429, 430, 431, 432, 434, 435, 436, 437, 442, 443, 444, 445, 447, 448, 449, 450, 451, 452, 454, 455, 456, 457, 298, 318, 338, 281, 301, 321, 341, 358]

  const food = [21, 22, 23, 24, 25, 26, 27, 28, 31, 32, 33, 34, 35, 36, 37, 38, 41, 43, 48, 51, 56, 58, 61, 63, 68, 71, 76, 78, 83, 88, 91, 96, 101, 103, 104, 105, 106, 107, 108, 111, 112, 113, 114, 115, 116, 118, 121, 123, 136, 138, 141, 142, 143, 144, 145, 146, 147, 148, 151, 152, 153, 154, 155, 156, 157, 158, 161, 163, 176, 178, 181, 183, 196, 198, 201, 202, 203, 204, 215, 216, 217, 218, 223, 236, 243, 256, 263, 264, 275, 276, 283, 296, 303, 316, 323, 336, 343, 344, 345, 348, 351, 354, 355, 356, 362, 365, 368, 371, 374, 377, 382, 385, 388, 391, 394, 397, 401, 402, 403, 404, 405, 406, 407, 408, 411, 412, 413, 414, 415, 416, 417, 418, 421, 426, 433, 438, 441, 446, 453, 458, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478]


  const powerUps = [110, 342, 357, 81, 98]

  //! add back 203 216 218 103 in intersections
  const intersection =
    [23, 36,103, 108, 111, 116, 141, 143, 148, 156, 158, 201, 203,216, 263, 265, 265, 274, 276, 343, 356, 402, 402, 405, 405, 406, 406, 408, 413, 414, 417, 556]


  function createGrid() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      //cell.classList.add('food')
      cell.textContent = i //!number on
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
      //console.log('ENEMY', enemy)
      positionArray[enemy.startPosition].classList.add(enemy.class, enemy.name)
      // console.log('TARGET CELL', enemy.targetCell)
      //cellArray[enemy.startPosition].classList.add()
    })
  }

  function addBruce(position) {
    positionArray[position].classList.add(bruce.class)
    // console.log('cellArray position', cellArray[position])
  }

  function moveBruce(event) {
    //console.log('MOVING')
    const key = event.keyCode
    positionArray[bruce.currentPosition].classList.remove(bruce.class)
    //console.log('CURRENT', bruce.currentPosition)
    if (key === 39 || key === 68) {
      if (bruce.currentPosition === 279) {
        console.log('Tunnel')
        positionArray[260].classList.add('swim-right')
        positionArray[279].classList.remove('swim-left', 'swim-up', 'swim-down', 'swim-right')
        bruce.currentPosition = 260
      } else {
        moveRight(bruce)
      }
    } else if (key === 37 || key === 65) { //Left
      //console.log(bruce.currentPosition)
      if (bruce.currentPosition === 260) {
        console.log('Tunnel')
        positionArray[280].classList.add('swim-left')
        positionArray[260].classList.remove('swim-right', 'swim-up', 'swim-down', 'swim-right')
        bruce.currentPosition = 279
      } else {
        moveLeft(bruce)
      }
    } else if (key === 38 || key === 87) { //UP
      moveUp(bruce)

    } else if (key === 40 || key === 83) {
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
    }
    eatFood()
    addBruce(bruce.currentPosition)
    bruceHistory.push(bruce.currentPosition)
  }

  //!-------Move Enemy------------------------------------
  // function moveEnemy() {
  //   const enemyTimer = setInterval(() => {

  //     // const possibleDirections = [1,-1,-width, +width] // RIGHT LEFT UP DOWN 
  //      const randomIndex = Math.floor(Math.random() * 4 )
  //     // let direction = possibleDirections[randomIndex]

  //     console.log('TYPE OF',typeof direction)

  //     // if (cellArray[enemies.currentPosition]){
  //     //   console.log(cellArray[enemies.currentPosition )
  //     // }
  //     enemies.forEach(enemy => { //? FOR each enemy 
  //       enemy.moveHistory.push(enemy.currentPosition)
  //       cellArray[enemy.currentPosition].classList.remove(enemy.class, enemy.name)
  //       const lastPosition = enemy.moveHistory[enemy.moveHistory.length - 1] //get last position 
  //       console.log('CURRENT POSITION', enemy.name, enemy.currentPosition)
  //       console.log('LAST POSITION', enemy.name,lastPosition)
  //       //let randomIndex = Math.floor(Math.random() * 4) //!********
  //       console.log(randomIndex)

  //       if ((randomIndex === 0) && (enemy.currentPosition + 1  !== lastPosition)) {   //!RIGHT
  //         console.log('****',enemy.name, enemy.currentPosition + 1, lastPosition)

  //                   console.log('RIGHT')
  //         //console.log('RANDOM NEW',randomIndex)
  //        moveRight(enemy) 

  //       } else if (((randomIndex === 1)) && (enemy.currentPosition - 1 !== lastPosition)) {
  //         moveLeft(enemy)
  //         console.log('RIGHT')

  //       } else if ( randomIndex === 2 && enemy.currentPosition - width !== lastPosition){
  //         moveUp(enemy)
  //         console.log('up')

  //       } else if ( randomIndex === 3 && enemy.currentPosition + width !== lastPosition){
  //       moveDown(enemy)
  //       console.log('down')
  //       }

  //       cellArray[enemy.currentPosition].classList.add(enemy.class, enemy.name)

  //      // console.log('MOST RECENT POSITION', lastPosition)

  //     })
  //   }, 500)
  // }
  //!-----------------------------------
  // console.log('TEST', enemies)
  // console.log('TYPE OF', typeof enemies)


  // function moveEnemy() {

  //   const enemyTimer = setInterval(() => {

  //     enemies.forEach(enemy => {

  //       let randomIndex = Math.floor(Math.random() * 4)
  //       cellArray[enemy.currentPosition].classList.remove(enemy.class, enemy.name)

  //       if ((randomIndex === 0)  ) {
  //         moveRight(enemy)
  //       } else if (randomIndex === 1) {
  //         moveLeft(enemy)
  //       } else if (randomIndex === 2) {
  //         moveUp(enemy)
  //       } else if (randomIndex === 3) {
  //         moveDown(enemy)
  //       }
  //       cellArray[enemy.currentPosition].classList.add(enemy.class, enemy.name)
  //       enemy.moveHistory.push(enemy.currentPosition)

  //       //console.log(enemy.name,enemy.moveHistory)

  //       atIntersection(enemy)
  //     })

  //   }, 500)
  // }


  function moveEnemy() { //! this one pls

    const checkerTimer = setInterval(() => {


      //const wallToRight = positionArray[character.currentPosition + 1].classList.contains('wall')


      enemies.forEach(enemy => {
        positionArray[enemy.currentPosition].classList.remove(enemy.class, enemy.name)
      })




      function moveShamu() {
        const positionContainIntersection = positionArray[shamu.currentPosition].classList.contains('intersection')
        const wallToRight = positionArray[shamu.currentPosition + 1].classList.contains('wall')
        const wallToLeft = positionArray[shamu.currentPosition - 1].classList.contains('wall')
        const wallBelow = positionArray[shamu.currentPosition + width].classList.contains('wall')
        const wallAbove = positionArray[shamu.currentPosition - width].classList.contains('wall')

        //let currentPosition = shamu.currentPosition
        let randomIndex = Math.floor(Math.random() * 4) //!INDEX //! AT 2 ->  4
        //console.log(wallToRight)

        //? 0 Right, 1 Left, 2 up, 3 down,
        //! find direction function

        // console.log('RANDOM INDEX->', randomIndex)

        //   console.log('CURRENT POSITION', shamu.currentPosition)
        // console.log('LAST POSITION',  shamu.moveHistory[shamu.moveHistory.length - 1])

        if (randomIndex === 0 && positionContainIntersection) { //? need to go RIGHT! 
          shamu.moveHistory.push(shamu.currentPosition)
          atIntersection(shamu) //decides which way to go - up or down... 
          // && !positionContainIntersection 
        } else if (randomIndex === 0 && !positionContainIntersection && !wallToRight && shamu.currentPosition + 1 !== shamu.moveHistory[shamu.moveHistory.length - 1]) {
          shamu.moveHistory.push(shamu.currentPosition)
          console.log('right initiated')
          moveRight(shamu)
        } else if (randomIndex === 0 && (!positionContainIntersection && wallToRight) || shamu.currentPosition + 1 === shamu.moveHistory[shamu.moveHistory.length - 1]) {
          randomIndex = Math.floor(Math.random() * 2)  //! CHanging randomIndex if wall to right is tru

        } if (randomIndex === 1 && positionContainIntersection) { //! moving left
          shamu.moveHistory.push(shamu.currentPosition)
          atIntersection(shamu)
        } else if (randomIndex === 1 && !positionContainIntersection && !wallToLeft && shamu.currentPosition - 1 !== shamu.moveHistory[shamu.moveHistory.length - 1]) {
          console.log('left initiated')
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
        //console.log('NEW INDEX',randomIndex)

        //console.log('Current Position', shamu.currentPosition)


        enemies.forEach(enemy => {
          positionArray[enemy.currentPosition].classList.add(enemy.class, enemy.name)
          //enemy.moveHistory.push(enemy.currentPosition - 1 ) //!!!!!!!!!!!!!!!! -1
        })
        console.log('LAST POSITION GETTING PUSHED ', shamu.moveHistory[shamu.moveHistory.length - 1])
      } //! PURPLE

      moveShamu()
      //?moveQuint()


    }, 300)
  }

  function atIntersection(enemy) {
    const distanceSquareAbove = findC(enemy.currentPosition - width, bruce.currentPosition)
    const distanceSquareBelow = findC(enemy.currentPosition + width, bruce.currentPosition)
     const distanceSquareRight = findC(enemy.currentPosition + 1, bruce.currentPosition)
     const distanceSquareLeft = findC(enemy.currentPosition - width, bruce.currentPosition)

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
    }
    else if (distanceSquareBelow < distanceSquareAbove) {
      if (!wallBelow) {
        moveDown(enemy)
        console.log('MOVE DWN')
      } else if (!wallToLeft) {
        moveLeft(enemy)
      } else if (!wallToRight)
        moveRight(enemy)
    } else if (distanceSquareAbove === distanceSquareBelow) {
      if (distanceSquareRight < distanceSquareLeft && !wallToRight){
        moveRight(enemy)
      } else {
        moveLeft(enemy)
      }
      // console.log('SAME DISTANCE')
      // if (!wallAbove) {
      //   console.log('CHOOSING UP')
      //   moveUp(enemy)
      // } else if (!wallToLeft) {
      //   console.log('UP UNAVAILABLE ')
      //   moveLeft(enemy)
      // } else if (!wallBelow) {
      //   moveDown(enemy)
      // }
    }

  }

  function findC(enemyPosition, brucePosition) {
    //console.log('FIND C')
    const positionDiff = (enemyPosition - brucePosition)
    //console.log(positionDiff)

    const yDistance = Math.round(positionDiff / 20)
    // console.log('Y DISTANCE', yDistance) // -6 move -6*20 position for height 

    const xDistance = -1 * (positionDiff - yDistance * 20)
    //console.log('X DISTANCE', xDistance)
    const c2 = Math.pow(xDistance, 2) + Math.pow(yDistance, 2)
    const c = Math.sqrt(c2)
    //     if (yDistance < 0){
    //    c *=   -1
    // }
    // console.log('C', c)
    return c

  }

  function moveRight(character) {
    //console.log('RIGHT')
    const wallToRight = positionArray[character.currentPosition + 1].classList.contains('wall')
    if (wallToRight === false) {
      positionArray[character.currentPosition + 1].classList.add('swim-right')
      positionArray[character.currentPosition].classList.remove('swim-left', 'swim-up', 'swim-down', 'swim-right')
      character.currentPosition++
    }
    //character.moveHistory.push(character.currentPosition - 1 ) //!!!!!!!!!!!!!!!! -1
  }


  function moveLeft(character) {
    //console.log('LEFT')
    if (!positionArray[character.currentPosition - 1].classList.contains('wall')) {
      positionArray[character.currentPosition - 1].classList.add('swim-left')
      positionArray[character.currentPosition].classList.remove('swim-right', 'swim-up', 'swim-down', 'swim-left')
      character.currentPosition--
    }
    // character.moveHistory.push(character.currentPosition + 1 )
  }


  function moveUp(character) {
    console.log('UP')
    if (!positionArray[character.currentPosition - width].classList.contains('wall','cage-wall')) {
      positionArray[character.currentPosition - width].classList.add('swim-up')
      positionArray[character.currentPosition].classList.remove('swim-left', 'swim-up', 'swim-down', 'swim-right')
      character.currentPosition -= width
    }
  }


  function moveDown(character) {
    console.log('DOWN')
    if (!positionArray[character.currentPosition + width].classList.contains('wall','cage-wall')) {
      positionArray[character.currentPosition + width].classList.add('swim-down')
      positionArray[character.currentPosition].classList.remove('swim-left', 'swim-up', 'swim-down', 'swim-right')
      character.currentPosition += width
    }
  }






  function gameChecker() {
    const checkerTimer = setInterval(() => {
      if (positionArray[bruce.currentPosition].classList.contains('enemyOnSquare') && (!positionArray[bruce.currentPosition].classList.contains('edible'))) {
        lifeCount -= 1
        document.getElementById('lives-counter').innerText = lifeCount
        //bruceDeath()
        console.log('DEATH')
      } else if (positionArray[bruce.currentPosition].classList.contains('edible')) {
        score += 200
        //* console.log(cellArray[bruce.currentPosition].classList)

        positionArray[bruce.currentPosition].classList.remove('shamu', 'flipper', 'quint', 'squid', 'edible', 'enemyOnSquare')
        enemies.forEach(enemy => {
          if (enemy.currentPosition === bruce.currentPosition) {
            console.log('same position')
            enemy.currentPosition = enemy.startPosition
          }

        })
      }
    }, 100)
  }

  gameChecker()

  function powerUp() {
    //console.log(Enemy)
    enemies.forEach(enemy => enemy.edible = true)
    enemies.forEach(enemy => enemy.class = 'edible')

    console.log(enemy => enemy.class = 'edible')
    console.log('PWER UP')
    setTimeout(enemyNormalState, 20000)
  }


  function enemyNormalState() {
    enemies.forEach(enemy => enemy.class = 'enemyOnSquare')
    console.log('back to normal')
    enemies.forEach(enemy => enemy.edible = false)
    positionArray.forEach(cell => cell.classList.remove('edible'))
  }

  const checkWinTimer = setInterval(() => {
    if (document.querySelectorAll('.food').length === 0) {
      console.log('All eaten')
      clearTimeout(checkWinTimer)
    }
  }, 500)

  createGrid()
  moveEnemy()

  function enterGame() {
    console.log('entering')
    const overlay = document.querySelector('.overlay')
    overlay.classList.add('entering')

  }
  document.addEventListener('keydown', moveBruce)
  //document.getElementById('enter-btn').addEventListener('click', enterGame)

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