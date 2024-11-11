const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const resultDiv = document.getElementById('result');

// Access the device camera and stream to video element
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(err => {
        console.error("Error accessing camera: ", err);
    });

// Mock function to simulate price prediction
function predictPrice(imageData) {
    // In a real application, you would send the imageData to a server or a model for prediction
    // Here we just return a random price for demonstration purposes
    const randomPrice = (Math.random() * 100).toFixed(2);
    return `$${randomPrice}`;
}

// Capture image from video
document.getElementById('capture').addEventListener('click', () => {
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    
    // Simulate price prediction
    const predictedPrice = predictPrice(imageData);
    resultDiv.innerHTML = `Predicted Price: ${predictedPrice}`;
});
