var lion = new Audio("sounds/lion.wav");
var cow = new Audio("sounds/cow.wav");
var cat = new Audio("sounds/cat.wav");
var bird = new Audio("sounds/bird.wav");
var chicken = new Audio("sounds/chicken.wav");
var pig = new Audio("sounds/pig.wav");
var horse = new Audio("sounds/horse.wav");
var dog = new Audio("sounds/dog.wav");

document.getElementById("lion").addEventListener("click", function(){lion.play();});
document.getElementById("cow").addEventListener("click", function(){cow.play();});
document.getElementById("cat").addEventListener("click", function(){cat.play();});
document.getElementById("bird").addEventListener("click", function(){bird.play();});
document.getElementById("chicken").addEventListener("click", function(){chicken.play();});
document.getElementById("pig").addEventListener("click", function(){pig.play();});
document.getElementById("horse").addEventListener("click", function(){horse.play();});
document.getElementById("dog").addEventListener("click", function(){dog.play();});