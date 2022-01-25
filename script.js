
game();

// // Create function game()
function game() {
    
    // **

    // Prompt user to input a string i.e. "Rock", "Paper" or "Scissors" - input should be case-insensitive
    // Validate input for rock, paper or scissors
        // While invalid, prompt user to input again
    // Create variable playerSelection and assign string to this 
    // console.log to ensure results are correct

    let playerScore = 0;
    let computerScore = 0;

    // Play game 5x in total
    for (let i = 1; i < 6 ; i++) {

        function playerPlay() {
            playerHand = prompt("Rock, paper, scissors?").toLowerCase();

            while (playerHand !== "rock" && playerHand !== "paper" && playerHand !== "scissors") {
                playerHand = prompt("Input invalid; please pick from rock, paper or scissors.").toLowerCase();
            }

            return playerHand;    
        }

        // Create variable computerSelection and assign it computerPlay()
        // Create function computerPlay()
            // Randomly return "Rock", "Paper" or "Scissors"
            // console.log to ensure results are correct
        function computerPlay() {
            plays = ["rock", "paper", "scissors"];
            computerHand = plays[Math.floor(Math.random() * plays.length)];
            return computerHand;
        }

        let playerSelection = playerPlay();
        let computerSelection = computerPlay();
        console.log(playerSelection, computerSelection);


        // Create function playRound(playerSelection, computerSelection)
            // While there is a tie i.e. playerSelection === computerSelection
                // Prompt user to input a hand again, and have computer reselect its hand
            // Determine whether playerSelection or computerSelection wins
                // if rock vs scissors || scissors vs paper || paper vs rock => player wins
                // if rock vs paper || paper vs scissors || scissors vs rock => player loses
                // console.log to display results for the round
            // Return string that declares if player wins or loses e.g. "You Lose! Paper beats Rock"
        // Determine player and computer score
            // if player > computer, player wins
            // else player loses

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
    // console.log to display winner at the end
    // Return string that declares if player wins or loses overall
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