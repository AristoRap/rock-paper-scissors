//Begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
function computerPlay() {
  let randomNumberFromOneToThree = Math.floor(Math.random() * 3) + 1;
  if (randomNumberFromOneToThree === 1) return "Rock";
  if (randomNumberFromOneToThree === 2) return "Paper";
  return "Scissors";
}
//Write a function that plays a single round of Rock Paper Scissors.
//The function should take two parameters - the playerSelection and computerSelection
//then return a string that declares the winner of the round

function playRound(playerSelection, computerSelection = computerPlay()) {
  if (typeof playerSelection !== 'string')
    return "Please select Rock, Paper or Scissors to play";

  const playerSelectionLowerCase = playerSelection.toLowerCase();
  const playerSelectionUpperCase = playerSelection.toUpperCase();
  const playerSelectionFormatted = `${playerSelectionUpperCase.slice(0,1)}${playerSelectionLowerCase.slice(1)}`;
 if (
    playerSelectionFormatted !== "Rock" &&
    playerSelectionFormatted !== "Paper" &&
    playerSelectionFormatted !== "Scissors"
  )
    return "Please select Rock, Paper or Scissors to play";

  if (playerSelectionFormatted === computerSelection) return "It's a draw!";

  if (playerSelectionFormatted === "Rock") {
    if (computerSelection === "Scissors") {
      return `You win! ${playerSelectionFormatted} beats ${computerSelection}`;
    } else {
      return `You lose! ${computerSelection} beats ${playerSelectionFormatted}`;
    }
  }

  if (playerSelectionFormatted === "Paper") {
    if (computerSelection === "Rock") {
      return `You win! ${playerSelectionFormatted} beats ${computerSelection}`;
    } else {
      return `You lose! ${computerSelection} beats ${playerSelectionFormatted}`;
    }
  }

  if (playerSelectionFormatted === "Scissors") {
    if (computerSelection === "Paper") {
      return `You win! ${playerSelectionFormatted} beats ${computerSelection}`;
    } else {
      return `You lose! ${computerSelection} beats ${playerSelectionFormatted}`;
    }
  }
}