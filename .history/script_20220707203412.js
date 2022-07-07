const SELECTIONS = [
    {
        name: 'rock',
        emoji: '🗿',
        beats: 'scissors',
    },
    {
        name: 'paper',
        emoji: '📜',
        beats: 'rock',
    },
    {
        name: 'scissors',
        emoji: '✂',
        beats: 'paper',
    }
]

let playerSelection = document.querySelectorAll('.selection');
let computerSelection;
let playerScore = document.querySelector('.player-score');
let computerScore = document.querySelector('.computer-score');
let result = Math.max(playerScore.innerHTML, computerScore.innerHTML);
let playerScoreNumber = parseInt(playerScore.innerHTML);
let computerScoreNumber = parseInt(computerScore.innerHTML);

playerSelection.forEach(selection => {
    selection.addEventListener('click', () => {
        playerSelection = selection.dataset.selection;
        computerSelection = SELECTIONS[Math.floor(Math.random() * SELECTIONS.length)];
        if(playerSelection === computerSelection.beats) {
            playerScoreNumber++;
            playerScore.innerHTML = playerScoreNumber;
            result = Math.max(playerScoreNumber, computerScoreNumber);
        }
        else if(computerSelection === playerSelection.beats){
            computerScoreNumber++;
            computerScore.innerHTML = computerScoreNumber;
            result = Math.max(playerScoreNumber, computerScoreNumber);
        }
        else{
            result = Math.max(playerScoreNumber, computerScoreNumber);
        }
    })
}
if(result == 5){
    alert("Game over!");
    playerScore = 0;
    computerScore = 0;
}






