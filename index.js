var dicerollsound = new Audio();
dicerollsound.src = "Diceroll.mp3"
function diceroll() {
var randomNumber1 = Math.floor((Math.random()*6)+1);

var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage1)

var randomNumber2 = Math.floor((Math.random()*6)+1);

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2)

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML ="👑Player 1 Wins!";
    dicerollsound.play();
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML ="👑Player 2 Wins!";
    dicerollsound.play();
}
else if(randomNumber1 = randomNumber2) {
    document.querySelector("h1").innerHTML ="🎌Draw!";
    dicerollsound.play();
}
  }