let users = [
  { id: 1, name: "A", age: 20, isLoggedIn: true },
  { id: 2, name: "B", age: 17, isLoggedIn: false },
  { id: 3, name: "C", age: 25, isLoggedIn: true },
  { id: 4, name: "D", age: 16, isLoggedIn: false }
];
let results = users
    .filter(user => user.age >= 18 && user.isLoggedIn === true)
    .map (user => user.name)
console.log("Users who are Adults and Logged in : ",results)

console.log ("Total users : ",users.length);

let Adults = users.filter(user => user.age >= 18)
console.log("Adult Users : ", Adults.length);

let Logged = users.filter(user => user.isLoggedIn === true);
console.log("Logged in Users : ", Logged.length)

console.log(Adults.length + " out of "+users.length +" users are adults");

// What changed in how I think about loops today?
/* it seems  more easier then loops and also less confusion about return statements*/
//<------------------------------------------------------------------------------------->
// One thing that feels easier now:
/* writing loops and conditions in codes seems too much easier*/