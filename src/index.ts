/* Global Variables */
const generatePasswordBtn = getElement<HTMLButtonElement>('.btn-password')
const passwordElements = getElements<HTMLDivElement>('.password_div')
const allChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()-_=+[]{}|;:'\",.<>/?~`";

function getElement<T extends Element>(selector: string): T {
  const el = document.querySelector<T>(selector);
  if (!el) throw new Error(`Element not found: ${selector}`)
  return el;
}

function getElements<T extends Element>(selector: string): NodeListOf<T> {
  const els = document.querySelectorAll<T>(selector);
  if (els.length === 0) throw new Error(`Elements not found: ${selector}`)
  return els;
}

/* Functions */
function randomCharacter(): string {
  return allChars[Math.floor(Math.random() * allChars.length)]
}

function generatePassword():string {
  let password = ''
  for (let i = 0; i < 16; i++) {
    password += randomCharacter();
  }
  return password
}

/* Event Handlers */
generatePasswordBtn.addEventListener('click', (): void => {
  passwordElements.forEach(el => el.textContent = generatePassword())
  generatePasswordBtn.blur();
})

passwordElements.forEach(el => {
  let isCopied = false;

  el.addEventListener('click', async (): Promise<void> => {
    if (isCopied) return;
    const password = el.textContent;
    if (!password) return;
    try {
      await navigator.clipboard.writeText(password)
      isCopied = true;
      el.textContent = 'Copied!'
      setTimeout(() => {
        el.textContent = password
        isCopied = false
      }, 1000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  })
})