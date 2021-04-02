const readlineSync = require('readline-sync');

let command = "";

function actionAdd() {
  console.log("Selected add");
};
function actionList() {
  console.log("Selected list");
};
function actionRemove() {
  console.log("Selected remove");
};
function actionHelp() {
  console.log("Selected help");
};
function actionInvalid() {
  console.log(`Selected command: "${command}" is invalid`);
};

do {
  command = readlineSync.question('What to do? : ');

  switch(command) {
    case "add":
      actionAdd();
      break;
    case "list":
      actionList();
      break;
    case "remove":
      actionRemove();
      break;
    case "help":
      actionHelp();
      break;
    default:
      actionInvalid();
      break;
    }
} while (command != 'quit')

console.log('Exiting program');


