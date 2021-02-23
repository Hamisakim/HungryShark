
function moveRight(character) {
  let position = character.currentPosition
  console.log(position)
  console.log('MOVE RIGHT FN')

  do{  

    console.log('MOVE')
    cellArray[position + 1].classList.add('swim-right')
    cellArray[position].classList.remove('swim-left', 'swim-up', 'swim-down', 'swim-right')
    character.currentPosition++
  }
 
  while (!cellArray[position + 1].classList.contains('wall')) {
  
}