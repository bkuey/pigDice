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

Die.prototype.nPCRoll = function(){
  var roll = Math.ceil(Math.random() * 6);
  return roll;
}

Die.prototype.roll = function() {
  var roll = Math.ceil(Math.random() * 6);
  if(roll == 1){
    alert("You rolled a 1!");
    turnOne = 0;
    turnTwo = 0;
    roll = 0;
    player = !player;
    return 0;
  } else {
    return roll;
  }
}

function NPC(name, score, totalWins){
  this.name = 'Computer';
  this.score = 0
  this.totalWins = 0
}
var nPC = new NPC();
console.log(nPC);

NPC.prototype.compRoll = function(){
  var compRollOne = dice.nPCRoll();
  var compRollTwo = dice.nPCRoll();
  var compTurn = 0;
  compTurn += compRollOne;
  compTurn += compRollTwo;
  alert(compTurn);
  // if(compRollOne == 1 || compRollTwo == 1){
  //   alert("The computer rolled a 1! It's your turn!");
  //   compTurn = 0;
  // }


  }




var turnOne = 0;
var turnTwo = 0;
$(document).ready(function() {
  $('#chooseFriend').click(function(){



  var inputtedName1 = prompt('Player 1, enter your name!');
  $('#playerOne').text(inputtedName1);
  var score = 0;
  var totalWins = 0;
  var playerOne = new Player(inputtedName1, score, totalWins);


  var inputtedName2 = prompt('Player 2, enter your name!');
  $('#playerTwo').text(inputtedName2);

  var playerTwo = new Player(inputtedName2, score, totalWins);
  var total;

  $('#rollOne').click(function(){
    if(player == true){
    roll = dice.roll();
    $('#dieOne').append(roll);
    turnOne += roll;
    }
  });
    $('#holdOne').click(function(){
      if(player == true) {
      total = playerOne.score + turnOne;
      $('#oneScore').text(total);
      playerOne.score = total;
      player = !player;
      turnOne = 0;
      if(playerOne.score >= 100){
        playerOne.score = 0;
        playerTwo.score = 0;
        $('#oneScore').text(0);
        $('#twoScore').text(0);
        $('#dieOne').text(0);
        $('#dieTwo').text(0);
        player = true;
        return alert("You've reached 100! You are the winner!");
      }
    }
    });
    var turn = 0;
    $('#rollTwo').click(function(){
      if(player == false){
      roll = dice.roll();
      $('#dieTwo').append(roll);
      turnTwo += roll;
      }
    });
      $('#holdTwo').click(function(){
        if(player == false) {
        total = playerTwo.score + turnTwo;
        $('#twoScore').text(total);
        playerTwo.score = total;
        player = !player;
        turnTwo = 0;
        if(playerTwo.score >= 100){
          playerTwo.score = 0;
          playerOne.score = 0;
          $('#dieOne').text(0);
          $('#dieTwo').text(0);
          player = true;
          return alert("You've reached 100! You are the winner!");
        }
      }
      });
});

$('#chooseComp').click(function(){
  var inputtedName1 = prompt('Player 1, enter your name!');
  $('#playerOne').text(inputtedName1);
  var score = 0;
  var totalWins = 0;
  var playerOne = new Player(inputtedName1, score, totalWins);


    $('#rollOne').click(function(){
      if(player == true){
      roll = dice.roll();
      $('#dieOne').append(roll);
      turnOne += roll;
      }
    });
      $('#holdOne').click(function(){
        if(player == true) {
        total = playerOne.score + turnOne;
        $('#oneScore').text(total);
        playerOne.score = total;
        player = !player;
        turnOne = 0;
        if(playerOne.score >= 100){
          playerOne.score = 0;
          playerTwo.score = 0;
          $('#oneScore').text(0);
          $('#twoScore').text(0);
          $('#dieOne').text(0);
          $('#dieTwo').text(0);
          player = true;
          return alert("You've reached 100! You are the winner!");
        }
      }
      });

      if(player == false){
        alert('!!!');
        nPC.compRoll();

      }
});


});
