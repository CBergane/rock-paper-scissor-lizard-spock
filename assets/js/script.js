const option = document.querySelectorAll('.option');
const allOptions = ['Rock', 'Paper', 'Scissors', 'Spock', 'Lizard'];
const conditions = document.getElementById('conditions');
let playerScore = 0;
let cpuScore = 0;

// utility for animation on bg
const animation = document.getElementsByClassName('bg-animation')[0];
const block = document.getElementsByClassName('block');

// for the animated bg, adds divs to the html as a bg
for (var i = 1; i < 600; i++){
    animation.innerHTML += "<div class='block'></div>";
    block[i].style.animationDelay = `${i*0.03}s`;
};

// hides and shows landing page and game page 
let startGames = document.querySelector('.score');
let isShow = true;

function startGame(wins){
    isShow = !isShow;
    startGames.classList.toggle('hidden')
    document.getElementById( 'start-game' ).style.display = 'none';
    numWins = wins;
    cpuWins = 10;
    conditions.textContent = `If you get ${numWins} wins, you will win!`;
    playerScore = 0;
    cpuScore = 0;
    updateScore();
};

let returnMenus = document.querySelector('.score');
let isReShow = true;

// Return to starting menu
function returnMenu() {
    isReShow = !isReShow;
    returnMenus.classList.add('hidden', isReShow);
    document.getElementById( 'start-game' ).style.display = 'block';
}

// add event listener on click for buttons options
option.forEach((option) => {
    option.addEventListener('click', function () {


        // Games option in a array and a loop to make a random choice
        const playerInput = allOptions.indexOf(this.value);
        const cpuInput = Math.floor(Math.random() * allOptions.length);

        inspectInput(playerInput, cpuInput);
        updateScore();
        if (ifWinner()) {
            playerScore = cpuScore = 0;
            updateScore();
        }

    });
});

// Checking current game
function inspectInput(playerInput, cpuInput) {
    const currentGame = `${allOptions[playerInput]} vs ${allOptions[cpuInput]}`;
    const outcome = document.querySelector('#outcome');
        switch ((allOptions.length + cpuInput - playerInput) % allOptions.length) {
            case 0:
                outcome.innerHTML = (`${currentGame} is a tie!!`);
                break;
            case 2:
            case 4:
                outcome.innerHTML = (`${currentGame} - you win!`);
                playerScore++;
                break;
            default:
                outcome.innerHTML = (`${currentGame} - you lose!`);
                cpuScore++;
                break;
        }
    }

// Function to update score
function updateScore() {
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("cpu-score").textContent = cpuScore;
}

function ifWinner() {
    if (playerScore === numWins) {
        outcome.innerHTML = "You beat the game! Well done! Luck is on your side!";
            return true;
    } else if (cpuScore === cpuWins) {
        outcome.innerHTML = "Better luck next time! Cpu wins!";
            return true;
    } else {
        return false;
    }
}

// add collapse function on rules button
let rules = document.getElementById("rules");

function openRules(){
    rules.classList.add("open-rules");
}
function closeRules(){
    rules.classList.remove("open-rules");
};

// add a function to open feedback button

let feedback = document.getElementById("feedback");

function openFeedback(){
    feedback.classList.add("open-feedback");
}
function closeFeedback(){
    feedback.classList.remove("open-feedback");
};