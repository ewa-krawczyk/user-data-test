const readlineSync = require('readline-sync');

let command = "";

do {
    command = readlineSync.question('What to do? : ');
    switch(command) {
        case "add":
          console.log("Selected add")
          break;
        case "list":
          console.log("Selected list")
          break;
        case "remove":
          console.log("Selected remove")
          break;
        case "help":
          console.log("Selected help")
          break;
        default:
          console.log(`Selected command: "${command}" is invalid`)
          break;
      }
} while (command != 'quit')

console.log('Exiting programm')

