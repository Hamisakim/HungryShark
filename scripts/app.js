/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
function init() {
  console.log('LIVE')
  //* All variables here for global scope

  const grid = document.querySelector('.game-grid') //this is the DOM for our grid
  const width = 10

  const cellCount = width * width
  const cells = []
  console.log(cells)

  console.log('CELLS-COUNT', cellCount)
  console.log('CELLS', cells)

  const bruceClass = 'bruce' //class containing bruce image
  const bruceStartPosition = 0
  let bruceCurrentPosition = 0

  const shamuClass = 'shamu'
  const shamuStartPosition = 26
  let shamuCurrentPosition

  //! Add Bruce
  function addBruce(position) {
    cells[position].classList.add(bruceClass)
  }

  //!Add Shamu
  function addEnemy(position) {
    cells[position].classList.add(shamuClass)


  }
  //! Remove bruce
  function removeBruce(position) {
    cells[position].classList.remove(bruceClass)
  }

  //! Make a grid
  function createGrid() { // need parameter??
    //console.log('CREATING GRID')
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.textContent = i
      grid.appendChild(cell)
      cells.push(cell)
    }
    addBruce(bruceStartPosition) //line 24
    addEnemy(shamuStartPosition)
  }

  // function swimDirection(event) {
  //   const key = event.keyCode
  //   if (key === 39) {     //RIGHT
  //     cells[bruceCurrentPosition].classList.add('swim-right') // * flips right, but whole div
  //   } else if (key === 37) { //LEFT
  //     cells[bruceCurrentPosition].classList.remove('swim-right')
  //   } else if (key === 38) {
  //     cells[bruceCurrentPosition].classList.add('swim-up')//UP
  //   } else if (key === 40) { //DOWN
  //     cells[bruceCurrentPosition].classList.add('swim-down')
  //   }
  // }

  function moveBruce(event) {
    const key = event.keyCode
    removeBruce(bruceCurrentPosition)
    if (key === 39 && bruceCurrentPosition % width !== width - 1) { //RIGHT
      bruceCurrentPosition++
      console.log('RIGHT')
      //cells[bruceCurrentPosition++].classList.add('swim-right') //  flips right, but whole div ...
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
    addBruce(bruceCurrentPosition)
  }


  // ! Event listeners
  document.addEventListener('keydown', moveBruce)
  // document.addEventListener('keydown', swimDirection)
  createGrid(bruceStartPosition) //line 62 

  //? BRACKET MUST BE YELLOW BELOW /////
}
window.addEventListener('DOMContentLoaded', init)