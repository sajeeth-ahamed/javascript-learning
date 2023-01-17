// Let's define the game play variable with 'confirm'

let playGame = confirm("Shall we play the game?");

if (playGame) {
  let playerChoice = prompt("Play by typing rock or paper or scissor");

  if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();

    if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissor") {
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer = computerChoice === 1 ? "rock"
      : computerChoice === 2? "paper"
      : "scissor";

      let gameResult = playerOne === computer ? "TIE!!"
      : playerOne === "rock" && computer === "paper"? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`

      : playerOne === "paper" && computer === "scissor" ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`

      : playerOne === "scissor" && computer === "rock"? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`

      : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`;
      alert(gameResult);

      let playAgain = confirm("Would you like to play again?");

      playAgain ? location.reload()
      : alert("Thanks for playing!");

    } else {
      alert("You haven't enter the correct values!!");
    }

  } else{
    alert("You have not entered anything");
  }

} else {
  alert("Alright, let's see next time!" );
}   
  