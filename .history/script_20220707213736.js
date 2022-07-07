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
let playerChoice ;
let computerChoice';
let winner;
Array.from(playerSelection).forEach(selection => {
    selection.addEventListener('click', () => {
        playerChoice = selection.dataset.selection;
        computerChoice = getComputerChoice();
        let winner = getWinner(playerChoice, computerChoice);
        displayWinner(winner);
    }
    )
});

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    return selections[randomNumber].name;
}
function getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'tie';
    } else if (selections[0].name === playerChoice) {
        return 'player';
    } else if (selections[0].name === computerChoice) {
        return 'computer';
    }
}
function displayWinner(winner) {
    let playerChoice = document.querySelector('.player-choice');
    let computerChoice = document.querySelector('.computer-choice');
    let winnerText = document.querySelector('.winner-text');
    if (winner === 'player') {
        playerChoice.innerHTML = selections[0].emoji;
        computerChoice.innerHTML = selections[1].emoji;
        winnerText.innerHTML = 'You win!';
    } else if (winner === 'computer') {
        playerChoice.innerHTML = selections[1].emoji;
        computerChoice.innerHTML = selections[0].emoji;
        winnerText.innerHTML = 'You lose!';
    } else {
        playerChoice.innerHTML = selections[2].emoji;
        computerChoice.innerHTML = selections[2].emoji;
        winnerText.innerHTML = 'It\'s a tie!';
    }
}







