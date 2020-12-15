let readlineSync = require('readline-sync');

let command = "";

do {
    command = readlineSync.question('What to do? :');
} while (command != 'quit')

console.log('Exiting programm')