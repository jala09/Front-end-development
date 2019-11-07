//code genomen en geadabteerd van https://codepen.io/sean_smyth/pen/drKmbq

let mouseX = 0
let mouseY = 0


const heading1 = document.querySelector(".ball")
let text1X = 0
let text1Y = 0

let text1speed = .08

function animate_text1() {
  let dist1X = mouseX - text1X +150
  let dist1Y = mouseY - text1Y 
  
  text1X = text1X + (dist1X * text1speed)
  text1Y = text1Y + (dist1Y * text1speed)  
  
  heading1.style.left = text1X + "px"
  heading1.style.top = text1Y + "px"
  
  requestAnimationFrame(animate_text1)
}

animate_text1()

document.addEventListener("mousemove", function (event) {
  mouseX = event.pageX
  mouseY = event.pageY
})