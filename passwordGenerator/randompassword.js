function generatePassword(length, includeLowerChars, includeUpperCase, includeNumbers, includeSymbols) {
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-="

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerChars ? lowerChars : "";
    allowedChars += includeUpperChars ? upperChars : "";
    allowedChars += includeNumbers ? numbers : "";
    allowedChars += includeSymbols ? symbols : "";

    if (length <= 0) {
        return `Minimum length of password must be 1`;
    }

    if (allowedChars.length === 0) {
        return 'Atleast 1 set of character needs to be selected';
    }

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}




const passwordLength = 12;
const includeLowerChars = true;
const includeUpperChars = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, includeLowerChars, includeUpperChars, includeNumbers, includeSymbols);

console.log(`Generated Password: ${password}`);