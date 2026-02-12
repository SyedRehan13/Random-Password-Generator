# Random Password Generator 🛡️

A **simple JavaScript-based password generator** that creates strong, random passwords based on user preferences.  
You can choose to include **lowercase letters, uppercase letters, numbers, and symbols**.

---

## **Features**
- Generate **random passwords** of any length.
- Optionally include:
  - Lowercase letters
  - Uppercase letters
  - Numbers
  - Symbols
- Validates input:
  - Password length must be at least 1
  - At least one character set must be selected
- Ideal for creating **strong and secure passwords**.

---

## **Technologies Used**
- **HTML/JS** – Logic and interactivity (if integrated into a webpage)
- **JavaScript** – Password generation logic and randomization

---

## **Usage Instructions**
1. Copy the JavaScript code into a file named `passwordGenerator.js` (or integrate it into a webpage).
2. Set your password preferences:

```javascript
const passwordLength = 12;       // Desired password length
const includeLowerChars = true;  // Include lowercase letters
const includeUpperChars = true;  // Include uppercase letters
const includeNumbers = true;     // Include numbers
const includeSymbols = true;     // Include symbols

const password = generatePassword(passwordLength, includeLowerChars, includeUpperChars, includeNumbers, includeSymbols);
console.log(`Generated Password: ${password}`);
The generated password will be printed in the console.

Example Output
Generated Password: Ab3$kP9!qL2@

