const option = document.querySelectorAll('.option');
const allOptions = ['Rock', 'Paper', 'Scissors', 'Spock', 'Lizard'];
let playerScore = 0;
let cpuScore = 0;

const animation = document.getElementsByClassName('bg-animation')[0];
const block = document.getElementsByClassName('block');


let startGame = document.querySelector('.score');

function startEasyGame () {
    startGame.classList.toggle('hidden');
};


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
    
        switch ((allOptions.length + cpuInput - playerInput) % allOptions.length) {
            case 0:
                alert(`${currentGame} is a tie!!`);
                break;
            case 2:
            case 4:
                alert(`${currentGame} - you win!`);
                playerScore++;
                break;
            default:
                alert(`${currentGame} - you lose!`);
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
    if (playerScore === 10 || cpuScore === 10) {
        const win =
            playerScore === 10 ? "You beat the game! Well done! Luck is on your side!"
             :"Better luck next time! Cpu wins!";
        alert(win);
        return true;
    }
    return false;
}

// add collapse function on rules button
let rules = document.getElementById("rules");

function openRules(){
    rules.classList.add("open-rules");
}
function closeRules(){
    rules.classList.remove("open-rules");
};

// for the animated bg

for (var i = 1; i < 400; i++){
    animation.innerHTML += "<div class='block'></div>";
    block[i].style.animationDelay = `${i*0.05}s`;
};