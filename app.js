// function for generating hex number
function getColor() {
    return "#" + Math.random().toString(16).slice(2,8)
}
// A function that change the hex number
function changeHex() {
    let hexNumber = document.getElementById("hexNum")
    hexNumber.innerText=getColor()
    // hexNumber.style.color = getColor()
}
changeHex()  //for showing the hex number upon rendering
// function for generating color
function setBackground() {
    let hexNum = getColor()
    document.getElementById("hex").style.background = hexNum
}
setBackground()  //for showing the color number upon rendering
let button = document.getElementById("changeCol")
button.addEventListener("click", function () {setBackground() //update color on click
    ,changeHex() //update hex number dynamically
})