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
  console.log(`User data test program help
  
commands:
add     -   Adds user details
list    -   Lists all users
remove  -   Removes user
help    -   Prints this message
quit    -   Exits program
`);
};
function actionInvalid() {
  console.log(`Selected command: "${command}" is invalid`);
  console.log("To get help type: \"help\"");
};

function mainLogic() {
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
      case "quit":
        return;
      default:
        actionInvalid();
        break;
      }
  } while (true)
}

mainLogic();
console.log('Exiting program');
