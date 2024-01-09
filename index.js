//Se juega desde la consola
//Hay un jugador vs la computadora

//Consigue un numero aleatorio y guardalo
//El numero sera igual a Piedra, papel o tijeras
function getComputerChoice() {
  const getRandomNumb = () => {
    return Math.floor(Math.random() * 10);
  };

  const randomNumb = getRandomNumb();

  if (randomNumb >= 7 && randomNumb <= 10) {
    return "Scissors";
  } else if (randomNumb >= 4 && randomNumb <= 6) {
    return "Paper";
  } else {
    return "Rock";
  }
}

//La funcion trabaja correctamente

let computerSelection = getComputerChoice().toLowerCase();
console.log(computerSelection);

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      return "You win";
    } else if (computerSelection === "paper") {
      return "You lose";
    } else {
      return "Tie";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return "You win";
    } else if (computerSelection === "scissors") {
      return "You lose";
    } else {
      return "Tie";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      return "You win";
    } else if (computerSelection === "rock") {
      return "You lose";
    } else {
      return "Tie";
    }
  }
}

//User interface

const BtnValue = document.querySelectorAll(".sqr");

BtnValue.forEach(function (BtnValue) {
  BtnValue.addEventListener("click", () => {
    let playerSelection = BtnValue.textContent.toLocaleLowerCase();
    let RoundRes = playRound(playerSelection, computerSelection);
    result(RoundRes);
    console.log("Player score is:", PScore);
    console.log("Computer score is:", CompScore);

    DisplayMsg();
  });
});

let PScore = 0;
let CompScore = 0;

function result(RoundRes) {
  if (RoundRes === "You win") {
    ++PScore;
  } else if (RoundRes === "You lose") {
    ++CompScore;
  }
}

function DisplayMsg(PScore, CompScore) {
  if (PScore === 5) {
    alert("Victory");
  } else if (CompScore === 5) {
    alert("Defeat");
  }
}
