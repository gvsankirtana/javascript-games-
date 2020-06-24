var userClickedPattern = [];
var buttonColors = ["red","blue","green","yellow"];
var gamePattern = [];
$(".btn").click(function(){
    var userChosen = $(this).attr("id");
    userClickedPattern.push(userChosen);
    playSound(userChosen);
    //alert("clicked");
})
function nextSequence(){
    var randomNumber = Math.floor(Math.random()*(3-0+1));
    var randomChosen = buttonColors[randomNumber]
   gamePattern.push(randomChosen);
    $("#"+ randomChosen).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
   playSound(randomChosen);
}
function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
     audio.play();
}
function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }
  