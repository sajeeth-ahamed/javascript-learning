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

  } else {
    alert("Maybe next time let's play :)");
  }

}else {
  alert("Alright, will see you next time!");
}
}