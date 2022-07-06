var randomNumber1 = Math.floor((Math.random()*6)+1);
var s1= "dice"+randomNumber1+".png";
var add1="images/"+s1;

var img1= document.querySelectorAll("img")[0];
img1.setAttribute("src", add1);


var randomNumber2 = Math.floor((Math.random()*6)+1);
var s2= "dice"+randomNumber2+".png";
var add2="images/"+s2;

var img2= document.querySelectorAll("img")[1];
img2.setAttribute("src", add2);


if(randomNumber1 > randomNumber2)
  document.querySelector("h1").innerHTML= "Player 1 wins";

else if(randomNumber2 > randomNumber1)
  document.querySelector("h1").innerHTML= "Player 2 wins";

else
  document.querySelector("h1").innerHTML= "Draw";
