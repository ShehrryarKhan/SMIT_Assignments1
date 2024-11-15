//Task 1 ASsignment 10

const firstName = prompt("Enter your first name:");
const lastName = prompt("Enter your last name:");

// Merge into full name
const fullName = firstName + " " + lastName;


alert("Hello, " + fullName + "!");


//Task2 
const mobileModel = prompt("What is your favorite mobile phone model?");

alert("The length of your input is: " + mobileModel.length);

//Task3

const word = "Pakistani";


const indexN = word.indexOf("n");


alert("The index of 'n' in 'Pakistani' is: " + indexN);

//Task4

const phrase = "Hello World";


const lastIndexL = phrase.lastIndexOf("l");


alert("The last index of 'l' in 'Hello World' is: " + lastIndexL);

//Task 5


const country = "Pakistani";

const charAtIndex3 = country.charAt(3);

alert("The character at index 3 in 'Pakistani' is: " + charAtIndex3);


//Task 6

const firstNames = prompt("Enter your first name:");
const lastNames = prompt("Enter your last name:");

const fullNames = firstNames.concat(" ", lastNames);

alert("Hello, " + fullNames + "!");

// Task 7

const city = "Hyderabad";

const newCity = city.replace("Hyder", "Islam");

alert("After replacement: " + newCity);

//Task 8

const message = "Ali and Sami are best friends. They play cricket and football together.";

const newMessage = message.replace(/and/g, "&");

alert(newMessage);


// Task 9


const strNumber = "472";

const num = Number(strNumber);

alert("Value: " + strNumber + " (Type: " + typeof strNumber + ")");
alert("Value: " + num + " (Type: " + typeof num + ")");


// Task 10

const userInput = prompt("Enter some text:");

const capitalizedInput = userInput.toUpperCase();

alert("Your input in capital letters: " + capitalizedInput);

// Task 11

const userInputs = prompt("Enter some text:");

const titleCaseInput = userInputs
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

alert("Your input in title case: " + titleCaseInput);

// Task 12

var nums = 35.36;

const numStr = nums.toString().replace(".", "");

alert("Converted number without dot: " + numStr);

// Task 13
const username = prompt("Enter your username:");

const specialSymbols = ['@', '.', ',', '!'];

let isValid = true;


for (let i = 0; i < username.length; i++) {
    const charCode = username.charCodeAt(i);
    if (specialSymbols.includes(username[i])) {
        isValid = false;
        break;
    }
}

if (isValid) {
    alert("Username is valid.");
} else {
    alert("Please enter a valid username. Special symbols like @, ., ! are not allowed.");
}

//Task 14

var university = "University of Karachi";

var universityArray = university.split(" ");


alert("Array elements: " + universityArray.join(", "));

// Task 15

const userInputss = prompt("Enter some text:");

const lastCharacter = userInputss.charAt(userInputss.length - 1);

alert("The last character is: " + lastCharacter);


// Task 16

const sentence = "The quick brown fox jumps over the lazy dog";

const lowerCaseSentence = sentence.toLowerCase();


const occurrences = (lowerCaseSentence.match(/\bthe\b/g) || []).length;

alert("The word 'the' occurs " + occurrences + " times.");


// Task 17

