
game();

// Rock Paper Scissors game, player plays against a computer picking randomly
function game() {

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i < 6 ; i++) {

        // Function to intake player's hand, case insensitive
        function playerPlay() {
            playerHand = prompt("Rock, paper, scissors?").toLowerCase();

            while (playerHand !== "rock" && playerHand !== "paper" && playerHand !== "scissors") {
                playerHand = prompt("Input invalid; please pick from rock, paper or scissors.").toLowerCase();
            }

            return playerHand;    
        }

        // Function that randomly returns "Rock", "Paper" or "Scissors" i.e. computer's hand
        function computerPlay() {
            plays = ["rock", "paper", "scissors"];
            computerHand = plays[Math.floor(Math.random() * plays.length)];
            return computerHand;
        }

        let playerSelection = playerPlay();
        let computerSelection = computerPlay();
        console.log(playerSelection, computerSelection);

        // Function to play a round of Rock, Paper, Scissors between player's hand and computer's hand, winner scores 1
        function playRound (playerSelection, computerSelection) {
            while (playerSelection === computerSelection){
                alert("You tied with the computer, please try again.");
                playerSelection = playerPlay();
                computerSelection = computerPlay();
                console.log(playerSelection, computerSelection);
            }
            
            if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "rock")) {
                let roundWinner = "player";
                console.log(roundWinner);
                alert("You win! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection + ".");
                playerScore += 1;
            } else {
                let roundWinner = "computer";
                console.log(roundWinner);
                alert("You lose! " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection + ".");
                computerScore += 1;
            }

        }

        playRound(playerSelection, computerSelection);
        console.log(playerScore);
        console.log(computerScore);

    }

    // Determine winner from highest score
    let winner = "";
    if (playerScore > computerScore) {
        winner = "player";
        console.log(winner);
        alert("You win!!!");
    } else {
        winner = "computer";
        console.log(winner);
        alert("You lose!!!");
    }

}