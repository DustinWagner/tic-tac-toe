// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
function makeshape() {
//code to create a shape
}
function redRect(){
  var circle = document.createElementNS(namespace,"circle")
  circle.setAttribute("cx",35)
  circle.setAttribute("cy",50)
  circle.setAttribute("r",15)
  circle.setAttribute("fill","black")
var canvas = document.getElementById("game-board")
canvas.appendChild(circle)
}
function orangeRect(){
  var circle = document.createElementNS(namespace,"circle")
  circle.setAttribute("cx",100)
  circle.setAttribute("cy",60)
  circle.setAttribute("r",15)
  circle.setAttribute("fill","black")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
}
function yellowRect() {
var circle = document.createElementNS(namespace,"circle")
circle.setAttribute("cx",160)
circle.setAttribute("cy",60)
circle.setAttribute("r",15)
circle.setAttribute("fill","black")
var canvas = document.getElementById("game-board")
canvas.appendChild(circle)
}
function greenRect() {
var circle = document.createElementNS(namespace,"circle")
circle.setAttribute("cx",30)
circle.setAttribute("cy",120)
circle.setAttribute("r",15)
circle.setAttribute("fill","black")
var canvas = document.getElementById("game-board")
canvas.appendChild(circle)
}
function blueRect() {
var circle = document.createElementNS(namespace,"circle")
circle.setAttribute("cx",90)
circle.setAttribute("cy",120)
circle.setAttribute("r",15)
circle.setAttribute("fill","black")
var canvas = document.getElementById("game-board")
canvas.appendChild(circle)
}
function purpleRect() {
var circle = document.createElementNS(namespace,"circle")
circle.setAttribute("cx",160)
circle.setAttribute("cy",120)
circle.setAttribute("r",15)
circle.setAttribute("fill","black")
var canvas = document.getElementById("game-board")
canvas.appendChild(circle)
}
function pinkRect() {
var circle = document.createElementNS(namespace,"circle")
circle.setAttribute("cx",30)
circle.setAttribute("cy",185)
circle.setAttribute("r",15)
circle.setAttribute("fill","black")
var canvas = document.getElementById("game-board")
canvas.appendChild(circle)
}
function fuchsiaRect() {
var circle = document.createElementNS(namespace,"circle")
circle.setAttribute("cx",95)
circle.setAttribute("cy",185)
circle.setAttribute("r",15)
circle.setAttribute("fill","black")
var canvas = document.getElementById("game-board")
canvas.appendChild(circle)
}
function brownRect() {
var circle = document.createElementNS(namespace,"circle")
circle.setAttribute("cx",160)
circle.setAttribute("cy",185)
circle.setAttribute("r",15)
circle.setAttribute("fill","black")
var canvas = document.getElementById("game-board")
canvas.appendChild(circle)
}
