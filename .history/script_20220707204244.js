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

let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let btnSelection = document.querySelectorAll('.selection');

btnSelection.forEach(btn => {
    btn.addEventListener('click', e => {
        playerSelection = e.dataset.SELECTIONS
    })    
})







