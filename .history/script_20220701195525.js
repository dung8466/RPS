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
  const ImageIndex = (  images.length);
  document.getElementById('machine-choice').src = images[ImageIndex];
});
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

btnChoice.array.forEach(element => {
    
});
