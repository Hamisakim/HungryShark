/* eslint-disable indent */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
function init() {

  let score = 0
  const grid = document.querySelector('.game-grid') //this is the DOM for our grid contains cell
  const width = 10
  const cellCount = width * width
  const cells = []
  const square = document.getElementsByClassName('square')

  const bruceClass = 'bruce' //class containing bruce image
  const bruceStartPosition = 0
  let bruceCurrentPosition = 0

  const shamuClass = 'shamu'
  const shamuStartPosition = 54
  let shamuCurrentPosition = 54



  function createGrid() { // need parameter??
    console.log('creating')
    ////console.log('CREATING GRID')
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div') //creating div 
      cell.classList.add('square')  //gives each cell class of square
      cell.textContent = i
      grid.appendChild(cell)
      cells.push(cell)
      //console.log('CELLLIST',cell.classList)
      //cell.classList.add('food')
    }

    addBruce(bruceStartPosition) //line 24
    moveEnemy()
    addFood()
  }

  function addFood() {
    for (let i = 0; i < square.length; i++) {
      if (!square[i].classList.contains('bruce'))
        square[i].classList.add('food')
    }
  }



  function addBruce(position) {
    cells[position].classList.add(bruceClass)
    console.log('cells position', cells[position])
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
      cells[bruceCurrentPosition].classList.remove('swim-left', 'swim-up', 'swim-down')

    } else if (key === 37) { //LEFT
      cells[bruceCurrentPosition].classList.add('swim-left')
      cells[bruceCurrentPosition].classList.remove('swim-right', 'swim-up', 'swim-down')

    } else if (key === 38) {
      cells[bruceCurrentPosition].classList.add('swim-up')
      cells[bruceCurrentPosition].classList.remove('swim-left', 'swim-right', 'swim-down')

    } else if (key === 40) { //DOWN
      cells[bruceCurrentPosition].classList.add('swim-down')
      cells[bruceCurrentPosition].classList.remove('swim-right', 'swim-up', 'swim-left')

    }
  }

  function eatFood() {
    if (cells[bruceCurrentPosition].classList.contains('food')) {
      score += 10
      document.getElementById('score').innerText = score
      square[bruceCurrentPosition].classList.remove('food')
    }
  }

  function moveBruce(event) {
    removeBruce(bruceCurrentPosition)
    eatFood()
    straightenCells()
    const key = event.keyCode
    if (key === 39 && bruceCurrentPosition % width !== width - 1) { //RIGHT
      bruceCurrentPosition++
    } else if (key === 37 && bruceCurrentPosition % width !== 0) { //LEFT
      bruceCurrentPosition--
    } else if (key === 38 && bruceCurrentPosition >= width) {  //UP
      bruceCurrentPosition -= width
    } else if (key === 40 && bruceCurrentPosition + width <= width * width - 1) { //DOWN
      bruceCurrentPosition += width
    }
    addBruce(bruceCurrentPosition) // add to the position after added§
    //console.log('POSITION B', bruceCurrentPosition)
  }


  function moveEnemy() { // moving random every 500ms
    //console.log('SHAMU MOVE FN')
    const enemyTimer = setInterval(() => {
      removeEnemy(shamuStartPosition)
      removeEnemy(shamuCurrentPosition)
      const randomIndex = Math.floor(Math.random() * 4)
      if (randomIndex === 0 && shamuCurrentPosition % width !== width - 1) { //Move Right

        cells[shamuCurrentPosition + 1].classList.add('swim-left')
        cells[shamuCurrentPosition].classList.remove('swim-right', 'swim-up', 'swim-down')
        shamuCurrentPosition++
      } else if (randomIndex === 1 && shamuCurrentPosition % width !== 0) { //LEFT

        cells[shamuCurrentPosition - 1].classList.add('swim-right')
        cells[shamuCurrentPosition].classList.remove('swim-left', 'swim-up', 'swim-down')
        shamuCurrentPosition--
      } else if (randomIndex === 2 && shamuCurrentPosition >= width) {  //UP
        //console.log('UP', 'CURRENT', shamuCurrentPosition, '+width', shamuCurrentPosition - width)
        cells[shamuCurrentPosition - width].classList.add('swim-down')
        cells[shamuCurrentPosition].classList.remove('swim-left', 'swim-up', 'swim-right')
        shamuCurrentPosition -= width
        cells[shamuCurrentPosition + width].classList.remove('swim-down')

      } else if (randomIndex === 3 && shamuCurrentPosition + width <= width * width - 1) { //DOWN
        cells[shamuCurrentPosition + width].classList.add('swim-up')
        cells[shamuCurrentPosition].classList.remove('swim-left', 'swim-down', 'swim-right')
        shamuCurrentPosition += width
        cells[shamuCurrentPosition - width].classList.remove('swim-up')
      }
      addEnemy(shamuCurrentPosition)
    }, 1500)
  }

  // function enterGame() {
  //   console.log('ENTERING')
  //   const overlay = document.querySelector('.overlay')
  //   console.log(overlay)
  //   overlay.classList.add('entering')

  //       const gameComponents = document.querySelector('.game-component')
  //       gameComponents.style.opacity = '1'
  //   setTimeout(()=>{
  //     console.log('timeout')
  //     overlay.style.display = 'none'
  //   },1000)
  //   //overlay.style.display = 'none'
  // }

  document.addEventListener('keydown', moveBruce)
  document.addEventListener('keydown', swimDirection)
  //document.getElementById('enter-btn').addEventListener('click', enterGame)



  createGrid(bruceStartPosition) //line 62 
  addEnemy(shamuStartPosition)





  //? BRACKET MUST BE YELLOW BELOW /////
}
window.addEventListener('DOMContentLoaded', init)


