const lettersContainer = document.getElementById('letters');
const userInput = document.getElementById('userInput');
const submitWord = document.getElementById('submitWord');
const message = document.getElementById('message');
const scoreDisplay = document.getElementById('score');

let letters = '';
let score = 0;

// Function to generate random letters
function generateRandomLetters() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    letters = ''; // Reset letters
    lettersContainer.innerHTML = ''; // Clear previous letters
    for (let i = 0; i < 7; i++) {
        const letter = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        letters += letter;
        
        // Create a letter box
        const letterBox = document.createElement('div');
        letterBox.className = 'letter-box';
        letterBox.textContent = letter;
        lettersContainer.appendChild(letterBox);
    }
}

// Function to check if the word is valid
function isValidWord(word) {
    return word.length > 0 && [...word].every(letter => letters.includes(letter));
}

// Event listener for the submit button
submitWord.addEventListener('click', () => {
    const word = userInput.value.toUpperCase();
    if (isValidWord(word)) {
        score += word.length; // Increase score by the length of the word
        scoreDisplay.textContent = `Score: ${score}`;
        message.textContent = 'Good job!';
    } else {
        message.textContent = 'Invalid word!';
    }
    userInput.value = ''; // Clear input
});

// Initialize the game
generateRandomLetters();
