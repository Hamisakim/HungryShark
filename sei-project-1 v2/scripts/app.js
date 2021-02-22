/* eslint-disable indent */
/* eslint-disable no-unused-vars */
function init() {

  const gameGrid = document.querySelector('.game-grid')
  const width = 20
  const height = 25
  const cellCount = width * height
  const cellArray = []
  const bruce = {
    class: 'bruce',
    startPosition: 110,
    currentPosition: 110
  }

  let score = 0
  let lifeCount = 3
  const bruceHistory = []

  class Enemy {
    constructor(name, startPosition) {
      this.name = name
      this.startPosition = startPosition
      this.class = 'enemyOnSquare'
      this.currentPosition = startPosition //this.currentPosition
    }
  }

  const enemies = [
    new Enemy('quint', 150),
    new Enemy('shamu', 288),
    new Enemy('squid', 89),
    new Enemy('flipper', 190)
  ]

  const cage =
    [229, 230, 267, 268, 269, 270, 271, 272, 287, 287, 288, 288, 289, 289, 290, 290, 291, 291, 292, 292]


  const walls = [29, 30, 42, 44, 45, 46, 47, 49, 50, 52, 53, 54, 55, 57, 62, 64, 65, 66, 67, 69, 70, 72, 73, 74, 75, 77, 82, 84, 85, 86, 87, 89, 90, 92, 93, 94, 95, 97, 102, 117, 122, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 137, 149, 150, 162, 164, 165, 166, 167, 169, 170, 172, 173, 174, 175, 177, 182, 184, 185, 186, 187, 189, 190, 192, 193, 194, 195, 197, 221, 222, 224, 226, 227, 228, 231, 232, 233, 235, 237, 238, 241, 242, 244, 246, 253, 255, 257, 258, 266, 273, 282, 284, 286, 293, 295, 297, 302, 304, 306, 307, 308, 309, 310, 311, 312, 313, 315, 317, 322, 324, 335, 337, 346, 347, 349, 350, 352, 353, 361, 363, 364, 366, 367, 369, 370, 372, 373, 375, 376, 378, 381, 383, 384, 386, 387, 389, 390, 392, 393, 395, 396, 398, 409, 410, 422, 423, 424, 425, 427, 428, 429, 430, 431, 432, 434, 435, 436, 437, 442, 443, 444, 445, 447, 448, 449, 450, 451, 452, 454, 455, 456, 457, 298, 318, 338, 281, 301, 321, 341, 358]

  const food = [21, 22, 23, 24, 25, 26, 27, 28, 31, 32, 33, 34, 35, 36, 37, 38, 41, 43, 48, 51, 56, 58, 61, 63, 68, 71, 76, 78, 81, 83, 88, 91, 96, 98, 101, 103, 104, 105, 106, 107, 108, 111, 112, 113, 114, 115, 116, 118, 121, 123, 136, 138, 141, 142, 143, 144, 145, 146, 147, 148, 151, 152, 153, 154, 155, 156, 157, 158, 161, 163, 176, 178, 181, 183, 196, 198, 201, 202, 203, 204, 215, 216, 217, 218, 223, 236, 243, 256, 263, 264, 275, 276, 283, 296, 303, 316, 323, 336, 342, 343, 344, 345, 348, 351, 354, 355, 356, 357, 362, 365, 368, 371, 374, 377, 382, 385, 388, 391, 394, 397, 401, 402, 403, 404, 405, 406, 407, 408, 411, 412, 413, 414, 415, 416, 417, 418, 421, 426, 433, 438, 441, 446, 453, 458, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478]


  function createGrid() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      //cell.classList.add('food')
      //cell.textContent = i
      gameGrid.appendChild(cell)
      cellArray.push(cell)

      if ((i % 20 === 0) || (i > 480) || (i < 20) || ((i + 1) % 20 === 0)) {
        //cell.textContent = 'X'
        cell.classList.add('wall')
      }
      else if (walls.includes(i) === true) {
        //cell.textContent = 'X'
        cell.classList.add('wall')
      }
      else if (cage.includes(i) === true) {
        cell.classList.add('cage')
      }
      else if (food.includes(i) === true) {
        cell.classList.add('food')
      } if (i === 260 || i === 279) {
        cell.classList.remove('wall')
      }


    }
    addBruce(bruce.startPosition)
    addEnemies()

  }
  createGrid()
  moveEnemy()
  function addEnemies() {
    enemies.forEach(enemy => {
      //console.log('ENEMY', enemy)
      cellArray[enemy.startPosition].classList.add(enemy.class, enemy.name)
      //cellArray[enemy.startPosition].classList.add()
    })
  }

  function addBruce(position) {
    cellArray[position].classList.add(bruce.class)
    // console.log('cellArray position', cellArray[position])
  }



  function moveBruce(event) {
    console.log('MOVING')
    //eatFood()
    const key = event.keyCode
    cellArray[bruce.currentPosition].classList.remove(bruce.class)

    //console.log('CURRENT', bruce.currentPosition)
    if ((key === 39 || key === 68) && (!cellArray[bruce.currentPosition + 1].classList.contains('wall'))) {
      bruce.currentPosition++
    } else if ((key === 37 || key === 65) && (!cellArray[bruce.currentPosition - 1].classList.contains('wall')) && (!cellArray[bruce.currentPosition - 1].classList.contains('cage'))) { //Left
      bruce.currentPosition--
    } else if ((key === 38 || key === 87) && (!cellArray[bruce.currentPosition - width].classList.contains('wall'))) { //UP
      bruce.currentPosition -= width
    } else if ((key === 40 || key === 83) && (!cellArray[bruce.currentPosition + width].classList.contains('wall')) && (!cellArray[bruce.currentPosition + width].classList.contains('cage'))) { //down

      bruce.currentPosition += width
    }

    if (cellArray[bruce.currentPosition].classList.contains('food')) {
      score += 10
      // *document.getElementById('score').innerText = score
      cellArray[bruce.currentPosition].classList.remove('food')
    }
    addBruce(bruce.currentPosition)
    bruceHistory.push(bruce.currentPosition)
  }



  function moveEnemy() {
    const enemyTimer = setInterval(() => {
      enemies.forEach(enemy => {
        const randomIndex = Math.floor(Math.random() * 4)
        cellArray[enemy.currentPosition].classList.remove(enemy.class, enemy.name)
        if ((randomIndex === 0) && (!cellArray[enemy.currentPosition + 1].classList.contains('wall'))) {
          enemy.currentPosition++
        } else if ((randomIndex === 1) && (!cellArray[enemy.currentPosition - 1].classList.contains('wall'))) {
          enemy.currentPosition--
        } else if ((randomIndex === 2) && (!cellArray[enemy.currentPosition - width].classList.contains('wall'))) {
          enemy.currentPosition -= width
        } else if ((randomIndex === 3) && (!cellArray[enemy.currentPosition + width].classList.contains('wall'))) {
          enemy.currentPosition += width
        }
        cellArray[enemy.currentPosition].classList.add(enemy.class, enemy.name)
      })
    }, 300)
  }

  const checkDeathTimer = setInterval(() => {
    //console.log('cehceking')
    console.log
    if (cellArray[bruce.currentPosition].classList.contains('enemyOnSquare') ) {
      lifeCount -= 1
      //document.getElementById('lives-counter').innerText = lifeCount
      //document.getElementById('lives').innerText = lives
      //bruceDeath()
      console.log('DEATH')
    }
  }, 100)




  document.addEventListener('keydown', moveBruce)

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