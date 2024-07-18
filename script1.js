console.log("1. prompt to get user input");
console.log("2. change the pets properties depending on the above input");
console.log("3. when pet has died. log a message to let user know");
console.log("4. when invalid input");
console.log(
	"6. custom methods to the tamagotchi object to handle each action of feeding, playing, sleeping"
);
console.log(
	"7. instead of directly changing the tamagotchi properties in the loop, call the methods"
);

console.log("8. reset the scores back after pet has died.");

// OBJECT

window.onload = function () {
	let tamagotchi = {
		name: "Ginjirotchi",
		fullness: 50,
		happiness: 50,
		energy: 50,
	};

	// GLOBAL VARIABLE
	let gameOn = true;

	// FUNCTIONS

	// Loop when pet is alive
	function petIsAlive() {
		if (tamagotchi.fullness >= 100) {
			console.log(`${tamagotchi.name} has died due to over feeding 😭`);
			alert(`${tamagotchi.name} has died due to over feeding 😭`);
			gameOn = false;
			gameReset();
			return false;
		} else if (tamagotchi.fullness <= 0) {
			console.log(`${tamagotchi.name} has died due to underfeeding 🍽.`);
			alert(`${tamagotchi.name} has died due to underfeeding 🍽.`);
			alert();
			gameOn = false;
			gameReset();
			return false;
		} else if (tamagotchi.energy <= 0) {
			console.log(`${petName} has died to no more energy 😴.`);
			alert(`${petName} has died to no more energy 😴.`);
			gameOn = false;
			gameReset();
			return false;
		} else if (tamagotchi.happiness <= 0) {
			console.log(`${petName} has died due to sadness💔.`);
			alert(`${petName} has died due to sadness💔.`);
			gameOn = false;
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
	}

	// get players input on action change
	function getPlayerInput() {
		return prompt(`Tamagotchi Care 🤗
        Feed 🥙 - Enter 1
        Play ⚽   - Enter 2
        Sleep 🛌 - Enter 3 : `);
	}

	// do the necessary task as per each input
	function petNeeds(playerInput) {
		if (playerInput === "1") {
			return toFeed();
		} else if (playerInput === "2") {
			return toPlay();
		} else if (playerInput === "3") {
			return toSleep();
		} else {
			return (gameOn = false);
		}
	}

	// function to feed and increment score
	function toFeed() {
		tamagotchi.fullness += 10;
		return tamagotchi.fullness;
	}

	// function to play and change the respective scores
	function toPlay() {
		tamagotchi.fullness -= 20;
		tamagotchi.energy -= 20;
		tamagotchi.happiness += 20;
		return tamagotchi.fullness, tamagotchi.energy, tamagotchi.happiness;
	}

	// function to sleep and change the scores
	function toSleep() {
		tamagotchi.fullness -= 10;
		tamagotchi.energy += 20;
		return tamagotchi.fullness, tamagotchi.energy;
	}

	// game code from start to finish
	function playGame() {
		let playerInput = getPlayerInput();
		console.log(playerInput);

		let playerAction = petNeeds(playerInput);
		console.log(playerAction);

		if (!petIsAlive()) {
			gameOn = false;
			console.clear();
			return playGame();
		}

		console.log(`${tamagotchi.name} fullness ${tamagotchi.fullness}`);
		console.log(`${tamagotchi.name} happiness ${tamagotchi.happiness}`);
		console.log(`${tamagotchi.name} energy ${tamagotchi.energy}`);
	}

	// play the game in a loop after players confirmation

	do {
		playGame();
	} while (confirm("Do you want to play again?"));
	gameReset();


}