// prompt('Player 1, enter your name!')
function Player(name, score, totalWins) {
  this.name = name,
  this.score = score,
  this.totalWins = totalWins
}

Player.prototype.printScore = function() {
  return this.score;
}

function Die(number) {
  this.number = number
}
var dice = new Die();

Die.prototype.roll = function() {
  return Math.ceil(Math.random() * 6);
}


$(document).ready(function() {
var inputtedName1 = prompt('Player 1, enter your name!');
$('#playerOne').text(inputtedName1);
var score = 0;
var totalWins = 0;
var playerOne = new Player(inputtedName1, score, totalWins);
$('#oneScore').text(playerOne.printScore());


var inputtedName2 = prompt('Player 2, enter your name!');
$('#playerTwo').text(inputtedName2);
var score = 0;
var totalWins = 0;
var playerTwo = new Player(inputtedName2, score, totalWins);
$('#twoScore').text(playerTwo.printScore());
});
