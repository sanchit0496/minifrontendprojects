const hover = document.querySelector(".heart");

const audio = document.querySelector("audio");

hover.addEventListener("mouseenter",function(){
  audio.play();
})