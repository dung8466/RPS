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

// let rockBtn = document.querySelector('.rock');
// let paperBtn = document.querySelector('.paper');
// let scissorsBtn = document.querySelector('.scissors');

playerSelection.forEach(selection => {
    selection.addEventListener('click', () =>{
        console.log(playerSelection[0]);
    })
})







