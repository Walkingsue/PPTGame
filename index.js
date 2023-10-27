//Se juega desde la consola
//Hay un jugador vs la computadora

//Consigue un numero aleatorio y guardalo
//El numero sera igual a Piedra, papel o tijeras
let getComputerChoice = function () {
  const getRandomNumb = function () {
    return Math.floor(Math.random() * 10);
  };

  const randomNumb = getRandomNumb();

  /* if (randomNumb >= 3) {
      return "Rock";
    } else if (randomNumb >= 4 && randomNumb <= 6) {
      return "Paper";
    } else if (
      randomNumb >= 7 &&
      randomNumb <= 10
    ) {
      return "Scissors";
    } */

  if (randomNumb >= 7 && randomNumb <= 10) {
    return "Scissors";
  } else if (randomNumb >= 4 && randomNumb <= 6) {
    return "Paper";
  } else {
    return "Rock";
  }
};

const ComputerChoice = getComputerChoice();

console.log(ComputerChoice);
//La funcion trabaja correctamente

//Crear la funcion de jugador. Debe pedirle al jugador que introduzca una opcion  valida
//Guardar la opcion escogida

let getPlayerChoice = prompt(
  "Por favor escoge entre Piedra, Papel o Tijeras",
  "",
);

console.log(getPlayerChoice);

//Se compara la seleccion del jugador con la de la computadora
//Si jugador Piedra y maquina Papel. Gana Maquina
//Si jugador Piedra y maquina Piedra. Empate
//Si jugador Piedra y maquina Tijeras. Gana jugador
//LLevar un marcador
//Repetir este proceso con cada una de las opciones
