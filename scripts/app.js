/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
function init() {
  console.log('LIVE')
  //* All variables here for global scope

  //* Grid variables
  const grid = document.querySelector('.game-grid') //this is the DOM for our grid
  const width = 10
  const cellCount = width * width
  const cells = []
  console.log(cells)
  console.log('CELLS-COUNT', cellCount)
  console.log('CELLS', cells)

  //* Bruce Variables
  const bruceClass = 'bruce' //class containing bruce image
  const bruceStartPosition = 0
  let bruceCurrentPosition = 0

  //* Enemy variables
  const shamuClass = 'shamu'
  const shamuStartPosition = 26
  let shamuCurrentPosition = 26

  //? ***********************************
  //! Add Bruce
  function addBruce(position) {
    cells[position].classList.add(bruceClass)
  }
  //! Remove bruce
  function removeBruce(position) {
    cells[position].classList.remove(bruceClass)
  }

  //!Add Enemy
  function addEnemy(position) {
    cells[position].classList.add(shamuClass)
  }
  //! Remove Enemy
  function removeEnemy(position) {
    cells[position].classList.remove(shamuClass)
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
   

  }
  //! Move Bruce with keydown
  function moveBruce(event) {
    removeBruce(bruceCurrentPosition) //Remove from current position
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

    moveEnemy()
  }

  function moveEnemy() {
    console.log('SHAMU MOVE FN')
    console.log('SHAMU POSITION->', shamuCurrentPosition)

    const enemyTimer = setInterval(() => {
      removeEnemy(shamuStartPosition)
      removeEnemy(shamuCurrentPosition)
      //console.log('SHAMU POSITION',shamuCurrentPosition)
      //4 possible random moves right left up down
      //right = 0
      //left = 1
      //up = 2
      //down = 3

      const randomIndex = 0 //Math.floor(Math.random() * 4)
      console.log('RANDOM INDEX', randomIndex)

      if (randomIndex === 0 && shamuCurrentPosition % width !== width - 1) { //Move Right
        shamuCurrentPosition++
      }
      
      addEnemy(shamuCurrentPosition)

    }, 500)

  }


  // ! Event listeners
  document.addEventListener('keydown', moveBruce)
  // document.addEventListener('keydown', swimDirection)
  
  //! Functions to happen on page load
  createGrid(bruceStartPosition) //line 62 
  addEnemy(shamuStartPosition)




  //? BRACKET MUST BE YELLOW BELOW /////
}
window.addEventListener('DOMContentLoaded', init)


  // function swimDirection(event) {
  //   const key = event.keyCode
  //   if (key === 39) {     //RIGHT
  //     cells[bruceCurrentPosition].classList.add('swim-right') // flips right, but whole div
  //   } else if (key === 37) { //LEFT
  //     cells[bruceCurrentPosition].classList.remove('swim-right')
  //   } else if (key === 38) {
  //     cells[bruceCurrentPosition].classList.add('swim-up')//UP
  //   } else if (key === 40) { //DOWN
  //     cells[bruceCurrentPosition].classList.add('swim-down')
  //   }
  // }
