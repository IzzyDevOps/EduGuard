// Password strength checker
const passwordInput = document.getElementById('loginPassword');
const strengthIndicator = document.querySelector('.strength');
const strengthBar = document.querySelector('.indicator');

const colors = ['#ff0000', '#ffe100', '#0bd600'];
const texts = ['weak', 'medium', 'strong'];

// Function to update the strength indicator based on password strength
function checker(width, text, background, color) {
    strengthBar.style.width = width;
    strengthBar.style.background = background;
    strengthIndicator.innerText = text; 
    strengthIndicator.style.color = color;
}

// Event listener for input on registration password input
const registerPasswordInput = document.getElementById('password');

registerPasswordInput.addEventListener('input', () => {
    const passwordLength = registerPasswordInput.value.length;
    if (passwordLength <= 2) {
        checker(`${100 / 3}%`, texts[0], colors[0], colors[0]);
    } else if (passwordLength <= 5) {
        checker(`${100 / 2}%`, texts[1], colors[1], colors[1]);
    } else if (passwordLength >= 9) {
        checker(`${100 / 1}%`, texts[2], colors[2], colors[2]);
    }
});

// Function to handle toggling between login and registration forms
var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}

function login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
}
