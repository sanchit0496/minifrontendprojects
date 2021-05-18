const currency_one = document.getElementById('currency-one');
const currency_two = document.getElementById('currency-two');
const amount_one = document.getElementById('amount-one');
const amount_two = document.getElementById('amount-two');

const rate = document.getElementById('rate');
const swap = document.getElementById('swap');

function calculate(){
  
  const curr_one_value = currency_one.value;
  const curr_two_value = currency_two.value;
  
 
  fetch(`https://api.exchangerate-api.com/v4/latest/${curr_one_value}`)
    .then(res => res.json())
    .then(data => {                                                                                                     
       const rate_wp = data.rates[curr_two_value];
       rate.innerText = `1 ${curr_one_value} = ${rate_wp} ${curr_two_value}`;
    
  
    amount_two.value = (amount_one.value * rate_wp).toFixed(2); 
    
  });

  
}


//event listeners
currency_one.addEventListener('change', calculate);
currency_two.addEventListener('change', calculate);
amount_one.addEventListener('input', calculate);
amount_two.addEventListener('input', calculate);

swap.addEventListener('click', () => {
  const temp = currency_one.value;
  currency_one.value = currency_two.value;
  currency_two.value = temp;
  calculate();
});

calculate();