"use strict";

// defining values
const roll = document.querySelector("#roll-dice");
const hold = document.querySelector("#hold");
const newGameStart = document.querySelector("#new-game");
const img = document.querySelector("#img");
img.classList.add("hidden");
let currScore0 = Number(
  document.querySelector("#payer-current-score-0").innerHTML
);
let currScore1 = Number(
  document.querySelector("#payer-current-score-1").innerHTML
);
let score0 = Number(document.querySelector(".player-0-score").innerHTML);
let score1 = Number(document.querySelector(".player-1-score").innerHTML);
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
      document.querySelector("#payer-current-score-0").innerHTML = 0;
    } else {
      player1.classList.remove("active");
      player0.classList.add("active");
      document.querySelector("#payer-current-score-1").innerHTML = 0;
    }
  } else {
    if (player0.classList.contains("active")) {
      currScore0 += random;
      document.querySelector("#payer-current-score-0").innerHTML = currScore0;
    } else {
      currScore1 += random;
      document.querySelector("#payer-current-score-1").innerHTML = currScore1;
    }
  }
};

const holdGame = () => {
  if (player0.classList.contains("active")) {
    player0.classList.remove("active");
    player1.classList.add("active");
    score0 += currScore0;
    document.querySelector(".player-0-score").innerHTML = score0;
    document.querySelector("#payer-current-score-0").innerHTML = 0;
  } else {
    player1.classList.remove("active");
    player0.classList.add("active");
    score1 += currScore1;
    document.querySelector(".player-1-score").innerHTML = score1;
    document.querySelector("#payer-current-score-1").innerHTML = 0;
  }
};

const newGame = () => {
  document.querySelector(".player-0-score").innerHTML = 0;
  document.querySelector(".player-1-score").innerHTML = 0;
  document.querySelector("#payer-current-score-0").innerHTML = 0;
  document.querySelector("#payer-current-score-1").innerHTML = 0;
};

roll.addEventListener("click", () => playGame());

hold.addEventListener("click", () => holdGame());

newGameStart.addEventListener("click", () => newGame());
