const option = document.querySelectorAll('.option');
const allOptions = ['Rock', 'Paper', 'Scissors', 'Spock', 'Lizard'];
let playerScore = 0;
let cpuScore = 0;

const animation = document.getElementsByClassName('bg-animation')[0];
const block = document.getElementsByClassName('block');


let startGames = document.querySelector('.score');
let isShow = true;
// starGame.style.display = 'none';
//     function startEasyGame() {
//         if (isShow) {
//         starGame.style.display = 'block';
//         isShow = false;
//         }else{
//             starGame.style.display = 'none';
//         isShow = true;
//         }
// };
function startGame(){
    isShow = !isShow;
    startGames.classList.toggle('hidden')
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
    if (playerScore === 10 || cpuScore === 10) {
        const win =
            playerScore === 10 ? "You beat the game! Well done! Luck is on your side!"
             :"Better luck next time! Cpu wins!";
        outcome.innerHTML = (win);
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