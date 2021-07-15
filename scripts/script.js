//Begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
function computerPlay() {
  let randomNumberFromOneToThree = Math.floor(Math.random() * 3) + 1;
  if (randomNumberFromOneToThree === 1) return "Rock";
  if (randomNumberFromOneToThree === 2) return "Paper";
  if (randomNumberFromOneToThree === 3) return "Scissors";
}
//Write a function that plays a single round of Rock Paper Scissors. 
//The function should take two parameters - the playerSelection and computerSelection
//then return a string that declares the winner of the round

function playGame(playerSelection, computerSelection){

}