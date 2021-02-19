/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
function init() {
  //* All variables here for global scope
  let score = 0


  //* Grid variables
  const grid = document.querySelector('.game-grid') //this is the DOM for our grid contains cell
  const width = 10
  const cellCount = width * width
  const cells = []

  const foodClass = 'food'

  // console.log(cells)
  // console.log('CELLS-COUNT', cellCount)
  // console.log('CELLS', cells)

  //* Bruce Variables
  const bruceClass = 'bruce' //class containing bruce image
  const bruceStartPosition = 0
  let bruceCurrentPosition = 0

  //* Enemy variables
  const shamuClass = 'shamu'
  const shamuStartPosition = 26
  let shamuCurrentPosition = 26

  //? ***********************************

  //! Make a grid
  function createGrid() { // need parameter??
    //console.log('CREATING GRID')
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div') //creating div 
      cell.textContent = i
      grid.appendChild(cell)
      cells.push(cell)
    }
    //.innerHTML = '&#x25cf'
    addBruce(bruceStartPosition) //line 24
    moveEnemy()
  }



  function addBruce(position) {
    cells[position].classList.add(bruceClass)
  }

  function removeBruce(position) {
    cells[position].classList.remove(bruceClass)
  }


  function addEnemy(position) {
    cells[position].classList.add(shamuClass)
  }

  function removeEnemy(position) {
    cells[position].classList.remove(shamuClass)
  }

  function moveBruce(event) {
    console.log('BRUCE CURRENT',bruceCurrentPosition)

    cells[bruceCurrentPosition].classList.add('straight')



    removeBruce(bruceCurrentPosition)
    //Remove from current position
    const key = event.keyCode
    if (key === 39 && bruceCurrentPosition % width !== width - 1) { //RIGHT
      bruceCurrentPosition++
      console.log('RIGHT')
    } else if (key === 37 && bruceCurrentPosition % width !== 0) { //LEFT
      bruceCurrentPosition--
      console.log('LEFT')
    } else if (key === 38 && bruceCurrentPosition >= width) {  //UP
      bruceCurrentPosition -= width
      console.log('UP')
    } else if (key === 40 && bruceCurrentPosition + width <= width * width - 1) { //DOWN
      bruceCurrentPosition += width
      console.log('DOWN')
    } else {
      console.log('INVALID KEY')
    }
    addBruce(bruceCurrentPosition) // add to the position after added§
    console.log('BRUCE CURRENT POSITION', bruceCurrentPosition)
  }

  //! Shamu moving randomly
  function moveEnemy() {
    console.log('SHAMU MOVE FN')
    const enemyTimer = setInterval(() => {
      removeEnemy(shamuStartPosition)
      removeEnemy(shamuCurrentPosition)
      const randomIndex = Math.floor(Math.random() * 4)
      if (randomIndex === 0 && shamuCurrentPosition % width !== width - 1) { //Move Right
        shamuCurrentPosition++
      } else if (randomIndex === 1 && shamuCurrentPosition % width !== 0) { //LEFT
        shamuCurrentPosition--
      } else if (randomIndex === 2 && shamuCurrentPosition >= width) {  //UP
        shamuCurrentPosition -= width
      } else if (randomIndex === 3 && shamuCurrentPosition + width <= width * width - 1) { //DOWN
        shamuCurrentPosition += width
      }
      addEnemy(shamuCurrentPosition)

    }, 500)

  }


  // ! Event listeners
  document.addEventListener('keydown', moveBruce)
  document.addEventListener('keydown', swimDirection)

  //! Functions to happen on page load
  createGrid(bruceStartPosition) //line 62 
  addEnemy(shamuStartPosition)


  function swimDirection(event) {
    //cells[bruceCurrentPosition].className('')
    const key = event.keyCode
    if (key === 39) {     //RIGHT
      cells[bruceCurrentPosition].classList.add('swim-right') // flips right, but whole div
    } else if (key === 37) { //LEFT
      cells[bruceCurrentPosition].classList.remove('swim-right')
    } else if (key === 38) {
      cells[bruceCurrentPosition].classList.add('swim-up')//UP
    } else if (key === 40) { //DOWN
      cells[bruceCurrentPosition].classList.add('swim-down')
    }
  }


  //? BRACKET MUST BE YELLOW BELOW /////
}
window.addEventListener('DOMContentLoaded', init)


