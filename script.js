
game();

// Rock Paper Scissors game, player plays against a computer picking randomly
function game() {

    let playerScore = 0;
    let computerScore = 0;
    let playerSelection = "";
    let computerSelection = computerPlay();

    // Function that randomly returns "Rock", "Paper" or "Scissors" i.e. computer's hand
    function computerPlay() {
        plays = ["rock", "paper", "scissors"];
        computerHand = plays[Math.floor(Math.random() * plays.length)];
        // console.log(computerHand);
        return computerHand;
    };

    // Event listener for buttons to trigger round of RPS to start
    const rockButton = document.querySelector("#rock-button");
    const paperButton = document.querySelector("#paper-button");
    const scissorsButton = document.querySelector("#scissors-button");

    rockButton.addEventListener("click", playerSelectionRock);
    paperButton.addEventListener("click", playerSelectionPaper);
    scissorsButton.addEventListener("click", playerSelectionScissors);

    function playerSelectionRock() {
        playRound("rock", computerPlay());
    }
    function playerSelectionPaper() {
        playRound("paper", computerPlay());
    }
    function playerSelectionScissors() {
        playRound("scissors", computerPlay());
    }

    // Function to play a round of Rock, Paper, Scissors between player's hand and computer's hand, winner scores 1
    function playRound (playerSelection, computerSelection) {
        while (playerSelection === computerSelection){
            alert("You tied with the computer, please try again.");
            break;
        }

        console.log(playerSelection, computerSelection);
        
        if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "rock")) {
            let roundWinner = "player";
            console.log(roundWinner);
            alert("You win! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection + ".");
            playerScore += 1;
        } else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
            let roundWinner = "computer";
            console.log(roundWinner);
            alert("You lose! " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection + ".");
            computerScore += 1;
        }

        console.log(playerScore);
        console.log(computerScore);

        displayScores();

        isWinner(playerScore, computerScore);
    };

    // Function to display current scores
    function displayScores() {
        const pScores = document.querySelector(".p-scores");
        // const pUpdatedScores = document.createElement("p");
        // pUpdatedScores.classList.add("p-scores");
        pScores.textContent = "Player: " + playerScore + "\r\n" + "Computer: " + computerScore;
        pScores.setAttribute('style', 'white-space: pre;');
        // pUpdatedScores.textContent = "Player: " + playerScore + "\r\n" + "Computer: " + computerScore;
        // pScores.parentNode.replaceChild(pUpdatedScores, pScores);
    }

    // Function to display round results


    // Determine winner from highest score
    function isWinner (playerScore, computerScore) {
        let winner = "";

        if (playerScore === 5 || computerScore === 5) {

            if (playerScore > computerScore) {
                winner = "player";
                console.log(winner);
                alert("You win!!!");
            } else {
                winner = "computer";
                console.log(winner);
                alert("You lose!!!");
            }

            rockButton.removeEventListener("click", playerSelectionRock);
            paperButton.removeEventListener("click", playerSelectionPaper);
            scissorsButton.removeEventListener("click", playerSelectionScissors);
        }
    }

};