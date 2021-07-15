//Begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
function computerPlay() {
  randomNumberFromOneToThree = Math.floor(Math.random() * 3) + 1;
  if (randomNumberFromOneToThree === 1) return "Rock";
  if (randomNumberFromOneToThree === 2) return "Paper";
  if (randomNumberFromOneToThree === 3) return "Scissors";
}
