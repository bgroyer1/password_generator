/* Global Variables */
const generatePasswordBtn = document.querySelector('.btn-password')
const passwordElements = document.querySelectorAll('.password_div')
const allChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_",
  "=", "+", "[", "]", "{", "}", "|", ";", ":", "'", '"',
  ",", ".", "<", ">", "/", "?", "~", "`"];


/* Functions */
function randomCharacter() {
  return allChars[Math.floor(Math.random() * allChars.length)]
}

function generatePassword() {
  let password = ''
  for (let i = 0; i < 16; i++) {
    password += randomCharacter();
  }
  return password
}

/* Event Handlers */
generatePasswordBtn.addEventListener('click', () => {
  passwordElements.forEach(el => el.textContent = generatePassword())
  generatePasswordBtn.blur();
})

passwordElements.forEach(el => {
  let isCopied = false;

  el.addEventListener('click', async () => {
    if (isCopied) return;
    const password = el.textContent;
    try {
      await navigator.clipboard.writeText(password)
      isCopied = true;
      el.textContent = 'Copied!'

      setTimeout(() => {
        el.textContent = password
        isCopied = false
      }, 1000)
    } catch(err) {
      console.error('Failed to copy:', err)
    }
  })
})