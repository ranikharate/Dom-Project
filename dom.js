document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = '<strong>Username:</strong> ' + username + '<br><strong>Password:</strong> ' + password;
});
