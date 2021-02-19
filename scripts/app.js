/* eslint-disable indent */
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
  const shamuStartPosition = 54
  let shamuCurrentPosition = 54

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

  function straightenCells() {
    cells[bruceCurrentPosition].classList.add('straight')
    cells[bruceCurrentPosition].classList.remove('swim-right')
    cells[bruceCurrentPosition].classList.remove('swim-left')
    cells[bruceCurrentPosition].classList.remove('swim-up')
    cells[bruceCurrentPosition].classList.remove('swim-down')
  }



  function swimDirection(event) {
    //cells[bruceCurrentPosition].className('')
    const key = event.keyCode
    if (key === 39) {     //RIGHT
      cells[bruceCurrentPosition].classList.add('swim-right')
      cells[bruceCurrentPosition].classList.remove('swim-left')
      cells[bruceCurrentPosition].classList.remove('swim-up')
      cells[bruceCurrentPosition].classList.remove('swim-down')// flips right, but whole div
    } else if (key === 37) { //LEFT
      cells[bruceCurrentPosition].classList.add('swim-left')
      cells[bruceCurrentPosition].classList.remove('swim-right')
      cells[bruceCurrentPosition].classList.remove('swim-up')
      cells[bruceCurrentPosition].classList.remove('swim-down')
    } else if (key === 38) {
      cells[bruceCurrentPosition].classList.add('swim-up')
      cells[bruceCurrentPosition].classList.remove('swim-left')
      cells[bruceCurrentPosition].classList.remove('swim-down')
      cells[bruceCurrentPosition].classList.remove('swim-right')//UP
    } else if (key === 40) { //DOWN
      cells[bruceCurrentPosition].classList.add('swim-down')
      cells[bruceCurrentPosition].classList.remove('swim-left')
      cells[bruceCurrentPosition].classList.remove('swim-up')
      cells[bruceCurrentPosition].classList.remove('swim-right')
    }
  }


  function moveBruce(event) {
    console.log('Position A', bruceCurrentPosition)

    removeBruce(bruceCurrentPosition)
    //Remove from current position
    const key = event.keyCode
    if (key === 39 && bruceCurrentPosition % width !== width - 1) { //RIGHT
      straightenCells()
      bruceCurrentPosition++
      //console.log('AFTER MOVE POSITION',bruceCurrentPosition)
      //cells[bruceCurrentPosition].classList.remove(shamuClass)
      // removeStraight(bruceCurrentPosition)
      console.log('RIGHT')
    } else if (key === 37 && bruceCurrentPosition % width !== 0) { //LEFT
      straightenCells()
      bruceCurrentPosition--
      console.log('LEFT')
    } else if (key === 38 && bruceCurrentPosition >= width) {  //UP
      straightenCells()
      bruceCurrentPosition -= width
      console.log('UP')
    } else if (key === 40 && bruceCurrentPosition + width <= width * width - 1) { //DOWN
      straightenCells()
      bruceCurrentPosition += width
      console.log('DOWN')
    } else {
      console.log('INVALID KEY')
    }
    addBruce(bruceCurrentPosition) // add to the position after added§
    console.log('POSITION B', bruceCurrentPosition)
  }


  function moveEnemy() { // moving random every 500ms
    console.log('SHAMU MOVE FN')
    const enemyTimer = setInterval(() => {
       removeEnemy(shamuStartPosition)
      removeEnemy(shamuCurrentPosition)

      const randomIndex = Math.floor(Math.random() * 4)
      
      if (randomIndex === 0 && shamuCurrentPosition % width !== width - 1) { //Move Right
        console.log('RIGHT')
        cells[shamuCurrentPosition + 1].classList.add('swim-left')
        cells[shamuCurrentPosition].classList.remove('swim-right')
        cells[shamuCurrentPosition].classList.remove('swim-up')
        cells[shamuCurrentPosition].classList.remove('swim-down')
        shamuCurrentPosition++
       } else if (randomIndex === 1 && shamuCurrentPosition % width !== 0) { //LEFT
        console.log('LEFT')
        cells[shamuCurrentPosition - 1].classList.add('swim-right')
        cells[shamuCurrentPosition].classList.remove('swim-left')
        cells[shamuCurrentPosition].classList.remove('swim-up')
        cells[shamuCurrentPosition].classList.remove('swim-down')
        shamuCurrentPosition--
      } else if (randomIndex === 2 && shamuCurrentPosition >= width) {  //UP
        console.log('UP', 'CURRENT',shamuCurrentPosition, '+width',shamuCurrentPosition - width)
        cells[shamuCurrentPosition - width].classList.add('swim-down')
        cells[shamuCurrentPosition].classList.remove('swim-left')
        cells[shamuCurrentPosition].classList.remove('swim-up')
        cells[shamuCurrentPosition].classList.remove('swim-right')
        shamuCurrentPosition -= width
        cells[shamuCurrentPosition + width].classList.remove('swim-down')

      } else if (randomIndex === 3 && shamuCurrentPosition + width <= width * width - 1) { //DOWN
        cells[shamuCurrentPosition + width].classList.add('swim-up')
        cells[shamuCurrentPosition].classList.remove('swim-left')
        cells[shamuCurrentPosition].classList.remove('swim-down')
        cells[shamuCurrentPosition].classList.remove('swim-right')
        shamuCurrentPosition += width
        cells[shamuCurrentPosition - width].classList.remove('swim-up')
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





  //? BRACKET MUST BE YELLOW BELOW /////
}
window.addEventListener('DOMContentLoaded', init)


