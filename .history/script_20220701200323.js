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
let playerSelection = document.querySelector;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
const images = ["src/rock.jpg", "src/paper.jpg", "src/scissors.jpg"];
document.addEventListener('DOMContentLoaded', _ => {
  const ImageIndex = (  images.length);
  document.getElementById('player-choice').src = images[ImageIndex];
});

document.addEventListener('DOMContentLoaded', _ => {
  const randImageIndex = ~~(Math.random() * images.length);
  document.getElementById('machine-choice').src = images[randImageIndex];
});
