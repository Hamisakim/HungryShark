function init(){

  console.log('jas connected')

  const grid = document.querySelector('.grid')
  
  const width = 10
  const cellCount = width * width
  const cells = []

  const catClass = 'cat'
  const catStartPosition = 0
  let catCurrentPosition = 0


  // * Make a grid
  function createGrid(catStartPosition) {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.textContent = i
      grid.appendChild(cell)
      cells.push(cell)
    }
    addCat(catStartPosition)
  }









//? BRACKET MUST BE YELLOW BELOW 
}
window.addEventListener('DOMcontentLoaded',init)