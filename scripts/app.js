/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
function init() {
  console.log('LIVE')
  //* All variables here for global scope

  const grid = document.querySelector('.game-grid') //this is the DOM for our grid
  const width = 10
  const cellCount = width * width
  const cells = []

  console.log('CELLS-COUNT',cellCount)
  console.log('CELLS',cells)

  const bruceClass = 'bruce'
  const bruceStartPosition = 0
  let bruceCurrentPosition = 0

  //! Make a grid
  function createGrid(bruceStartPosition) {
    console.log('CREATING GRID')

    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.textContent = i
      grid.appendChild(cell)
      cells.push(cell)
    }
    addBruce(bruceStartPosition) //line 24
  }

  //! Add bruce
  function addBruce(position) { 
    cells[position].classList.add(bruceClass) 
  }


  createGrid(bruceStartPosition) //line 62 


//? BRACKET MUST BE YELLOW BELOW /////
}
window.addEventListener('DOMContentLoaded', init)