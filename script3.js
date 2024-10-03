window.onload = function () {
    console.log("window loaded");

    let tamagotchi = {
        name: "Ginjirotchi",
        fullness: 50,
        happiness: 50,
        energy: 50,
    };

    // Update HTML elements with Tamagotchi properties
    function updateHtmlElements() {
        const nameElement = document.getElementById('name');
        const fullnessElement = document.getElementById('fullness');
        const happinessElement = document.getElementById('happiness');
        const energyElement = document.getElementById('energy');

        if (nameElement) {
            nameElement.innerText = tamagotchi.name;
        }

        if (fullnessElement) {
            fullnessElement.innerText = tamagotchi.fullness;
        }

        if (happinessElement) {
            happinessElement.innerText = tamagotchi.happiness;
        }

        if (energyElement) {
            energyElement.innerText = tamagotchi.energy;
        }
    }

    updateHtmlElements();

    // GLOBAL VARIABLE
    let gameOn = true;

    // FUNCTIONS

    // Loop when pet is alive
    function petIsAlive() {
        if (tamagotchi.fullness > 101) {
            gameOn = false;
            alert(`${tamagotchi.name} has died due to over feeding 😭`);
            gameReset();
            return false;
        } else if (tamagotchi.fullness < 0) {
            gameOn = false;
            alert(`${tamagotchi.name} has died due to hunger 😭`);
            gameReset();
            return false;
        } else if (tamagotchi.energy < 0) {
            gameOn = false;
            alert(`${tamagotchi.name} has died due to exhaustion ��`);
            gameReset();
            return false;
        } else if (tamagotchi.happiness < 0) {
            gameOn = false;
            alert(`${tamagotchi.name} has died due to boredom ��`);
            gameReset();
            return false;
        }
        return true;
    }

    // reset the score on the game, when pet has died.
    function gameReset() {
        tamagotchi.fullness = 50;
        tamagotchi.energy = 50;
        tamagotchi.happiness = 50;
        updateHtmlElements();
    }

    // function to feed and increment score
    function toFeed() {
        tamagotchi.fullness += 10;
        updateHtmlElements();
    }

    // function to play and change the respective scores
    function toPlay() {
        tamagotchi.fullness -= 20;
        tamagotchi.energy -= 20;
        tamagotchi.happiness += 20;
        updateHtmlElements();
    }

    // function to sleep and change the scores
    function toSleep() {
        tamagotchi.fullness -= 10;
        tamagotchi.energy += 20;
        updateHtmlElements();
    }

    // Event listeners for buttons
    document.getElementById('feedButton').addEventListener('click', function() {
        if (gameOn) {
            toFeed();
            if (!petIsAlive()) {
                gameOn = false;
                gameReset();
            }
        }
    });

    document.getElementById('playButton').addEventListener('click', function() {
        if (gameOn) {
            toPlay();
            if (!petIsAlive()) {
                gameOn = false;
                gameReset();
            }
        }
    });

    document.getElementById('sleepButton').addEventListener('click', function() {
        if (gameOn) {
            toSleep();
            if (!petIsAlive()) {
                gameOn = false;
                gameReset();
            }
        }
    });
}