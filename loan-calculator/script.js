//for submission
document.getElementById('loan-form').addEventListener('submit', calculateResult);

function calculateResult(e){

  //getting the UI variables
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const interestCalculation = parseFloat(interest.value)/100/12;
  const paymentCalculation = parseFloat(years.value).toFixed(2);

  //compute the monthly payment
  const x = Math.pow(1 + interestCalculation, paymentCalculation);
  const monthly = (principal * x * interestCalculation)/(x-1);

  if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * paymentCalculation).toFixed(2);
    totalInterest.value = ((monthly * paymentCalculation) - principal).toFixed(2);
  }else{
    errorMessage('Please enter correct figures');
  }

  e.preventDefault();
}

//error method
function errorMessage(error){
  
  //create div
  const errorDiv = document.createElement('div');

  //get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  //adding class
  errorDiv.className = 'alert alert-danger';
  errorDiv.appendChild(document.createTextNode(error));

  //insert error above the heading
  card .insertBefore(errorDiv, heading);

  setTimeout(clearError, 5000);
}

function clearError(){
  document.querySelector('.alert').remove();
}