var randomnumber1 = Math.floor( Math.random() * 6) + 1;

var randomimagedice = "dice" + randomnumber1+ ".png" //dice1 - dice6
var randomimagesource = "images/"  + randomimagedice;//images-dice1 / //images-dice6
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomimagesource)
 
var randomnumber2 = Math.floor(Math.random() *6) +1;
var randomimagesource2 = "images/dice" + randomnumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomimagesource2)
if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = "play one 1 wins"
}
else if(randomnumber2 > randomnumber1) {
    document.querySelector("h1").innerHTML = "player 2 wins"
}
else {
    document.querySelector("h1").innerHTML = "draw!"
}