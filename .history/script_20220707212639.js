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
let playerSelected = [...playerSelection];
// let rockBtn = document.querySelector('.rock');
// let paperBtn = document.querySelector('.paper');
// let scissorsBtn = document.querySelector('.scissors');
console.log(playerSelected[0]);
for( let i =0; i<playerSelected.length;i++){
    console.log(playerSelected[i]);
}








