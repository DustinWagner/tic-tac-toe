// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
function makeshape() {
//code to create a shape
}
function redRect(){
  var circle = document.createElementNS(namespace,"circle")
  circle.setAtrribute("cx",5)
  circle.setAtrribute("cy",30)
  circle.setAtrribute("r",15)
  circle.setAtrribute("fill","black")
var canvas = document.getElementById("game-borad")
canvas.appendChild(circle)
}
