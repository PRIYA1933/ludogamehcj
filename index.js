 var player1="Player1";
 var player2="Player2";
function editNames(){
  player1=prompt("Change Player1 Name");
  player2=prompt("Change Player2 Name");
  document.querySelector("p.Player1").innerHTML= player1;
  document.querySelector("p.Player2").innerHTML= player2;
}
  function rollTheDice(){
    let diceNum1=document.querySelector(".img1");
    let diceNum2=document.querySelector(".img2");
    diceNum1.setAttribute("src","images/diceroll.gif");
    diceNum2.setAttribute("src","images/diceroll.gif");



setTimeout(()=>{
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins

if (randomNumber1 == randomNumber2) {
  document.querySelector("h1").innerHTML =("Draw");
}

else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML =(player2+"Wins! 🚩");
}
else {
  document.querySelector("h1").innerHTML =(player1+" Wins!🚩");
 
}},2500); 
  }