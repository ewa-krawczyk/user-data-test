const readlineSync = require('readline-sync');

let usersList = [];

function actionAdd() {
  let num = Math.random();
  usersList.push(num);
  console.log("Selected add");
};
function actionList() {
  console.log("Selected list"); 
  console.log(usersList);
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
function actionInvalid(command) {
  console.log(`Selected command: "${command}" is invalid`);
  console.log("To get help type: \"help\"");
};

function mainLogic() {
  do {
   const command = readlineSync.question('What to do? : ');
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
        actionInvalid(command);
        break;
      }
  } while (true)
}

mainLogic();
console.log('Exiting program');
