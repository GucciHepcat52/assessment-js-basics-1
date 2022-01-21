const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function hasUpperCase(password) {
  return password.charAt(0) === password.charAt(0).toUpperCase();
}

console.log(
  "WELCOME TO THE PASSWORD VALIDATOR TOOL\n" +
    " \n" +
    "*password MUST have at least 10 characters, start with uppercase letter, and include a special*\n"
);

reader.question("Please enter a password: ", function (answer) {
  const hasSpecialCharacter = /\W/.test(answer);
  if (answer.length >= 10 && hasUpperCase(answer) && hasSpecialCharacter) {
    console.log(answer);
    console.log("Password Accepted!");
  } else {
    console.log(answer);
    console.log("Password doesn't meet requirements");
  }
  reader.close();
});
