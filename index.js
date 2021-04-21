const readlineSync = require('readline-sync');

let usersList = [];

class userData {
  constructor (fisrtName, lastName, phone, address) {
    this.fisrtName = fisrtName;
    this.lastName = lastName;
    this.phone = phone;
    this.address = address;
  }
  getFirstName() {
    return this.firstName();
  }
  setFirstName(firstName) {
    this.firstName = firstName;
  }
  getLastName() {
    return this.lastName();
  }
  setLastName(lastName) {
    this.lastName = lastName;
  }
  getPhone() {
    return this.phone();
  }
  setPhone(phone) {
    this.phone = phone;
  }
  getAddress() {
    return this.address();
  }
  setAddress(address) {
    this.address = address;
  }
};
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
