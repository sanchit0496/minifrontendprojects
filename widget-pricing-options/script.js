const plans = document.getElementById('plans');
const pprice = document.getElementById('proprice');
const mprice = document.getElementById('masterprice');


plans.addEventListener("click", planToggle);

var click = 0;
function planToggle(){
  click++;
  if(click % 2 == 1){
    plans.innerHTML = "Monthly";
    pprice.innerHTML = "$19.99";
    mprice.innerHTML = "$10.99";
  }else{  
    plans.innerHTML = "Annually";
    pprice.innerHTML = "$259.99";
    mprice.innerHTML = "$149.99";
  }
}
