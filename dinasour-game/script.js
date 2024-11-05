const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const scoreDisplay = document.getElementById('score');
let score = 0;
let isJumping = false;
let cactusPassed = false; // Track if the cactus has been passed

// Jump function
function jump() {
    if (isJumping) return;
    isJumping = true;
    dino.classList.add('jump');

    setTimeout(() => {
        dino.classList.remove('jump');
        isJumping = false;
    }, 300); // Duration of the jump
}

// Collision detection
function checkCollision() {
    const dinoRect = dino.getBoundingClientRect();
    const cactusRect = cactus.getBoundingClientRect();

    if (
        dinoRect.x < cactusRect.x + cactusRect.width &&
        dinoRect.x + dinoRect.width > cactusRect.x &&
        dinoRect.y < cactusRect.y + cactusRect.height &&
        dinoRect.height + dinoRect.y > cactusRect.y
    ) {
        alert('Game Over! Your score: ' + score);
        clearInterval(scoreInterval);
        location.reload(); // Reload the game
    } else {
        // Check if the cactus has been passed
        if (!cactusPassed && dinoRect.x > cactusRect.x + cactusRect.width) {
            score++;
            cactusPassed = true; // Set to true to avoid multiple increments
            scoreDisplay.innerText = 'Score: ' + score;
        } else if (dinoRect.x < cactusRect.x + cactusRect.width) {
            cactusPassed = false; // Reset when the dino is not past the cactus
        }
    }
}

// Event listener for jump
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') { // Check if the space bar is pressed
        jump();
    }
});

setInterval(checkCollision, 10);
