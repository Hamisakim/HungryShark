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
    startPosition: 0
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
    new Enemy('squid', 20)
  ]

  function createGrid() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.classList.add('square')
      cell.textContent = i
      gameGrid.appendChild(cell)
      cellArray.push(cell)
    }
    addBruce(bruce.startPosition)
  }
  createGrid()

  function addBruce(position) {
    cellArray[position].classList.add(bruce.class)
    console.log('cellArray position', cellArray[position])
  }

  enemies.forEach(enemy => {
    console.log('ENEMY', enemy)
    cellArray[enemy.startPosition].classList.add(enemy.class)
    cellArray[enemy.startPosition].classList.add(enemy.name)
  })

  //? BRACKET MUST BE YELLOW BELOW /////
}
window.addEventListener('DOMContentLoaded', init)