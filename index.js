var player1= Math.random();
player1*=6;
player1=Math.floor(player1)+1;
var randomimage1= "dice" + player1 + ".png";
var randomimage1Source= "images/" + randomimage1;
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimage1Source);

player2=Math.floor(Math.random()*6)+1;
var randomimage2= "dice" + player2 + ".png";
var randomimage2Source= "images/" + randomimage2;
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimage2Source);

if(player1 > player2)
document.querySelector("h1").innerHTML="Player 1 Wins🚩";
else if (player2 > player1)
document.querySelector("h1").innerHTML="Player 2 Wins🚩";
else document.querySelector("h1").innerHTML="Draw";