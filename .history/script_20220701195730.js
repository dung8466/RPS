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
const images = ["src/rock.jpg", "src/paper.jpg", "src/scissors.jpg"];
document.addEventListener('DOMContentLoaded', _ => {
  const ImageIndex = (  images.length);
  document.getElementById('player-choice').src = images[ImageIndex];
});


