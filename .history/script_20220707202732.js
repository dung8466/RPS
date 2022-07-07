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
let computerSelection = SELECTIONS[Math.floor(Math.random() * SELECTIONS.length)];
let playerScore = document.querySelector('.player-score');
let computerScore = document.querySelector('.computer-score');
let result = Math.max(playerScore.innerHTML, computerScore.innerHTML);
let playerScoreNumber = parseInt(playerScore.innerHTML);
let computerScoreNumber = parseInt(computerScore.innerHTML);

playerSelection.forEach(selection => {
    selection.addEventListener('click', () => {
        let playerSelection = selection.dataset.selection;
        let computerSelection = SELECTIONS[Math.floor(Math.random() * SELECTIONS.length)];
        let result = compare(playerSelection, computerSelection);
        if (result === 'player') {
            playerScoreNumber++;
            playerScore.innerHTML = playerScoreNumber;
        } else if (result === 'computer') {
            computerScoreNumber++;
            computerScore.innerHTML = computerScoreNumber;
        } else {
            console.log('tie');
        }
    }
    )
}






