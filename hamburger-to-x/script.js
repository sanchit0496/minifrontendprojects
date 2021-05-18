const a = document.getElementById('container');
const b1 = document.getElementById('bar1');
const b2 = document.getElementById('bar2');
const b3 = document.getElementById('bar3');
const d = document.getElementById('fullpage');


function func(){
  b1.classList.toggle('change'); 
  b2.classList.toggle('change'); 
  b3.classList.toggle('change'); 
  d.classList.toggle('fullpageview');
}