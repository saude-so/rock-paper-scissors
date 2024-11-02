const options = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

const humanScoreDisplay = document.getElementById('humanScore');
const computerScoreDisplay = document.getElementById('computerScore');
const roundResult = document.getElementById('roundResult');
const restartButton = document.getElementById('restartButton');

function getComputerChoice() {
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice;
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
        roundResult.innerText = "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        roundResult.innerText = `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        roundResult.innerText = `You lose! ${computerChoice} beats ${humanChoice}`;
    }

    updateScores();
}

function updateScores() {
    humanScoreDisplay.innerText = humanScore;
    computerScoreDisplay.innerText = computerScore;

    if (humanScore >= 3 || computerScore >= 3) {
        announceWinner();
    }
}

function announceWinner() {
    if (humanScore > computerScore) {
        roundResult.innerText = "Congratulations! You won the game!";
    } else {
        roundResult.innerText = "Sorry! The computer won the game!";
    }
    restartButton.classList.remove('hidden');
    disableButtons();
}

function disableButtons() {
    document.querySelectorAll('.choice').forEach(button => {
        button.disabled = true;
    });
}

function restartGame() {
    humanScore = 0;
    computerScore = 0;
    humanScoreDisplay.innerText = humanScore;
    computerScoreDisplay.innerText = computerScore;
    roundResult.innerText = "";
    restartButton.classList.add('hidden');
    enableButtons();
}

function enableButtons() {
    document.querySelectorAll('.choice').forEach(button => {
        button.disabled = false;
    });
}

document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.id);
    });
});

restartButton.addEventListener('click', restartGame);
