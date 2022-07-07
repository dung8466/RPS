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
const images = ["src/rock.jpg", "src/paper.jpg", "src/scissors.jpg"]
];

document.addEventListener('DOMContentLoaded', _ => {
  const randImageIndex = ~~(Math.random() * images.length);
  document.getElementById('randImg').src = images[randImageIndex];
});
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

btnChoice.array.forEach(element => {
    
});
