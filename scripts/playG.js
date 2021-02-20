//! Swim direction function 
   
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

