const selections = [
    {
        name: 'rock',
        emoji: '✊',
        beats: 'scissors'
    },
    {
        name: 'paper',
        emoji: '✋',
        beats: 'rock'
    },
    {
        name: 'scissors',
        emoji: '✌',
        beats: 'paper'
    }
]
let computerScore = document.querySelector('#computerScore');
let playerScore = document.querySelector('#playerScore');
//compare computer choice and player choice
function compare(playerChoice, computerChoice){
    if(playerChoice.name === computerChoice.beats){
        computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1;
    }
    else if(computerChoice.name === playerChoice.beats){
        playerScore.innerHTML = parseInt(playerScore.innerHTML) + 1;
    }
    else{
        computerScore.innerHTML = parseInt(computerScore.innerHTML) + 0;
        playerScore.innerHTML = parseInt(playerScore.innerHTML) + 0;
    }
}

//when player click on the button run the game until score is 5
let playerSlection = document.querySelectorAll('#btnChoice');
playerSlection.forEach(function(btn){
    btn.addEventListener('click', function(e){
        let playerChoice = e.target.id;
        switch(playerChoice){
            case 'btnRock':
                playerChoice = selections[0];
                break;
            case 'btnPaper':
                playerChoice = selections[1];
                break;
            case 'btnScissors':
                playerChoice = selections[2];
                break;        
        }
        let computerSelection = selections[Math.floor(Math.random() * 3)];
        document.querySelector('#playerSelection').innerHTML = playerChoice.emoji;
        document.querySelector('#computerSelection').innerHTML = computerSelection.emoji;
        compare(playerChoice, computerSelection);
        if(playerScore.innerHTML == 5){
            // alert('You win!');
            Swal.fire({
                text: 'You have 5 points',
                title:  'You win!',
                icon: 'success',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Play again'
                }).then((result) => {
                        if (result.isConfirmed) {
                            playerScore.innerHTML = 0;
                            computerScore.innerHTML = 0;
                    }
            })
            // playerScore.innerHTML = 0;
            // computerScore.innerHTML = 0;
        }
        else if(computerScore.innerHTML == 5){
            // alert('You lose!');
            Swal.fire({
                text: 'Computer have 5 points',
                title:  'You lose!',
                icon: 'error',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Play again'
                }).then((result) => {
                        if (result.isConfirmed) {
                            playerScore.innerHTML = 0;
                            computerScore.innerHTML = 0;
                    }
            })
            playerScore.innerHTML = 0;
            computerScore.innerHTML = 0;
        }
    })
})











