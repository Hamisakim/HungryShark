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
    startPosition: 90,
    currentPosition: 90
  }

  class Enemy {
    constructor(name, startPosition) {
      this.name = name
      this.startPosition = startPosition
      this.class = 'enemyOnSquare'
    }
  }

  const enemies = [
    new Enemy('shamu', 50),
    new Enemy('squid', 20),
    new Enemy('flipper', 290)
  ]

  function createGrid() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      //cell.classList.add('food')
      cell.textContent = i
      gameGrid.appendChild(cell)
      cellArray.push(cell)

      if ((i % 20 === 0) || (i > 480) || (i < 20) || ((i + 1) % 20 === 0) || (i === 168) || (i === 169) || (i === 188) || (i === 208) || (i === 228) || (i === 229) || (i === 230) || (i === 231) || (i === 232) || (i === 212) || (i === 192) || (i === 172) || (i === 171)) {
        cell.textContent = 'X'
        cell.classList.add('wall')
      }
    }
    addBruce(bruce.startPosition)
  }
  createGrid()


  function addBruce(position) {
    cellArray[position].classList.add(bruce.class)
    // console.log('cellArray position', cellArray[position])
  }

  enemies.forEach(enemy => {
    //console.log('ENEMY', enemy)
    cellArray[enemy.startPosition].classList.add(enemy.class, enemy.name)
    //cellArray[enemy.startPosition].classList.add()
  })

  function moveBruce(event) {
    const key = event.keyCode
    cellArray[bruce.currentPosition].classList.remove(bruce.class)

    console.log('CURRENT', bruce.currentPosition)
    if ((key === 39 || key === 68) && (bruce.currentPosition % width !== width - 1) && (!cellArray[bruce.currentPosition + 1].classList.contains('wall'))) {
      bruce.currentPosition++


    } else if ((key === 37 || key === 65) && (bruce.currentPosition % width !== 0) && (!cellArray[bruce.currentPosition - 1].classList.contains('wall'))) { //Left
      bruce.currentPosition--

    } else if ((key === 38 || key === 87) && (bruce.currentPosition >= width) && (!cellArray[bruce.currentPosition - width].classList.contains('wall'))) { //UP
      bruce.currentPosition -= width
    } else if ((key === 40 || key === 83) && (bruce.currentPosition + width <= width * height - 1) && (!cellArray[bruce.currentPosition + width].classList.contains('wall'))) { //down

      bruce.currentPosition += width
    }
    addBruce(bruce.currentPosition)
  }

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