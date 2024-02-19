const score = JSON.parse(localStorage.getItem('score')) ||{
    wins:0,
    loses: 0,
    ties:0
};

updateScoreElement()

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
    if (!isAutoPlaying) {
        intervalId = setInterval( () => {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000);
        isAutoPlaying = true;
    } else {
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
}

document.querySelector('.js-rock-button').addEventListener('click', () => {
    playGame('Rock');
})

document.querySelector('.js-paper-button').addEventListener('click', () => {
    playGame('Paper');
})

document.querySelector('.js-scissors-button').addEventListener('click', () => {
    playGame('Scissors');
})

document.addEventListener('keydown', (event) => {
    if(event.key === 'r' || event.key === 'R') {
        playGame('Rock')
    } else if (event.key === 'p' || event.key === 'P') {
        playGame('Paper') 
    } else if (event.key === 's' || event.key === 'S') {
        playGame('Scissors') 
    }
})



function playGame(playerMove) {

    const computerMove = pickComputerMove();
    let result = '';

    if (playerMove === 'Scissors') {

        if (computerMove === 'Scissors') {
            result = 'Tie Game.'
        } else if ( computerMove === 'Rock') {
            result = 'You Lose.'
        } else {
            result = 'You win.'
        }
    }
    else if (playerMove === 'Paper') {
        if (computerMove === 'Paper') {
        result = 'Tie Game.'
        } else if ( computerMove === 'Scissors') {
            result = 'You Lose.'
        } else {
            result = 'You win.'
        }
    }
    else if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
            result = 'Tie Game.'
        } else if ( computerMove === 'Paper') {
            result = 'You Lose.'
        } else {
            result = 'You win.'
        }
    }

    if (result === 'You win.') {
        score.wins++
    } else if (result === 'You Lose.') {
        score.loses++
    } else if (result === 'Tie Game.') {
        score.ties++
    }

    localStorage.setItem('score', JSON.stringify(score))

    updateScoreElement()

    document.querySelector('.js-result').innerHTML = result
    document.querySelector('.js-moves').innerHTML = `You 
    <img src="images/${playerMove}-emoji.png" class="move-icon">
    <img src="images/${computerMove}-emoji.png" class="move-icon">
    Computer`
    
}

function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}`
}

function pickComputerMove() {
    let randomNumber = 0
    randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < (1/3)) {
        computerMove = 'Rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'Paper';
    } else {
        computerMove = 'Scissors';
    }

    return computerMove;
}