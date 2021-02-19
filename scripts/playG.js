
const bruce = {
  class: 'bruce',
  startPosition: 0,
  currentPosition: 0
}

//! Add bruce
function addBruce(position) {
  cells[position].classList.add(bruceClass)
}
//! remove bruce
function removeBruce(position) {
  cells[position].classList.remove(bruceClass)
}
