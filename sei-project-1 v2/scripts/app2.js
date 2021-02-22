// /* eslint-disable indent */
// /* eslint-disable no-unused-vars */
// function init() {

//   const gameGrid = document.querySelector('.game-grid')
//   const width = 28
//   const height = 35
//   const cellCount = width * height
//   const cellArray = []

//   function createGrid() {
//     for (let i = 0; i < cellCount; i++) {
//       const cell = document.createElement('div')
//       cell.classList.add('square')
//       cell.textContent = i
//       gameGrid.appendChild(cell)
//       cellArray.push(cell)
//     }
//   }
//   createGrid()

//   class Characters {
//     constructor(name, startPosition) {
//       this.name = name
//       this.startPosition = startPosition
//     }
//     spawn(startPosition, name) {
//       name = this.constructor.name
//       console.log('CLASS NAME', name)
//       console.log('CELL ARRAY ', cellArray[startPosition])
//     }
//   }


//   class Enemy extends Characters {
//     constructor(name, startPosition) {
//       super(name, startPosition)
//     }
//   }

//   class Player extends Characters {
//     constructor(name, startPosition) {
//       super(name)
//       this.startPosition = startPosition
//     }
//   }

//   const bruce = new Player('bruce', 0)
//   //console.log(bruce.name)

//   const shamu = new Enemy('shamu', 100)

//   bruce.spawn(10)
//   shamu.spawn(10)




//   //shamu.spawn()

//   // console.log(shamu.name,shamu.startPosition)
//   // console.log(bruce.name,bruce.startPosition)



//   //? BRACKET MUST BE YELLOW BELOW /////
// }
// window.addEventListener('DOMContentLoaded', init)




//   || (i === 167) || (i === 169) || (i === 187) || (i === 207) || (i === 227) || (i === 229) || (i === 230) || (i === 231) || (i === 232) || (i === 212) || (i === 192) || (i === 172) || (i === 171)

//   || (i === 170) || (i === 188) || (i === 189) || (i === 190) || (i === 191) || (i === 208) || (i === 209) || (i === 210)

const layout = [
  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  console.log(layout.length)