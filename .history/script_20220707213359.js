const selections = [
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

let playerSelection = document.querySelectorAll('.selections');

Array.from(playerSelection).forEach(selection => {
    selection.addEventListener('click', () => {
        let playerChoice = selection.dataset.selection;
        let computerChoice = getComputerChoice();
        let winner = getWinner(playerChoice, computerChoice);
        displayWinner(winner);
    }
    )
});








