const option = document.querySelectorAll(".option");

// add event listener on click for buttons options
option.forEach((option) => {
    option.addEventListener('click', function () {
        const playerInput = this.textContent;

        // Games option in a array and a loop to make a random choice
        const cpuOptions = ['rock', 'papers', 'scissors', 'lizard', 'spock'];
        const cpuInput = cpuOptions[Math.floor(Math.random() * 5)];
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

    // rock
    if (playerInput === 'rock') {
        if (cpuInput === 'scissors') {
            alert(`${currentGame} = you win!`);
    } else if (cpuInput === 'lizard') {
            alert(`${currentGame} = you win!`);
    } else {
        alert(`${currentGame} = you lose!`);
    }
    }
    //  paper
    else if (playerInput === 'paper') {
        if (cpuInput === 'rock') {
            alert(`${currentGame} = you win!`);
    } else if (cpuInput === 'spock') {
            alert(`${currentGame} = you win!`);
    } else {
        alert(`${currentGame} = you lose!`);
    }
    }
    // scissors
    else if (playerInput === 'scissors') {
        if (cpuInput === 'paper') {
            alert(`${currentGame} = you win!`);
    } else if (cpuInput === 'lizard') {
            alert(`${currentGame} = you win!`);
    } else {
        alert(`${currentGame} = you lose!`);
    }
    }
    // lizard
    else if (playerInput === 'lizard') {
        if (cpuInput === 'paper') {
            alert(`${currentGame} = you win!`);
    } else if (cpuInput === 'spock') {
            alert(`${currentGame} = you win!`);
    } else {
        alert(`${currentGame} = you lose!`);
    }
    } 
    // spock
    else if (playerInput === 'spock') {
        if (cpuInput === 'rock') {
            alert(`${currentGame} = you win!`);
    } else if (cpuInput === 'scissors') {
            alert(`${currentGame} = you win!`);
    } else {
        alert(`${currentGame} = you lose!`);
    }
    }
}
