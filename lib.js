const animateRight = (element) => {
  element.style.position = 'fixed'
  const currentPosition = element.style.left ? Number(element.style.left.replace('px', '')) : 0
  console.log(currentPosition)
  if(currentPosition < 50) element.style.left = currentPosition + 1 + 'px'
}
const animateTop = (element) => {
  element.style.position = 'fixed'
  const currentPosition = element.style.top ? Number(element.style.top.replace('px', '')) : 0
  if(currentPosition < 50) element.style.top = currentPosition + 1 + 'px'
}

const addHoverToElement = (element, callback) => {
  let intervalId = null

  element.addEventListener("mouseenter", () => {
    intervalId = setInterval(() => callback(element), 100)
  })
  element.addEventListener("mouseleave", () => {
    clearInterval(intervalId)
  })
}