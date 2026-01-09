//OBJECTS + ARRAYS (REAL DATA)
let user = [
        { name: "A", age: 20, isLoggedIn: true },
        { name: "B", age: 16, isLoggedIn: false },
        { name: "C", age: 25, isLoggedIn: true },
        { name: "D", age: 17, isLoggedIn: false }
    ]

let loggedInUsers = user.filter(user => user.isLoggedIn === true);
for(let i of loggedInUsers){
    console.log(i.name + " is logged in");
}

let adultUsers = loggedInUsers.filter(loggedInUsers => loggedInUsers.age >= 18);
for(let j of adultUsers){
    console.log(j.name + " is adult and logged in ");
}

user.forEach(user => {user.isAdult = user.age >= 18});
for(let k of user){
    if(k.isAdult=== true){
        console.log(k.name + " -> Adult");
    }else{
        console.log(k.name + " -> Not Adult");
    }
}

console.log("Total users: " + user.length);
console.log("Logged in users: "+ loggedInUsers.length);
console.log("Adult users: "+ adultUsers.length);