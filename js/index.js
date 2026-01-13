/* Global Variables */
const generatePasswordBtn = document.querySelector('.btn-password')
const allChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_",
  "=", "+", "[", "]", "{", "}", "|", ";", ":", "'", '"',
  ",", ".", "<", ">", "/", "?", "~", "`"];


/* Functions */
function randomCharacter() {
  return Math.floor(Math.random() * allChars.length)
}

function generatePassword() {
  let password = ''
  for (let i = 0; i < 16; i++) {
    password += allChars[randomCharacter()]
  }
  return password
}

/* Event Handlers */
generatePasswordBtn.addEventListener('click', () => {
  document.querySelector("#password_1").textContent = generatePassword();
  document.querySelector("#password_2").textContent = generatePassword();
  generatePasswordBtn.blur();
})