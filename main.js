let rNUm = (parseInt(Math.random() * 100 + 1));
const submit = document.querySelector("#sub");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const rem = document.querySelector(".lastResult");
const LoH = document.querySelector(".LoH");
const sOver = document.querySelector(".resultParas");

const p = document.createElement('p');

let prev = [];  
let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess){
if(isNaN(guess)){
    alert('Please enter a valid number')
} else if(guess < 1){
    alert('Please enter a number greater than 1')
} else if(guess > 100){
    alert('Please enter a number less than 100')
    } else {
        prev.push(guess)
        if(numGuess==11){
            displayGuess(guess);
            displayMsg(`Game Over. Random number was ${rNUm}`);
            endGame();
        } else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === rNUm){
        displayMsg('you guessed it right');
        endGame();
    } else if (guess < rNUm){
        displayMsg('Number is TOO    low');
    } else if (guess > rNUm){
        displayMsg('Number is TOO high');
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    rem.innerHTML= `${10 - numGuess}, `;

}

function displayMsg(message){
    LoH.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled' , '');
    p.classList.add('button');
    p.innerHTML = `<h2 id = "newGame">Start New Game</h2>`;
    sOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    if (newGameButton) {  // Check if button exists
        newGameButton.addEventListener('click', function () {
            rNUm = parseInt(Math.random() * 100 + 1);
            prev = [];
            numGuess = 1;
            guessSlot.innerHTML = '';
            rem.innerHTML = `${10 - numGuess}`;
            userInput.removeAttribute('disabled');
            sOver.removeChild(p);
            playGame = true;
        });
    }
}
