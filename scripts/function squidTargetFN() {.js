function squidTargetFN() {
  let squidTargetResult = bruce.currentPosition
  let twoInfront = bruce.currentPosition

  if (bruceDirectionHistory[bruceDirectionHistory.length - 1] === 1) {
    twoInfront = bruce.currentPosition + 2
  } else if (bruceDirectionHistory[bruceDirectionHistory.length - 1] === -1) {
    twoInfront = bruce.currentPosition - 2
  } else if (bruceDirectionHistory[bruceDirectionHistory.length - 1] === -width) {
    twoInfront = bruce.currentPosition - width * 2
  } else if (bruceDirectionHistory[bruceDirectionHistory.length - 1] === +width) {
    twoInfront = bruce.currentPosition - width * 2
  }
  console.log(twoInfront)
  
  const vectorLength = findC(shamu.currentPosition, twoInfront)
  const doubleVectorLength = 2 * vectorLength //doubleC
  
//? shamuCurrentPosition = shamu.currentPosition
  const getAngle = (shamuCurrentPosition, twoInfront) =>{
    const positionDiff = shamuCurrentPosition - twoInfront
    const oppositeLength = positionDiff / 20 
    const sinTheta = oppositeLength / vectorLength 
    const theta = asin(sinTheta)
  }
  // Math.pow(vectorLength,2)  
  // yToTwoInfront = 

}