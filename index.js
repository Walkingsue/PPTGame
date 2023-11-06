//Se juega desde la consola
//Hay un jugador vs la computadora

//Consigue un numero aleatorio y guardalo
//El numero sera igual a Piedra, papel o tijeras
function getComputerChoice() {
  const getRandomNumb = function () {
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

function playRound(playerSelection, computerSelection) {
  let result;
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
      ++playerSelection;
      return "You win";
    } else if (computerSelection === "rock") {
      return "You lose";
    } else {
      return "Tie";
    }
  }
}

let computerSelection = getComputerChoice().toLowerCase();
console.log(computerSelection);

let playerSelection = prompt("Choose: Rock/Paper/Scissors", "").toLowerCase();

console.log(playRound(playerSelection, computerSelection));

/*playRound funciona correctamente hasta el momento, falta agregar las opciones de tijeras y papel */

function game() {
  console.log(playRound());
  console.log(playRound());
  console.log(playRound());
  console.log(playRound());
  console.log(playRound());
}

console.log(game());
/* se intenta llamar la funcion anterior pero no retorna el mismo resultado
 investigar */
