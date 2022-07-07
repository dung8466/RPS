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
    btn.addEventListener('click', selection => {
        selection = SELECTIONS.find(selection => selection.name === playerSelection);
        playerSelection = selection.name;
        computerSelection = SELECTIONS[Math.floor(Math.random() * SELECTIONS.length)].name;
        let playerSelectionImg = document.querySelector('.player-result');
        let computerSelectionImg = document.querySelector('.computer-result');
        playerSelectionImg.append(playerSelection.emoji);
        computerSelectionImg.append(computerSelection.emoji);
        if(playerSelection === computerSelection.beats){
            playerScore++;
            document.querySelector('.player-score').textContent = playerScore;
        }
        else if(computerSelection === playerSelection.beats){
            computerScore++;
            document.querySelector('.computer-score').textContent = computerScore;
        }
        else{
            playerScore = playerScore;
            computerScore = computerScore;
        }
    })    
})







