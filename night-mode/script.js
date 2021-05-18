// function nightMode(){
//   const a = document.getElementById('test');
//   a.className('nightm');
// }

const a = document.getElementById('night');


a.addEventListener("click", function() {
  let b = document.getElementById('test');
  b.classList.toggle("nightm");
});