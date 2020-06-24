var userClickedPattern = [];
var buttonColors = ["red","blue","green","yellow"];
var gamePattern = [];
var started= false;
var level = 0;
$(document).on("keypress", function(){
    //if(e.which == 13){
       // $("body").append("<p>You've pressed the enter key!</p>");
    //}
    if(!started){
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
    
});
function nextSequence(){
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random()*(3-0+1));
    var randomChosen = buttonColors[randomNumber]
   gamePattern.push(randomChosen);
    $("#"+ randomChosen).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
   playSound(randomChosen);
}
$(".btn").click(function(){
    var userChosen = $(this).attr("id");
    userClickedPattern.push(userChosen);
    playSound(userChosen);
    animatePress(userChosen);
    checkAnswer(userClickedPattern.length-1);
    //alert("clicked");
})
function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
     audio.play();
}
function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
   setTimeout(()=> {
     $("#" + currentColor).removeClass("pressed");
   }, 100);
  }
 function checkAnswer(currentLevel){
  if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
      console.log("success");
  }
  if (userClickedPattern.length === gamePattern.length){
    setTimeout(function () {
      nextSequence();
    }, 1000);
  }
  else{
    console.log("wrong");
      playSound("wrong");
      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
      $("#level-title").text("Game Over, Press Any Key to Restart");
      startOver();
    }
  }
  function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
  }
  
