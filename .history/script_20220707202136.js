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

let playerSelection = document.querySelector('[data-selection]');
let computerSelection = SELECTIONS[Math.floor(Math.random() * SELECTIONS.length)];
let playerScore = document.querySelector('[data-player-score]');
let computerScore = document.querySelector('[data-computer-score]');
let result = Math.max(playerScore.innerHTML, computerScore.innerHTML);

playerSelection.forEach(playerSelection => {    
    playerSelection.add
});



