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
//const playerSelectionFormatted = playerSelection.toLowerCase();

//Function to check if input is string
function checkInputIsString(playerSelection) {
  if (typeof playerSelection !== "string") {
    return false;
  } else return true;
}

//Function to check if input has acceptable values
function checkInputValueIsValid(playerSelection) {
  if (
    checkInputIsString(playerSelection) === true &&
    playerSelection.toLowerCase() !== "rock" &&
    playerSelection.toLowerCase() !== "paper" &&
    playerSelection.toLowerCase() !== "scissors"
  ) {
    return false;
  } else return true;
}

//Play one round of the game
function playRound(playerSelection, computerSelection = computerPlay()) {
  if (
    checkInputIsString(playerSelection) === false ||
    checkInputValueIsValid(playerSelection) === false
  ) {
    return "Please select Rock, Paper or Scissors to play";
  }

  const formattedInput =
    playerSelection.toUpperCase().slice(0, 1) +
    playerSelection.toLowerCase().slice(1);

  if (formattedInput === computerSelection) return "It's a draw!";

  if (formattedInput === "Rock") {
    if (computerSelection === "Scissors") {
      return `You win! ${formattedInput} beats ${computerSelection}`;
    } else {
      return `You lose! ${computerSelection} beats ${formattedInput}`;
    }
  }

  if (formattedInput === "Paper") {
    if (computerSelection === "Rock") {
      return `You win! ${formattedInput} beats ${computerSelection}`;
    } else {
      return `You lose! ${computerSelection} beats ${formattedInput}`;
    }
  }

  if (formattedInput === "Scissors") {
    if (computerSelection === "Paper") {
      return `You win! ${formattedInput} beats ${computerSelection}`;
    } else {
      return `You lose! ${computerSelection} beats ${formattedInput}`;
    }
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  
  let playerInput = prompt(`Make a choice - Rock | Paper | Scissors`);
  const roundOne = playRound(playerInput, (computerSelection = computerPlay()));
  console.log(roundOne);
  if (roundOne.slice(4, 5) === "w") {
    playerScore++;
  } else if (roundOne.slice(4, 5) === "l") {
    computerScore++;
  }

  playerInput = prompt(`Make a choice - Rock | Paper | Scissors`);
  const roundTwo = playRound(playerInput, (computerSelection = computerPlay()));
  console.log(roundTwo);
  if (roundTwo.slice(4, 5) === "w") {
    playerScore++;
  } else if (roundTwo.slice(4, 5) === "l") {
    computerScore++;
  }

  playerInput = prompt(`Make a choice - Rock | Paper | Scissors`);
  const roundThree = playRound(playerInput,(computerSelection = computerPlay()));
  console.log(roundThree);
  if (roundThree.slice(4, 5) === "w") {
    playerScore++;
  } else if (roundThree.slice(4, 5) === "l") {
    computerScore++;
  }

  playerInput = prompt(`Make a choice - Rock | Paper | Scissors`);
  const roundFour = playRound(playerInput, (computerSelection = computerPlay()));
  console.log(roundFour);
  if (roundFour.slice(4, 5) === "w") {
    playerScore++;
  } else if (roundFour.slice(4, 5) === "l") {
    computerScore++;
  }

  playerInput = prompt(`Make a choice - Rock | Paper | Scissors`);
  const roundFive = playRound(playerInput, (computerSelection = computerPlay()));
  console.log(roundFive);
  if (roundFive.slice(4, 5) === "w") {
    playerScore++;
  } else if (roundFive.slice(4, 5) === "l") {
    computerScore++;
  }

  if (playerScore > computerScore) {
    console.log(
      `You won - Congratulations! You: ${playerScore} Computer: ${computerScore} `
    );
  } else if (playerScore < computerScore) {
    console.log(
      `You lost - Better luck next time! You: ${playerScore} Computer: ${computerScore} `
    );
  } else console.log(`Seems like you tied - What are the odds!?`);
}

