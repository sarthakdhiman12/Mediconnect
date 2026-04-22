// function login() {
   
//     // You can perform login validation and authentication here
//     // For simplicity, let's just display an alert
    
    
// }

// function register() {
   

//     // Frontend validation for registration form
    

//     // Validate email format
    
//     // Validate username (no special characters)
    

//     // Validate password (at least 8 characters, one capital letter, and one numeric)
    
// }
// module.exports = { login, register };
function login() {
    let username =
        (document.getElementById("loginUsername") || document.getElementById("username")).value;
    let password =
        (document.getElementById("loginPassword") || document.getElementById("password")).value;

    console.log(`Login clicked. Username: ${username}, Password: ${password}`);
}

function register() {
    let inputs = document.querySelectorAll("input");

    let name = document.getElementById("name") ? document.getElementById("name").value : inputs[0].value;
    let email = document.getElementById("email") ? document.getElementById("email").value : inputs[1].value;
    let username = document.getElementById("username") ? document.getElementById("username").value : inputs[2].value;
    let password = document.getElementById("password") ? document.getElementById("password").value : inputs[3].value;

    console.log(`Register clicked. Name: ${name}, Email: ${email}, Username: ${username}, Password: ${password}`);
}

module.exports = { login, register };