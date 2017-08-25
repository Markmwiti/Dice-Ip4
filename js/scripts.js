//Business logic
var DICE = {
  PLAYER1: 0,
  PLAYER2: 0,
  CURRENTSCORE: 0,
  ACTIVEPLAYER: 1,
  rollDice: function() {
    var PLAY = Math.floor(Math.random() * 6) + 1;
    if (PLAY === 1) {
      this.CURRENTSCORE = 0;
      this.switchActivePlayer();
    } else {
      this.CURRENTSCORE += PLAY;
    }
    return PLAY;
  },
  switchACTIVEPLAYER: function() {
    if (this.ACTIVEPLAYER === 1) {
      this.PLAYER1 += this.CURRENTSCORE;
      this.ACTIVEPLAYER = 2;
    } else {
      this.PLAY += this.CURRENTSCORE;
      this.ACTIVEPLAYER= 1;
    }
  },
  hold: function() {
    this.switchACTIVEPLAYER();
    this.CURRENTSCORE = 0;
  }
};
//User Interface
$(document).ready(function() {
  var GAME = Object.create(DICE);
  var PLAYER1 WINS = 0;
  var PLAYER2 WINS = 0;
  var checkPLAYER = function() {
    var PLAYER = GAME.ACTIVEPLAYER;
    if (PLAYER === 1) {
      $("h2#PLAYER ONE").css('color', 'green');
      $("h2#PLAYER TWO").css('color', '#FFA500');
      $("#PLAYER ONEbuttons").hide();
      $("#PLAYER TWObuttons").show();
    } else {
      $("h2#PLAYER ONE").css('color', 'green');
      $("h2#PLAYER TWO").css('color', '#FFA500');
      $("#PLAYER ONEbuttons").hide();
      $("#PLAYER TWObuttons").show();
    }
  };

  checkPLAYER();


  var PLAYERPLAY = function() {
    var DICE1 = GAME.PLAYDICE1();
    var OUPUT = "&#x268" + (DICE1 - 1) + ";";
    $("#displayDICE1").html(OUPUT);
    $("#DICE").text(DICE1);
    changePLAYERAndRefreshScores();
  };

  $("button#PLAY").click(function() {
    PLAYERPLAY();
  });

  $("button#HOLD").click(function() {
    GAME.HOLD();
    changePLAYERAndRefreshScores();
  });

  $(document).keypress(function(event) {
    if ((event.which == 122) && (GAME.ACTIVEPLAYER === 1)) {
      PLAYERPLAY();
    } else if ((event.which == 47) && (GAME.ACTIVEPLAYER == 2)) {
      PLAYERPLAY();
    } else if ((event.which == 32)) {
      GAME.HOLD();
      changePlayerAndRefreshScores();
    }
  });


  var changePLAYERAndRefreshScores = function() {
    winCheck();
    refreshScores();
    checkPLAYER();
  };

  var winCheck = function() {
    if (GAME.PLAYER1 >= 100) {
      alert("Player one wins!!");
      GAME = Object.create(DICE);
      PLAYER1 WINS += 1;
      $("#PLAYER ONEWINS").text(PLAYER1 WINS);
    } else if (GAME.PLAYER2 >= 100) {
      alert("Player two wins!!");
      GAME = Object.create(DICE);
      PLAYER2 WINS += 1;
      $("#PLAYER TWOwins").text(PLAYER2 WINS);
    }
  };

  var refreshScores = function() {
    $("#PLAYER ONEscore").text(GAME.PLAYER1);
    $("#PLAYER TWOscore").text(GAME.PLAYER2);
    $("#current").text(GAME.CURRENTSCORE);
  };

});
