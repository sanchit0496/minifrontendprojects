document.getElementById('btn').addEventListener('click', compare);

let guess = 1;
document.getElementById('guess').innerHTML = "Guesses Left: " + guess;

function compare(){

    let comp = Math.floor(Math.random() * 10) + 1;
    let human = document.getElementById('user').value;
    
    if(comp == human){
        document.getElementById('result').innerHTML = 'Similar';
    }else{
        document.getElementById('guess').innerHTML = guess-1;
        guess = guess -1;
        document.getElementById('result').innerHTML = 'Different';
        if(guess == 0){
            document.getElementById('app').remove();
            document.getElementById('relo').style.visibility = 'visible'; 

            document.getElementById('relo').innerHTML = `
            <h2> You ran out of guesses! </h2>  <br>
            <button onclick = 'location.reload()'>Click Here To Play Again</button>
            `;
        }
    }
  
}

