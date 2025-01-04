let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'xxx';

// userName = userInput;

if (typeof userInput === 'string') {
  userName = userInput;
}