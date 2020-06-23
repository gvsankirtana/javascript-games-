
document.addEventListener("keypress", function(event){
 makeSound(event.key);
});

for(i=0;i<=document.querySelectorAll("button").length;i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){
    //this.style.color="white";//this triggers all the button objects here or triggers the event
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
});
}
function makeSound(key){
    switch(key){
        case "w":
          var audio = new Audio('sounds/tom-1.mp3');
          audio.play();
          break;
        case "a":
          var audio = new Audio('sounds/tom-2.mp3');
          audio.play();
          break;
        case "s":
          var audio = new Audio('sounds/tom-3.mp3');
          audio.play();
          break; 
        case "d":
          var audio = new Audio('sounds/tom-4.mp3');
          audio.play();
          break;
        case "j":
          var audio = new Audio('sounds/crash.mp3');
          audio.play();
          break;
        case "k":
          var audio = new Audio('sounds/kick-bass.mp3');
          audio.play();
          break;
        case "l":
          var audio = new Audio('sounds/snare.mp3');
          audio.play();
          break;
          default: console.log(buttonInnerHTML);
      }
}