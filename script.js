const countriesData = { 
    // Wstaw tutaj dane o krajach
};

let attempts = 5;
let currentHintIndex = 0;
let randomCountry;
let hints;
const countries = Object.keys(countriesData);

const hintContainer = document.getElementById('hint-container');
const feedback = document.getElementById('feedback');
const inputField = document.getElementById('word-input');
const restartButton = document.getElementById('restart-button');
const countryHint = document.getElementById('country-hint');

const updateHint = () => {
    hintContainer.textContent = hints[currentHintIndex];
};

const startGame = () => {
    randomCountry = countries[Math.floor(Math.random() * countries.length)];
    hints = [
        `Rok powstania: ${countriesData[randomCountry].year}`,
        `Liczba ludności: ${countriesData[randomCountry].population}`,
        `Kontynent: ${countriesData[randomCountry].continent}`,
        `Powierzchnia: ${countriesData[randomCountry].area}`,
        `Sąsiedzi: ${countriesData[randomCountry].borders}`
    ];
    attempts = 5;
    currentHintIndex = 0;
    feedback.textContent = '';
    updateHint();
    inputField.value = '';
    restartButton.style.display = 'none';
    countryHint.textContent = "_".repeat(randomCountry.length);  // Create a hint with underscores for each letter
};

const checkGuess = () => {
    const guess = inputField.value.trim();
    if (!guess) {
        feedback.textContent = 'Wpisz nazwę kraju!';
        feedback.style.color = 'orange';
        return;
    }

    if (guess === randomCountry) {
        feedback.textContent = `Brawo! Odgadłeś kraj: ${randomCountry}.`;
        feedback.style.color = 'green';
        restartButton.style.display = 'inline-block';
        return;
    }

    attempts--;
    currentHintIndex++;

    // Add a letter to the hint on each incorrect guess
    if (currentHintIndex <= randomCountry.length) {
        countryHint.textContent = randomCountry.slice(0, currentHintIndex) + "_".repeat(randomCountry.length - currentHintIndex);
    }

    if (attempts > 0) {
        feedback.textContent = `Niepoprawne. Pozostało prób: ${attempts}.`;
        feedback.style.color = 'red';
        if (currentHintIndex < hints.length) {
            updateHint();
        }
    } else {
        feedback.textContent = `Koniec prób! Szukany kraj to: ${randomCountry}.`;
        feedback.style.color = 'red';
        restartButton.style.display = 'inline-block';
    }

    inputField.value = '';
};

document.getElementById('submit-button').addEventListener('click', checkGuess);

// Obsługa Entera
inputField.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        checkGuess();
    }
});

restartButton.addEventListener('click', startGame);

// Start the game when the page loads
startGame();
