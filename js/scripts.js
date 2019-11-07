var player = true;
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
  roll = Math.ceil(Math.random() * 6);
  if(roll == 1){
    alert("You rolled a 1!");
    player = !player;
    turn = 0;
    roll = 0;
    return turn;
  } else {
    return roll;
  }
}

var turn = 0;
var roll = 0;
$(document).ready(function() {

  var inputtedName1 = prompt('Player 1, enter your name!');
  $('#playerOne').text(inputtedName1);
  var score = 0;
  var totalWins = 0;
  var playerOne = new Player(inputtedName1, score, totalWins);

  var inputtedName2 = prompt('Player 2, enter your name!');
  $('#playerTwo').text(inputtedName2);
  // var score = 0;
  // var totalWins = 0;
  var playerTwo = new Player(inputtedName2, score, totalWins);
  var total;

  $('#rollOne').click(function(){
    if(player == true){
    roll = dice.roll();
    $('#dieOne').append(roll);
    turn += roll;
  }
  });
    $('#holdOne').click(function(){
      if(player == true) {
      total = playerOne.score + turn;
      $('#oneScore').text(total);
      playerOne.score = total;
      console.log("Player 1 Score: " + playerOne.score);
      player = !player;
      turn = 0;
    }
    });
    var turn = 0;
    $('#rollTwo').click(function(){
      if(player == false){
      roll = dice.roll();
      $('#dieTwo').append(roll);
      turn += roll;
    }
    });
      $('#holdTwo').click(function(){
        if(player == false) {
        var total = playerTwo.score + turn;
        $('#twoScore').text(total);
        playerTwo.score = total;
        console.log("Player 2 Score: " + playerTwo.score);
        player = !player;
        turn = 0;
      }
      });



});
