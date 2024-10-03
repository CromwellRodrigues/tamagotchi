// console.log("Tamagotchi");

// let tamagotchi = {
// 	name: "Ginjirotchi",
// 	fullness: 50,
// 	happiness: 50,
// 	energy: 50,
// };

window.onload = function () {
    let tamagotchi = {
        name: "Ginjirotchi",
        fullness: 50,
        happiness: 50,
        energy: 50,
    };

  // Update HTML elements with Tamagotchi properties
    document.getElementById('name').innerText = tamagotchi.name;
    document.getElementById('fullness').innerText = tamagotchi.fullness;
    document.getElementById('happiness').innerText = tamagotchi.happiness;
    document.getElementById('energy').innerText = tamagotchi.energy;
};


// change the name;
console.log(`old name: ${tamagotchi.name}`);
tamagotchi.name = "Nyorotchi";
console.log(`new name : ${tamagotchi.name}`);

let gameOn = true;

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

function gameReset() {
	tamagotchi.fullness = 50;
	tamagotchi.energy = 50;
	tamagotchi.happiness = 50;
}

function getPlayerInput() {
	return prompt(`Tamagotchi Care 🤗
        Feed 🥙 - Enter 1
        Play ⚽   - Enter 2
        Sleep 🛌 - Enter 3 : `);
}

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

function toFeed() {
	tamagotchi.fullness += 10;
	return tamagotchi.fullness;
}

function toPlay() {
	tamagotchi.fullness -= 20;
	tamagotchi.energy -= 20;
	tamagotchi.happiness += 20;
	return tamagotchi.fullness, tamagotchi.energy, tamagotchi.happiness;
}

function toSleep() {
	tamagotchi.fullness -= 10;
	tamagotchi.energy += 20;
	return tamagotchi.fullness, tamagotchi.energy;
}

function playGame() {
	let playerInput = getPlayerInput();
	console.log(playerInput);

	let playerAction = petNeeds(playerInput);
	console.log(playerAction);

	if (!petIsAlive()) {
		gameOn = false;
		console.clear();
		return;
	}

	console.log(`${tamagotchi.name} fullness ${tamagotchi.fullness}`);
	console.log(`${tamagotchi.name} happiness ${tamagotchi.happiness}`);
	console.log(`${tamagotchi.name} energy ${tamagotchi.energy}`);
}

// play the game

do {
	playGame();
} while (confirm("Do you want to play again?"));
    gameReset();
