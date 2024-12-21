function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Here you would typically validate credentials with a backend
    // For demo purposes, we'll just show the OTP modal
    if (email && password) {
        generateOTP();
        document.getElementById('otpModal').style.display = 'block';
    }
}

function generateOTP() {
    // Generate a random 4-digit OTP
    const otp = Math.floor(1000 + Math.random() * 9000);
    // In a real application, you would send this OTP to the user's email
    console.log('Generated OTP:', otp);
    window.generatedOTP = otp; // Store OTP for verification (not secure, just for demo)
}

function moveToNext(input) {
    if (input.value.length === input.maxLength) {
        const next = input.nextElementSibling;
        if (next) {
            next.focus();
        }
    }
}

function verifyOTP() {
    const inputs = document.querySelectorAll('.otp-input');
    let enteredOTP = '';
    
    inputs.forEach(input => {
        enteredOTP += input.value;
    });

    if (parseInt(enteredOTP) === window.generatedOTP) {
        alert('OTP verified successfully! You are now logged in.');
        document.getElementById('otpModal').style.display = 'none';
        // Here you would typically redirect to the dashboard or home page
    } else {
        alert('Invalid OTP! Please try again.');
        inputs.forEach(input => {
            input.value = '';
        });
        inputs[0].focus();
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('otpModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
} 