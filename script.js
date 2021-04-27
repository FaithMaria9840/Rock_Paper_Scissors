/*Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters -
the playerSelection and computerSelection - and then return a string that declares the winner of the round 
like so: "You Lose! Paper beats Rock"
Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any 
other variation).*/
/*Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that 
keeps score and reports a winner or loser at the end.*/

function computerPlay() {
    return 'Rock' || 'Paper' || 'Scissors';
}


    function playRound(playerSelection, computerSelection) {
    if (playerSelection  === 'Scissors' && computerSelection === 'Paper' ||
    playerSelection  === 'Paper' && computerSelection === 'Rock' ||
    playerSelection  === 'Rock' && computerSelection === 'Scissors') {
            return 'you win';
       }else if (playerSelection  === 'Paper' && computerSelection === 'Paper' ||
       playerSelection  === 'Rock' && computerSelection === 'Rock' ||
       playerSelection === 'Scissors' && computerSelection === 'Scissors') {
           return 'a tie';
       }else {
           return 'you lose';
       }
    }
    function game() {
        let playerScore = 0;
        let computerScore = 0;

        for (let i=0; i < 5; i++) {
            const playerSelection = prompt("Rock, Paper, or Scissors?");
            const computerSelection = computerPlay();
            console.log(`Computer played "${computerSelection}"`);
            const consoleOutput = playRound(playerSelection, computerSelection);
            console.log(consoleOutput);
            if (consoleOutput.includes("win", 3)) {
                ++playerScore;
              }else {
                ++computerScore;
              }
            }
            if (playerScore < computerScore){
              console.log("You lose the game.");
            } else if (playerScore > computerScore) {
              console.log("You win the game");
            } else if(playerScore === computerScore) {
              console.log("You are tied");
            }
            }
    
 
