const option = document.querySelectorAll(".option");
let playerScore = 0;
let cpuScore = 0;

// add event listener on click for buttons options
option.forEach((option) => {
    option.addEventListener('click', function () {
        const playerInput = this.value;

        // Games option in a array and a loop to make a random choice
        const cpuOptions = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
        const cpuInput = cpuOptions[Math.floor(Math.random() * 5)];

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
    const currentGame = `${playerInput} vs ${cpuInput}`;

    // Check if its a tie
    if (playerInput === cpuInput) {
        alert(`${currentGame} is a tie!!`);
        return;
    }

    // If player choses rock
    if (playerInput === 'Rock') {
        if (cpuInput === 'Scissors') {
            alert(`${currentGame} - you win!`);
            playerScore++;
    } else if (cpuInput === 'Lizard') {
            alert(`${currentGame} - you win!`);
            playerScore++;
    } else {
            alert(`${currentGame} - you lose!`);
            cpuScore++;
    }
    }
    // If player choses  paper
    else if (playerInput === 'Paper') {
        if (cpuInput === 'Rock') {
            alert(`${currentGame} - you win!`);
            playerScore++;
    } else if (cpuInput === 'Spock') {
            alert(`${currentGame} - you win!`);
            playerScore++;
    } else {
            alert(`${currentGame} - you lose!`);
            cpuScore++;
    }
    }
    // If player choses scissors
    else if (playerInput === 'Scissors') {
        if (cpuInput === 'Paper') {
            alert(`${currentGame} - you win!`);
            playerScore++;
    } else if (cpuInput === 'Lizard') {
            alert(`${currentGame} - you win!`);
            playerScore++;
    } else {
            alert(`${currentGame} - you lose!`);
            cpuScore++;
    }
    }
    // If player choses lizard
    else if (playerInput === 'Lizard') {
        if (cpuInput === 'Paper') {
            alert(`${currentGame} - you win!`);
            playerScore++;
    } else if (cpuInput === 'Spock') {
            alert(`${currentGame} - you win!`);
            playerScore++;
    } else {
            alert(`${currentGame} - you lose!`);
            cpuScore++;
    }
    } 
    // If player choses spock
    else if (playerInput === 'Spock') {
        if (cpuInput === 'Rock') {
            alert(`${currentGame} - you win!`);
            playerScore++;
    } else if (cpuInput === 'Scissors') {
            alert(`${currentGame} - you win!`);
            playerScore++;
    } else {
            alert(`${currentGame} - you lose!`);
            cpuScore++;
    }
    }
}

function updateScore() {
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("cpu-score").textContent = cpuScore;
}

function ifWinner() {
    if (playerScore === 10 || cpuScore === 10) {
        const win =
            playerScore === 10
            ? "You beat the game! Well done! Luck is on your side!"
            : "Better luck next time! Cpu wins!";
        alert(win);
        return true;
    }
    return false;
}

// add collapse function on rules button
var collapseBtn = document.getElementsByClassName("btn-collapse");
var i;

for (i = 0; i < collapseBtn.length; i++) {
    collapseBtn[i].addEventListener('click', function() {
        this.classList.toggle('active');
        var rules = this.nextElementSibling;
        if (rules.style.maxHeight) {
            rules.style.maxHeight = null;
        } else {
            rules.style.maxHeight = rules.scrollHeight + 'px';
            rules.style.maxWidth = rules.scrollHeight + 'px';
        }
    });
}
