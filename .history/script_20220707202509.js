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
let com





