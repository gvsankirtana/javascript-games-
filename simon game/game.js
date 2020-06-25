
var buttonColours = ["red","blue","green","yellow"];//values of the button stored
var gamePattern = [];//keep game clicked pattern array empty
var userPattern = [];//user clicked pattern array empty
var level = 0;//initial level is 0
var started = false;//start to false
$(document).keypress(function() {//restart the game or start the game
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();//call the sequence function to indicate the level
      started = true;//make the started to true
    }
  });
  $(".btn").click(function(){//this triggers for which event takes place
    var clickedColor = $(this).attr("id");//when button clicked the variable stores the id of the clicked
    userPattern.push(clickedColor);//pushes the colors clicked by user 
    playSound(clickedColor);//plays the soung
    animate(clickedColor);//animation
    answerGame(userPattern.length - 1)//value takes in the last position of user clicked array
});
function answerGame(currentLevel) {//checks the simon game results
    if (gamePattern[currentLevel] === userPattern[currentLevel]) {//random game pattern last element gets compared with user clicked last elemnt array
      console.log("success");//if both the elements equal it is a success
      if (userPattern.length === gamePattern.length){//after the array of both lenghts come equal
        setTimeout(function () {
          nextSequence();//next level starts
        }, 1000);//after 1 second time
      }
    } else {
      console.log("wrong");
      playSound("wrong");
      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
      $("#level-title").text("Game Over, Press Any Key to Restart");
      startover();
    }
}
function nextSequence(){
    userPattern = []//each time the level increments the userPattern always gets empty and the last element filled in this empty one will be checked 
    level++;//level increments to 1 each time the length of both the arrays come equal
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);//random colors generated
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
 }
function playSound(name){//audio when buttons are pressed
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
function animate(name1){//animation
  $("#"+ name1).addClass("pressed");
  setTimeout(() => {
      $("#"+name1).removeClass("pressed");
  }, 100);
}
function startover(){//when game over
    level = 0;
    started = false;
    gamePattern = [];
}
  

  