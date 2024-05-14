function generateCaptcha() {
    var captcha = document.getElementById('captcha');
    var randomNum = Math.floor(Math.random() * 10); // Random number between 0 and 9
    var alphabet = String.fromCharCode(65 + randomNum); // Convert to alphabet (A-Z)
    captcha.textContent = alphabet;
}

function checkCaptcha() {
    var captchaInput = document.getElementById('captchaInput').value;
    var captchaValue = document.getElementById('captcha').textContent;

    if (captchaInput.toUpperCase() === captchaValue) {
        alert('CAPTCHA is correct!');
        generateCaptcha(); // Generate new CAPTCHA
    } else {
        alert('CAPTCHA is incorrect! Please try again.');
    }

    // Clear input field
    document.getElementById('captchaInput').value = '';
}

