const readlineSync = require('readline-sync');
const fs = require('fs');

let usersList = [];

class UserData {
  constructor (firstName, lastName, phone, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.address = address;
  }
  getFirstName() {
    return this.firstName;
  }
  setFirstName(firstName) {
    this.firstName = firstName;
  }
  getLastName() {
    return this.lastName;
  }
  setLastName(lastName) {
    this.lastName = lastName;
  }
  getPhone() {
    return this.phone;
  }
  setPhone(phone) {
    this.phone = phone;
  }
  getAddress() {
    return this.address;
  }
  setAddress(address) {
    this.address = address;
  }
  printUserDetails() {
    console.log(` 
    First name:  ${this.getFirstName()}, 
    Last name: ${this.getLastName()}, 
    Number: ${this.getPhone()}, 
    Address: ${this.getAddress()}`)
  };
};
function actionAdd() {
  const firstName = readlineSync.question(`To add new user type your name: `);
  const lastName = readlineSync.question(`Type your last name: `);
  const phone = readlineSync.question(`Type your phone number: `);
  const address = readlineSync.question(`Type your address: `);
  
  
  const newUser = new UserData(firstName, lastName, phone, address);
  console.log(`Created user:`);
  newUser.printUserDetails();
  usersList.push(newUser);
};
function actionList() {
  console.log("User list");

  for (i = 0; i < usersList.length; i++) {
     console.log('\n' + 'ID: ' + (i + 1));
     usersList[i].printUserDetails();
  }
};
function actionRemove() {
  const arrayLength = usersList.length;
  const selectedId = readlineSync.question(`Type number from 0 to ${arrayLength -1 }: `);
  console.log(`selected: ${selectedId}`);
  const removedItem = usersList.splice(selectedId, 1);
  console.log(`removed: ${removedItem}`)
};
function actionHelp() {
  console.log(`User data test program help
  
commands:
add     -   Adds user details
list    -   Lists all users
remove  -   Removes user
help    -   Prints this message
save    -   ...
quit    -   Exits program
`);
};
function actionSave() {
  const usersJson = JSON.stringify(usersList);
  fs.writeFileSync("temp.txt", usersJson);
  console.log('Successfully saved');
}
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
      case "save":
        actionSave();
        break;
      default:
        actionInvalid(command);
        break;
    }
  } while (true)
}
mainLogic();
console.log('Exiting program');
