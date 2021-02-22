function enterGame() {
  console.log('ENTERING')
  const overlay = document.querySelector('.overlay')
  console.log(overlay)
  overlay.classList.add('entering')

      const gameComponents = document.querySelector('.game-component')
      gameComponents.style.opacity = '1'
  setTimeout(()=>{
    console.log('timeout')
    overlay.style.display = 'none'
  },1000)
  //overlay.style.display = 'none'
}