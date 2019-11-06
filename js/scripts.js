var player = true;
function Player(name, score, totalWins) {
  this.name = name,
  this.score = score,
  this.totalWins = totalWins
}

Player.prototype.printScore = function() {
  return this.score;
}

// Player.prototype.addScore = function() {
//   this.score += roll;
//   return this.score;
//
// }

function Die(number) {
  this.number = number
}
var dice = new Die();

Die.prototype.roll = function() {
  roll = Math.ceil(Math.random() * 6);
  turn = 0;

  if(roll == 1){
    alert("You rolled a 1!");
    player = !player;
    return 0;
  } else {
    return roll;
  }
}


var roll;
$(document).ready(function() {

var inputtedName1 = prompt('Player 1, enter your name!');
$('#playerOne').text(inputtedName1);
var score = 0;
var totalWins = 0;
var playerOne = new Player(inputtedName1, score, totalWins);

var inputtedName2 = prompt('Player 2, enter your name!');
$('#playerTwo').text(inputtedName2);
var score = 0;
var totalWins = 0;
var playerTwo = new Player(inputtedName2, score, totalWins);


  $('#rollOne').click(function(){
    if(player == true){
    roll = dice.roll();
    $('#dieOne').append(roll);
    // $('#oneScore').text(playerOne.addScore());
  }
  });

  $('#rollTwo').click(function(){
    if(player == false){
    roll = dice.roll();
    $('#dieTwo').append(roll);
    // $('#twoScore').text(playerTwo.addScore());
  }
  });
  $('#holdTwo').click(function(){
    if(player == false){
      turn + playerTwo.score;
      $('#twoScore').text(playerTwo.printScore());

    }
  })


});
