let cardOne = 1;
let cardTwo = 11;
let cardSum = cardOne + cardTwo;
let hasBlackjack = false;
let isAlive = true;

let message = "";

let messageEl = document.getElementById("message-el");

document.getElementById("card1-el").textContent += " " + cardOne;
document.getElementById("card2-el").textContent += " " + cardTwo;
document.getElementById("sum-el").textContent += " " + cardSum;

function startGame() {
  if (cardSum < 21) {
    message = "Do you want to draw another card?";
  } else if (cardSum === 21) {
    message = "Wao!, you have a Blacjack";
    hasBlackjack = true;
    console.log(hasBlackjack);
  } else {
    message = "You lost the game";
    isAlive = false;
    console.log(isAlive);
  }
  messageEl.textContent = message;
  console.log(message);
}
