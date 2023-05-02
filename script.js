"use strict";

// defining values
const roll = document.querySelector("#roll-dice");
const img = document.querySelector("#img");
img.classList.add("hidden");
let currScore0 = document.querySelector("#payer-current-score-0").value;
let currScore1 = document.querySelector("#payer-current-score-1").value;
let player0 = document.querySelector("#player-0");
let player1 = document.querySelector("#player-1");
// function to start game
const playGame = () => {
  let random = Number(Math.floor(Math.random() * 6) + 1);
  let dice = random;
  img.classList.remove("hidden");
  img.attributes[1].value = `./dice-${random}.png`;
  if (dice === 1) {
    if (player0.classList.contains("active")) {
      player0.classList.remove("active");
      player1.classList.add("active");
    } else {
      player1.classList.remove("active");
      player0.classList.add("active");
    }
  } else {
    console.log("done");
  }
};

roll.addEventListener("click", () => playGame());
