const selection = [
    {
        name: 'rock',
        beats: 'scissors',
    },
    {
        name: 'paper',
        beats: 'rock',
    },
    {
        name: 'scissors',
        beats: 'paper',
    }
]

let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let gameIsRunning = true;
let gameIsOver = false;
let gameIsTied = false;
let gameIsWon = false;
let gameIsLost = false;
let gameIsDraw = false;
let gameIsStarted = false;

