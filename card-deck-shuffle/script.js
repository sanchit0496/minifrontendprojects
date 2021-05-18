const deck = document.getElementById('deck');

const card1 = document.getElementById('card1');

const card2 = document.getElementById('card2');

const card3 = document.getElementById('card3');

deck.addEventListener("mouseover", changes);

function changes(){
  card1.className = "card11";
  card2.className = "card22";
  card3.className = "card33";
}